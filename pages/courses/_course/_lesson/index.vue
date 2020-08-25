<template>
  <div class="pb-24 mt-6 sm:mt-10 max-w-screen-lg mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-2">
      <video
        class="lg:col-span-2 h-72 lg:h-100 w-full video-js vjs-default-skin vjs-big-play-centered"
        controls
        :data-setup='videojsDataSetup'
      ></video>
      <div class="lg:col-span-1 rounded-md"></div>
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
  async asyncData({ params }) {
    try {
      const course = await getCourse(params.course);
      const lesson = course.lessons[params.lesson];
      console.log(lesson);
      return { course: course, lesson: lesson }
    } catch {
      return { course: null }
    }
  },
}
</script>
