<template>
  <div>
    <div
      @keydown.esc="onHideIntroVideo"
      class="relative px-4 sm:px-8 sm:pt-10 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32"
    >
      <main class="mt-6 mx-auto max-w-screen-xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
        <div class="text-center">
          <h2
            class="font-serif text-3xl sm:text-5xl leading-10 font-extrabold text-gray-850 sm:leading-none"
          >Your software development coach</h2>
          <p
            class="mt-3 md:mt-6 mx-auto max-w-xl text-gray-850 text-xl sm:text-2xl"
          >Everything you need to build a successful career and turn your ideas into software products.</p>
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

export default {
  components: { Logo, YoutubeOverlayVideo, Footer, NewsletterSubscription },
  methods: {
    onShowIntroVideo() {
      this.showIntroVideo = true
    },
    onHideIntroVideo() {
      this.showIntroVideo = false
    },
  },
  data() {
    return {showIntroVideo: false};
  },
}
</script>
