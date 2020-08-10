<template>
  <Overlay :open="open" :onClose="onClose">
    <iframe
      v-if="open"
      class="w-full h-full sm:w-240 sm:h-128"
      src="https://www.youtube.com/embed/rIwpFds_xb8"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </Overlay>
</template>

<script>
import Overlay from './Overlay'
export default {
  components: {Overlay},
  props: {
    open: {
      type: Boolean,
    },
    onClose: {
      type: Function,
    },
  },
}
</script>
