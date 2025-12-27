<template>
  <video
    autoplay
    muted
    loop
    playsinline
    :poster="media.heroVideoPoster"
  >
    <source
      :src="media.heroVideoWebm"
      type="video/webm"
    >
    <source
      :src="media.heroVideoMp4"
      type="video/mp4"
    >
  </video>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { media } from '@/config'

export default defineComponent({
  setup () {
    return {
      media
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
