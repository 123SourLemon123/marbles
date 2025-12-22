<template>
  <div
    class="header"
    :class="{ 'header-black': scrolled, 'header-scrolled': scrolled,
              'header-scrolled-show': scrolledShow }"
  >
    <div class="header-content">
      <a
        class="header-logo"
        :href="publicPath"
      >
        МАРБЛС
      </a>

      <div>
        <a
          class="a"
          href="#questions"
        >
          Задать вопрос
        </a>

        <a
          class="btn"
          href="#game"
        >ЗАКАЗАТЬ</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed, onMounted, onUnmounted, defineComponent } from 'vue'
import { breakpoints } from '../../const.json'

export default defineComponent({
  setup () {
    const scrolled = ref(false)
    const scrolledShow = ref(false)

    const windowWidth = ref(window.innerWidth)
    const breakpoint = computed(() => windowWidth.value < breakpoints.md ? 300 : 600)

    function onScroll (): void {
      const isScrolled = window.scrollY > breakpoint.value
      scrolled.value = isScrolled
      setTimeout(() => { scrolledShow.value = isScrolled }, 10)
    }

    function onResize (): void { windowWidth.value = window.innerWidth }

    onMounted(() => {
      window.addEventListener('scroll', onScroll)
      window.addEventListener('resize', onResize)
    })
    onUnmounted(() => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    })

    return {
      publicPath: process.env.BASE_URL,
      scrolled,
      scrolledShow
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  top: 0;
  width: 100%;
  background:
    linear-gradient(
      180deg,
      rgba($text-main, 0.5) 29.51%,
      rgba($text-main, 0) 100%
    );
  color: #fff;
  z-index: 2;

  &-scrolled {
    position: fixed;
    top: -80px;

    &-show {
      top: 0;

      @include transition;
    }
  }

  &-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 165px;

    @include max-width;

    @include media-breakpoint-down(md) {
      padding: 14px 15px;
    }
  }

  &-black {
    background: $text-main;
  }

  &-white {
    background: #fff;
    color: $text-main;
  }

  &-logo {
    user-select: none;
    color: inherit;
    font-weight: bold;
    font-size: 31px;
    line-height: 37px;
    text-decoration: none;

    @include media-breakpoint-down(md) {
      font-size: 22px;
      line-height: 26px;
    }
  }

  .a {
    @include media-breakpoint-down(md) {
      @include p2;
    }
  }
}

.btn {
  user-select: none;
  color: $text-main;
  text-decoration: none;
  padding: 10px 11px;
  line-height: 18.96px;
  border-radius: 6px;
  margin-left: 40px;

  @include yellow-btn;

  @include media-breakpoint-down(md) {
    padding: 6px 12px;
    font-size: 12px;
    line-height: 14px;
    margin-left: 6px;
  }
}
</style>
