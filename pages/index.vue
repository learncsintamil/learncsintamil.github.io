<template>
  <div>
    <div
      @keydown.esc="onHideIntroVideo"
      class="relative sm:pt-10 pb-12 sm:pb-16"
    >
      <main class="px-4 sm:px-8 mt-6 mx-auto max-w-screen-xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
        <div class="text-center">
          <h2
            class="font-serif text-3xl sm:text-5xl leading-10 font-black text-gray-850 sm:leading-none"
          >Your Software Development Coach</h2>
          <p
            class="mt-3 md:mt-6 mx-auto max-w-2xl text-gray-850 text-xl sm:text-2xl"
          >Everything you need to build a successful career in IT.</p>
          <NewsletterSubscription class="mt-5 max-w-xl mx-auto sm:flex sm:justify-center md:mt-8"></NewsletterSubscription>
          <div class="mt-6 sm:mt-4">
            <a
              href="#"
              @click.prevent="onShowIntroVideo"
              class="link font-medium text-lg"
            >Watch introduction video</a>
          </div>
        </div>
      </main>
      <div class="bg-orange-50 mt-16 pt-12 pb-24 sm:pb-36 flex flex-col justify-center items-center">
        <p class="text-xl sm:text-2xl font-semibold font-serif">Featured Course</p>
        <div class="lg:w-1/3 bg-orange-50 pt-12 px-4 sm:px-8">
          <Course :course="featuredCourse"></Course>
        </div>
      </div>
      <YoutubeOverlayVideo
        :open="showIntroVideo"
        src="https://www.youtube.com/embed/rIwpFds_xb8"
        :onClose="onHideIntroVideo"
      ></YoutubeOverlayVideo>
    </div>
  </div>
</template>

<script>
import Logo from './../components/Logo'
import YoutubeOverlayVideo from './../components/YoutubeOverlayVideo'
import NewsletterSubscription from './../components/NewsletterSubscription'
import Footer from './../components/Footer'
import Course from './../components/Course'

const getFeaturedCourse = () =>
  import(`~/data/courses/a-career-guide-to-software-development.json`).then(
    (x) => x
  )

export default {
  components: {
    Logo,
    YoutubeOverlayVideo,
    Footer,
    NewsletterSubscription,
    Course,
  },
  methods: {
    onShowIntroVideo() {
      this.showIntroVideo = true
    },
    onHideIntroVideo() {
      this.showIntroVideo = false
    },
  },
  data() {
    return { showIntroVideo: false }
  },
  async asyncData({ params }) {
    const featuredCourse = await getFeaturedCourse()
    return { featuredCourse: featuredCourse }
  },
}
</script>
