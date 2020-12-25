<template>
  <nuxt-link
    :to="courseUrl(course.slug)"
    class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 card-container p-4 bg-white rounded-xl flex flex-col"
  >
    
    <img :src="course.bannerImagePath" class="card-container rounded-xl h-32 w-32 mx-auto" />
    <p
      class="font-serif text-center text-gray-850 text-lg sm:text-2xl font-extrabold mt-6"
    >{{course.title}}</p>
    <div>
      <CourseSummary
        :lessonsCount="course.lessonsCount"
        :duration="course.duration"
        :level="course.level"
        class="mt-2 sm:mt-1 justify-center"
      ></CourseSummary>
    </div>
  </nuxt-link>
</template>

<script>
import CourseSummary from './CourseSummary'
import FreeBadge from './FreeBadge'
export default {
  components: { CourseSummary, FreeBadge },
  methods: {
    courseUrl(slug) {
      return `/courses/${slug}/`
    },
  },
  props: {
    course: {
      required: true
    }
  }
}
</script>
