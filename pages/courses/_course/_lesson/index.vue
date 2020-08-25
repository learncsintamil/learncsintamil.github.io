<template>
  <div class="pb-24 mt-6 sm:mt-10 max-w-screen-lg mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-2">
      <video
        controls
        class="lg:col-span-2 h-72 lg:h-100 w-full video-js vjs-default-skin vjs-big-play-centered"
        id="lessonPlayer"
      ></video>
      <div class="lg:col-span-1 rounded-md bg-white">
        <div class="flex bg-brown-dark px-4 py-4 rounded-t-md shadow-inner">
          <img :src="course.bannerImagePath" class="shadow-md rounded-md h-16 w-16 mx-auto" />
          <p class="text-lg font-medium ml-4">{{course.title}}</p>
        </div>
        <div class="h-72 scrolling-touch overflow-auto bg-white">
          <nuxt-link :key="courseLesson.slug" v-for="courseLesson in course.lessons" class="px-4 py-4 flex"
            :to="lessonUrl(courseLesson.slug)"
            :class="{'bg-brown-light': courseLesson.slug === lesson.slug}">
            {{courseLesson.title}}
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="mx-auto max-w-screen-lg mt-6">
      <p class="text-lg sm:text-3xl font-bold font-serif">{{lesson.title}}</p>
    </div>
  </div>
</template>

<script>
import "video.js/dist/video-js.css";
import videojs from "video.js";
import videojsYoutube from "videojs-youtube";
const getCourse = (title) =>
  import(`~/data/courses/${title}.json`).then((m) => m)

export default {
  computed: {
    videojsDataSetup() {
      return `{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "${this.lesson.url}"}] }`
    }
  },
  methods: {
    lessonUrl(lessonSlug) {
      return `/courses/${this.course.slug}/${lessonSlug}`;
    }
  },
  mounted() {
    const options = { "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": this.lesson.url}] }
    var oldPlayer = document.getElementById("lessonPlayer");
    this.player = videojs("lessonPlayer", options);
  },
  // beforeDestroy() {
  //   if (this.player) {
  //     this.player.dispose();
  //   }
  // },
  data() {
    return {
      player : null
    };
  },
  async asyncData({ params }) {
    try {
      const course = await getCourse(params.course);
      const lesson = course.lessons[params.lesson];
      return { course: course, lesson: lesson }
    } catch {
      return { course: null }
    }
  },
}
</script>
