<template>
  <nuxt-link
    :to="episodeUrl(codeReview.slug)"
    class="transition duration-500 ease-in-out transform rounded shadow  bg-white flex "
  >
    <div class="self-start mt-4 flex flex-row px-4 py-6 sm:px-8 sm:py-4 w-full">
      <span
        class="inline-flex flex-none items-center justify-center h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-brown-light mt-3"
      >
        <span class="text-sm font-medium leading-none text-black">{{codeReview.order | twoDigitify}}</span>
      </span>

      <div class="flex flex-col ml-6">
        <div class="flex">
          <p class="text-base lg:text-2xl cursor-pointer link font-semibold">{{codeReview.title}}</p>
        </div>
        <div class="flex items-center flex-row text-gray-600">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-3 h-3">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p class="ml-1 text-sm">{{codeReview.duration | duration}}</p>
        </div>
        <p class="mt-3 sm:text-lg">{{codeReview.description}}</p>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  methods: {
    episodeUrl(slug) {
      return `/code-reviews/${slug}/`
    },
  },
  props: {
    codeReview: {
      required: true
    }
  }
}
</script>
