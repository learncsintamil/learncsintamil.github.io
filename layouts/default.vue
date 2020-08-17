<template>
  <div class="relative">
    <div class="relative">
      <header class="max-w-screen-xl mx-auto mt-2 px-4 sm:px-8 xl:px-0 sm:mt-6">
        <nav class="relative flex items-center justify-between sm:h-10 md:justify-center">
          <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div class="flex items-center justify-between w-full md:w-auto">
              <nuxt-link
                :class="{'text-indigo-750': !showDrawer, 'text-orange-350': showDrawer}"
                to="/"
                aria-label="Home"
              >
                <Logo class="h-14 sm:h-16 w-auto"></Logo>
              </nuxt-link>
              <div class="-mr-2 flex items-center md:hidden">
                <button
                  type="button"
                  class="inline-flex items-center justify-center p-2 rounded-md text-gray-850 hover:text-indigo-750 hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 focus:text-gray-850 transition duration-150 ease-in-out"
                  id="main-menu"
                  v-show="!showDrawer"
                  @click="toggleDrawer"
                  aria-label="Main menu"
                  aria-haspopup="true"
                >
                  <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="hidden md:flex md:space-x-10">
            <nuxt-link to="/courses/" class="font-medium py-2 link" :class="{'border-b-2 border-indigo-750' : isCourses}">Courses</nuxt-link>
          </div>
        </nav>
      </header>
      <!-- Mobile Menu -->
      <transition
        enter-active-class="ease-out duration-150"
        enter-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="ease-in duration-100"
        leave-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div
          v-if="showDrawer"
          :class = '{"z-10" : showDrawer}'
          class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div class="rounded-lg shadow-md">
            <div
              class="rounded-lg bg-white shadow-xs overflow-hidden"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="main-menu"
            >
              <div class="px-5 pt-4 flex items-center justify-between">
                <div class="text-indigo-750">
                  <Logo class="h-14 sm:h-16 w-auto"></Logo>
                </div>
                <div class="-mr-2">
                  <button
                    type="button"
                    @click="toggleDrawer"
                    class="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:bg-gray-100 focus:text-gray-500 link"
                    aria-label="Close menu"
                  >
                    <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="px-5 py-8">
                <p class="font-medium link px-3 py-2" :class="{ 'border-l-4 border-indigo-750 bg-indigo-50' : isCourses}" @click="redirect('/courses')">Courses</p>
              </div>
            </div>
          </div>
        </div>
      </transition>

      <div class="pt-4 px-4 sm:px-8 text-gray-850 mx-auto max-w-screen-xl">
        <Nuxt />
      </div>
    </div>
    <Footer class="px-4 sm:px-8" :showNewsletterSubscription="!isHomePage"></Footer>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-173138897-1"></script>
    <script>
  window.dataLayer = window.dataLayer || []
  function gtag() {
    dataLayer.push(arguments)
  }
  gtag('js', new Date())
  gtag('config', 'UA-173138897-1')
    </script>
  </div>
</template>


<script>
import Logo from './../components/Logo'
import Footer from './../components/Footer'
import Notify from './../components/Notify'
export default {
  components: { Logo, Footer },
  computed: {
    isHomePage() {
      return this.$route.name === 'index';
    },
    isCourses() {
      return this.$route.name === 'courses' || this.$route.name === 'courses-title';
    }
  },
  methods: {
    toggleDrawer() {
      this.showDrawer = !this.showDrawer
    },
    redirect(route) {
      this.showDrawer = false;
      this.$router.push(route);
    }
  },
  data() {
    console.log(this.$route.name);
    return { showDrawer: false}
  },
  head() {
    return {
      title: 'Learn CS in Tamil',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Screencast tutorials to help you learn Computer Science & Software Development in Tamil. Videos to help you learn HTML, CSS, Javascript, and more.',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'html, javascript, css, screencasts, tips, tricks, tutorials, training, programming, programming in tamil',
        },
      ],
      bodyAttrs: {
        class: 'antialiased font-sans bg-orange-350',
      },
    }
  },
}
</script>
