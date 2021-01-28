<template>
  <nuxt-link
    :to="episodeUrl(codeReview.slug)"
    class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 card-container p-4  bg-orange-350 rounded-xl flex flex-col"
  >
    
    <img :src="codeReview.bannerImagePath" class="h-48 w-full" />
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
