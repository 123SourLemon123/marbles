<template>
  <div
    class="screen"
  >
    <div class="circles">
      <div
        v-for="i in 5"
        :key="i"
        class="circle"
        :class="{ 'circle-highlight': i > 2 }"
      />
    </div>

    <div class="screen-content">
      <div class="col-1">
        <div class="text-mobile">
          <h3>
            Настольная игра МАРБЛС
          </h3>
          <h4>
            Сделана в России, играют во всем мире
          </h4>
        </div>

        <div class="img-current-container">
          <button
            class="tick"
            :disabled="currentImg === 0"
            :style="{ background: `url('${assetsPath}img/tick.svg')` }"
            alt="<"
            @click="incImg(-1)"
          />
          <div
            class="img-current"
            :style="{ 'background-image': `url('${images[currentImg]}')` }"
          />
          <button
            class="tick"
            :disabled="currentImg === images.length - 1"
            :style="{ background: `url('${assetsPath}img/tick.svg')` }"
            alt=">"
            @click="incImg(1)"
          />
        </div>

        <div class="img-all">
          <img
            v-for="(img, i) in images"
            :key="i"
            v-lazy="img"
            class="img-all-img"
            :class="{ 'img-all-img-current': currentImg === i }"
            alt="фото"
            @click="currentImg = i"
          >
        </div>

      <!--
      <div class="dots">
        <button
          v-for="i in images.length"
          :key="i"
          class="dot"
          :class="{ 'dot-active': currentImg === i - 1 }"
          @click="currentImg = i - 1"
        />
      </div>
      -->
      </div>

      <div
        id="game"
        class="col-2"
      >
        <div class="col-2-content">
          <p class="heading">
            Настольная игра МАРБЛС
          </p>
          <p class="desc">
            Сделана в России, играют во всем мире
          </p>

          <app-buy />

          <div class="btn-other">
            <app-external-link
              class="btn btn-ozone"
              href="https://ozon.ru"
            >
              Купить на OZON
            </app-external-link>
            <app-external-link
              class="btn btn-wb"
              href="https://wildberries.ru"
            >
              Купить на WB
            </app-external-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import AppBuy from '../app/AppBuy.vue'
import AppExternalLink from '../app/AppExternalLink.vue'

export default defineComponent({
  components: {
    AppBuy,
    AppExternalLink
  },

  setup () {
    const assetsPath = process.env.VUE_APP_ASSETS

    const images = [
      `${assetsPath}img/photo.jpeg`,
      'https://picsum.photos/600/800',
      'https://picsum.photos/601/800'
      /*
      'https://picsum.photos/602/800',
      'https://picsum.photos/603/800',
      'https://picsum.photos/604/800',
      'https://picsum.photos/605/800'
      */
    ]
    const currentImg = ref(0)

    function incImg (inc: -1 | 1): void {
      const len = images.length
      let newCurr = currentImg.value + inc
      if (newCurr < 0) newCurr = 0
      else if (newCurr === len) newCurr = len - 1
      currentImg.value = newCurr
    }

    return {
      assetsPath,
      images,
      currentImg,

      incImg
    }
  }
})
</script>

<style lang="scss" scoped>
.screen {
  --size: 78px;

  position: relative;
  background: $text-main;
  overflow-x: hidden;

  &-content {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 124px;
    padding: 0 0 86px 231px;

    @include max-width;

    @include media-breakpoint-down(md) {
      display: block;
      padding: 0;
      background: $white;
    }
  }
}

.circle {
  width: var(--size);
  height: var(--size);
  background: #3a3a3a;
  border-radius: 100%;

  &:not(:last-child) {
    margin-bottom: 10px;

    @include media-breakpoint-down(md) {
      margin-bottom: 4px;
    }
  }

  @include media-breakpoint-down(md) {
    --size: 36px;
  }

  &-highlight {
    background: transparent;
    border: 4px solid $yellow;
    filter:
      drop-shadow(0 0 16px $yellow)
      drop-shadow(0 0 8px rgba($yellow, 0.4))
      drop-shadow(0 0 4px rgba($yellow, 0.25));

    @include media-breakpoint-down(md) {
      filter: none;
      border-width: 2px;
    }
  }

  &s {
    position: absolute;
    left: calc(var(--size) / -2);
    top: 140px;

    @include media-breakpoint-down(md) {
      transform: rotate(90deg);
      left: unset;
      top: -40px;
      right: -25px;
    }
  }
}

.col {
  &-1 {
    --width: 442px;

    padding-top: 139px;

    @include media-breakpoint-down(md) {
      --width: 100%;

      padding: 40px 15px 0;
      position: relative;
    }

    .img {
      &-current {
        height: 494px;
        width: 100%;
        border-radius: 17px;
        background-size: cover;

        @include media-breakpoint-down(md) {
          height: 360px;
          border-radius: 7px;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
        }

        &-container {
          position: relative;
          width: var(--width);

          .tick {
            $spacing: 40px;
            $size: 24px;

            width: $size;
            height: $size;
            background-repeat: no-repeat !important;
            background-position: center !important;
            background-size: contain !important;
            border: none;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);

            @include transition;

            @include media-breakpoint-down(md) {
              display: none;
            }

            &:first-of-type {
              left: math.div($spacing, -1);
            }

            &:last-of-type {
              right: math.div($spacing, -1);
              transform: rotate(180deg);
            }

            &:hover {
              opacity: 0.7;
            }

            &:active {
              opacity: 0.5;
            }

            &[disabled] {
              opacity: 0.3 !important;
              cursor: initial;
            }
          }
        }
      }

      &-all {
        margin-top: 10px;
        display: flex;
        width: calc(var(--width) - 30px);
        overflow-x: auto;

        @include media-breakpoint-down(md) {
          $p: 30px;

          padding: $p;
          margin: -1 * $p 0;
          position: absolute;
          bottom: 35px;
          left: 15px;

          @include hide-scrollbar;
        }

        &-img {
          flex: 0 0 100px;
          height: 77px;
          object-fit: cover;
          border-radius: 7px;
          pointer-events: auto;
          cursor: pointer;

          @include transition;

          @include media-breakpoint-down(md) {
            $w: 70px;

            flex-basis: $w;
            width: $w;
            height: 75px;
            border: 4px solid $white;
            box-shadow: 0 0 32px rgba($text-main, 0.5);
            background: $white;
          }

          &:not(:last-child) {
            margin-right: 10px;
          }

          &:hover {
            opacity: 0.7;
          }

          &:active {
            opacity: 0.5;
          }

          &-current {
            opacity: 0.5 !important;
            cursor: initial;

            @include media-breakpoint-down(md) {
              opacity: 1 !important;
              border-color: rgba($yellow, 0.7);
            }
          }
        }
      }
    }
  }

  &-2 {
    padding-top: 86px;

    @include media-breakpoint-down(md) {
      $corner: 18px;

      background: $text-main;
      border-bottom-left-radius: $corner;
      border-bottom-right-radius: $corner;
      padding: 0 15px 40px;
      margin: 0 15px;
      position: relative;

      &::before {
        $h: 21px;

        content: '';
        height: $h;
        width: 100%;
        background: inherit;
        border-top-left-radius: $corner;
        border-top-right-radius: $corner;
        position: absolute;
        top: -1 * $h + 1px;
        left: 0;
      }
    }

    &-content {
      @include media-breakpoint-down(md) {
        max-width: 289px;
        margin: 0 auto;
      }
    }
  }
}

/*
.dot {
  $size: 15px;

  width: $size;
  height: $size;
  border: none;
  border-radius: 100%;
  background: rgba($lightgray, 30%);

  @include transition;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &-active {
    background: $yellow;
  }

  &s {
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
  }
}
*/

.text-mobile {
  display: none;

  h3 {
    max-width: 239px;
  }

  h4 {
    max-width: 236px;
    margin-bottom: 10px;
  }

  @include media-breakpoint-down(md) {
    display: initial;
  }
}

.heading,
.desc {
  @include media-breakpoint-down(md) {
    display: none;
  }
}

.heading {
  font-size: 52px;
  line-height: 78px;
  color: $yellow;

  @include font-bold;
}

.desc {
  color: $white;
  font-size: 27px;
  line-height: 40px;
  max-width: 380px;
  margin-bottom: 50px;

  @include font-medium;
}

.btn {
  height: 67px;
  font-size: 20px;
  line-height: 30px;
  user-select: none;
  border-radius: 11px;

  @include font-bold;

  @include media-breakpoint-down(md) {
    height: 51px;
    border-radius: 8px;
  }

  &-other {
    --width: 380px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    max-width: var(--width);

    @include media-breakpoint-down(md) {
      --width: 289px;

      gap: 11px;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      max-width: unset;
      font-size: 18px;
      line-height: 21px;
      color: $white;

      @include transition;

      @include media-breakpoint-down(md) {
        font-size: 14px;
        line-height: 17px;
      }
    }
  }

  &-ozone {
    $blue: #0069ff;
    $blue-dark: #0047ac;

    background: $blue;

    &:hover {
      background: $blue-dark;

      @include media-breakpoint-down(md) {
        background: rgba($blue, 0.5) !important;
      }
    }

    &:active {
      background: rgba($blue-dark, 0.6);
    }
  }

  &-wb {
    $purple: #981393;
    $purple-dark: #6f0e6b;

    background: $purple;

    &:hover {
      background: $purple-dark;

      @include media-breakpoint-down(md) {
        background: rgba($purple, 0.5) !important;
      }
    }

    &:active {
      background: rgba($purple-dark, 0.6);
    }
  }
}
</style>
