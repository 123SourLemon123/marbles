<template>
  <div class="screen">
    <div class="benefits">
      <div class="heading">
        <img
          :src="`${assetsPath}img/dots.svg`"
          alt="точки"
          loading="lazy"
        >

        <div>
          <p class="heading-title">
            МАРБЛС
          </p>
          <p class="heading-subtitle">
            это
          </p>
        </div>
      </div>

      <div
        v-dragscroll.x="{ active: dragscrollActive }"
        class="benefits-cards"
      >
        <div
          v-for="(card, i) in benefits"
          :key="i"
          class="benefits-cards-card"
        >
          <img
            v-lazy="card.img"
            alt="фото"
          >
          <div class="benefits-cards-card-bg" />
          <p class="benefits-cards-card-num">
            {{ card.num }}
          </p>
          <p class="benefits-cards-card-text">
            {{ card.item }}
          </p>
        </div>
      </div>
    </div>

    <div
      ref="cards"
      v-dragscroll.x="{ active: dragscrollActive }"
      class="cards"
    >
      <img
        v-for="i in 20"
        :key="i"
        v-lazy="`${assetsPath}img/card-${i % 2 ? 'front' : 'back'}.svg`"
        alt="карта"
        loading="lazy"
      >
    </div>

    <div
      ref="cardsMobile"
      v-dragscroll.x="{ active: dragscrollActive }"
      class="cards cards-mobile"
    >
      <img
        v-for="i in 20"
        :key="i"
        v-lazy="`${assetsPath}img/card-${i % 2 ? 'front' : 'back'}.svg`"
        alt="карта"
        loading="lazy"
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted, computed } from 'vue'
import { breakpoints } from '../../const.json'

interface Benefit {
  img: string
  num: string
  item: string
}

export default defineComponent({
  setup () {
    const assetsPath = process.env.VUE_APP_ASSETS

    const benefits: Benefit[] = [
      {
        img: 'https://cdn.shopify.com/s/files/1/0252/6845/3410/products/spirit-quartz-xxl-consign.mov-low_2048x.gif',
        num: '108',
        item: 'карт'
      },
      {
        img: 'https://cdn.shopify.com/s/files/1/0252/6845/3410/products/Hnet-image_7_82a06331-8999-4f67-bcdc-d60074c92eb5_2048x.gif',
        num: '6',
        item: 'деревянных досок'
      },
      {
        img: 'https://cdn.shopify.com/s/files/1/0252/6845/3410/products/black-obsidian-sphere-xxl.mov-low_2048x.gif',
        num: '30',
        item: 'стеклянных марблов'
      },
      {
        img: 'https://cdn.shopify.com/s/files/1/0252/6845/3410/products/small-museum-fluorite-.mov-low_2048x.gif',
        num: '2-6',
        item: 'игроков'
      },
      {
        img: 'https://cdn.shopify.com/s/files/1/0252/6845/3410/products/onyx-sphere-xxl.mov-low_2048x.gif',
        num: '30-90',
        item: 'минут игрового времени'
      },
      {
        img: 'https://cdn.shopify.com/s/files/1/0252/6845/3410/products/Hnet-image_9_db151902-968d-4368-9365-d16be794914d_2048x.gif',
        num: '10*15',
        item: 'игровых комбинаций'
      },
      {
        img: 'https://cdn.shopify.com/s/files/1/0252/6845/3410/products/Hnet.com-image_16_400x.gif',
        num: 'от 6',
        item: 'лет'
      }
    ]

    const windowWidth = ref(window.innerWidth)
    function onResize (): void { windowWidth.value = window.innerWidth }

    const dragscrollActive = computed(() => windowWidth.value >= breakpoints.md)

    const cards = ref<HTMLDivElement>()
    const cardsMobile = ref<HTMLDivElement>()

    let oldScrollY = 0
    function onScroll (): void {
      if (!dragscrollActive.value) return

      const cardsEl = cards.value
      if (!cardsEl) return

      const { scrollY } = window
      const dir = oldScrollY > scrollY ? 1 : -1
      cardsEl.scrollLeft -= dir * 5
      oldScrollY = scrollY
    }

    onMounted(() => {
      window.addEventListener('scroll', onScroll)
      window.addEventListener('resize', onResize)

      const cardsEl = cards.value
      const cardsElMobile = cardsMobile.value
      if (!cardsEl || !cardsElMobile) return
      setTimeout(() => {
        cardsEl.scrollLeft = cardsEl.scrollWidth / 3
        cardsElMobile.scrollLeft = 2 * cardsElMobile.scrollWidth / 3
      }, 500)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    })

    return {
      assetsPath,
      benefits,
      cards,
      cardsMobile,
      dragscrollActive
    }
  }
})
</script>

<style lang="scss" scoped>
.screen {
  --p: 12%;

  position: relative;
  padding-bottom: 96px;
  background: $white;

  @include media-breakpoint-down(md) {
    --p: 15px;

    padding-bottom: 0;
  }
}

.benefits {
  padding-top: 100px;

  @include media-breakpoint-down(md) {
    padding-top: 40px;
  }

  &-cards {
    display: flex;
    margin-bottom: 117px;
    user-select: none;
    cursor: grab;
    padding: 0 calc(var(--p) / 3) 0 var(--p);

    @include hide-scrollbar;

    @include media-breakpoint-down(md) {
      margin-bottom: 40px;
      padding: 0 var(--p);
    }

    &-card {
      position: relative;
      width: 190px;
      height: 195px;
      flex-shrink: 0;
      border-radius: 10px;
      color: $white;
      padding: 104px 0 10px 10px;

      @include media-breakpoint-down(md) {
        width: 130px;
        height: 133px;
        padding: 66px 5px 5px 5px;
      }

      &:not(:last-child) {
        margin-right: 20px;

        @include media-breakpoint-down(md) {
          margin-right: 15px;
        }
      }

      p {
        position: relative;
      }

      img,
      &-bg {
        border-radius: inherit;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }

      img {
        object-fit: cover;
      }

      &-bg {
        background:
          linear-gradient(
            245.99deg,
            rgba($text-main, 0) 44.68%,
            rgba($text-main, 0.7) 79.16%
          );
      }

      &-num {
        font-size: 39px;
        line-height: 33px;

        @include font-bold;

        @include media-breakpoint-down(md) {
          font-size: 32px;
          line-height: 33px;
        }
      }

      &-text {
        @include media-breakpoint-down(md) {
          font-size: 13px;
          line-height: 14px;
        }
      }
    }
  }
}

.heading {
  display: flex;
  align-items: flex-end;
  margin-bottom: 89px;
  padding-left: var(--p);

  @include media-breakpoint-down(md) {
    margin-bottom: 50px;
  }

  &-title {
    font-size: 52px;
    line-height: 64px;
    user-select: none;

    @include font-bold;

    @include media-breakpoint-down(md) {
      font-size: 36px;
      line-height: 43px;
    }
  }

  &-subtitle {
    font-size: 27px;
    line-height: 24px;

    @include font-medium;

    @include media-breakpoint-down(md) {
      font-size: 22px;
      line-height: 0;
      font-weight: normal;
    }
  }

  img {
    margin-right: 41px;

    @include media-breakpoint-down(md) {
      width: 66px;
      height: 43px;
      margin: 0;
      position: absolute;
      right: 15px;
      top: 49px;
    }
  }
}

.cards {
  padding: 0 50px;
  display: flex;
  cursor: grab;

  @include hide-scrollbar;

  @include media-breakpoint-down(md) {
    padding: 40px 50px;
    padding-bottom: 0;
  }

  img {
    flex: 0 0 255px;
    height: 354px;
    object-fit: contain;

    @include media-breakpoint-down(md) {
      flex-basis: 145px;
      height: 208px;
    }
  }

  &-mobile {
    display: none;
    padding-top: 13px;
    padding-bottom: 40px;

    @include media-breakpoint-down(md) {
      display: flex;
    }
  }
}
</style>
