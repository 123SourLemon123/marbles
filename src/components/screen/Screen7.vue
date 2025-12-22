<template>
  <div
    class="screen"
    :style="{ background: `url('${assetsPath}img/pattern.svg')`}"
  >
    <div class="screen-content">
      <div class="col-1">
        <div class="circle" />
        <img
          class="box"
          :src="`${assetsPath}img/box.svg`"
          alt="коробка"
          loading="lazy"
        >
        <img
          class="cards"
          :src="`${assetsPath}img/cards.svg`"
          alt="карты"
          loading="lazy"
        >
      </div>

      <div class="col-2">
        <app-buy second />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppBuy from '../app/AppBuy.vue'

export default defineComponent({
  components: { AppBuy },

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
  background-position: -30px -20px !important;

  @include media-breakpoint-down(md) {
    $corner: 24px;

    background: $text-main !important;
    border-bottom-left-radius: $corner;
    border-bottom-right-radius: $corner;
    position: relative;

    &::before {
      content: '';
      background: $text-main;
      width: 100%;
      height: $corner;
      border-top-left-radius: $corner;
      border-top-right-radius: $corner;
      position: absolute;
      top: #{-1 * $corner + 1px};
    }
  }

  &-content {
    @include max-width;

    display: grid;
    grid-template-columns: auto 1fr;
    gap: 31px;
    padding-bottom: 160px;

    @include media-breakpoint-down(md) {
      display: block;
      padding: 16px 0 40px;
      margin: 0 auto;
      max-width: 290px;
      position: relative;
    }
  }
}

.col {
  &-1 {
    position: relative;
    padding: 65px 0 0 188px;

    @include media-breakpoint-down(md) {
      padding: 0;
      position: absolute;
      left: -5px;
      top: -15px;
      max-width: 55%;
    }

    .circle {
      --size: 509px;

      width: var(--size);
      height: var(--size);
      border-radius: 100%;
      border: 6px solid $yellow;
      filter:
        drop-shadow(0 0 104px $yellow)
        drop-shadow(0 0 52px rgba($yellow, 0.4))
        drop-shadow(0 0 26px rgba($yellow, 0.25));
      position: absolute;
      left: 142px;
      top: 65px;

      @include media-breakpoint-down(md) {
        --size: 52px;

        filter: blur(74px);
        background: $yellow;
        border: none;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }

    .box {
      position: relative;
      width: 596px;

      @include media-breakpoint-down(md) {
        width: 181px;
      }
    }

    .cards {
      position: absolute;
      left: 211px;
      top: 299px;

      @include media-breakpoint-down(md) {
        width: 68px;
        left: 6px;
        top: 60px;
      }
    }
  }

  &-2 {
    padding-top: 140px;

    @include media-breakpoint-down(md) {
      padding: 0;
    }
  }
}
</style>
