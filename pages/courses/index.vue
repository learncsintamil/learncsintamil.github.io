<template>
  <div class="pb-24 mt-8 sm:mt-14 max-w-screen-lg mx-auto">
    <div class="px-2 sm:px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <nuxt-link
        v-for="course in courses"
        :key="course.slug"
        to="/courses/basics-of-web-development/"
        class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 card-container p-4 bg-white rounded-xl flex flex-col"
      >
        <img :src="course.bannerImagePath" class="card-container rounded-xl h-32 w-32 mx-auto" />
        <p
          class="font-serif text-center text-gray-850 text-lg sm:text-2xl font-extrabold mt-6"
        >{{course.title}}</p>
        <FreeBadge v-if="course.isFree" class="mt-2 sm:mt-1 self-center"></FreeBadge>
        <div class>
          <CourseSummary
            :lessonsCount="course.lessonsCount"
            :duration="course.duration"
            :level="course.level"
            class="mt-2 sm:mt-1 justify-center"
          ></CourseSummary>
        </div>
      </nuxt-link>
    </div>

  </div>
</template>

<script>
const getCourses = () =>
  import(`~/data/courses.json`).then((m) => Object.values(m.data))

import CourseSummary from '../../components/CourseSummary'

export default {
  components: { CourseSummary },
  head() {
    return {
      title: 'Courses'
    }
  },
  async asyncData({ params }) {
    const courses = await getCourses()
    return { courses: courses }
  },
}
</script>
