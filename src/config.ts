// Конфигурация приложения МАРБЛС
// Позволяет легко менять цену, пути к ресурсам и медиа-файлы

interface MediaPaths {
  // Общие
  photo: string
  line: string
  pattern: string
  noise: string

  // Игра
  box: string
  cards: string
  cardsPng: string
  cardFront: string
  cardBack: string
  ball: string

  // Декоративные
  gift: string
  laurel: string
  quote: string
  star: string
  dots: string
  users: string
  tick: string

  // Фигуры/Shapes
  shape1: string
  shape2: string
  shape3: string
  shape4: string
  shape5: string

  // Части/Parts
  part1: string
  part2: string
  part1Yellow: string

  // Соцсети
  telegram: string
  email: string

  // Видео
  heroVideo: string
  heroVideoWebm: string
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
  // Общие
  photo: getMediaPath('photo.jpeg'),
  line: getMediaPath('line.svg'),
  pattern: getMediaPath('pattern.svg'),
  noise: getMediaPath('noise.gif'),

  // Игра
  box: getMediaPath('box.svg'),
  cards: getMediaPath('cards.svg'),
  cardsPng: getMediaPath('cards.png'),
  cardFront: getMediaPath('card-front.svg'),
  cardBack: getMediaPath('card-back.svg'),
  ball: getMediaPath('ball.svg'),

  // Декоративные
  gift: getMediaPath('gift.svg'),
  laurel: getMediaPath('laurel.png'),
  quote: getMediaPath('quote.svg'),
  star: getMediaPath('star.svg'),
  dots: getMediaPath('dots.svg'),
  users: getMediaPath('users.svg'),
  tick: getMediaPath('tick.svg'),

  // Фигуры
  shape1: getMediaPath('shape-1.svg'),
  shape2: getMediaPath('shape-2.svg'),
  shape3: getMediaPath('shape-3.svg'),
  shape4: getMediaPath('shape-4.svg'),
  shape5: getMediaPath('shape-5.svg'),

  // Части
  part1: getMediaPath('part-1.svg'),
  part2: getMediaPath('part-2.svg'),
  part1Yellow: getMediaPath('part-1-yellow.svg'),

  // Соцсети
  telegram: getMediaPath('telegram.svg'),
  email: getMediaPath('email.svg'),

  // Видео
  heroVideo: 'https://cdn.shopify.com/s/files/1/0312/2737/9849/files/HomeHero_20210120.mp4',
  heroVideoWebm: 'https://cdn.shopify.com/s/files/1/0312/2737/9849/files/HomeHero_20210120.webm'
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
