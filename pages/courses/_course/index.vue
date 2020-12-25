<template>
  <div class="pb-24 mt-6 sm:mt-10 max-w-screen-lg mx-auto">
    <!-- Course Banner -->
    <div
      class="grid grid-cols-1 lg:col-gap-4 lg:grid-cols-8 rounded-xl bg-white card-container text-gray-850 p-4 lg:p-0 mt-3"
    >
      <img
        class="rounded-xl lg:rounded-r-none object-contain mx-auto h-32 w-22 lg:h-full lg:object-fill lg:w-full lg:col-span-2"
        :src="course.bannerImagePath"
      />
      <div class="lg:col-span-6 lg:p-6 flex flex-col">
        <div class="flex flex-col sm:flex-row">
          <p
            class="font-serif text-center sm:text-left text-gray-850 text-xl sm:text-4xl font-extrabold mt-3 sm:mt-0"
          >{{course.title}}</p>
        </div>
        <CourseSummary
          class="mt-2 sm:mt-1 self-center sm:self-start"
          :lessonsCount="course.lessonsCount"
          :duration="course.duration"
          :level="course.level"
        ></CourseSummary>
        <p class="hidden lg:block mt-6">{{course.description}}</p>
        <div class="flex flex-col sm:flex-row sm:justify-between">
          <nuxt-link
            :to="firstLessonPath"
            class="mt-4 leading-tight uppercase w-full flex items-center justify-center px-8 py-3 border border-transparent font-medium rounded-md text-white bg-indigo-750 hover:bg-indigo-650 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-2 md:px-5 sm:mr-64 text-base"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-5 w-5 mr-2 sm:mr-3"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            Start Watching
          </nuxt-link>
          <div class="mx-2"></div>
          <div class="flex flex-row mt-6 lg:mt-0 self-end lg:ml-64">
            <FacebookIcon :url="facebookShareUrl"></FacebookIcon>
            <TwitterIcon :url="twitterShareUrl"></TwitterIcon>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="sm:flex sm:flex-col sm:items-center">
        <p class="text-lg sm:text-3xl font-bold font-serif">What you'll learn</p>
        <div class="mt-2">
          <CheckListItem
            class="mt-2"
            :itemText="lo"
            :key="index"
            v-for="(lo,index) in course.learningOutcomes"
          ></CheckListItem>
        </div>
      </div>
      <div class="mt-6 sm:mt-0 sm:flex sm:flex-col sm:items-center">
        <p class="text-lg sm:text-3xl font-bold font-serif">Prerequisites</p>
        <div class="mt-2">
          <CheckListItem
            class="mt-2"
            :itemText="preq"
            :key="index"
            v-for="(preq,index) in course.prerequisites"
          ></CheckListItem>
        </div>
      </div>
    </div>

    <p class="text-center mt-10 text-lg sm:text-3xl font-bold font-serif">Lessons</p>
    <div class="flex flex-col items-center">
      <Lesson :lesson="lesson" :key="lesson.slug" v-for="lesson in course.lessons" :courseSlug="course.slug"></Lesson>
    </div>
  </div>
</template>

<script>
import FreeBadge from '../../../components/FreeBadge'
import CheckListItem from '../../../components/CheckListItem'
import TwitterIcon from '../../../components/icons/Twitter'
import FacebookIcon from '../../../components/icons/Facebook'
import Lesson from '../../../components/Lesson'
import CourseSummary from '../../../components/CourseSummary'

const getCourse = (title) =>
  import(`~/data/courses/${title}.json`).then((m) => m)
export default {
  components: {
    FreeBadge,
    CheckListItem,
    TwitterIcon,
    FacebookIcon,
    CourseSummary,
  },
  head() {
    return {
      title: this.course.title,
      meta: [
        { hid: 'og_type', name: 'og:type', content: 'video.other' },
        { hid: 'og_url', name: 'og:url', content: 'https://www.learncsintamil.com/courses/' + this.course.slug + "/"},
        { hid: 'og_title', name: 'og:title', content: this.course.title },
        { hid: 'og_description', name: 'og:description', content: this.course.description },
        { hid: 'description', name: 'description', content: this.course.description },
        { hid: 'og_image', name: 'og:image', content: 'https://www.learncsintamil.com' + this.course.bannerImagePath },
      ],
    }
  },
  computed: {
    firstLessonPath() {
      return `/courses/${this.course.slug}/${this.course.lessons[Object.keys(this.course.lessons)[0]].slug}?autoplay=true`
    },
    facebookShareUrl() {
      return `https://www.facebook.com/sharer.php?u=https://learncsintamil.com/courses/${this.course.slug}/`
    },
    twitterShareUrl() {
      return `https://twitter.com/intent/tweet?text=I'm watching "${this.course.title}" in @learncsintamil https://learncsintamil.com/courses/${this.course.slug}/`
    },
  },
  async asyncData({ params }) {
    try {
      const course = await getCourse(params.course)
      return { course: course }
    } catch {
      return { course: null }
    }
  },
}
</script>
