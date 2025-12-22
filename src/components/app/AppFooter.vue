<template>
  <div class="footer">
    <div class="footer-content">
      <div class="col-1">
        <a
          :href="publicPath"
        >
          МАРБЛС
        </a>
        <p>
          Новая настольная игра с амбицией переплюнуть Монополию,
          UNO, Экивоки, Имаджинариум
        </p>
      </div>

      <div class="col-2">
        <div
          v-for="(link, i) in links"
          :key="i"
        >
          <a
            :href="link.href"
          >
            {{ link.text }}
          </a>
        </div>
      </div>
    </div>

    <div
      class="line"
      :style="{ 'background-image': `url('${assetsPath}img/line.svg')` }"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Link {
  href: string
  text: string
}

export default defineComponent({
  setup () {
    const publicPath = process.env.BASE_URL

    const links: Link[] = [
      {
        href: '#',
        text: 'Правила игры'
      },
      {
        href: '#',
        text: 'Пользовательское соглашение'
      },
      {
        href: '#',
        text: 'Политика конфиденциальности'
      },
      {
        href: '#game',
        text: 'Заказать игру'
      }
    ]

    return {
      publicPath,
      assetsPath: process.env.VUE_APP_ASSETS,
      links
    }
  }
})
</script>

<style lang="scss" scoped>
.footer {
  position: relative;

  &-content {
    @include max-width;

    display: grid;
    grid-template-columns: auto 1fr;
    gap: 479px;
    padding: 0 0 89px 165px;

    @include media-breakpoint-down(md) {
      padding: 15px;
      gap: 20px;
      grid-template-columns: auto auto;
      max-width: 320px;
    }
  }
}

.line {
  width: 100%;
  height: 34px;
}

.col {
  &-1 {
    padding-top: 70px;

    @include media-breakpoint-down(md) {
      padding-top: 0;
    }

    a,
    p {
      color: $gray;
    }

    a {
      font-size: 50px;
      text-decoration: none;
      margin-bottom: 10px;
      user-select: none;

      @include font-bold;

      @include media-breakpoint-down(md) {
        font-size: 29px;
        line-height: 34px;
      }
    }

    p {
      max-width: 285px;

      @include media-breakpoint-down(md) {
        font-size: 8px;
        line-height: 12px;
      }
    }
  }

  &-2 {
    padding-top: 85px;

    @include media-breakpoint-down(md) {
      padding-top: 0;
    }

    div {
      @include media-breakpoint-down(md) {
        @include p2;
      }

      &:not(:last-child) {
        margin-bottom: 10px;

        @include media-breakpoint-down(md) {
          margin-bottom: 3px;
        }
      }
    }

    a {
      color: $text-main;
      text-decoration: none;

      &:hover {
        color: $yellow;

        @include media-breakpoint-down(md) {
          color: $yellow !important;
        }
      }

      &:active {
        color: rgba($yellow, 0.5);
      }
    }
  }
}
</style>
