<template>
  <form
    form
    action="https://learncsintamil.us10.list-manage.com/subscribe/post?u=7e78a86869fa18f0744a5d357&amp;id=44c013b107"
    target="_blank"
    method="POST"
    class=""
  >
    <input
      aria-label="Email"
      name="EMAIL"
      type="email"
      required
      aria-required="true"
      :class="{'md:text-lg sm:py-1' : small, 'md:text-xl' : !small}"
      class="appearance-none block text-base w-full px-3 py-3 border border-gray-300 leading-6 rounded-md sm:mr-4 placeholder-gray-500 shadow-sm focus:outline-none focus:placeholder-gray-400 focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:flex-1"
      placeholder="Enter your email"
    />
    <div class="mt-3 sm:mt-0 rounded-md shadow-lg">
      <button
        type="submit"
        :class="{'px-8 py-3 text-lg' : small, 'px-8 py-3 md:py-4 text-lg md:text-xl md:px-10' : !small}"
        class="w-full flex items-center justify-center border border-transparent leading-6 font-medium rounded-md text-white bg-indigo-750 hover:bg-indigo-650 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out"
      >Subscribe</button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    small: {
      type: Boolean
    }
  }
}
</script>
