<template>
  <div class="screen">
    <img
      v-for="i in 2"
      :key="i"
      class="shape"
      :class="`shape-${i + 2}`"
      :src="`${assetsPath}img/shape-${i + 2}.svg`"
      :alt="`фигура ${i + 2}`"
    >
    <img
      :src="`${assetsPath}img/shape-5.svg`"
      alt="фигура 5"
      class="shape shape-5"
    >

    <div class="cols">
      <div class="col col-1">
        <img
          :src="`${assetsPath}img/laurel.png`"
          alt="лавры"
          loading="lazy"
        >

        <h3>Международное признание</h3>

        <div class="reviews-1">
          <div
            v-for="(review, i) in reviews1"
            :key="i"
            class="review-1"
          >
            <img
              :src="review.img"
              alt="аватар"
              loading="lazy"
            >
            <p>{{ review.text }}</p>
          </div>
        </div>
      </div>

      <div class="col col-2">
        <img
          class="quote"
          :src="`${assetsPath}img/quote.svg`"
          alt="кавычки"
          loading="lazy"
        >

        <h3>Отзывы игроков</h3>

        <div
          v-dragscroll.x="{ active: dragscrollActive }"
          class="reviews-2"
        >
          <div
            v-for="(review, i) in reviews2"
            :key="i"
            class="review-2"
          >
            <img
              class="review-2-cover"
              :src="review.img"
              alt="фото"
              loading="lazy"
            >

            <div class="review-2-meta">
              <div class="review-2-stars">
                <img
                  v-for="j in review.rate"
                  :key="j"
                  :src="`${assetsPath}img/star.svg`"
                  alt="звезда"
                  loading="lazy"
                >
              </div>

              <p class="p2 review-2-author">
                {{ review.author }}
              </p>
              <p class="p1">
                {{ review.text }}
              </p>
            </div>
          </div>
        </div>

        <img
          class="part"
          :src="`${assetsPath}img/part-1-yellow.svg`"
          alt="часть 1"
          loading="lazy"
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, onUnmounted, ref } from 'vue'
import { breakpoints } from '../../const.json'

interface Review1 {
  img: string
  text: string
}

interface Review2 {
  img: string
  rate: 1 | 2 | 3 | 4 | 5
  author: string
  text: string
}

export default defineComponent({
  setup () {
    const assetsPath = process.env.VUE_APP_ASSETS

    const reviews1: Review1[] = [
      {
        img: `${assetsPath}img/photo.jpeg`,
        text: 'Кажется эта игра встанет рядом с Монополией и Шахматами'
      },
      {
        img: `${assetsPath}img/photo.jpeg`,
        text: 'Однозначно лучшая игра и геймплей 2020'
      }
    ]

    const reviews2: Review2[] = [
      {
        img: `${assetsPath}img/photo.jpeg`,
        rate: 5,
        author: 'Лина, г. Кастрома',
        text: `Ребята, игра ФАНТАСТИКА играем с друзьями уютными
вечерами, когда собираемся вместе`
      },
      {
        img: `${assetsPath}img/photo.jpeg`,
        rate: 5,
        author: 'Владимир, г. Москва',
        text: 'Доставили за 2 дня. Вся компания довольна. Любим настолки'
      },
      {
        img: `${assetsPath}img/photo.jpeg`,
        rate: 5,
        author: 'Владимир, г. Москва',
        text: 'Доставили за 2 дня. Вся компания довольна. Любим настолки'
      },
      {
        img: `${assetsPath}img/photo.jpeg`,
        rate: 5,
        author: 'Владимир, г. Москва',
        text: 'Доставили за 2 дня. Вся компания довольна. Любим настолки'
      },
      {
        img: `${assetsPath}img/photo.jpeg`,
        rate: 5,
        author: 'Владимир, г. Москва',
        text: 'Доставили за 2 дня. Вся компания довольна. Любим настолки'
      },
      {
        img: `${assetsPath}img/photo.jpeg`,
        rate: 5,
        author: 'Владимир, г. Москва',
        text: 'Доставили за 2 дня. Вся компания довольна. Любим настолки'
      }
    ]

    const windowWidth = ref(window.innerWidth)
    const dragscrollActive = computed(() => windowWidth.value >= breakpoints.md)

    function onResize (): void { windowWidth.value = window.innerWidth }
    onMounted(() => {
      window.addEventListener('resize', onResize)
    })
    onUnmounted(() => {
      window.removeEventListener('resize', onResize)
    })

    return {
      assetsPath,
      reviews1,
      reviews2,
      dragscrollActive
    }
  }
})
</script>

<style lang="scss" scoped>
.screen {
  position: relative;
  padding-bottom: 220px;
  overflow-x: clip;

  @include media-breakpoint-down(md) {
    padding-bottom: 30px;
  }
}

.shape {
  position: absolute;
  width: 100%;
  z-index: -1;
  object-fit: cover;
  object-position: top;

  &-3 {
    display: none;
  }

  &-4 {
    @include media-breakpoint-down(md) {
      height: 400px;
    }
  }

  &-5 {
    display: none;
    bottom: 0;
    height: 454px;

    @include media-breakpoint-down(md) {
      display: initial;
    }
  }
}

.col {
  display: flex;
  flex-direction: column;
  align-items: center;

  &s {
    display: grid;
    grid-template-columns: 1fr 1fr;

    @include media-breakpoint-down(md) {
      display: block;
    }
  }

  &-1 {
    padding-top: 281px;

    @include media-breakpoint-down(md) {
      padding-top: 46px;

      img {
        $size: 60px;

        width: $size;
        height: $size;
      }
    }

    h3 {
      max-width: 510px;
      text-align: center;
      margin-bottom: 90px;

      @include media-breakpoint-down(md) {
        max-width: 231px;
        margin-bottom: 30px;
      }
    }
  }

  &-2 {
    padding-top: 92px;

    @include media-breakpoint-down(md) {
      padding-top: 60px;
    }

    h3 {
      margin-bottom: 94px;

      @include media-breakpoint-down(md) {
        margin-bottom: 40px;
      }
    }
  }
}

.review {
  &-1 {
    flex: 0 0 214px;

    @include media-breakpoint-down(md) {
      flex: 0 0 115px;
    }

    &:not(:last-child) {
      margin-right: 75px;

      @include media-breakpoint-down(md) {
        margin-right: 31px;
      }
    }

    img {
      --size: 80px;

      width: var(--size);
      height: var(--size);
      object-fit: cover;
      border-radius: 100%;
      margin-bottom: 20px;

      @include media-breakpoint-down(md) {
        --size: 40px;

        margin-bottom: 8px;
      }
    }
  }

  &-2 {
    $corner: 6px;

    flex: 0 0 260px;
    background: $white;
    box-shadow: 0 0 17px rgba(176, 176, 176, 0.2);
    border-radius: $corner;
    user-select: none;
    margin-right: 20px;

    &:last-child {
      @include media-breakpoint-down(md) {
        margin-right: 25px;
      }
    }

    @include media-breakpoint-down(md) {
      flex: 0 0 140px;
    }

    &-cover {
      border-top-left-radius: $corner;
      border-top-right-radius: $corner;
      width: 100%;
      height: 123px;
      object-fit: cover;

      @include media-breakpoint-down(md) {
        height: 66px;
      }
    }

    &-meta {
      padding: 10px;

      @include media-breakpoint-down(md) {
        padding: 5px;
      }
    }

    &-stars {
      display: flex;

      img {
        --size: 20px;

        width: var(--size);
        height: var(--size);

        @include media-breakpoint-down(md) {
          --size: 13px;
        }

        &:not(:last-child) {
          margin-right: 2px;
        }
      }
    }

    &-author {
      color: $lightgray;
      margin: 4px 0 2px 0;
    }
  }

  &s {
    &-1,
    &-2 {
      display: flex;
    }

    &-1 {
      justify-content: center;

      @include media-breakpoint-down(md) {
        padding: 0 35px;
      }
    }

    &-2 {
      align-items: flex-start;
      max-width: 100%;
      cursor: grab;

      @include hide-scrollbar;

      @include media-breakpoint-down(md) {
        padding-left: 25px;
      }
    }
  }
}

.quote {
  filter: drop-shadow(0 23px 17px rgba($yellow, 0.22));
  margin-bottom: 32px;

  @include media-breakpoint-down(md) {
    width: 46px;
    margin-bottom: 18px;
  }
}

.part {
  right: -50px;
  bottom: 160px;

  @include part;

  @include media-breakpoint-down(md) {
    display: none;
  }
}
</style>
