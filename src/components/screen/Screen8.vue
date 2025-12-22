<template>
  <div
    id="questions"
    class="screen"
  >
    <div class="circles">
      <div
        v-for="i in 3"
        :key="i"
        class="circle"
      />
    </div>

    <div class="screen-content">
      <h3>У вас есть вопросы по игре или правилам?</h3>
      <h4>
        Задавайте их нам!
      </h4>

      <div class="bottom">
        <div>
          <app-external-link
            class="tg"
            :href="`https://t.me/${tg}`"
          >
            <img
              :src="`${assetsPath}img/telegram.svg`"
              alt="telegram"
              loading="lazy"
            >
            <span>@{{ tg }}</span>
          </app-external-link>

          <a
            class="email"
            :href="`mailto:${email}`"
          >
            <img
              :src="`${assetsPath}img/email.svg`"
              alt="email"
              loading="lazy"
            >
            <span>{{ email }}</span>
          </a>
        </div>

        <div>
          <p>г. Москва, ул. Мясницкая 13с18, здание с вывеской ФРИИ, Марблс</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppExternalLink from '../app/AppExternalLink.vue'

export default defineComponent({
  components: { AppExternalLink },

  setup () {
    return {
      assetsPath: process.env.VUE_APP_ASSETS,
      tg: 'nikolayr',
      email: 'help@marbls.ru'
    }
  }
})
</script>

<style lang="scss" scoped>
.screen {
  position: relative;
  overflow-x: hidden;

  &-content {
    @include max-width;

    padding: 100px 0 94px 165px;

    @include media-breakpoint-down(md) {
      position: relative;
      padding: 40px 15px;
      max-width: 320px;
    }
  }

  h3 {
    margin-bottom: 10px;

    @include media-breakpoint-down(md) {
      margin: 0;
    }
  }

  h4 {
    margin-bottom: 40px;

    @include media-breakpoint-down(md) {
      margin-bottom: 20px;
    }
  }
}

.circle {
  $size: 31px;

  width: $size;
  height: $size;
  border-radius: 100%;
  border: 1.5px solid #cdcdcd;

  &:not(:last-child) {
    margin-bottom: 5px;
  }

  &s {
    display: none;
    flex-direction: column;
    position: absolute;
    right: -10px;
    top: 68px;

    @include media-breakpoint-down(md) {
      display: inline-flex;
    }
  }
}

.bottom {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 159px;

  @include media-breakpoint-down(md) {
    display: block;
  }

  p {
    max-width: 380px;
    color: $text-gray;

    @include media-breakpoint-down(md) {
      margin-top: 20px;
    }
  }
}

a {
  border: 1px solid;
  border-radius: 26px;
  border-color: var(--color);
  color: var(--color);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  padding: 10px 12px;
  font-size: 20px;
  line-height: 30px;
  user-select: none;

  @include transition;

  @include media-breakpoint-down(md) {
    padding: 7px 8px;
    font-size: 13px;
    line-height: 19px;
  }

  &:hover {
    color: $white;
    background: var(--color);

    @include media-breakpoint-down(md) {
      background: var(--color) !important;
    }
  }

  &:active {
    background: var(--color-dark);
  }

  &:not(:last-child) {
    margin-right: 40px;

    @include media-breakpoint-down(md) {
      margin-right: 15px;
    }
  }

  img {
    margin-right: 9px;

    @include media-breakpoint-down(md) {
      $size: 24px;

      width: $size;
      height: $size;
      margin-right: 7px;
    }
  }

  &.tg {
    --color: #40b3e0;
    --color-dark: #3497be;
  }

  &.email {
    --color: #840707;
    --color-dark: #600101;
  }
}
</style>
