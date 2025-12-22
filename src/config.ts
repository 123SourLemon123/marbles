// Конфигурация приложения МАРБЛС
// Позволяет легко менять цену и пути к ресурсам

interface MarblesConfig {
  price: number
  assetsPath: string
  referralBonus: number
}

declare global {
  interface Window {
    MARBLES_CONFIG?: Partial<MarblesConfig>
  }
}

const defaultConfig: MarblesConfig = {
  price: 3900,
  // Проверяем window для переопределения из Tilda, иначе используем process.env
  assetsPath: (typeof window !== 'undefined' && window.MARBLES_CONFIG?.assetsPath) ||
    process.env.VUE_APP_ASSETS ||
    'https://banq-finance.ru/marbls/',
  referralBonus: 750
}

// Мержим с конфигом из window (если он есть)
export const config: MarblesConfig = {
  ...defaultConfig,
  ...(typeof window !== 'undefined' && window.MARBLES_CONFIG ? window.MARBLES_CONFIG : {})
}

export const { price, assetsPath, referralBonus } = config

export default config
