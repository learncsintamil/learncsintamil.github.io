<template>
  <div class="pb-24 -mt-4 sm:mt-10 max-w-screen-lg mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-1">
      <div class="lg:col-span-2">
        <p class="text-center" v-html="loadingText"></p>
        <client-only>
            <vimeo-player class="vimeo-player h-60 lg:h-128" 
              ref="player" 
              @ready="onReady"
              @ended="onEnd"
              :video-id="lesson.vimeoVideoId" :autoplay="autoplay"/>
        </client-only>
        <p class="text-center">&nbsp;</p>
      </div>
      <div class="lg:col-span-1 bg-white shadow-xl">
        <div class="flex bg-brown-dark px-4 py-4 shadow-inner">
          <img :src="course.bannerImagePath" class="shadow-md rounded-md h-16 w-16 mx-auto flex-none" />
          <p class="text-lg font-medium ml-4 flex-grow">{{course.title}}</p>
        </div>
        <div class="h-60 lg:h-100 scrolling-touch overflow-auto bg-white" ref="lessonsContainer">
          <nuxt-link
            :key="courseLesson.slug"
            :ref="courseLesson.slug"
            v-for="courseLesson in course.lessons"
            class="px-4 py-4 border-b border-brown-light flex items-center"
            :to="lessonUrl(courseLesson.slug)"
            :class="{'bg-brown-light': courseLesson.slug === lesson.slug}"
          >
            <span
              class="inline-flex flex-none items-center justify-center h-6 w-6 sm:h-8 sm:w-8 rounded-full"
              :class="{'bg-brown-light': courseLesson.slug !== lesson.slug, 'bg-brown-dark': courseLesson.slug === lesson.slug}"
            >
              <span class="text-xs font-medium leading-none text-black">{{courseLesson.order}}</span>
            </span>
            <div class="ml-4 flex-grow">
              <p>{{courseLesson.title}}</p>
              <div class="flex items-center flex-row text-gray-600 pt-1">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-3 h-3">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p class="text-xs ml-1">{{courseLesson.duration | duration}}</p>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="mx-auto lg:max-w-3xl mt-6">
      <p class="text-lg sm:text-3xl font-bold font-serif">{{lesson.title}}</p>
      <p class="leading-7 sm:text-lg mt-2">{{lesson.description}}</p>
      <div class="mt-4 link">
        <a :href="lesson.sourceCode" v-if="lesson.sourceCode" target="_blank" class="underline mr-4">Source Code</a>
        <a :href="lesson.slides" v-if="lesson.slides" target="_blank" class="underline">Slides </a>
      </div>
      <div class="mt-4">
        <script src="https://utteranc.es/client.js"
          repo="learncsintamil/comments"
          issue-term="pathname"
          label="utterance"
          theme="boxy-light"
          crossorigin="anonymous"
          type="application/javascript"
          async>
        </script>
      </div>
    </div>
  </div>
</template>

<script>
const getCourse = (title) =>
  import(`~/data/courses/${title}.json`).then((m) => m)

export default {
  computed: {
    nextLessonUrl() {
      return this.lesson.nextLessonSlug ? this.lessonUrl(this.lesson.nextLessonSlug) + "?autoplay=true" : null;
    },
    loadingText() {
      return this.isPlayerReady ? "&nbsp;" : "Loading video...";
    }
  },
  methods: {
    onReady() {
      this.isPlayerReady = true;
      if (this.$route.query.autoplay == 'true') {
        this.$refs.player.play();
      }
    },
    onEnd() {
      this.$router.replace({ path: this.nextLessonUrl });
    },
    lessonUrl(lessonSlug) {
      return `/courses/${this.course.slug}/${lessonSlug}`
    },
  },
  head() {
    return {
      title: this.lesson.title,
      meta: [
        { hid: 'og_type', name: 'og:type', content: 'video.other' },
        { hid: 'og_url', name: 'og:url', content: 'https://www.learncsintamil.com/courses/' + this.course.slug + "/"},
        { hid: 'og_title', name: 'og:title', content: this.lesson.title },
        { hid: 'og_description', name: 'og:description', content: this.lesson.description },
        { hid: 'description', name: 'description', content: this.lesson.description },
        { hid: 'og_image', name: 'og:image', content: 'https://www.learncsintamil.com' + this.course.bannerImagePath },
      ],
    }
  },
  mounted() {
    this.$refs.lessonsContainer.scrollTop = this.$refs[this.lesson.slug][0].$el.scrollHeight * (this.lesson.order - 2);
  },
  async asyncData({ params, query }) {
    try {
      const course = await getCourse(params.course)
      const lesson = course.lessons[params.lesson]
      const autoplay = false;
      const isPlayerReady = false;
      return { course, lesson, autoplay, isPlayerReady }
    } catch {
      return { course: null }
    }
  },
}
</script>
