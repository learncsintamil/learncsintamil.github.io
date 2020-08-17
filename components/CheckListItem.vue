<template>
  <p class="flex items-center">
    <svg viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 sm:w-5 sm:h-5 text-indigo-650">
      <path
        fill-rule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clip-rule="evenodd"
      />
    </svg>
    <span class="ml-3 text-base sm:text-lg">{{itemText}}</span>
  </p>
</template>

<script>
export default {
  props: {
    itemText: {
      type: String
    }
  }
}
</script>
