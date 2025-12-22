<template>
  <div
    class="buy"
    :class="{ 'buy-second': second }"
  >
    <div class="head">
      <p class="cost">
        {{ costTotal }} ₽
      </p>
      <p class="delivery">
        <span class="delivery-highlight">Бесплатная доставка</span>
        <br>
        до пункта выдачи СДЭК или Боксберри
      </p>
    </div>

    <div class="btn btn-quantity">
      <div class="btn-quantity-quantity">
        {{ quantity }} {{ quantityStr }}
      </div>
      <div class="btn-quantity-actions">
        <button @click="changeQuantity(+1)">
          +
        </button>
        <button @click="changeQuantity(-1)">
          -
        </button>
      </div>
    </div>

    <button
      class="btn btn-buy"
      @click="buy"
    >
      КУПИТЬ
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  props: {
    second: {
      type: Boolean,
      default: false
    }
  },

  setup () {
    const quantity = ref(1)
    const quantityStr = computed(() => {
      const q = quantity.value
      const qStr = String(q)
      const last = Number(qStr[qStr.length - 1])

      let end = ''
      if (last === 1) end = 'а'
      if (last > 1) end = 'ы'
      if (last > 4) end = ''
      if (q > 10 && q < 20) end = ''

      return `игр${end}`
    })

    const costPerItem = 3900
    const costTotal = computed(() =>
      (costPerItem * quantity.value).toLocaleString('ru'))

    function changeQuantity (inc: 1 | -1): void {
      const newQuantity = quantity.value + inc
      quantity.value = newQuantity < 1 ? 1 : newQuantity
    }

    function buy (): void {
      // alert(quantity.value)
    }

    return {
      quantity,
      quantityStr,
      costTotal,
      changeQuantity,
      buy
    }
  }
})
</script>

<style lang="scss" scoped>
.buy {
  color: $white;

  &-second {
    @include media-breakpoint-down(md) {
      .head {
        display: block;
        padding-left: 50%;

        .cost {
          padding: 0;
        }

        .delivery {
          margin-bottom: 20px;
        }
      }
    }
  }
}

.head {
  @include media-breakpoint-down(md) {
    display: flex;
    justify-content: space-between;
  }
}

.cost {
  font-size: 60px;
  line-height: 90px;

  @include font-bold;

  @include media-breakpoint-down(md) {
    font-size: 27px;
    line-height: 33px;
    white-space: nowrap;
    padding-right: 15px;
  }
}

.delivery {
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 50px;

  @include media-breakpoint-down(md) {
    font-size: 12px;
    line-height: 19px;
    flex: 0 1 150px;
    margin-bottom: 10px;
  }

  &-highlight {
    color: $yellow;

    @include font-bold;
  }
}

.btn {
  --spacing: 20px;
  --corner: 11px;
  --width: 380px;

  height: 67px;
  max-width: var(--width);
  font-size: 20px;
  line-height: 30px;
  user-select: none;
  border-radius: var(--corner);

  @include font-bold;

  @include media-breakpoint-down(md) {
    --corner: 8px;
    --spacing: 10px;
    --width: 289px;

    height: 51px;
    font-size: 16px;
    line-height: 19px;
  }

  &-quantity {
    $border: 1px solid #777;

    display: flex;
    justify-content: space-between;
    border: $border;
    background: rgba($text-main, 0.04);
    backdrop-filter: blur(20px);
    margin-bottom: var(--spacing);

    &-quantity {
      display: flex;
      flex-grow: 1;
      align-items: center;
      justify-content: center;
    }

    &-actions {
      border-left: $border;
      width: 61px;

      button {
        display: block;
        text-align: center;
        width: 100%;
        height: 50%;
        border: none;
        background: transparent;
        color: inherit;

        @include transition;

        &:hover {
          background: $yellow;

          @include media-breakpoint-down(md) {
            background: $yellow !important;
          }
        }

        &:active {
          background: $yellow-dark;
        }

        &:first-child {
          border-bottom: $border;
          border-top-right-radius: var(--corner);
        }

        &:last-child {
          border-bottom-right-radius: var(--corner);
        }
      }
    }
  }

  &-buy {
    width: 100%;
    margin-bottom: var(--spacing);

    @include yellow-btn;

    @include media-breakpoint-down(md) {
      &:hover {
        background: rgba($yellow, 0.7);
      }
    }
  }
}
</style>
