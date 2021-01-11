<template>
  <div class="card-container p-4 bg-white rounded-md">
        <blockquote class="p-6 md:flex-grow md:flex md:flex-col">
          <div class="relative md:flex-grow">
            <svg class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
            </svg>
            <p class="relative" v-text="content">
            </p>
          </div>
          <footer class="mt-8">
            <div class="flex">
              <div class="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                <img class="h-12 w-12 rounded-full" :src="avatarUrl" alt="">
              </div>
              <div class="ml-4">
                <div class="text-base font-medium " v-text="author"></div>
                <div class="text-base font-medium text-gray-500" v-text="designation"></div>
              </div>
            </div>
          </footer>
        </blockquote>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    avatarUrl: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    }
  }
}
</script>