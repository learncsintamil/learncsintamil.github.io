<template>
  <div class="pb-6 mt-6 sm:mt-10 max-w-screen-lg mx-auto">
    <!-- Course Banner -->
    <div
      class="grid grid-cols-1 sm:col-gap-4 sm:grid-cols-8 rounded-xl bg-white card-container text-gray-850 p-4 sm:p-0 mt-3"
    >
      <img
        class="rounded-xl sm:rounded-r-none object-contain mx-auto h-32 w-22 sm:h-full sm:object-fill sm:w-full sm:col-span-2"
        src="~/assets/logos/courses/basics-of-web-development-logo.png"
      />
      <div class="sm:col-span-6 sm:p-6 flex flex-col">
        <div class="flex flex-col sm:flex-row">
          <p
            class="text-center sm:text-left text-gray-850 text-xl sm:text-4xl font-extrabold mt-3 sm:mt-0"
          >Basics of web development</p>
          <span
            class="mt-1 sm:mt-0 sm:ml-2 self-center sm:self-start inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-green-100 text-green-800"
          >Free</span>
        </div>
        <div class="mt-2 sm:mt-1 flex items-center self-center sm:self-start">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p class="ml-1 text-sm">Beginner</p>
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="ml-2 sm:ml-3 w-5 h-5">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
          <p class="ml-1 text-sm">3 lessons</p>
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="ml-2 sm:ml-3 w-5 h-5">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p class="ml-1 text-sm">1h 12m</p>
        </div>
        <p class="mt-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores atque adipisci tempore illum cum repellendus expedita, iusto error dignissimos? Exercitationem excepturi adipisci sunt minus optio? Ipsum rem quia iure unde.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores atque adipisci tempore illum cum repellendus expedita, iusto error dignissimos? Exercitationem excepturi adipisci sunt minus optio? Ipsum rem quia iure unde.
        </p>
        <div class="flex flex-col sm:flex-row sm:justify-between">
          <a
            href="#"
            class="mt-4 w-full flex items-center justify-center px-8 py-3 border border-transparent leading-6 font-medium rounded-md text-white bg-indigo-750 hover:bg-indigo-650 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-2 md:px-5 sm:mr-64 text-base"
          >Start Watching</a>
          <div class="mx-10"></div>
          <div class="flex flex-row mt-6 sm:mt-0 self-end sm:ml-64">
            <a
              href="https://www.facebook.com/learncsintamil"
              target="_blank"
              class="text-gray-850 hover:text-indigo-650"
            >
              <span class="sr-only">Facebook</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://www.twitter.com/learncsintamil"
              target="_blank"
              class="ml-8 text-gray-850 hover:text-indigo-650"
            >
              <span class="sr-only">Twitter</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:mx-40">
      <div>
        <p class="text-lg sm:text-3xl font-bold">What you'll learn</p>
        <div class="mt-3">
          <p class="flex items-center">
            <svg viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 text-indigo-650">
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="ml-3 text-lg">CSV import & export</span>
          </p>
          <p class="mt-2 flex items-center">
            <svg viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 text-indigo-650">
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="ml-3 text-lg">Creating custom types</span>
          </p>
          <p class="mt-2 flex items-center">
            <svg viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 text-indigo-650">
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="ml-3 text-lg">Query Performance</span>
          </p>
          <p class="mt-2 flex items-center">
            <svg viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 text-indigo-650">
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="ml-3 text-lg">Transactions</span>
          </p>
          <p class="mt-2 flex items-center">
            <svg viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 text-indigo-650">
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="ml-3 text-lg">Pattern Matching & Regex</span>
          </p>
        </div>
      </div>
      <div class="mt-6 sm:mt-0">
        <p class="text-lg sm:text-3xl font-bold">Prerequisites</p>
        <div class="mt-3">
          <p class="mt-2 flex items-center">
            <svg viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 text-indigo-650">
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="ml-3 text-lg">Basic Computer operating skills</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
