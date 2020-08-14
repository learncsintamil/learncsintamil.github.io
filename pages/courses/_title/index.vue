<template>
  <div class="pb-6 mt-6 sm:mt-10 max-w-screen-lg mx-auto">
    <!-- Course Banner -->
    <div
      class="grid grid-cols-1 sm:col-gap-4 sm:grid-cols-8 rounded-xl bg-white card-container text-gray-850 p-4 sm:p-0 mt-3"
    >
      <img
        class="rounded-xl sm:rounded-r-none object-contain mx-auto h-32 w-22 sm:h-full sm:object-fill sm:w-full sm:col-span-2"
        :src="bannerImagePath"
      />
      <div class="sm:col-span-6 sm:p-6 flex flex-col">
        <div class="flex flex-col sm:flex-row">
          <p
            class="text-center sm:text-left text-gray-850 text-xl sm:text-4xl font-extrabold mt-3 sm:mt-0"
          >{{course.title}}</p>
          <FreeBadge v-if="course.isFree"></FreeBadge>
        </div>
        <div class="mt-2 sm:mt-1 flex items-center self-center sm:self-start">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p class="ml-1 text-sm">{{course.level}}</p>
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="ml-2 sm:ml-3 w-5 h-5">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
          <p class="ml-1 text-sm">{{Object.keys(course.lessons).length}} Lessons</p>
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="ml-2 sm:ml-3 w-5 h-5">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p class="ml-1 text-sm">{{courseDuration | duration}}</p>
        </div>
        <p class="mt-6">{{course.description}}</p>
        <div class="flex flex-col sm:flex-row sm:justify-between">
          <a
            href="#"
            class="mt-4 leading-tight uppercase w-full flex items-center justify-center px-8 py-3 border border-transparent font-medium rounded-md text-white bg-indigo-750 hover:bg-indigo-650 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-2 md:px-5 sm:mr-64 text-base"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-5 w-5 mr-2 sm:mr-1"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            Start Watching
          </a>
          <div class="mx-3"></div>
          <div class="flex flex-row mt-6 sm:mt-0 self-end sm:ml-64">
            <FacebookIcon url="#"></FacebookIcon>
            <TwitterIcon url="#"></TwitterIcon>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="sm:flex sm:flex-col sm:items-center">
        <p class="text-lg sm:text-3xl font-bold">What you'll learn</p>
        <div class="mt-1">
          <CheckListItem class="mt-2" :itemText="lo" :key="index" v-for="(lo,index) in course.learningOutcomes"></CheckListItem>
        </div>
      </div>
      <div class="mt-6 sm:mt-0 sm:flex sm:flex-col sm:items-center">
        <p class="text-lg sm:text-3xl font-bold">Prerequisites</p>
        <div class="mt-1">
          <CheckListItem class="mt-2" :itemText="preq" :key="index" v-for="(preq,index) in course.prerequisites"></CheckListItem>
        </div>
      </div>
    </div>

    <p class="text-center mt-10 text-xl sm:text-3xl font-bold">Lessons</p>
    <div class="flex flex-col items-center">

      <Lesson :lesson="lesson" :key="lesson.slug" v-for="lesson in course.lessons"></Lesson>
    </div>
  </div>
</template>

<script>

import FreeBadge from '../../../components/FreeBadge'
import CheckListItem from '../../../components/CheckListItem'
import TwitterIcon from '../../../components/icons/Twitter'
import FacebookIcon from '../../../components/icons/Facebook'
import Lesson from '../../../components/Lesson'

const getCourse = (title) => import(`~/data/courses/${title}.json`).then(m => m);
export default {
  components: { FreeBadge, CheckListItem, TwitterIcon, FacebookIcon },
  computed: {
    bannerImagePath() {
      return "/_nuxt/assets/" + this.course.bannerImagePath;
    },
    courseDuration() {
      const totalSeconds = Object.values(this.course.lessons).map(l => l.duration).reduce((x, y) => x + y, 0);
      return totalSeconds;
    }
  },
  async asyncData ({ params }) {
    try {
      const course = await getCourse(params.title);
      return { course : course };
    } catch {
      return { course : null};
    }
  }
}
</script>
