<template>
  <div>
    <div
      class="relative sm:pt-10 pb-12 sm:pb-16"
    >
      <main class="px-4 sm:px-8 mt-6 mx-auto max-w-screen-xl sm:mt-12 md:mt-16 lg:mt-18 xl:mt-20">
        <div class="text-center">
          <h2
            class="text-3xl sm:text-5xl leading-10 text-gray-850 sm:leading-none"
          >Your Software Development Coach</h2>
          <p
            class="mt-3 md:mt-6 mx-auto max-w-2xl text-gray-850 text-xl sm:text-2xl"
          >Everything you need to build a successful career in IT.</p>
          <NewsletterSubscription class="mt-5 max-w-xl mx-auto sm:flex sm:justify-center md:mt-8"></NewsletterSubscription>
        </div>
        <div class="sm:mb-8">
          <client-only>
            <vimeo-player class="w-full mx-auto sm:flex sm:justify-center md:mt-4 h-72 lg:h-128" ref="player" video-id="473700160"/>
          </client-only>
        </div>
      </main>
      <div class="bg-orange-50 mt-2 sm:mt-4 py-6 sm:py-12 flex flex-col justify-center items-center">
        <p class="text-2xl sm:text-3xl">Courses</p>
        <div class="pb-24 mt-8 sm:mt-14 max-w-screen-lg mx-auto">
          <div class="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Course v-for="course in courses" :key="course.slug" :course="course"></Course>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from './../components/Logo'
import NewsletterSubscription from './../components/NewsletterSubscription'
import Footer from './../components/Footer'
const getCourses = () =>
  import(`~/data/courses.json`).then((m) => Object.values(m.data))

import Course from './../components/Course'

export default {
  components: {
    Logo,
    Footer,
    NewsletterSubscription,
    Course,
  },
  async asyncData({ params }) {
    const courses = await getCourses()
    return { 
      courses: courses
    }
  },
}
</script>
