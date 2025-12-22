<template>
  <video
    autoplay
    muted
    loop
    playsinline
    :poster="`${assetsPath}img/photo.jpeg`"
  >
    <source
      src="https://cdn.shopify.com/s/files/1/0312/2737/9849/files/HomeHero_20210120.webm"
      type="video/webm"
    >
    <source
      src="https://cdn.shopify.com/s/files/1/0312/2737/9849/files/HomeHero_20210120.mp4"
      type="video/mp4"
    >
  </video>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    const assetsPath = process.env.VUE_APP_ASSETS

    return {
      assetsPath
    }
  }
})
</script>

<style lang="scss" scoped>
video {
  width: 100%;
  height: 546px;
  object-fit: cover;
  pointer-events: none;

  @include media-breakpoint-down(md) {
    height: 299px;
    pointer-events: initial;
  }
}
</style>
