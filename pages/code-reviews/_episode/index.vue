<template>
  <div class="pb-24 -mt-4 sm:mt-10 flex flex-col items-center space-y-4">
    <!-- <div class="shadow-md mt-8 sm:mt-0 h-full w-full sm:w-240 card-container">
      <vue-plyr ref="plyr">
        <div data-plyr-provider="vimeo" v-bind:data-plyr-embed-id="episode.vimeoVideoId"></div>
      </vue-plyr>
    </div> -->
    <p class="text-center" v-html="loadingText"></p>
    <client-only>
      <vimeo-player class="vimeo-player h-60 lg:h-128 w-full card-container" 
        ref="player" 
        @ready="onReady"
        @ended="onEnd"
        :video-id="episode.vimeoVideoId" />
    </client-only>
    <div class="space-y-4 text-lg mx-auto max-w-2xl">
      <p class="text-lg" v-text="episode.description"></p>
      <h3 class="uppercase tracking-wider text-xl">Source Code</h3>
      <ul class="flex space-x-2">
        <li><a target="_blank" rel="noopener noreferrer" :href="episode.sourceCode.after" class="link underline">After </a></li>
        <li><a target="_blank" rel="noopener noreferrer" :href="episode.sourceCode.before" class="link underline">Before</a></li>
        <li><a target="_blank" rel="noopener noreferrer" :href="episode.sourceCode.changes" class="link underline">Changes</a></li>
      </ul>
      <h3 class="uppercase tracking-wider text-xl">Topics</h3>
      <ul class="text-lg space-y-2">
        <li v-for="(topic, i) in episode.topics" v-bind:key="i">
          <span v-text="topic.timestamp" class="font-mono underline cursor-pointer mr-2" v-on:click="seek(topic.secondsToSeek)"></span>
          <span v-text="topic.title"></span>
        </li>
      </ul>
      <h3 class="uppercase tracking-wider text-xl">References</h3>
      <ul class="list-inside list-disc">
        <li class="link" v-for="(r, i) in episode.references" v-bind:key="i">
          <a target="_blank" rel="noopener noreferrer" :href="r.href" v-text="r.text"></a>
        </li>
      </ul>
    </div>
    <div class="w-full">
      <script src="https://utteranc.es/client.js"
        repo="learncsintamil/comments"
        issue-term="pathname"
        label="utterance"
        theme="boxy-light"
        crossorigin="anonymous"
        type="application/javascript"
        async>
      </script>
    </div>
  </div>
</template>

<script>
const getCodeReviewEpisode = (slug) =>
  import(`~/data/code-reviews.json`).then(m => m.data[slug])

export default {
  computed: {
    loadingText() {
      return this.isPlayerReady ? "&nbsp;" : "Loading video...";
    }
  },  
  methods : {
    seek(secondsToSeek) {
      const player = this.$refs.player.player;
      player.pause();
      debugger;
      player.setCurrentTime(secondsToSeek).then(_ => {
        player.play()
      })
    },
    onReady() {
      this.isPlayerReady = true;
    },
    onEnd() {
      this.$router.replace({ path: this.nextLessonUrl });
    }, 
  },
  head() {
    return {
      title: this.episode.title,
      meta: [
        { hid: 'og_type', name: 'og:type', content: 'video.other' },
        { hid: 'og_url', name: 'og:url', content: 'https://www.learncsintamil.com/code-reviews/' + this.episode.slug + "/"},
        { hid: 'og_title', name: 'og:title', content: "Code Reviews - " + this.episode.title },
        { hid: 'og_description', name: 'og:description', content: this.episode.description },
        { hid: 'description', name: 'description', content: this.episode.description },
        { hid: 'og_image', name: 'og:image', content: 'https://www.learncsintamil.com' + this.episode.bannerImagePath },
      ],
    }
  },
  async asyncData({ params }) {
    try {
      const episode = await getCodeReviewEpisode(params.episode)
      const isPlayerReady = false;
      return { episode, isPlayerReady }
    } catch {
      return { course: null }
    }
  },
}
</script>
