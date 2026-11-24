// content.ts - everything the site says, and every store link, in one place.
// The texts in every language are in i18n.ts.

export type LangCode =
  | 'en' | 'ru' | 'es' | 'zh' | 'hi' | 'ar' | 'pt' | 'bn' | 'ja' | 'pa' | 'de' | 'jv' | 'ko' | 'fr' | 'te'
  | 'tr' | 'vi' | 'it' | 'th' | 'uk' | 'my' | 'id' | 'nl' | 'sv' | 'pl' | 'ro' | 'hu' | 'cs' | 'el' | 'he';

// ordered by the number of speakers in the world (native and second language), English first
export const LANGUAGES: { code: LangCode; name: string }[] = [
  { code: 'en', name: 'English' }, { code: 'zh', name: '中文' }, { code: 'hi', name: 'हिन्दी' },
  { code: 'es', name: 'Español' }, { code: 'ar', name: 'العربية' }, { code: 'fr', name: 'Français' },
  { code: 'bn', name: 'বাংলা' }, { code: 'pt', name: 'Português' }, { code: 'ru', name: 'Русский' },
  { code: 'id', name: 'Bahasa Indonesia' }, { code: 'de', name: 'Deutsch' }, { code: 'ja', name: '日本語' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ' }, { code: 'te', name: 'తెలుగు' }, { code: 'tr', name: 'Türkçe' },
  { code: 'vi', name: 'Tiếng Việt' }, { code: 'ko', name: '한국어' }, { code: 'jv', name: 'Basa Jawa' },
  { code: 'it', name: 'Italiano' }, { code: 'th', name: 'ไทย' }, { code: 'my', name: 'မြန်မာ' },
  { code: 'pl', name: 'Polski' }, { code: 'uk', name: 'Українська' }, { code: 'ro', name: 'Română' },
  { code: 'nl', name: 'Nederlands' }, { code: 'el', name: 'Ελληνικά' }, { code: 'sv', name: 'Svenska' },
  { code: 'hu', name: 'Magyar' }, { code: 'cs', name: 'Čeština' }, { code: 'he', name: 'עברית' }
];


export type StoreId = 'chrome' | 'edge' | 'steam' | 'msstore' | 'appstore' | 'googleplay';

export interface Product {
  id: string;
  name: string;
  kind: 'extension' | 'app' | 'mobile';
  icon: string;                                        // file in /public/icons
  links: Partial<Record<StoreId, string | 'soon'>>;    // 'soon' = not published yet
}

export const PRODUCTS: Product[] = [
  // ---------------------------------------------------------------- browser extensions
  {
    id: 'musicadapt', name: 'MusicAdapt', kind: 'extension', icon: '/icons/musicadapt.png',
    links: {
      chrome: 'https://chromewebstore.google.com/detail/musicadapt/pmfkpccokjienngicnfdcpodmnfbided',
      edge: 'https://microsoftedge.microsoft.com/addons/detail/musicadapt/aogbceaienbbnbholmmhppcanfmedohd'
    }
  },
  {
    id: 'soundadapt', name: 'SoundAdapt', kind: 'extension', icon: '/icons/soundadapt.png',
    links: {
      chrome: 'https://chromewebstore.google.com/detail/soundadapt/dcmjdbbdefhimbocfdohphldoecbkgdc',
      edge: 'https://microsoftedge.microsoft.com/addons/detail/soundadapt/jodocddpjgfmnllofckggdmbleibhiel'
    }
  },
  {
    id: 'coloradapt', name: 'ColorAdapt', kind: 'extension', icon: '/icons/coloradapt.png',
    links: {
      chrome: 'https://chromewebstore.google.com/detail/coloradapt/mdhhbgaeadiphmhbjkfmjcfahcahcbkg',
      edge: 'https://microsoftedge.microsoft.com/addons/detail/coloradapt/lpapphfidjjlamfkppckkdihjkindhaf'
    }
  },
  {
    id: 'fotoadapt', name: 'FotoAdapt', kind: 'extension', icon: '/icons/fotoadapt.png',
    links: {
      chrome: 'https://chromewebstore.google.com/detail/fotoadapt/fhoabhbgpmpamhcfhlemnbgonnmlmeab',
      edge: 'https://microsoftedge.microsoft.com/addons/detail/fotoadapt/pbfbkleacljocpbkbgfjgohefjidlmnb'
    }
  },
  {
    id: 'cryptoforecaster', name: 'CryptoForecaster', kind: 'extension', icon: '/icons/cryptoforecaster.png',
    links: {
      chrome: 'https://chromewebstore.google.com/detail/cryptoforecaster/cpehggjifaiknhelidkifmkhfplpilaf',
      edge: 'https://microsoftedge.microsoft.com/addons/detail/cryptoforecaster/chfmbenlmnjopdbebghlgkbemlhpmhdh'
    }
  },
  {
    id: 'matrixrain', name: 'MatrixRain', kind: 'extension', icon: '/icons/matrixrain.png',
    links: {
      chrome: 'https://chromewebstore.google.com/detail/matrixrain/eonkedgpffaaigppalmjhpdhomehgdfb',
      edge: 'https://microsoftedge.microsoft.com/addons/detail/matrixrain/ocfffnoljpmbmkhlfgjapmollmaeimkd'
    }
  },
  {
    id: 'graytrigger', name: 'GrayTrigger', kind: 'extension', icon: '/icons/graytrigger.png',
    links: {
      chrome: 'https://chromewebstore.google.com/detail/graytrigger/jgmjkhadhfclpekcojcihnkaoooepgeb',
      edge: 'https://microsoftedge.microsoft.com/addons/detail/graytrigger/ijlgcengbaggfdojaogilblmbkaajehn'
    }
  },

  // ---------------------------------------------------------------- PC apps
  {
    id: 'coloradapt-gaming', name: 'ColorAdapt Gaming', kind: 'app', icon: '/icons/coloradapt-gaming.png',
    links: {
      steam: 'https://store.steampowered.com/app/4449950/ColorAdapt_Gaming/',
      msstore: 'https://apps.microsoft.com/detail/9n3bbkjkzjxp'
    }
  },
  {
    id: 'frameadapt', name: 'FrameAdapt', kind: 'app', icon: '/icons/frameadapt.png',
    links: {
      steam: 'https://store.steampowered.com/app/5478320/FrameAdapt/',
      msstore: 'https://apps.microsoft.com/detail/9p1d8kp58lgn'
    }
  },
  {
    id: 'soundadapt-gaming', name: 'SoundAdapt Gaming', kind: 'app', icon: '/icons/soundadapt-gaming.png',
    links: {
      steam: 'https://store.steampowered.com/app/5588740/SoundAdapt_Gaming/',
      msstore: 'soon'
    }
  },
  {
    id: 'batteryadapt', name: 'BatteryAdapt', kind: 'app', icon: '/icons/batteryadapt.png',
    links: { steam: 'soon', msstore: 'soon' }
  },
  // ---------------------------------------------------------------- mobile apps
  {
    id: 'coloradapt-mobile', name: 'ColorAdapt Gaming', kind: 'mobile', icon: '/icons/coloradapt-gaming.png',
    links: { appstore: 'soon', googleplay: 'soon' }
  }
];

export const STORE_LABEL: Record<StoreId, string> = {
  chrome: 'Chrome Web Store',
  edge: 'Microsoft Edge',
  steam: 'Steam',
  msstore: 'Microsoft Store',
  appstore: 'App Store',
  googleplay: 'Google Play'
};

// ---------------------------------------------------------------- contacts
export const EMAIL = 'petrovskilabsinfo@gmail.com';
export const SPOTIFY = 'https://open.spotify.com/artist/393Q8JdQXQXqnIW8hhRkiT';
export const SOCIAL: { name: string; url: string }[] = [
  { name: 'Spotify', url: SPOTIFY },
  { name: 'YouTube', url: 'https://www.youtube.com/@petrovskistudio' },
  { name: 'YouTube Music', url: 'https://www.youtube.com/channel/UCnsOFwHi0koN0hJwMl6a00w' },
  { name: 'Apple Music', url: 'https://music.apple.com/ru/artist/yuri-petrovski/419595435' },
  { name: 'AudioJungle', url: 'https://audiojungle.net/user/yuri-petrovski' },
  { name: 'BeatStars', url: 'https://www.beatstars.com/yuripetrovski' },
  { name: 'Instagram', url: 'https://www.instagram.com/yuripetrovskii' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@yuripetrovskii' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/yuri-petrovski' }
];
