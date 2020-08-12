<template>
  <div>
    <header class="max-w-screen-xl mx-auto mt-4 px-4 sm:px-8 xl:px-0 sm:mt-6">
      <nav class="relative flex items-center justify-between sm:h-10 md:justify-center">
        <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
          <div class="flex items-center justify-between w-full md:w-auto">
            <a class="text-indigo-750" href="/" aria-label="Home">
              <Logo class="h-14 sm:h-16 w-auto"></Logo>
            </a>
          </div>
        </div>
      </nav>
    </header>

    <div class="pt-4 px-4 sm:px-8 text-gray-850">
      <Nuxt />
    </div>

    <Footer class="px-4 sm:px-8"></Footer>

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
export default {
  components: { Logo, Footer },
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
        class: 'antialiased font-sans bg-orange-50',
      },
    }
  },
}
</script>
