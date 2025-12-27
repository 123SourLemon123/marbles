# Инструкция по деплою МАРБЛС в Tilda

## Порядок блоков в Tilda (T123 - HTML код)

### БЛОК 1: CDN Скрипты
```html
<!-- Vue 3 и плагины из CDN -->
<script src="https://unpkg.com/vue@3.4.21/dist/vue.global.prod.js"></script>
<script src="https://unpkg.com/vue3-lazyload@1.0.0-beta.10/dist/vue3-lazyload.umd.js"></script>
<script src="https://unpkg.com/vue-dragscroll@3.0.0-beta.1/dist/vue-dragscroll.umd.js"></script>
```

---

### БЛОК 2: CSS Стили
```html
<style>
/* Скопируйте содержимое файла: dist/css/app.1e042db0.css */
</style>
```

**Файл:** `dist/css/app.1e042db0.css` (32 KB)

---

### БЛОК 3: Контейнер Vue
```html
<div id="app"></div>
```

---

### БЛОК 4: Конфигурация (опционально)
```html
<script>
window.MARBLES_CONFIG = {
  price: 3900,
  assetsPath: 'https://banq-finance.ru/marbls/'
}
</script>
```

**Примечание:** Этот блок нужен только если вы хотите изменить цену или путь к ресурсам БЕЗ пересборки проекта.

---

### БЛОК 5: JavaScript приложения
```html
<script>
/* Скопируйте содержимое файла: dist/js/app.a6da6083.js */
</script>
```

**Файл:** `dist/js/app.a6da6083.js` (67 KB)

---

## Как скопировать файлы

### В терминале:
```bash
# CSS
cat dist/css/app.1e042db0.css

# JavaScript
cat dist/js/app.a6da6083.js
```

### Или откройте файлы в редакторе:
- `dist/css/app.1e042db0.css`
- `dist/js/app.a6da6083.js`

И скопируйте их содержимое целиком (Ctrl+A, Ctrl+C).

---

## Проверка

После вставки всех блоков:
1. Опубликуйте страницу в Tilda
2. Откройте в браузере
3. Откройте консоль (F12)
4. Не должно быть ошибок типа "Vue is not defined"

---

## Важно

- **Порядок блоков критичен** - CDN должны быть первыми
- Все картинки должны быть по адресу `https://banq-finance.ru/marbls/img/` (или измените в BLOCK 4)
- Размер: CSS 32KB + JS 67KB = ~99KB (помещается в Tilda)
