<template>
  <div class="self-start mt-10 flex flex-row px-2 sm:px-20">
    <span
      class="inline-flex flex-none items-center justify-center h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-brown-light"
    >
      <span class="text-sm font-medium leading-none text-black">{{lesson.order | twoDigitify}}</span>
    </span>

    <div class="flex flex-col ml-6">
      <div class="flex">
        <span
          class="text-base sm:text-xl font-bold cursor-pointer link"
          :href="lesson.url"
          target="_blank"
          @click="showVideo = true"
          v-if="lesson.url"
        >{{lesson.title}}</span>
        <span v-if="!lesson.url" class="text-base sm:text-xl font-bold">{{lesson.title}}</span>
        <FreeBadge v-if="lesson.publishedOn && lesson.isFree" class="mt-1 sm:mt-0 ml-2 self-start "></FreeBadge>
        <ComingSoonBadge v-if="!lesson.publishedOn" class="mt-1 sm:mt-0 ml-2 self-start "></ComingSoonBadge>
      </div>
      <div class="flex items-center flex-row text-gray-600" v-if="lesson.publishedOn">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-3 h-3">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p class="ml-1 text-xs">{{lesson.duration | duration}}</p>
      </div>
      <p
        class="mt-3"
      >{{lesson.description}}</p>
    </div>
    <YoutubeOverlayVideo v-if="lesson.url" :open="showVideo" :src="lesson.url" :onClose="onHideVideo"></YoutubeOverlayVideo>
  </div>
</template>

<script>
export default {
  props: {
    lesson : {
      type: Object,
      required: true
    }
  },
  methods: {
    onHideVideo () {
      this.showVideo = false;
    }
  },
  data() {
    return {showVideo: false}
  }
}
</script>
