<template>
  <div class="screen">
    <h1>МАРБЛС</h1>
    <h2>Мировой хит настолок сделанный в России</h2>

    <img
      v-for="i in 2"
      :key="i"
      class="part"
      :class="`part-${i}`"
      :src="`${assetsPath}img/part-${i}.svg`"
      :alt="`часть ${i}`"
      loading="lazy"
    >

    <img
      class="part part-1-mobile"
      :src="`${assetsPath}img/part-1.svg`"
      alt="часть 1"
    >

    <img
      class="cards"
      :src="`${assetsPath}img/cards.png`"
      alt="карточки"
      loading="lazy"
    >
  </div>
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
.screen {
  text-align: center;
  padding-top: 46px;
  position: relative;
  min-height: 550px;
  overflow-x: clip;

  @include media-breakpoint-down(md) {
    $padding: 20px;

    padding: $padding 0 0 $padding;
    text-align: left;
    min-height: 306px;
  }
}

h2 {
  max-width: 955px;
  margin: 0 auto;

  @include media-breakpoint-down(md) {
    max-width: 191px;
    margin: 0;
  }
}

.part {
  z-index: -1;

  @include part;

  &-1 {
    right: -100px;
    bottom: -30px;

    @include media-breakpoint-down(md) {
      transform: rotate(-32deg);
      right: 37px;
      bottom: 28px;
    }

    &-mobile {
      display: none;
      transform: rotate(-80deg);
      right: -77px;
      top: -31px;

      @include media-breakpoint-down(md) {
        display: initial;
      }
    }
  }

  &-2 {
    transform: rotate(-124deg);
    left: -200px;
    top: 90px;

    @include media-breakpoint-down(md) {
      left: unset;
      right: -48px;
      top: 126px;
      transform: rotate(-78deg);
    }
  }
}

.cards {
  position: absolute;
  left: 30px;
  bottom: 70px;

  @include media-breakpoint-down(md) {
    width: 64px;
    height: 72px;
    object-fit: contain;
    right: 59px;
    left: unset;
    bottom: 112px;
  }
}
</style>
