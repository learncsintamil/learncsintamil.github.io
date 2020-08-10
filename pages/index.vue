<template>
  <div
    @keydown.esc="onHideIntroVideo"
    class="relative pt-4 sm:pt-6 px-4 sm:px-8 sm:pt-10 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32"
  >
    <div class="max-w-screen-xl mx-auto">
      <nav class="relative flex items-center justify-between sm:h-10 md:justify-center">
        <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
          <div class="flex items-center justify-between w-full md:w-auto">
            <a class="text-indigo-750" href="#" aria-label="Home">
              <Logo class="h-16 sm:h-20 w-auto"></Logo>
            </a>
          </div>
        </div>
      </nav>
    </div>

    <main class="mt-6 sm:mt-10 mx-auto max-w-screen-xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
      <div class="text-center">
        <h2
          class="headline tracking-tight text-3xl sm:text-5xl leading-10 font-extrabold text-gray-850 sm:leading-none"
        >Your software development coach</h2>
        <p
          class="mt-3 md:mt-6 mx-auto max-w-xl text-base text-gray-850 text-xl sm:text-2xl"
        >Everything you need to build a successful career and turn your ideas into software products.</p>

        <form
          form
          action="https://learncsintamil.us10.list-manage.com/subscribe/post?u=7e78a86869fa18f0744a5d357&amp;id=44c013b107"
          target="_blank"
          method="POST"
          class="mt-5 max-w-xl mx-auto sm:flex sm:justify-center md:mt-8"
        >
          <input
            aria-label="Email"
            name="EMAIL"
            type="email"
            required
            aria-required="true"
            class="appearance-none text-lg md:text-xl block w-full px-3 py-3 border border-gray-300 text-base leading-6 rounded-md sm:mr-4 placeholder-gray-500 shadow-sm focus:outline-none focus:placeholder-gray-400 focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:flex-1"
            placeholder="Enter your email"
          />
          <div class="mt-3 sm:mt-0 rounded-md shadow-lg">
            <button
              type="submit"
              class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-750 hover:bg-indigo-650 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 text-lg md:text-xl md:px-10"
            >Subscribe</button>
          </div>
        </form>
        <div class="mt-6 sm:mt-4">
          <a
            href="#"
            @click.prevent="onShowIntroVideo"
            class="hover:text-indigo-650 transition duration-150 ease-in-out"
          >Watch introduction video</a>
        </div>
      </div>
    </main>
    <IntroVideo :open="showIntroVideo" :onClose="onHideIntroVideo"></IntroVideo>
  </div>
</template>

<script>
import Logo from './../components/Logo'
import IntroVideo from './../components/IntroVideo'
export default {
  components: { Logo, IntroVideo },
  methods: {
    onShowIntroVideo() {
      this.showIntroVideo = true
    },
    onHideIntroVideo() {
      this.showIntroVideo = false
    },
  },
  data: () => ({
    showIntroVideo: false,
  }),
  head() {
    return {
      title: 'Learn CS in Tamil',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Screencast tutorials to help you learn Computer Science & Software Development in Tamil. Videos to help you learn HTML, CSS, Javascript, and more.',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'html, javascript, css, screencasts, tips, tricks, tutorials, training, programming, programming in tamil'
        }
      ],
      bodyAttrs: {
        class: 'antialiased font-sans bg-orange-50',
      },
    }
  },
}
</script>
