<template>
  <div class="screen">
    <div class="screen-content">
      <div class="col-1">
        <form
          :style="`--bg: url('${assetsPath}img/noise.gif')`"
          @submit.prevent="onSubmit"
        >
          <div class="form-content">
            <h4>
              Скоро мы запустим игру в онлайне, чтобы вы смогли играть
              и доигрывать начатые в оффлайне партии
            </h4>

            <p class="subtext">
              Подпишитесь, чтобы узнать об этом:
            </p>

            <app-input
              v-model="email"
              placeholder="Ваш Email"
              type="email"
              required
            />

            <button type="submit">
              Подписаться
            </button>
          </div>
        </form>
      </div>

      <div class="col-2">
        <div class="col-2-content">
          <div class="cost">
            <img
              :src="`${assetsPath}img/gift.svg`"
              alt="подарок"
              loading="lazy"
            >
            <p>750 ₽ + 750 ₽</p>
          </div>

          <h3>Зовите друзей!</h3>
          <p class="desc">
            После покупки вашими друзьями игры МАРБЛС мы вернем им 750 рублей.
            Но и вы тоже получите 750 рублей удобным для вас способом
          </p>

          <p class="how">
            КАК ПОЛУЧИТЬ?
          </p>

          <ol>
            <li
              v-for="(step, i) in steps"
              :key="i"
            >
              {{ step }}
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import AppInput from '../app/AppInput.vue'

export default defineComponent({
  components: { AppInput },

  setup () {
    const assetsPath = process.env.VUE_APP_ASSETS
    const email = ref('')

    function onSubmit (): void {
      // alert(email.value)
    }

    const steps = [
      'Купить игру МАРБЛС',
      'Порекомендовать игру друзьям',
      'Друг должен назвать ваш номер телефона, после оформления заказа',
      'Получить по 750 рублей'
    ]

    return {
      assetsPath,
      email,
      steps,

      onSubmit
    }
  }
})
</script>

<style lang="scss" scoped>
$bg: linear-gradient(149.32deg, $yellow 31.34%, #fada08 87.62%);
$form-mobile-corner: 17px;

.screen {
  background: $bg;

  @include media-breakpoint-down(md) {
    background: none;
  }

  &-content {
    @include max-width;

    padding: 0 0 137px 117px;
    display: grid;
    grid-template-columns: 484px auto;
    gap: 148px;

    @include media-breakpoint-down(md) {
      display: block;
      padding: 0;
    }
  }
}

.col {
  &-1 {
    padding-top: 189px;

    @include media-breakpoint-down(md) {
      padding-top: 0;
    }
  }

  &-2 {
    padding-top: 105px;

    @include media-breakpoint-down(md) {
      background: $bg;
      padding: 40px 15px 64px;
      position: relative;

      &-content {
        margin: 0 auto;
        max-width: 290px;
      }

      &::before {
        content: '';
        background: $yellow;
        width: 100%;
        height: $form-mobile-corner;
        position: absolute;
        top: -1 * $form-mobile-corner;
        left: 0;
      }
    }

    .cost {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 60px;

      @include media-breakpoint-down(md) {
        display: flex;
        margin-bottom: 30px;
      }

      img {
        --size: 82px;

        width: var(--size);
        height: var(--size);

        @include media-breakpoint-down(md) {
          --size: 44px;
        }
      }

      p {
        font-size: 60px;
        line-height: 71px;
        margin-top: 32px;

        @include font-bold;

        @include media-breakpoint-down(md) {
          font-size: 36px;
          line-height: 43px;
          margin-top: 11px;
        }
      }
    }

    .desc {
      max-width: 500px;
      margin-top: 10px;

      @include media-breakpoint-down(md) {
        margin-top: 0;
      }
    }

    .how {
      margin: 30px 0;
      letter-spacing: 0.11em;

      @include media-breakpoint-down(md) {
        margin: 20px 0;
      }
    }

    ol {
      margin: 0;
      padding: 0;
      list-style: none;
      counter-reset: li;

      li {
        counter-increment: li;
        max-width: 444px;
        position: relative;
        padding-left: 30px;

        &:not(:last-child) {
          margin-bottom: 12px;
        }

        &::before {
          $size: 22px;

          content: counter(li);
          position: absolute;
          left: 0;
          background: $white;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: $size;
          height: $size;
          border-radius: 100%;
          margin-right: 8px;
        }
      }
    }
  }
}

form {
  border-radius: 35px;
  padding: 82px 33px 80px 43px;
  position: relative;
  z-index: 1;

  @include media-breakpoint-down(md) {
    border-radius: $form-mobile-corner;
    padding: 40px 15px;

    .form-content {
      margin: 0 auto;
      max-width: 290px;
    }
  }

  &::before,
  &::after {
    border-radius: inherit;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &::before {
    z-index: -1;
    background: rgba(#fff, 0.3);

    @include media-breakpoint-down(md) {
      background: rgba(#fff, 0.5);
    }
  }

  &::after {
    background: var(--bg);
    z-index: -2;
    filter: drop-shadow(0 12px 47px rgba(#000, 0.13));
  }

  h4 {
    margin-bottom: 10px;
    max-width: 407px;
  }

  .subtext {
    margin-bottom: 32px;

    @include media-breakpoint-down(md) {
      margin-bottom: 10px;
    }
  }

  button {
    $blue-dark: #003a75;

    margin-top: 10px;
    height: 75px;
    width: 349px;
    padding: 20px 120px;
    background: $blue;
    border: none;
    color: $white;
    border-radius: 11px;

    @include font-bold;
    @include transition;

    @include media-breakpoint-down(md) {
      width: 290px;
      height: 51px;
      padding: 16px 90px;
    }

    &:hover {
      box-shadow: 0 3px 26px rgba($blue, 0.33);

      @include media-breakpoint-down(md) {
        box-shadow: none;
        background: $blue-dark !important;
      }
    }

    &:active {
      background: $blue-dark;
    }
  }
}
</style>
