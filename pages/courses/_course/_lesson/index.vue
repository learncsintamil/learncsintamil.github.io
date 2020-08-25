<template>
  <div class="pb-24 mt-6 sm:mt-10 max-w-screen-lg mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-2">
      <div class="lg:col-span-2 rounded-md shadow-md">
        <video
          controls
          class="h-72 lg:h-100 w-full video-js vjs-default-skin vjs-big-play-centered shadow-md"
          ref="videoPlayer"
        ></video>
      </div>
      <div class="lg:col-span-1 rounded-md bg-white mt-2 lg:mt-0 shadow-xl">
        <div class="flex bg-brown-dark px-4 py-4 rounded-t-md shadow-inner">
          <img :src="course.bannerImagePath" class="shadow-md rounded-md h-16 w-16 mx-auto flex-none" />
          <p class="text-lg font-medium ml-4 flex-grow">{{course.title}}</p>
        </div>
        <div class="h-60 lg:h-72 scrolling-touch overflow-auto bg-white">
          <nuxt-link
            :key="courseLesson.slug"
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
            <FreeBadge
              v-if="courseLesson.publishedOn && courseLesson.isFree"
              class="mt-1 sm:mt-0 ml-2 flex-none"
            ></FreeBadge>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="mx-auto lg:max-w-3xl mt-6">
      <p class="text-lg sm:text-3xl font-bold font-serif">{{lesson.order}}. {{lesson.title}}</p>
      <p class="leading-7 sm:text-lg mt-2">{{lesson.description}}</p>
    </div>
  </div>
</template>

<script>
import 'video.js/dist/video-js.css'
import videojs from 'video.js'
import videojsYoutube from 'videojs-youtube'
const getCourse = (title) =>
  import(`~/data/courses/${title}.json`).then((m) => m)

export default {
  computed: {
    videojsDataSetup() {
      return `{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "${this.lesson.url}"}] }`
    },
  },
  methods: {
    lessonUrl(lessonSlug) {
      return `/courses/${this.course.slug}/${lessonSlug}`
    },
  },
  mounted() {
    const options = {
      techOrder: ['youtube'],
      sources: [{ type: 'video/youtube', src: this.lesson.url }],
    }
    if (this.$refs.videoPlayer) {
      this.player = videojs(this.$refs.videoPlayer, options)
      this.player.on('play', () => (this.isPlaying = true))
    }
  },
  // destroyed() {
  //   try {
  //     this.player.dispose();
  //   } catch(e) {
  //     // TODO: figure out a fix for this!
  //   }
  // },
  data() {
    return {
      player: null,
      isPlaying: false,
    }
  },
  async asyncData({ params }) {
    try {
      const course = await getCourse(params.course)
      const lesson = course.lessons[params.lesson]
      return { course: course, lesson: lesson }
    } catch {
      return { course: null }
    }
  },
}
</script>
