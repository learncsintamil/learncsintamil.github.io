<template>
  <div class="relative pt-10 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">

    <div class="max-w-screen-xl mx-auto px-8 sm:px-10">
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

    <main class="mt-14 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
      <div class="text-center">
        <h2 class="font-serif text-3xl sm:text-5xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none">
          Learn Software Development in தமிழ்
        </h2>
         <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Join 100+ people learning the fundamentals of software development to build their career, ideas, and products.
        </p>
      </div>
    </main>

  </div>
</template>

<script>
import Logo from './../components/Logo';
export default {
  components: { Logo },
  head() {
    return {
      bodyAttrs: {
        class: 'antialiased font-sans bg-orange-50'
      },
    }
  },
}
</script>
