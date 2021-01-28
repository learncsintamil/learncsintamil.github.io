<template>
  <div class="pb-24 mt-8 sm:mt-14 max-w-screen-lg mx-auto">
    <div class="px-2 sm:px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <CodeReview v-for="codeReview in codeReviews" :key="codeReview.slug" :code-review="codeReview"></CodeReview>
    </div>
  </div>
</template>

<script>
const getCodeReviews = () =>
  import(`~/data/code-reviews.json`).then((m) => Object.values(m.data))

import CodeReview from '../../components/CodeReview'

export default {
  components: { CodeReview },
  head() {
    return {
      title: 'Code Reviews | Learn CS in Tamil',
    }
  },
  async asyncData({ params }) {
    const codeReviews = await getCodeReviews()
    return { codeReviews: codeReviews }
  },
}
</script>
