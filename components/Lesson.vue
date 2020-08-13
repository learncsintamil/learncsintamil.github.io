<template>
  <div class="self-start mt-10 flex flex-row px-2 sm:px-20">
    <span
      class="inline-flex flex-none items-center justify-center h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-brown-light"
    >
      <span class="text-sm font-medium leading-none text-black">{{lesson.order | twoDigitify}}</span>
    </span>

    <div class="flex flex-col ml-6">
      <div class="flex">
        <a
          class="text-base sm:text-xl font-bold text-indigo-650 hover:text-gray-850 hover:underline"
          href="#"
        >{{lesson.title}}</a>
        <FreeBadge v-if="lesson.isFree"></FreeBadge>
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
        <p class="ml-1 text-xs">{{lesson.duration | duration}}</p>
      </div>
      <p
        class="mt-3"
      >{{lesson.description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lesson : {
      type: Object,
      required: true
    }
  }
}
</script>
