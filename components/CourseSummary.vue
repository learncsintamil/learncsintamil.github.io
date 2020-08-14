<template>
  <div class="flex items-center">
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-3 h-3 sm:w-5 sm:h-5">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <p class="ml-1 text-xs sm:text-sm">{{level}}</p>
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="ml-2 sm:ml-3 w-3 h-3 sm:w-5 sm:h-5">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    </svg>
    <p class="ml-1 text-xs sm:text-sm">{{lessonsCount}} lessons</p>
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="ml-2 sm:ml-3 w-3 h-3 sm:w-5 sm:h-5">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <p class="ml-1 text-xs sm:text-sm">{{duration | duration}}</p>
  </div>
</template>

<script>
export default {
  props: {
    level : {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      required: true
    },
    lessonsCount: {
      type: Number,
      required: true
    }
  }
}
</script>
