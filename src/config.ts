// Конфигурация приложения МАРБЛС
// Позволяет легко менять цену, пути к ресурсам и медиа-файлы

interface MediaPaths {
  // === HERO SECTION (верхний экран с видео) ===
  heroVideoPoster: string // Постер видео (показывается до загрузки)
  heroVideoMp4: string // Главное видео (формат MP4)
  heroVideoWebm: string // Главное видео (формат WEBM)

  // === SCREEN 1: Заголовок "МАРБЛС" ===
  heroDecorationPart1Desktop: string // Декоративная часть 1 (desktop)
  heroDecorationPart1Mobile: string // Декоративная часть 1 (mobile)
  heroDecorationPart2: string // Декоративная часть 2
  heroCardsImage: string // Изображение карточек

  // === SCREEN 2: Возможности игры (3 карточки) ===
  featuresUsersIcon: string // Иконка пользователей
  featuresDecorationShape1: string // Декоративная фигура 1
  featuresDecorationShape2: string // Декоративная фигура 2
  featureCard1Image: string // Изображение для карточки "1 трлн исходов"
  featureCard2Image: string // Изображение для карточки "Тактильные ощущения"
  featureCard3Image: string // Изображение для карточки "Команды и пары"

  // === SCREEN 3: Отзывы и признание ===
  reviewsBackgroundShape3: string // Фоновая фигура 3
  reviewsBackgroundShape4: string // Фоновая фигура 4
  reviewsBackgroundShape5: string // Фоновая фигура 5
  reviewsLaurelIcon: string // Иконка лаврового венка
  reviewsQuoteIcon: string // Иконка кавычек
  reviewsStarIcon: string // Иконка звезды (для рейтинга)
  reviewsDecorationPart: string // Декоративная часть (желтая)
  internationalReview1Photo: string // Фото международного отзыва 1
  internationalReview2Photo: string // Фото международного отзыва 2
  customerReview1Photo: string // Фото отзыва клиента 1
  customerReview2Photo: string // Фото отзыва клиента 2
  customerReview3Photo: string // Фото отзыва клиента 3
  customerReview4Photo: string // Фото отзыва клиента 4
  customerReview5Photo: string // Фото отзыва клиента 5
  customerReview6Photo: string // Фото отзыва клиента 6

  // === SCREEN 4: Галерея продукта ===
  galleryNavigationArrow: string // Стрелки навигации (левая/правая)
  galleryMainPhoto: string // Главное фото в галерее

  // === SCREEN 5: Преимущества (7 блоков) ===
  benefitsDecorativeDots: string // Декоративные точки
  benefitsCardFront: string // Лицевая сторона карты
  benefitsCardBack: string // Обратная сторона карты
  benefit1Image: string // Изображение "108 карт"
  benefit2Image: string // Изображение "6 деревянных досок"
  benefit3Image: string // Изображение "30 стеклянных марблов"
  benefit4Image: string // Изображение "2-6 игроков"
  benefit5Image: string // Изображение "30-90 минут"
  benefit6Image: string // Изображение "10*15 комбинаций"
  benefit7Image: string // Изображение "от 6 лет"

  // === SCREEN 6: Подписка на email + Реферальная программа ===
  signupBackgroundNoise: string // Фоновый шум для формы подписки
  referralGiftIcon: string // Иконка подарка (реферальная программа)

  // === SCREEN 7: Вторая секция покупки ===
  buyBackgroundPattern: string // Фоновый паттерн
  buyProductBox: string // Изображение коробки продукта
  buyProductCards: string // Изображение карт продукта

  // === SCREEN 8: Контакты ===
  contactTelegramIcon: string // Иконка Telegram
  contactEmailIcon: string // Иконка Email

  // === FOOTER: Подвал сайта ===
  footerDecorativeLine: string // Декоративная линия в футере
}

interface MarblesConfig {
  price: number
  assetsPath: string
  referralBonus: number
  media: MediaPaths
}

declare global {
  interface Window {
    MARBLES_CONFIG?: Partial<MarblesConfig> & {
      media?: Partial<MediaPaths>
    }
  }
}

// Базовый путь к ассетам
const baseAssetsPath = (typeof window !== 'undefined' && window.MARBLES_CONFIG?.assetsPath) ||
  process.env.VUE_APP_ASSETS ||
  'https://banq-finance.ru/marbls/'

// Вспомогательная функция для построения пути
const getMediaPath = (filename: string): string => `${baseAssetsPath}img/${filename}`

// Дефолтные пути к медиа
const defaultMedia: MediaPaths = {
  // === HERO SECTION ===
  heroVideoPoster: getMediaPath('photo.jpeg'),
  heroVideoMp4: 'https://cdn.shopify.com/s/files/1/0312/2737/9849/files/HomeHero_20210120.mp4',
  heroVideoWebm: 'https://cdn.shopify.com/s/files/1/0312/2737/9849/files/HomeHero_20210120.webm',

  // === SCREEN 1: Заголовок ===
  heroDecorationPart1Desktop: getMediaPath('part-1.svg'),
  heroDecorationPart1Mobile: getMediaPath('part-1.svg'),
  heroDecorationPart2: getMediaPath('part-2.svg'),
  heroCardsImage: getMediaPath('cards.png'),

  // === SCREEN 2: Возможности ===
  featuresUsersIcon: getMediaPath('users.svg'),
  featuresDecorationShape1: getMediaPath('shape-1.svg'),
  featuresDecorationShape2: getMediaPath('shape-2.svg'),
  featureCard1Image: 'https://cdn.shopify.com/s/files/1/0252/6845/3410/products/amethyst-shere-xxl.mov-low_2048x.gif',
  featureCard2Image: 'https://cdn.shopify.com/s/files/1/0252/6845/3410/products/black-obsidian-sphere-xxl.mov-low_2048x.gif',
  featureCard3Image: 'https://cdn.shopify.com/s/files/1/0252/6845/3410/products/Hnet-image_4_68320e8f-bf73-4701-a0a0-1fefb87a45d0_2048x.gif',

  // === SCREEN 3: Отзывы ===
  reviewsBackgroundShape3: getMediaPath('shape-3.svg'),
  reviewsBackgroundShape4: getMediaPath('shape-4.svg'),
  reviewsBackgroundShape5: getMediaPath('shape-5.svg'),
  reviewsLaurelIcon: getMediaPath('laurel.png'),
  reviewsQuoteIcon: getMediaPath('quote.svg'),
  reviewsStarIcon: getMediaPath('star.svg'),
  reviewsDecorationPart: getMediaPath('part-1-yellow.svg'),
  internationalReview1Photo: getMediaPath('photo.jpeg'),
  internationalReview2Photo: getMediaPath('photo.jpeg'),
  customerReview1Photo: getMediaPath('photo.jpeg'),
  customerReview2Photo: getMediaPath('photo.jpeg'),
  customerReview3Photo: getMediaPath('photo.jpeg'),
  customerReview4Photo: getMediaPath('photo.jpeg'),
  customerReview5Photo: getMediaPath('photo.jpeg'),
  customerReview6Photo: getMediaPath('photo.jpeg'),

  // === SCREEN 4: Галерея ===
  galleryNavigationArrow: getMediaPath('tick.svg'),
  galleryMainPhoto: getMediaPath('photo.jpeg'),

  // === SCREEN 5: Преимущества ===
  benefitsDecorativeDots: getMediaPath('dots.svg'),
  benefitsCardFront: getMediaPath('card-front.svg'),
  benefitsCardBack: getMediaPath('card-back.svg'),
  benefit1Image: 'https://cdn.shopify.com/s/files/1/0252/6845/3410/products/spirit-quartz-xxl-consign.mov-low_2048x.gif',
  benefit2Image: 'https://cdn.shopify.com/s/files/1/0252/6845/3410/products/Hnet-image_7_82a06331-8999-4f67-bcdc-d60074c92eb5_2048x.gif',
  benefit3Image: 'https://cdn.shopify.com/s/files/1/0252/6845/3410/products/black-obsidian-sphere-xxl.mov-low_2048x.gif',
  benefit4Image: 'https://cdn.shopify.com/s/files/1/0252/6845/3410/products/small-museum-fluorite-.mov-low_2048x.gif',
  benefit5Image: 'https://cdn.shopify.com/s/files/1/0252/6845/3410/products/onyx-sphere-xxl.mov-low_2048x.gif',
  benefit6Image: 'https://cdn.shopify.com/s/files/1/0252/6845/3410/products/Hnet-image_9_db151902-968d-4368-9365-d16be794914d_2048x.gif',
  benefit7Image: 'https://cdn.shopify.com/s/files/1/0252/6845/3410/products/Hnet.com-image_16_400x.gif',

  // === SCREEN 6: Подписка ===
  signupBackgroundNoise: getMediaPath('noise.gif'),
  referralGiftIcon: getMediaPath('gift.svg'),

  // === SCREEN 7: Вторая покупка ===
  buyBackgroundPattern: getMediaPath('pattern.svg'),
  buyProductBox: getMediaPath('box.svg'),
  buyProductCards: getMediaPath('cards.svg'),

  // === SCREEN 8: Контакты ===
  contactTelegramIcon: getMediaPath('telegram.svg'),
  contactEmailIcon: getMediaPath('email.svg'),

  // === FOOTER ===
  footerDecorativeLine: getMediaPath('line.svg')
}

const defaultConfig: MarblesConfig = {
  price: 3900,
  assetsPath: baseAssetsPath,
  referralBonus: 750,
  media: defaultMedia
}

// Мержим с конфигом из window (если он есть)
export const config: MarblesConfig = {
  ...defaultConfig,
  ...(typeof window !== 'undefined' && window.MARBLES_CONFIG ? window.MARBLES_CONFIG : {}),
  media: {
    ...defaultMedia,
    ...(typeof window !== 'undefined' && window.MARBLES_CONFIG?.media ? window.MARBLES_CONFIG.media : {})
  }
}

export const { price, assetsPath, referralBonus, media } = config

export default config
