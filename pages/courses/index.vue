<template>
  <div class="pb-24 mt-8 sm:mt-14 max-w-screen-lg mx-auto">
    <div class="px-2 sm:px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Course v-for="course in courses" :key="course.slug" :course="course"></Course>
    </div>
  </div>
</template>

<script>
const getCourses = () =>
  import(`~/data/courses.json`).then((m) => Object.values(m.data))

import Course from '../../components/Course'

export default {
  components: { Course },
  head() {
    return {
      title: 'Courses | Learn CS in Tamil',
    }
  },
  async asyncData({ params }) {
    const courses = await getCourses()
    return { courses: courses }
  },
}
</script>
