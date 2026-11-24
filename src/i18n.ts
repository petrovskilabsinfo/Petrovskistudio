// i18n.ts - every text on the site, in all 30 languages of the language menu.
// Edit a language block to change its texts. Arabic and Hebrew are shown right to left (see RTL).
import type { LangCode } from './content';

export interface Copy {
  nav: { products: string; privacy: string; theme: string; language: string };
  hero: { badge: string; title: string; highlight: string; subtitle: string; text: string; start: string; more: string };
  about: { quote: string; author: string };
  products: { title: string; text: string; extensions: string; apps: string; mobile: string; soon: string };
  privacy: { title: string; sections: { title: string; body: string }[] };
  footer: { rights: string };
  taglines: Record<string, string>;   // product id -> one line under the product name
}

export const RTL: LangCode[] = ['ar', 'he'];

export const COPY: Record<LangCode, Copy> = {
  "en": {
    "nav": {
      "products": "Products",
      "privacy": "Privacy Policy",
      "theme": "Switch theme",
      "language": "Language"
    },
    "hero": {
      "badge": "Innovative Development Studio",
      "title": "Building the ",
      "highlight": "Future",
      "subtitle": " of Digital Products",
      "text": "We turn bold ideas into thriving companies and advanced software solutions. From MVP to market leader, we are your trusted technology partner.",
      "start": "Start Your Project",
      "more": "Our products"
    },
    "about": {
      "quote": "After achieving worldwide recognition in music, I founded PetrovskiStudio — an innovation hub at the intersection of technology and creativity. We specialize in developing cutting-edge applications and startups, and we create world-class audio and video projects. Our work resonates around the world, uniting technology with art, and we are on the path to breakthrough discoveries. Thank you for being part of this journey.",
      "author": "Yuri Petrovski"
    },
    "products": {
      "title": "Products",
      "text": "Everything runs on your device. No accounts, no ads, no tracking.",
      "extensions": "Browser extensions",
      "apps": "Desktop apps",
      "mobile": "Mobile apps",
      "soon": "Coming soon"
    },
    "privacy": {
      "title": "Privacy Policy",
      "sections": [
        {
          "title": "Zero Data Collection",
          "body": "We do not collect, store, or transmit any personal information."
        },
        {
          "title": "Local-First Architecture",
          "body": "Your settings and preferences stay strictly on your device. Our apps and extensions run locally in your browser or OS."
        },
        {
          "title": "Minimal Permissions",
          "body": "We request only the permissions strictly necessary for core functionality. Any temporary data processing happens locally in memory, never on external servers."
        },
        {
          "title": "No Third-Party Sharing",
          "body": "Because we don't collect your data, we never sell, share, or transfer anything to third parties."
        },
        {
          "title": "Complete Control",
          "body": "You own your data. Uninstalling the software or clearing your browser storage permanently removes everything."
        }
      ]
    },
    "footer": {
      "rights": "© 2027 PetrovskiStudio. Founded by Yuri Petrovski."
    },
    "taglines": {
      "musicadapt": "Music mastering in the browser",
      "soundadapt": "Sound control for any website",
      "coloradapt": "Comfortable colors on every page",
      "fotoadapt": "Photo editor in the browser",
      "cryptoforecaster": "Crypto price forecasts",
      "matrixrain": "Digital rain effect",
      "graytrigger": "Less time on distracting sites",
      "coloradapt-gaming": "Color filter for games and desktop",
      "frameadapt": "Smoother gameplay",
      "soundadapt-gaming": "Better sound in games",
      "batteryadapt": "Longer laptop battery life",
      "coloradapt-mobile": "Perfect colors on your device"
    }
  },
  "ru": {
    "nav": {
      "products": "Продукты",
      "privacy": "Конфиденциальность",
      "theme": "Сменить тему",
      "language": "Язык"
    },
    "hero": {
      "badge": "Инновационная студия разработки",
      "title": "Строим ",
      "highlight": "Будущее",
      "subtitle": " цифровых продуктов",
      "text": "Мы превращаем смелые идеи в процветающие компании и передовые программные решения. От MVP до лидера рынка — мы ваш надежный технологический партнер.",
      "start": "Начните свой проект",
      "more": "Наши продукты"
    },
    "about": {
      "quote": "После достижения всемирного признания в музыке я основал PetrovskiStudio — инновационный центр на стыке технологий и творчества. Мы специализируемся на разработке передовых приложений и стартапов, а также создаем проекты мирового уровня в области аудио и видео. Наша работа находит отклик по всему миру, объединяя технологии с искусством, и мы на пути к прорывным открытиям. Спасибо, что являетесь частью этого путешествия.",
      "author": "Юрий Петровский"
    },
    "products": {
      "title": "Продукты",
      "text": "Всё работает на вашем устройстве. Без аккаунтов, рекламы и слежки.",
      "extensions": "Расширения для браузера",
      "apps": "Программы для компьютера",
      "mobile": "Мобильные приложения",
      "soon": "Скоро"
    },
    "privacy": {
      "title": "Политика конфиденциальности",
      "sections": [
        {
          "title": "Никакого сбора данных",
          "body": "Мы не собираем, не храним и не передаём никакую личную информацию."
        },
        {
          "title": "Всё работает локально",
          "body": "Ваши настройки и предпочтения хранятся только на вашем устройстве. Наши приложения и расширения работают локально в вашем браузере или системе."
        },
        {
          "title": "Минимум разрешений",
          "body": "Мы запрашиваем только те разрешения, без которых не работают основные функции. Любая временная обработка данных происходит локально в памяти устройства и никогда на внешних серверах."
        },
        {
          "title": "Никакой передачи третьим лицам",
          "body": "Мы не собираем ваши данные, поэтому никогда ничего не продаём, не передаём и не отправляем третьим лицам."
        },
        {
          "title": "Полный контроль",
          "body": "Ваши данные принадлежат вам. Удаление программы или очистка хранилища браузера полностью стирает всё."
        }
      ]
    },
    "footer": {
      "rights": "© 2027 PetrovskiStudio. Основатель — Юрий Петровский."
    },
    "taglines": {
      "musicadapt": "Мастеринг музыки в браузере",
      "soundadapt": "Управление звуком на любом сайте",
      "coloradapt": "Комфортные цвета на любой странице",
      "fotoadapt": "Фоторедактор в браузере",
      "cryptoforecaster": "Прогнозы цен криптовалют",
      "matrixrain": "Эффект цифрового дождя",
      "graytrigger": "Меньше времени на отвлекающих сайтах",
      "coloradapt-gaming": "Цветовой фильтр для игр и рабочего стола",
      "frameadapt": "Плавная картинка в играх",
      "soundadapt-gaming": "Лучший звук в играх",
      "batteryadapt": "Дольше работы ноутбука от батареи",
      "coloradapt-mobile": "Идеальные цвета на вашем устройстве"
    }
  },
  "es": {
    "nav": {
      "products": "Productos",
      "privacy": "Política de privacidad",
      "theme": "Cambiar tema",
      "language": "Idioma"
    },
    "hero": {
      "badge": "Estudio de desarrollo innovador",
      "title": "Construimos el ",
      "highlight": "Futuro",
      "subtitle": " de los productos digitales",
      "text": "Convertimos ideas audaces en empresas prósperas y soluciones de software avanzadas. Del MVP al liderazgo del mercado, somos tu socio tecnológico de confianza.",
      "start": "Empieza tu proyecto",
      "more": "Nuestros productos"
    },
    "about": {
      "quote": "Tras alcanzar el reconocimiento mundial en la música, fundé PetrovskiStudio — un centro de innovación en la intersección de la tecnología y la creatividad. Nos especializamos en el desarrollo de aplicaciones y startups de vanguardia, y creamos proyectos de audio y vídeo de primer nivel mundial. Nuestro trabajo resuena en todo el mundo, uniendo la tecnología con el arte, y vamos camino de descubrimientos revolucionarios. Gracias por ser parte de este viaje.",
      "author": "Yuri Petrovski"
    },
    "products": {
      "title": "Productos",
      "text": "Todo funciona en tu dispositivo. Sin cuentas, sin anuncios, sin rastreo.",
      "extensions": "Extensiones de navegador",
      "apps": "Aplicaciones de escritorio",
      "mobile": "Aplicaciones móviles",
      "soon": "Próximamente"
    },
    "privacy": {
      "title": "Política de privacidad",
      "sections": [
        {
          "title": "Cero recopilación de datos",
          "body": "No recopilamos, almacenamos ni transmitimos ninguna información personal."
        },
        {
          "title": "Arquitectura local",
          "body": "Tus ajustes y preferencias permanecen exclusivamente en tu dispositivo. Nuestras aplicaciones y extensiones funcionan localmente en tu navegador o sistema operativo."
        },
        {
          "title": "Permisos mínimos",
          "body": "Solo solicitamos los permisos estrictamente necesarios para las funciones principales. Cualquier procesamiento temporal de datos ocurre localmente en la memoria, nunca en servidores externos."
        },
        {
          "title": "Sin compartir con terceros",
          "body": "Como no recopilamos tus datos, nunca vendemos, compartimos ni transferimos nada a terceros."
        },
        {
          "title": "Control total",
          "body": "Tus datos son tuyos. Desinstalar el software o borrar el almacenamiento del navegador lo elimina todo de forma permanente."
        }
      ]
    },
    "footer": {
      "rights": "© 2027 PetrovskiStudio. Fundado por Yuri Petrovski."
    },
    "taglines": {
      "musicadapt": "Masterización de música en el navegador",
      "soundadapt": "Control del sonido en cualquier sitio web",
      "coloradapt": "Colores cómodos en cada página",
      "fotoadapt": "Editor de fotos en el navegador",
      "cryptoforecaster": "Previsiones de precios de criptomonedas",
      "matrixrain": "Efecto de lluvia digital",
      "graytrigger": "Menos tiempo en sitios que distraen",
      "coloradapt-gaming": "Filtro de color para juegos y escritorio",
      "frameadapt": "Juego más fluido",
      "soundadapt-gaming": "Mejor sonido en los juegos",
      "batteryadapt": "Más autonomía para la batería del portátil",
      "coloradapt-mobile": "Colores perfectos en tu dispositivo"
    }
  },
  "zh": {
    "nav": {
      "products": "产品",
      "privacy": "隐私政策",
      "theme": "切换主题",
      "language": "语言"
    },
    "hero": {
      "badge": "创新开发工作室",
      "title": "构建数字产品的",
      "highlight": "未来",
      "subtitle": "",
      "text": "我们将大胆的创意转化为蓬勃发展的企业和先进的软件解决方案。从 MVP 到市场领导者，我们是您值得信赖的技术伙伴。",
      "start": "开始您的项目",
      "more": "我们的产品"
    },
    "about": {
      "quote": "在音乐领域获得全球认可之后，我创立了 PetrovskiStudio——一个位于科技与创意交汇处的创新中心。我们专注于开发前沿的应用程序和初创项目，同时打造世界级的音频和视频作品。我们的作品在全球引起共鸣，将科技与艺术融为一体，我们正走在通往突破性发现的道路上。感谢您成为这段旅程的一部分。",
      "author": "Yuri Petrovski"
    },
    "products": {
      "title": "产品",
      "text": "一切都在您的设备上运行。无需账户，没有广告，没有追踪。",
      "extensions": "浏览器扩展",
      "apps": "桌面应用",
      "mobile": "移动应用",
      "soon": "即将推出"
    },
    "privacy": {
      "title": "隐私政策",
      "sections": [
        {
          "title": "零数据收集",
          "body": "我们不收集、存储或传输任何个人信息。"
        },
        {
          "title": "本地优先架构",
          "body": "您的设置和偏好严格保存在您的设备上。我们的应用和扩展在您的浏览器或操作系统中本地运行。"
        },
        {
          "title": "最少权限",
          "body": "我们只请求核心功能严格必需的权限。任何临时数据处理都在本地内存中进行，绝不在外部服务器上进行。"
        },
        {
          "title": "不与第三方共享",
          "body": "由于我们不收集您的数据，我们绝不会向第三方出售、共享或转让任何内容。"
        },
        {
          "title": "完全掌控",
          "body": "您的数据归您所有。卸载软件或清除浏览器存储即可永久删除所有内容。"
        }
      ]
    },
    "footer": {
      "rights": "© 2027 PetrovskiStudio。由 Yuri Petrovski 创立。"
    },
    "taglines": {
      "musicadapt": "浏览器中的音乐母带处理",
      "soundadapt": "任何网站的声音控制",
      "coloradapt": "每个页面都有舒适的色彩",
      "fotoadapt": "浏览器中的照片编辑器",
      "cryptoforecaster": "加密货币价格预测",
      "matrixrain": "数字雨效果",
      "graytrigger": "减少在分心网站上的时间",
      "coloradapt-gaming": "游戏和桌面的色彩滤镜",
      "frameadapt": "更流畅的游戏体验",
      "soundadapt-gaming": "更好的游戏音效",
      "batteryadapt": "更长的笔记本电池续航",
      "coloradapt-mobile": "您设备上的完美色彩"
    }
  },
  "hi": {
    "nav": {
      "products": "उत्पाद",
      "privacy": "गोपनीयता नीति",
      "theme": "थीम बदलें",
      "language": "भाषा"
    },
    "hero": {
      "badge": "नवोन्मेषी डेवलपमेंट स्टूडियो",
      "title": "डिजिटल उत्पादों का ",
      "highlight": "भविष्य",
      "subtitle": " बना रहे हैं",
      "text": "हम साहसिक विचारों को सफल कंपनियों और उन्नत सॉफ़्टवेयर समाधानों में बदलते हैं। MVP से लेकर बाज़ार में अग्रणी बनने तक, हम आपके भरोसेमंद तकनीकी साझेदार हैं।",
      "start": "अपना प्रोजेक्ट शुरू करें",
      "more": "हमारे उत्पाद"
    },
    "about": {
      "quote": "संगीत में विश्वव्यापी पहचान हासिल करने के बाद मैंने PetrovskiStudio की स्थापना की — तकनीक और रचनात्मकता के संगम पर एक नवाचार केंद्र। हम अत्याधुनिक ऐप्स और स्टार्टअप विकसित करने में विशेषज्ञ हैं, और विश्वस्तरीय ऑडियो और वीडियो प्रोजेक्ट भी बनाते हैं। हमारा काम तकनीक को कला से जोड़ते हुए पूरी दुनिया में सराहा जाता है, और हम क्रांतिकारी खोजों की राह पर हैं। इस यात्रा का हिस्सा बनने के लिए धन्यवाद।",
      "author": "Yuri Petrovski"
    },
    "products": {
      "title": "उत्पाद",
      "text": "सब कुछ आपके डिवाइस पर चलता है। न कोई अकाउंट, न विज्ञापन, न ट्रैकिंग।",
      "extensions": "ब्राउज़र एक्सटेंशन",
      "apps": "डेस्कटॉप ऐप्स",
      "mobile": "मोबाइल ऐप्स",
      "soon": "जल्द आ रहा है"
    },
    "privacy": {
      "title": "गोपनीयता नीति",
      "sections": [
        {
          "title": "कोई डेटा संग्रह नहीं",
          "body": "हम कोई भी व्यक्तिगत जानकारी एकत्र, संग्रहीत या प्रसारित नहीं करते।"
        },
        {
          "title": "लोकल-फ़र्स्ट आर्किटेक्चर",
          "body": "आपकी सेटिंग्स और प्राथमिकताएँ केवल आपके डिवाइस पर रहती हैं। हमारे ऐप्स और एक्सटेंशन आपके ब्राउज़र या ऑपरेटिंग सिस्टम में लोकल रूप से चलते हैं।"
        },
        {
          "title": "न्यूनतम अनुमतियाँ",
          "body": "हम केवल वही अनुमतियाँ माँगते हैं जो मुख्य सुविधाओं के लिए बिल्कुल ज़रूरी हैं। कोई भी अस्थायी डेटा प्रोसेसिंग लोकल मेमोरी में होती है, कभी बाहरी सर्वर पर नहीं।"
        },
        {
          "title": "तीसरे पक्ष के साथ साझा नहीं",
          "body": "चूँकि हम आपका डेटा एकत्र नहीं करते, इसलिए हम कभी भी कुछ भी तीसरे पक्ष को बेचते, साझा या स्थानांतरित नहीं करते।"
        },
        {
          "title": "पूरा नियंत्रण",
          "body": "आपका डेटा आपका है। सॉफ़्टवेयर अनइंस्टॉल करने या ब्राउज़र स्टोरेज साफ़ करने से सब कुछ स्थायी रूप से हट जाता है।"
        }
      ]
    },
    "footer": {
      "rights": "© 2027 PetrovskiStudio. संस्थापक: Yuri Petrovski."
    },
    "taglines": {
      "musicadapt": "ब्राउज़र में म्यूज़िक मास्टरिंग",
      "soundadapt": "किसी भी वेबसाइट पर साउंड कंट्रोल",
      "coloradapt": "हर पेज पर आरामदायक रंग",
      "fotoadapt": "ब्राउज़र में फ़ोटो एडिटर",
      "cryptoforecaster": "क्रिप्टो कीमतों का पूर्वानुमान",
      "matrixrain": "डिजिटल रेन इफ़ेक्ट",
      "graytrigger": "ध्यान भटकाने वाली साइटों पर कम समय",
      "coloradapt-gaming": "गेम्स और डेस्कटॉप के लिए कलर फ़िल्टर",
      "frameadapt": "ज़्यादा स्मूद गेमप्ले",
      "soundadapt-gaming": "गेम्स में बेहतर साउंड",
      "batteryadapt": "लैपटॉप बैटरी की लंबी लाइफ़",
      "coloradapt-mobile": "आपके डिवाइस पर परफ़ेक्ट रंग"
    }
  },
  "ar": {
    "nav": {
      "products": "المنتجات",
      "privacy": "سياسة الخصوصية",
      "theme": "تبديل المظهر",
      "language": "اللغة"
    },
    "hero": {
      "badge": "استوديو تطوير مبتكر",
      "title": "نبني ",
      "highlight": "مستقبل",
      "subtitle": " المنتجات الرقمية",
      "text": "نحوّل الأفكار الجريئة إلى شركات مزدهرة وحلول برمجية متقدمة. من النموذج الأولي (MVP) إلى ريادة السوق، نحن شريكك التقني الموثوق.",
      "start": "ابدأ مشروعك",
      "more": "منتجاتنا"
    },
    "about": {
      "quote": "بعد أن حققتُ شهرة عالمية في الموسيقى، أسستُ PetrovskiStudio — مركزًا للابتكار عند ملتقى التكنولوجيا والإبداع. نحن متخصصون في تطوير التطبيقات والشركات الناشئة الرائدة، كما نصنع مشاريع صوتية ومرئية بمستوى عالمي. يلقى عملنا صدى في جميع أنحاء العالم، إذ يجمع بين التكنولوجيا والفن، ونحن على طريق اكتشافات رائدة. شكرًا لكونكم جزءًا من هذه الرحلة.",
      "author": "Yuri Petrovski"
    },
    "products": {
      "title": "المنتجات",
      "text": "كل شيء يعمل على جهازك. بلا حسابات، بلا إعلانات، بلا تتبّع.",
      "extensions": "إضافات المتصفح",
      "apps": "تطبيقات سطح المكتب",
      "mobile": "تطبيقات الجوال",
      "soon": "قريبًا"
    },
    "privacy": {
      "title": "سياسة الخصوصية",
      "sections": [
        {
          "title": "لا نجمع أي بيانات",
          "body": "لا نجمع أي معلومات شخصية ولا نخزنها ولا ننقلها."
        },
        {
          "title": "بنية محلية أولًا",
          "body": "تبقى إعداداتك وتفضيلاتك على جهازك فقط. تعمل تطبيقاتنا وإضافاتنا محليًا في متصفحك أو نظام التشغيل."
        },
        {
          "title": "الحد الأدنى من الأذونات",
          "body": "نطلب فقط الأذونات الضرورية تمامًا للوظائف الأساسية. وأي معالجة مؤقتة للبيانات تتم محليًا في الذاكرة، ولا تتم أبدًا على خوادم خارجية."
        },
        {
          "title": "لا مشاركة مع أطراف ثالثة",
          "body": "لأننا لا نجمع بياناتك، فإننا لا نبيع أي شيء ولا نشاركه ولا ننقله إلى أطراف ثالثة أبدًا."
        },
        {
          "title": "تحكّم كامل",
          "body": "بياناتك ملكك. إلغاء تثبيت البرنامج أو مسح تخزين المتصفح يحذف كل شيء نهائيًا."
        }
      ]
    },
    "footer": {
      "rights": "© 2027 PetrovskiStudio. أسسها Yuri Petrovski."
    },
    "taglines": {
      "musicadapt": "ماسترينغ الموسيقى في المتصفح",
      "soundadapt": "التحكم في الصوت على أي موقع",
      "coloradapt": "ألوان مريحة في كل صفحة",
      "fotoadapt": "محرر صور في المتصفح",
      "cryptoforecaster": "توقعات أسعار العملات المشفرة",
      "matrixrain": "تأثير المطر الرقمي",
      "graytrigger": "وقت أقل على المواقع المشتتة",
      "coloradapt-gaming": "فلتر ألوان للألعاب وسطح المكتب",
      "frameadapt": "لعب أكثر سلاسة",
      "soundadapt-gaming": "صوت أفضل في الألعاب",
      "batteryadapt": "عمر أطول لبطارية الحاسوب المحمول",
      "coloradapt-mobile": "ألوان مثالية على جهازك"
    }
  },
  "pt": {
    "nav": {
      "products": "Produtos",
      "privacy": "Política de Privacidade",
      "theme": "Mudar tema",
      "language": "Idioma"
    },
    "hero": {
      "badge": "Estúdio de desenvolvimento inovador",
      "title": "Construindo o ",
      "highlight": "Futuro",
      "subtitle": " dos produtos digitais",
      "text": "Transformamos ideias ousadas em empresas prósperas e soluções de software avançadas. Do MVP à liderança de mercado, somos seu parceiro de tecnologia de confiança.",
      "start": "Comece seu projeto",
      "more": "Nossos produtos"
    },
    "about": {
      "quote": "Depois de alcançar reconhecimento mundial na música, fundei a PetrovskiStudio — um centro de inovação na interseção entre tecnologia e criatividade. Somos especializados no desenvolvimento de aplicativos e startups de ponta e criamos projetos de áudio e vídeo de nível mundial. Nosso trabalho repercute no mundo todo, unindo tecnologia e arte, e estamos a caminho de descobertas revolucionárias. Obrigado por fazer parte desta jornada.",
      "author": "Yuri Petrovski"
    },
    "products": {
      "title": "Produtos",
      "text": "Tudo funciona no seu dispositivo. Sem contas, sem anúncios, sem rastreamento.",
      "extensions": "Extensões de navegador",
      "apps": "Aplicativos para desktop",
      "mobile": "Aplicativos móveis",
      "soon": "Em breve"
    },
    "privacy": {
      "title": "Política de Privacidade",
      "sections": [
        {
          "title": "Zero coleta de dados",
          "body": "Não coletamos, armazenamos nem transmitimos nenhuma informação pessoal."
        },
        {
          "title": "Arquitetura local",
          "body": "Suas configurações e preferências ficam exclusivamente no seu dispositivo. Nossos aplicativos e extensões funcionam localmente no seu navegador ou sistema operacional."
        },
        {
          "title": "Permissões mínimas",
          "body": "Solicitamos apenas as permissões estritamente necessárias para as funções principais. Qualquer processamento temporário de dados acontece localmente na memória, nunca em servidores externos."
        },
        {
          "title": "Sem compartilhamento com terceiros",
          "body": "Como não coletamos seus dados, nunca vendemos, compartilhamos ou transferimos nada para terceiros."
        },
        {
          "title": "Controle total",
          "body": "Seus dados são seus. Desinstalar o software ou limpar o armazenamento do navegador remove tudo permanentemente."
        }
      ]
    },
    "footer": {
      "rights": "© 2027 PetrovskiStudio. Fundada por Yuri Petrovski."
    },
    "taglines": {
      "musicadapt": "Masterização de música no navegador",
      "soundadapt": "Controle de som em qualquer site",
      "coloradapt": "Cores confortáveis em todas as páginas",
      "fotoadapt": "Editor de fotos no navegador",
      "cryptoforecaster": "Previsões de preços de criptomoedas",
      "matrixrain": "Efeito de chuva digital",
      "graytrigger": "Menos tempo em sites que distraem",
      "coloradapt-gaming": "Filtro de cores para jogos e desktop",
      "frameadapt": "Jogabilidade mais fluida",
      "soundadapt-gaming": "Som melhor nos jogos",
      "batteryadapt": "Mais bateria no notebook",
      "coloradapt-mobile": "Cores perfeitas no seu dispositivo"
    }
  },
  "bn": {
    "nav": {
      "products": "পণ্য",
      "privacy": "গোপনীয়তা নীতি",
      "theme": "থিম পরিবর্তন",
      "language": "ভাষা"
    },
    "hero": {
      "badge": "উদ্ভাবনী ডেভেলপমেন্ট স্টুডিও",
      "title": "ডিজিটাল পণ্যের ",
      "highlight": "ভবিষ্যৎ",
      "subtitle": " গড়ছি",
      "text": "আমরা সাহসী ধারণাকে সফল কোম্পানি এবং উন্নত সফটওয়্যার সমাধানে রূপান্তর করি। MVP থেকে বাজারের শীর্ষস্থান পর্যন্ত, আমরা আপনার বিশ্বস্ত প্রযুক্তি অংশীদার।",
      "start": "আপনার প্রজেক্ট শুরু করুন",
      "more": "আমাদের পণ্য"
    },
    "about": {
      "quote": "সংগীতে বিশ্বব্যাপী স্বীকৃতি অর্জনের পর আমি PetrovskiStudio প্রতিষ্ঠা করি — প্রযুক্তি ও সৃজনশীলতার সংযোগস্থলে একটি উদ্ভাবন কেন্দ্র। আমরা অত্যাধুনিক অ্যাপ ও স্টার্টআপ তৈরিতে বিশেষজ্ঞ, এবং বিশ্বমানের অডিও ও ভিডিও প্রজেক্টও তৈরি করি। প্রযুক্তিকে শিল্পের সঙ্গে যুক্ত করে আমাদের কাজ সারা বিশ্বে সাড়া ফেলে, এবং আমরা যুগান্তকারী আবিষ্কারের পথে এগিয়ে চলেছি। এই যাত্রার অংশ হওয়ার জন্য ধন্যবাদ।",
      "author": "Yuri Petrovski"
    },
    "products": {
      "title": "পণ্য",
      "text": "সবকিছু আপনার ডিভাইসেই চলে। কোনো অ্যাকাউন্ট নেই, বিজ্ঞাপন নেই, ট্র্যাকিং নেই।",
      "extensions": "ব্রাউজার এক্সটেনশন",
      "apps": "ডেস্কটপ অ্যাপ",
      "mobile": "মোবাইল অ্যাপ",
      "soon": "শীঘ্রই আসছে"
    },
    "privacy": {
      "title": "গোপনীয়তা নীতি",
      "sections": [
        {
          "title": "কোনো ডেটা সংগ্রহ নয়",
          "body": "আমরা কোনো ব্যক্তিগত তথ্য সংগ্রহ, সংরক্ষণ বা প্রেরণ করি না।"
        },
        {
          "title": "লোকাল-ফার্স্ট আর্কিটেকচার",
          "body": "আপনার সেটিংস ও পছন্দ শুধুমাত্র আপনার ডিভাইসেই থাকে। আমাদের অ্যাপ ও এক্সটেনশন আপনার ব্রাউজার বা অপারেটিং সিস্টেমে লোকালি চলে।"
        },
        {
          "title": "ন্যূনতম অনুমতি",
          "body": "আমরা শুধু মূল ফিচারের জন্য একান্ত প্রয়োজনীয় অনুমতিগুলোই চাই। যেকোনো অস্থায়ী ডেটা প্রসেসিং লোকাল মেমোরিতে হয়, কখনোই বাইরের সার্ভারে নয়।"
        },
        {
          "title": "তৃতীয় পক্ষের সঙ্গে শেয়ার নয়",
          "body": "যেহেতু আমরা আপনার ডেটা সংগ্রহ করি না, তাই আমরা কখনোই তৃতীয় পক্ষের কাছে কিছু বিক্রি, শেয়ার বা হস্তান্তর করি না।"
        },
        {
          "title": "সম্পূর্ণ নিয়ন্ত্রণ",
          "body": "আপনার ডেটা আপনারই। সফটওয়্যার আনইনস্টল করলে বা ব্রাউজারের স্টোরেজ মুছে ফেললে সবকিছু স্থায়ীভাবে মুছে যায়।"
        }
      ]
    },
    "footer": {
      "rights": "© 2027 PetrovskiStudio. প্রতিষ্ঠাতা Yuri Petrovski."
    },
    "taglines": {
      "musicadapt": "ব্রাউজারে মিউজিক মাস্টারিং",
      "soundadapt": "যেকোনো ওয়েবসাইটে সাউন্ড নিয়ন্ত্রণ",
      "coloradapt": "প্রতিটি পেজে আরামদায়ক রং",
      "fotoadapt": "ব্রাউজারে ফটো এডিটর",
      "cryptoforecaster": "ক্রিপ্টোর দামের পূর্বাভাস",
      "matrixrain": "ডিজিটাল রেইন ইফেক্ট",
      "graytrigger": "মনোযোগ নষ্ট করা সাইটে কম সময়",
      "coloradapt-gaming": "গেম ও ডেস্কটপের জন্য কালার ফিল্টার",
      "frameadapt": "আরও মসৃণ গেমপ্লে",
      "soundadapt-gaming": "গেমে আরও ভালো সাউন্ড",
      "batteryadapt": "ল্যাপটপের ব্যাটারি দীর্ঘস্থায়ী",
      "coloradapt-mobile": "আপনার ডিভাইসে নিখুঁত রং"
    }
  },
  "ja": {
    "nav": {
      "products": "製品",
      "privacy": "プライバシーポリシー",
      "theme": "テーマを切り替え",
      "language": "言語"
    },
    "hero": {
      "badge": "革新的な開発スタジオ",
      "title": "デジタルプロダクトの",
      "highlight": "未来",
      "subtitle": "を創る",
      "text": "私たちは大胆なアイデアを、成長する企業と先進的なソフトウェアソリューションへと変えます。MVP から市場のリーダーまで、信頼できるテクノロジーパートナーとして伴走します。",
      "start": "プロジェクトを始める",
      "more": "製品を見る"
    },
    "about": {
      "quote": "音楽で世界的な評価を得たのち、私はテクノロジーとクリエイティビティが交わるイノベーションの拠点、PetrovskiStudio を設立しました。私たちは最先端のアプリケーションやスタートアップの開発を専門とし、世界水準のオーディオ・映像プロジェクトも手がけています。私たちの仕事はテクノロジーとアートを結びつけ、世界中で共感を呼んでいます。そして今、画期的な発見への道を歩んでいます。この旅の一員でいてくださり、ありがとうございます。",
      "author": "Yuri Petrovski"
    },
    "products": {
      "title": "製品",
      "text": "すべてお使いのデバイス上で動作します。アカウント不要、広告なし、トラッキングなし。",
      "extensions": "ブラウザ拡張機能",
      "apps": "デスクトップアプリ",
      "mobile": "モバイルアプリ",
      "soon": "近日公開"
    },
    "privacy": {
      "title": "プライバシーポリシー",
      "sections": [
        {
          "title": "データ収集ゼロ",
          "body": "個人情報の収集、保存、送信は一切行いません。"
        },
        {
          "title": "ローカルファースト設計",
          "body": "設定や環境設定はすべてお使いのデバイス内にのみ保存されます。アプリと拡張機能は、ブラウザまたは OS 上でローカルに動作します。"
        },
        {
          "title": "最小限の権限",
          "body": "主要機能に厳密に必要な権限のみを要求します。一時的なデータ処理はすべてデバイスのメモリ内で行われ、外部サーバーで行われることはありません。"
        },
        {
          "title": "第三者への共有なし",
          "body": "データを収集しないため、第三者に何かを販売、共有、譲渡することは決してありません。"
        },
        {
          "title": "完全なコントロール",
          "body": "データはあなたのものです。ソフトウェアをアンインストールするか、ブラウザのストレージを消去すると、すべてが完全に削除されます。"
        }
      ]
    },
    "footer": {
      "rights": "© 2027 PetrovskiStudio. 創設者 Yuri Petrovski。"
    },
    "taglines": {
      "musicadapt": "ブラウザで音楽マスタリング",
      "soundadapt": "どのサイトでもサウンドを調整",
      "coloradapt": "すべてのページを見やすい色に",
      "fotoadapt": "ブラウザで使えるフォトエディター",
      "cryptoforecaster": "暗号資産の価格予測",
      "matrixrain": "デジタルレイン エフェクト",
      "graytrigger": "気が散るサイトの時間を減らす",
      "coloradapt-gaming": "ゲームとデスクトップ用カラーフィルター",
      "frameadapt": "より滑らかなゲームプレイ",
      "soundadapt-gaming": "ゲームのサウンドをもっと良く",
      "batteryadapt": "ノートPCのバッテリーを長持ちさせる",
      "coloradapt-mobile": "あなたのデバイスで最適な色を"
    }
  },
  "pa": {
    "nav": {
      "products": "ਉਤਪਾਦ",
      "privacy": "ਪਰਦੇਦਾਰੀ ਨੀਤੀ",
      "theme": "ਥੀਮ ਬਦਲੋ",
      "language": "ਭਾਸ਼ਾ"
    },
    "hero": {
      "badge": "ਨਵੀਨਤਾਕਾਰੀ ਡਿਵੈਲਪਮੈਂਟ ਸਟੂਡੀਓ",
      "title": "ਡਿਜੀਟਲ ਉਤਪਾਦਾਂ ਦਾ ",
      "highlight": "ਭਵਿੱਖ",
      "subtitle": " ਬਣਾ ਰਹੇ ਹਾਂ",
      "text": "ਅਸੀਂ ਦਲੇਰ ਵਿਚਾਰਾਂ ਨੂੰ ਕਾਮਯਾਬ ਕੰਪਨੀਆਂ ਅਤੇ ਉੱਨਤ ਸਾਫ਼ਟਵੇਅਰ ਹੱਲਾਂ ਵਿੱਚ ਬਦਲਦੇ ਹਾਂ। MVP ਤੋਂ ਲੈ ਕੇ ਬਾਜ਼ਾਰ ਦੇ ਮੋਹਰੀ ਬਣਨ ਤੱਕ, ਅਸੀਂ ਤੁਹਾਡੇ ਭਰੋਸੇਮੰਦ ਤਕਨੀਕੀ ਸਾਥੀ ਹਾਂ।",
      "start": "ਆਪਣਾ ਪ੍ਰੋਜੈਕਟ ਸ਼ੁਰੂ ਕਰੋ",
      "more": "ਸਾਡੇ ਉਤਪਾਦ"
    },
    "about": {
      "quote": "ਸੰਗੀਤ ਵਿੱਚ ਵਿਸ਼ਵ ਪੱਧਰੀ ਪਛਾਣ ਹਾਸਲ ਕਰਨ ਤੋਂ ਬਾਅਦ ਮੈਂ PetrovskiStudio ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ — ਤਕਨਾਲੋਜੀ ਅਤੇ ਰਚਨਾਤਮਕਤਾ ਦੇ ਸੰਗਮ 'ਤੇ ਇੱਕ ਨਵੀਨਤਾ ਕੇਂਦਰ। ਅਸੀਂ ਅਤਿ-ਆਧੁਨਿਕ ਐਪਸ ਅਤੇ ਸਟਾਰਟਅੱਪ ਵਿਕਸਿਤ ਕਰਨ ਵਿੱਚ ਮਾਹਰ ਹਾਂ, ਅਤੇ ਵਿਸ਼ਵ ਪੱਧਰੀ ਆਡੀਓ ਅਤੇ ਵੀਡੀਓ ਪ੍ਰੋਜੈਕਟ ਵੀ ਬਣਾਉਂਦੇ ਹਾਂ। ਸਾਡਾ ਕੰਮ ਤਕਨਾਲੋਜੀ ਨੂੰ ਕਲਾ ਨਾਲ ਜੋੜ ਕੇ ਪੂਰੀ ਦੁਨੀਆ ਵਿੱਚ ਗੂੰਜਦਾ ਹੈ, ਅਤੇ ਅਸੀਂ ਇਨਕਲਾਬੀ ਖੋਜਾਂ ਦੇ ਰਾਹ 'ਤੇ ਹਾਂ। ਇਸ ਸਫ਼ਰ ਦਾ ਹਿੱਸਾ ਬਣਨ ਲਈ ਧੰਨਵਾਦ।",
      "author": "Yuri Petrovski"
    },
    "products": {
      "title": "ਉਤਪਾਦ",
      "text": "ਸਭ ਕੁਝ ਤੁਹਾਡੇ ਡਿਵਾਈਸ 'ਤੇ ਚੱਲਦਾ ਹੈ। ਕੋਈ ਖਾਤਾ ਨਹੀਂ, ਕੋਈ ਇਸ਼ਤਿਹਾਰ ਨਹੀਂ, ਕੋਈ ਟਰੈਕਿੰਗ ਨਹੀਂ।",
      "extensions": "ਬ੍ਰਾਊਜ਼ਰ ਐਕਸਟੈਂਸ਼ਨ",
      "apps": "ਡੈਸਕਟਾਪ ਐਪਸ",
      "mobile": "ਮੋਬਾਈਲ ਐਪਸ",
      "soon": "ਜਲਦੀ ਆ ਰਿਹਾ ਹੈ"
    },
    "privacy": {
      "title": "ਪਰਦੇਦਾਰੀ ਨੀਤੀ",
      "sections": [
        {
          "title": "ਕੋਈ ਡਾਟਾ ਇਕੱਠਾ ਨਹੀਂ",
          "body": "ਅਸੀਂ ਕੋਈ ਵੀ ਨਿੱਜੀ ਜਾਣਕਾਰੀ ਇਕੱਠੀ, ਸਟੋਰ ਜਾਂ ਭੇਜਦੇ ਨਹੀਂ ਹਾਂ।"
        },
        {
          "title": "ਲੋਕਲ-ਫ਼ਸਟ ਢਾਂਚਾ",
          "body": "ਤੁਹਾਡੀਆਂ ਸੈਟਿੰਗਾਂ ਅਤੇ ਤਰਜੀਹਾਂ ਸਿਰਫ਼ ਤੁਹਾਡੇ ਡਿਵਾਈਸ 'ਤੇ ਰਹਿੰਦੀਆਂ ਹਨ। ਸਾਡੇ ਐਪਸ ਅਤੇ ਐਕਸਟੈਂਸ਼ਨ ਤੁਹਾਡੇ ਬ੍ਰਾਊਜ਼ਰ ਜਾਂ ਓਪਰੇਟਿੰਗ ਸਿਸਟਮ ਵਿੱਚ ਲੋਕਲ ਤੌਰ 'ਤੇ ਚੱਲਦੇ ਹਨ।"
        },
        {
          "title": "ਘੱਟੋ-ਘੱਟ ਇਜਾਜ਼ਤਾਂ",
          "body": "ਅਸੀਂ ਸਿਰਫ਼ ਉਹੀ ਇਜਾਜ਼ਤਾਂ ਮੰਗਦੇ ਹਾਂ ਜੋ ਮੁੱਖ ਫੀਚਰਾਂ ਲਈ ਬਿਲਕੁਲ ਜ਼ਰੂਰੀ ਹਨ। ਕੋਈ ਵੀ ਅਸਥਾਈ ਡਾਟਾ ਪ੍ਰੋਸੈਸਿੰਗ ਲੋਕਲ ਮੈਮੋਰੀ ਵਿੱਚ ਹੁੰਦੀ ਹੈ, ਕਦੇ ਵੀ ਬਾਹਰੀ ਸਰਵਰਾਂ 'ਤੇ ਨਹੀਂ।"
        },
        {
          "title": "ਤੀਜੀਆਂ ਧਿਰਾਂ ਨਾਲ ਸਾਂਝਾ ਨਹੀਂ",
          "body": "ਕਿਉਂਕਿ ਅਸੀਂ ਤੁਹਾਡਾ ਡਾਟਾ ਇਕੱਠਾ ਨਹੀਂ ਕਰਦੇ, ਅਸੀਂ ਕਦੇ ਵੀ ਤੀਜੀਆਂ ਧਿਰਾਂ ਨੂੰ ਕੁਝ ਵੀ ਵੇਚਦੇ, ਸਾਂਝਾ ਜਾਂ ਟ੍ਰਾਂਸਫ਼ਰ ਨਹੀਂ ਕਰਦੇ।"
        },
        {
          "title": "ਪੂਰਾ ਕੰਟਰੋਲ",
          "body": "ਤੁਹਾਡਾ ਡਾਟਾ ਤੁਹਾਡਾ ਹੈ। ਸਾਫ਼ਟਵੇਅਰ ਅਣਇੰਸਟਾਲ ਕਰਨ ਜਾਂ ਬ੍ਰਾਊਜ਼ਰ ਸਟੋਰੇਜ ਸਾਫ਼ ਕਰਨ ਨਾਲ ਸਭ ਕੁਝ ਸਥਾਈ ਤੌਰ 'ਤੇ ਹਟ ਜਾਂਦਾ ਹੈ।"
        }
      ]
    },
    "footer": {
      "rights": "© 2027 PetrovskiStudio. ਸੰਸਥਾਪਕ: Yuri Petrovski."
    },
    "taglines": {
      "musicadapt": "ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਸੰਗੀਤ ਮਾਸਟਰਿੰਗ",
      "soundadapt": "ਕਿਸੇ ਵੀ ਵੈੱਬਸਾਈਟ 'ਤੇ ਆਵਾਜ਼ ਕੰਟਰੋਲ",
      "coloradapt": "ਹਰ ਪੰਨੇ 'ਤੇ ਆਰਾਮਦਾਇਕ ਰੰਗ",
      "fotoadapt": "ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਫ਼ੋਟੋ ਐਡੀਟਰ",
      "cryptoforecaster": "ਕ੍ਰਿਪਟੋ ਕੀਮਤਾਂ ਦੀ ਭਵਿੱਖਬਾਣੀ",
      "matrixrain": "ਡਿਜੀਟਲ ਮੀਂਹ ਪ੍ਰਭਾਵ",
      "graytrigger": "ਧਿਆਨ ਭਟਕਾਉਣ ਵਾਲੀਆਂ ਸਾਈਟਾਂ 'ਤੇ ਘੱਟ ਸਮਾਂ",
      "coloradapt-gaming": "ਗੇਮਾਂ ਅਤੇ ਡੈਸਕਟਾਪ ਲਈ ਰੰਗ ਫ਼ਿਲਟਰ",
      "frameadapt": "ਹੋਰ ਸੁਚਾਰੂ ਗੇਮਪਲੇ",
      "soundadapt-gaming": "ਗੇਮਾਂ ਵਿੱਚ ਬਿਹਤਰ ਆਵਾਜ਼",
      "batteryadapt": "ਲੈਪਟਾਪ ਬੈਟਰੀ ਦੀ ਲੰਬੀ ਉਮਰ",
      "coloradapt-mobile": "ਤੁਹਾਡੇ ਡਿਵਾਈਸ 'ਤੇ ਬਿਲਕੁਲ ਸਹੀ ਰੰਗ"
    }
  },
  "de": {
    "nav": {
      "products": "Produkte",
      "privacy": "Datenschutz",
      "theme": "Design wechseln",
      "language": "Sprache"
    },
    "hero": {
      "badge": "Innovatives Entwicklungsstudio",
      "title": "Wir gestalten die ",
      "highlight": "Zukunft",
      "subtitle": " digitaler Produkte",
      "text": "Wir verwandeln mutige Ideen in erfolgreiche Unternehmen und fortschrittliche Softwarelösungen. Vom MVP bis zum Marktführer sind wir Ihr verlässlicher Technologiepartner.",
      "start": "Starten Sie Ihr Projekt",
      "more": "Unsere Produkte"
    },
    "about": {
      "quote": "Nachdem ich mit meiner Musik weltweite Anerkennung erlangt hatte, gründete ich PetrovskiStudio — ein Innovationszentrum an der Schnittstelle von Technologie und Kreativität. Wir sind auf die Entwicklung zukunftsweisender Anwendungen und Startups spezialisiert und realisieren Audio- und Videoprojekte von Weltklasse. Unsere Arbeit findet weltweit Anklang, verbindet Technologie mit Kunst, und wir sind auf dem Weg zu bahnbrechenden Entdeckungen. Danke, dass Sie Teil dieser Reise sind.",
      "author": "Yuri Petrovski"
    },
    "products": {
      "title": "Produkte",
      "text": "Alles läuft auf Ihrem Gerät. Keine Konten, keine Werbung, kein Tracking.",
      "extensions": "Browser-Erweiterungen",
      "apps": "Desktop-Apps",
      "mobile": "Mobile Apps",
      "soon": "Demnächst"
    },
    "privacy": {
      "title": "Datenschutzerklärung",
      "sections": [
        {
          "title": "Keine Datenerfassung",
          "body": "Wir erfassen, speichern oder übertragen keinerlei personenbezogene Daten."
        },
        {
          "title": "Local-First-Architektur",
          "body": "Ihre Einstellungen und Präferenzen bleiben ausschließlich auf Ihrem Gerät. Unsere Apps und Erweiterungen laufen lokal in Ihrem Browser oder Betriebssystem."
        },
        {
          "title": "Minimale Berechtigungen",
          "body": "Wir fordern nur die Berechtigungen an, die für die Kernfunktionen unbedingt erforderlich sind. Jede vorübergehende Datenverarbeitung erfolgt lokal im Arbeitsspeicher, niemals auf externen Servern."
        },
        {
          "title": "Keine Weitergabe an Dritte",
          "body": "Da wir Ihre Daten nicht erfassen, verkaufen, teilen oder übertragen wir niemals etwas an Dritte."
        },
        {
          "title": "Volle Kontrolle",
          "body": "Ihre Daten gehören Ihnen. Durch Deinstallieren der Software oder Löschen des Browserspeichers wird alles dauerhaft entfernt."
        }
      ]
    },
    "footer": {
      "rights": "© 2027 PetrovskiStudio. Gegründet von Yuri Petrovski."
    },
    "taglines": {
      "musicadapt": "Musik-Mastering im Browser",
      "soundadapt": "Klangsteuerung für jede Website",
      "coloradapt": "Angenehme Farben auf jeder Seite",
      "fotoadapt": "Fotoeditor im Browser",
      "cryptoforecaster": "Kursprognosen für Kryptowährungen",
      "matrixrain": "Digitaler-Regen-Effekt",
      "graytrigger": "Weniger Zeit auf ablenkenden Websites",
      "coloradapt-gaming": "Farbfilter für Spiele und Desktop",
      "frameadapt": "Flüssigeres Gameplay",
      "soundadapt-gaming": "Besserer Sound in Spielen",
      "batteryadapt": "Längere Akkulaufzeit für Laptops",
      "coloradapt-mobile": "Perfekte Farben auf Ihrem Gerät"
    }
  },
  "jv": {
    "nav": {
      "products": "Produk",
      "privacy": "Kabijakan Privasi",
      "theme": "Ganti tema",
      "language": "Basa"
    },
    "hero": {
      "badge": "Studio pangembangan inovatif",
      "title": "Mbangun ",
      "highlight": "Masa Depan",
      "subtitle": " Produk Digital",
      "text": "Kita ngowahi gagasan sing wani dadi perusahaan sing maju lan solusi piranti lunak sing canggih. Saka MVP nganti dadi pimpinan pasar, kita mitra teknologi sing bisa dipercaya.",
      "start": "Wiwiti proyek panjenengan",
      "more": "Produk kita"
    },
    "about": {
      "quote": "Sawise entuk pangakuan donya lumantar musik, aku ngedegake PetrovskiStudio — pusat inovasi ing patemon antarane teknologi lan kreativitas. Kita fokus ngembangake aplikasi lan startup sing canggih, uga nggawe proyek audio lan video kelas donya. Karya kita ditampa ing saindhenging donya, nggabungake teknologi karo seni, lan kita ana ing dalan tumuju panemuan-panemuan gedhe. Matur nuwun wis dadi bagean saka lelampahan iki.",
      "author": "Yuri Petrovski"
    },
    "products": {
      "title": "Produk",
      "text": "Kabeh mlaku ing piranti panjenengan. Tanpa akun, tanpa iklan, tanpa pelacakan.",
      "extensions": "Ekstensi browser",
      "apps": "Aplikasi desktop",
      "mobile": "Aplikasi seluler",
      "soon": "Enggal teka"
    },
    "privacy": {
      "title": "Kabijakan Privasi",
      "sections": [
        {
          "title": "Ora ana pangumpulan data",
          "body": "Kita ora ngumpulake, nyimpen, utawa ngirim informasi pribadi apa wae."
        },
        {
          "title": "Arsitektur lokal",
          "body": "Setelan lan pilihan panjenengan tetep mung ana ing piranti panjenengan. Aplikasi lan ekstensi kita mlaku sacara lokal ing browser utawa sistem operasi panjenengan."
        },
        {
          "title": "Idin minimal",
          "body": "Kita mung nyuwun idin sing pancen dibutuhake kanggo fungsi utama. Pangolahan data sementara apa wae dumadi sacara lokal ing memori, ora tau ing server njaba."
        },
        {
          "title": "Ora dibagi menyang pihak katelu",
          "body": "Amarga kita ora ngumpulake data panjenengan, kita ora tau adol, mbagi, utawa mindhah apa wae menyang pihak katelu."
        },
        {
          "title": "Kontrol kebak",
          "body": "Data panjenengan duweke panjenengan. Mbusak piranti lunak utawa ngresiki panyimpenan browser bakal mbusak kabeh salawase."
        }
      ]
    },
    "footer": {
      "rights": "© 2027 PetrovskiStudio. Didegake dening Yuri Petrovski."
    },
    "taglines": {
      "musicadapt": "Mastering musik ing browser",
      "soundadapt": "Ngatur swara ing situs web apa wae",
      "coloradapt": "Werna sing kepenak ing saben kaca",
      "fotoadapt": "Editor foto ing browser",
      "cryptoforecaster": "Prakiraan rega kripto",
      "matrixrain": "Efek udan digital",
      "graytrigger": "Luwih sithik wektu ing situs sing ngganggu",
      "coloradapt-gaming": "Filter werna kanggo game lan desktop",
      "frameadapt": "Game luwih lancar",
      "soundadapt-gaming": "Swara game luwih apik",
      "batteryadapt": "Baterei laptop luwih awet",
      "coloradapt-mobile": "Werna sampurna ing piranti panjenengan"
    }
  },
  "ko": {
    "nav": {
      "products": "제품",
      "privacy": "개인정보 처리방침",
      "theme": "테마 전환",
      "language": "언어"
    },
    "hero": {
      "badge": "혁신적인 개발 스튜디오",
      "title": "디지털 제품의 ",
      "highlight": "미래",
      "subtitle": "를 만듭니다",
      "text": "우리는 대담한 아이디어를 성공하는 기업과 첨단 소프트웨어 솔루션으로 바꿉니다. MVP부터 시장 선도 기업까지, 믿을 수 있는 기술 파트너가 되어 드립니다.",
      "start": "프로젝트 시작하기",
      "more": "제품 보기"
    },
    "about": {
      "quote": "음악으로 세계적인 인정을 받은 뒤, 저는 기술과 창의성이 만나는 혁신의 중심지 PetrovskiStudio를 설립했습니다. 우리는 최첨단 애플리케이션과 스타트업 개발을 전문으로 하며, 세계적 수준의 오디오·비디오 프로젝트도 만들고 있습니다. 우리의 작업은 기술과 예술을 하나로 묶어 전 세계에서 공감을 얻고 있으며, 우리는 획기적인 발견을 향해 나아가고 있습니다. 이 여정에 함께해 주셔서 감사합니다.",
      "author": "Yuri Petrovski"
    },
    "products": {
      "title": "제품",
      "text": "모든 기능이 사용자의 기기에서 실행됩니다. 계정, 광고, 추적이 없습니다.",
      "extensions": "브라우저 확장 프로그램",
      "apps": "데스크톱 앱",
      "mobile": "모바일 앱",
      "soon": "출시 예정"
    },
    "privacy": {
      "title": "개인정보 처리방침",
      "sections": [
        {
          "title": "데이터 수집 없음",
          "body": "우리는 어떠한 개인정보도 수집, 저장 또는 전송하지 않습니다."
        },
        {
          "title": "로컬 우선 설계",
          "body": "설정과 환경설정은 오직 사용자의 기기에만 저장됩니다. 우리의 앱과 확장 프로그램은 브라우저 또는 운영체제에서 로컬로 실행됩니다."
        },
        {
          "title": "최소한의 권한",
          "body": "핵심 기능에 꼭 필요한 권한만 요청합니다. 일시적인 데이터 처리는 모두 기기의 메모리에서 로컬로 이루어지며, 외부 서버에서는 절대 이루어지지 않습니다."
        },
        {
          "title": "제3자 공유 없음",
          "body": "데이터를 수집하지 않기 때문에, 제3자에게 어떤 것도 판매, 공유 또는 이전하지 않습니다."
        },
        {
          "title": "완전한 통제",
          "body": "데이터의 주인은 사용자입니다. 소프트웨어를 제거하거나 브라우저 저장소를 지우면 모든 데이터가 영구적으로 삭제됩니다."
        }
      ]
    },
    "footer": {
      "rights": "© 2027 PetrovskiStudio. 설립자 Yuri Petrovski."
    },
    "taglines": {
      "musicadapt": "브라우저에서 음악 마스터링",
      "soundadapt": "모든 웹사이트의 사운드 조절",
      "coloradapt": "모든 페이지를 편안한 색으로",
      "fotoadapt": "브라우저 속 사진 편집기",
      "cryptoforecaster": "암호화폐 가격 예측",
      "matrixrain": "디지털 레인 효과",
      "graytrigger": "집중을 방해하는 사이트에서 보내는 시간 줄이기",
      "coloradapt-gaming": "게임과 데스크톱을 위한 색상 필터",
      "frameadapt": "더 부드러운 게임 플레이",
      "soundadapt-gaming": "게임 속 더 좋은 사운드",
      "batteryadapt": "노트북 배터리를 더 오래",
      "coloradapt-mobile": "내 기기에서 완벽한 색상"
    }
  },
  "fr": {
    "nav": {
      "products": "Produits",
      "privacy": "Confidentialité",
      "theme": "Changer de thème",
      "language": "Langue"
    },
    "hero": {
      "badge": "Studio de développement innovant",
      "title": "Construire l’",
      "highlight": "avenir",
      "subtitle": " des produits numériques",
      "text": "Nous transformons des idées audacieuses en entreprises prospères et en solutions logicielles avancées. Du MVP au leader du marché, nous sommes votre partenaire technologique de confiance.",
      "start": "Lancez votre projet",
      "more": "Nos produits"
    },
    "about": {
      "quote": "Après avoir obtenu une reconnaissance mondiale grâce à la musique, j’ai fondé PetrovskiStudio — un pôle d’innovation à la croisée de la technologie et de la créativité. Nous sommes spécialisés dans le développement d’applications et de startups de pointe, et nous créons des projets audio et vidéo de classe mondiale. Notre travail trouve un écho dans le monde entier, en unissant la technologie et l’art, et nous sommes en route vers des découvertes révolutionnaires. Merci de faire partie de ce voyage.",
      "author": "Yuri Petrovski"
    },
    "products": {
      "title": "Produits",
      "text": "Tout fonctionne sur votre appareil. Pas de compte, pas de publicité, pas de pistage.",
      "extensions": "Extensions de navigateur",
      "apps": "Applications de bureau",
      "mobile": "Applications mobiles",
      "soon": "Bientôt disponible"
    },
    "privacy": {
      "title": "Politique de confidentialité",
      "sections": [
        {
          "title": "Aucune collecte de données",
          "body": "Nous ne collectons, ne stockons et ne transmettons aucune information personnelle."
        },
        {
          "title": "Architecture locale",
          "body": "Vos paramètres et préférences restent strictement sur votre appareil. Nos applications et extensions fonctionnent localement dans votre navigateur ou votre système d’exploitation."
        },
        {
          "title": "Autorisations minimales",
          "body": "Nous ne demandons que les autorisations strictement nécessaires aux fonctionnalités principales. Tout traitement temporaire des données s’effectue localement en mémoire, jamais sur des serveurs externes."
        },
        {
          "title": "Aucun partage avec des tiers",
          "body": "Comme nous ne collectons pas vos données, nous ne vendons, ne partageons et ne transférons jamais rien à des tiers."
        },
        {
          "title": "Contrôle total",
          "body": "Vos données vous appartiennent. Désinstaller le logiciel ou vider le stockage du navigateur supprime tout définitivement."
        }
      ]
    },
    "footer": {
      "rights": "© 2027 PetrovskiStudio. Fondé par Yuri Petrovski."
    },
    "taglines": {
      "musicadapt": "Mastering musical dans le navigateur",
      "soundadapt": "Contrôle du son sur n’importe quel site",
      "coloradapt": "Des couleurs confortables sur chaque page",
      "fotoadapt": "Éditeur photo dans le navigateur",
      "cryptoforecaster": "Prévisions de prix des cryptomonnaies",
      "matrixrain": "Effet de pluie numérique",
      "graytrigger": "Moins de temps sur les sites qui distraient",
      "coloradapt-gaming": "Filtre de couleur pour les jeux et le bureau",
      "frameadapt": "Un gameplay plus fluide",
      "soundadapt-gaming": "Un meilleur son dans les jeux",
      "batteryadapt": "Plus d’autonomie pour votre portable",
      "coloradapt-mobile": "Des couleurs parfaites sur votre appareil"
    }
  },
  "te": {
    "nav": {
      "products": "ఉత్పత్తులు",
      "privacy": "గోప్యతా విధానం",
      "theme": "థీమ్ మార్చండి",
      "language": "భాష"
    },
    "hero": {
      "badge": "వినూత్న డెవలప్‌మెంట్ స్టూడియో",
      "title": "డిజిటల్ ఉత్పత్తుల ",
      "highlight": "భవిష్యత్తును",
      "subtitle": " నిర్మిస్తున్నాం",
      "text": "మేము సాహసోపేతమైన ఆలోచనలను విజయవంతమైన కంపెనీలుగా, అధునాతన సాఫ్ట్‌వేర్ పరిష్కారాలుగా మారుస్తాము. MVP నుండి మార్కెట్ లీడర్ వరకు, మేము మీ నమ్మకమైన టెక్నాలజీ భాగస్వామి.",
      "start": "మీ ప్రాజెక్ట్ ప్రారంభించండి",
      "more": "మా ఉత్పత్తులు"
    },
    "about": {
      "quote": "సంగీతంలో ప్రపంచవ్యాప్త గుర్తింపు పొందిన తర్వాత, నేను PetrovskiStudio ను స్థాపించాను — సాంకేతికత మరియు సృజనాత్మకత కలిసే చోట ఒక ఇన్నోవేషన్ కేంద్రం. అత్యాధునిక అప్లికేషన్లు మరియు స్టార్టప్‌లను అభివృద్ధి చేయడంలో మేము ప్రత్యేకత కలిగి ఉన్నాము, అలాగే ప్రపంచ స్థాయి ఆడియో మరియు వీడియో ప్రాజెక్ట్‌లను రూపొందిస్తాము. సాంకేతికతను కళతో కలుపుతూ మా పని ప్రపంచవ్యాప్తంగా ప్రతిధ్వనిస్తోంది, మరియు మేము విప్లవాత్మక ఆవిష్కరణల దారిలో ఉన్నాము. ఈ ప్రయాణంలో భాగమైనందుకు ధన్యవాదాలు.",
      "author": "Yuri Petrovski"
    },
    "products": {
      "title": "ఉత్పత్తులు",
      "text": "అన్నీ మీ పరికరంలోనే పనిచేస్తాయి. ఖాతాలు లేవు, ప్రకటనలు లేవు, ట్రాకింగ్ లేదు.",
      "extensions": "బ్రౌజర్ ఎక్స్‌టెన్షన్లు",
      "apps": "డెస్క్‌టాప్ యాప్‌లు",
      "mobile": "మొబైల్ యాప్‌లు",
      "soon": "త్వరలో వస్తుంది"
    },
    "privacy": {
      "title": "గోప్యతా విధానం",
      "sections": [
        {
          "title": "డేటా సేకరణ శూన్యం",
          "body": "మేము ఎలాంటి వ్యక్తిగత సమాచారాన్ని సేకరించము, నిల్వ చేయము లేదా పంపము."
        },
        {
          "title": "లోకల్-ఫస్ట్ ఆర్కిటెక్చర్",
          "body": "మీ సెట్టింగ్‌లు మరియు ప్రాధాన్యతలు మీ పరికరంలోనే ఉంటాయి. మా యాప్‌లు మరియు ఎక్స్‌టెన్షన్లు మీ బ్రౌజర్ లేదా ఆపరేటింగ్ సిస్టమ్‌లో లోకల్‌గా పనిచేస్తాయి."
        },
        {
          "title": "కనీస అనుమతులు",
          "body": "ప్రధాన ఫీచర్లకు ఖచ్చితంగా అవసరమైన అనుమతులను మాత్రమే మేము అడుగుతాము. తాత్కాలిక డేటా ప్రాసెసింగ్ ఏదైనా మెమరీలో లోకల్‌గానే జరుగుతుంది, బయటి సర్వర్లలో ఎప్పుడూ జరగదు."
        },
        {
          "title": "మూడో పక్షాలతో పంచుకోవడం లేదు",
          "body": "మేము మీ డేటాను సేకరించము కాబట్టి, మూడో పక్షాలకు ఏదీ అమ్మము, పంచుకోము లేదా బదిలీ చేయము."
        },
        {
          "title": "పూర్తి నియంత్రణ",
          "body": "మీ డేటా మీదే. సాఫ్ట్‌వేర్‌ను అన్‌ఇన్‌స్టాల్ చేయడం లేదా బ్రౌజర్ స్టోరేజ్‌ను క్లియర్ చేయడం ద్వారా అన్నీ శాశ్వతంగా తొలగిపోతాయి."
        }
      ]
    },
    "footer": {
      "rights": "© 2027 PetrovskiStudio. వ్యవస్థాపకుడు Yuri Petrovski."
    },
    "taglines": {
      "musicadapt": "బ్రౌజర్‌లో మ్యూజిక్ మాస్టరింగ్",
      "soundadapt": "ఏ వెబ్‌సైట్‌లోనైనా సౌండ్ నియంత్రణ",
      "coloradapt": "ప్రతి పేజీలో సౌకర్యవంతమైన రంగులు",
      "fotoadapt": "బ్రౌజర్‌లో ఫోటో ఎడిటర్",
      "cryptoforecaster": "క్రిప్టో ధరల అంచనాలు",
      "matrixrain": "డిజిటల్ రెయిన్ ఎఫెక్ట్",
      "graytrigger": "దృష్టి మరల్చే సైట్లలో తక్కువ సమయం",
      "coloradapt-gaming": "గేమ్‌లు మరియు డెస్క్‌టాప్ కోసం కలర్ ఫిల్టర్",
      "frameadapt": "మరింత సాఫీగా గేమ్‌ప్లే",
      "soundadapt-gaming": "గేమ్‌లలో మెరుగైన సౌండ్",
      "batteryadapt": "ల్యాప్‌టాప్ బ్యాటరీ ఎక్కువసేపు",
      "coloradapt-mobile": "మీ పరికరంలో పర్ఫెక్ట్ రంగులు"
    }
  },
  "tr": {
    "nav": {
      "products": "Ürünler",
      "privacy": "Gizlilik Politikası",
      "theme": "Temayı değiştir",
      "language": "Dil"
    },
    "hero": {
      "badge": "Yenilikçi Geliştirme Stüdyosu",
      "title": "Dijital ürünlerin ",
      "highlight": "geleceğini",
      "subtitle": " inşa ediyoruz",
      "text": "Cesur fikirleri başarılı şirketlere ve gelişmiş yazılım çözümlerine dönüştürüyoruz. MVP'den pazar liderliğine kadar güvenilir teknoloji ortağınızız.",
      "start": "Projenizi başlatın",
      "more": "Ürünlerimiz"
    },
    "about": {
      "quote": "Müzikte dünya çapında tanınırlık kazandıktan sonra, teknoloji ile yaratıcılığın kesiştiği noktada bir inovasyon merkezi olan PetrovskiStudio'yu kurdum. Son teknoloji uygulamalar ve girişimler geliştirmede uzmanız; ayrıca dünya standartlarında ses ve video projeleri üretiyoruz. Çalışmalarımız teknolojiyi sanatla birleştirerek tüm dünyada yankı uyandırıyor ve çığır açan keşiflere doğru ilerliyoruz. Bu yolculuğun bir parçası olduğunuz için teşekkürler.",
      "author": "Yuri Petrovski"
    },
    "products": {
      "title": "Ürünler",
      "text": "Her şey cihazınızda çalışır. Hesap yok, reklam yok, takip yok.",
      "extensions": "Tarayıcı uzantıları",
      "apps": "Masaüstü uygulamaları",
      "mobile": "Mobil uygulamalar",
      "soon": "Yakında"
    },
    "privacy": {
      "title": "Gizlilik Politikası",
      "sections": [
        {
          "title": "Sıfır veri toplama",
          "body": "Hiçbir kişisel bilgiyi toplamıyor, saklamıyor veya iletmiyoruz."
        },
        {
          "title": "Yerel öncelikli mimari",
          "body": "Ayarlarınız ve tercihleriniz yalnızca cihazınızda kalır. Uygulamalarımız ve uzantılarımız tarayıcınızda veya işletim sisteminizde yerel olarak çalışır."
        },
        {
          "title": "Asgari izinler",
          "body": "Yalnızca temel işlevler için kesinlikle gerekli olan izinleri isteriz. Geçici veri işleme her zaman yerel olarak bellekte gerçekleşir, asla harici sunucularda değil."
        },
        {
          "title": "Üçüncü taraflarla paylaşım yok",
          "body": "Verilerinizi toplamadığımız için üçüncü taraflara hiçbir şey satmaz, paylaşmaz veya aktarmayız."
        },
        {
          "title": "Tam kontrol",
          "body": "Verileriniz size aittir. Yazılımı kaldırmak veya tarayıcı depolamasını temizlemek her şeyi kalıcı olarak siler."
        }
      ]
    },
    "footer": {
      "rights": "© 2027 PetrovskiStudio. Kurucu: Yuri Petrovski."
    },
    "taglines": {
      "musicadapt": "Tarayıcıda müzik mastering",
      "soundadapt": "Her sitede ses kontrolü",
      "coloradapt": "Her sayfada rahat renkler",
      "fotoadapt": "Tarayıcıda fotoğraf düzenleyici",
      "cryptoforecaster": "Kripto fiyat tahminleri",
      "matrixrain": "Dijital yağmur efekti",
      "graytrigger": "Dikkat dağıtan sitelerde daha az zaman",
      "coloradapt-gaming": "Oyunlar ve masaüstü için renk filtresi",
      "frameadapt": "Daha akıcı oyun deneyimi",
      "soundadapt-gaming": "Oyunlarda daha iyi ses",
      "batteryadapt": "Dizüstü bilgisayarda daha uzun pil ömrü",
      "coloradapt-mobile": "Cihazınızda kusursuz renkler"
    }
  },
  "vi": {
    "nav": {
      "products": "Sản phẩm",
      "privacy": "Quyền riêng tư",
      "theme": "Đổi giao diện",
      "language": "Ngôn ngữ"
    },
    "hero": {
      "badge": "Studio phát triển sáng tạo",
      "title": "Kiến tạo ",
      "highlight": "tương lai",
      "subtitle": " của sản phẩm số",
      "text": "Chúng tôi biến những ý tưởng táo bạo thành các doanh nghiệp phát triển mạnh và giải pháp phần mềm tiên tiến. Từ MVP đến vị trí dẫn đầu thị trường, chúng tôi là đối tác công nghệ đáng tin cậy của bạn.",
      "start": "Bắt đầu dự án của bạn",
      "more": "Sản phẩm của chúng tôi"
    },
    "about": {
      "quote": "Sau khi đạt được sự công nhận toàn cầu với âm nhạc, tôi đã thành lập PetrovskiStudio — một trung tâm đổi mới nằm ở giao điểm giữa công nghệ và sáng tạo. Chúng tôi chuyên phát triển các ứng dụng và startup tiên tiến, đồng thời tạo ra những dự án âm thanh và video đẳng cấp thế giới. Công việc của chúng tôi lan tỏa khắp thế giới, kết hợp công nghệ với nghệ thuật, và chúng tôi đang trên con đường hướng tới những khám phá đột phá. Cảm ơn bạn đã là một phần của hành trình này.",
      "author": "Yuri Petrovski"
    },
    "products": {
      "title": "Sản phẩm",
      "text": "Mọi thứ chạy trên thiết bị của bạn. Không tài khoản, không quảng cáo, không theo dõi.",
      "extensions": "Tiện ích trình duyệt",
      "apps": "Ứng dụng máy tính",
      "mobile": "Ứng dụng di động",
      "soon": "Sắp ra mắt"
    },
    "privacy": {
      "title": "Chính sách quyền riêng tư",
      "sections": [
        {
          "title": "Không thu thập dữ liệu",
          "body": "Chúng tôi không thu thập, lưu trữ hay truyền bất kỳ thông tin cá nhân nào."
        },
        {
          "title": "Kiến trúc ưu tiên cục bộ",
          "body": "Cài đặt và tùy chọn của bạn chỉ được lưu trên thiết bị của bạn. Ứng dụng và tiện ích của chúng tôi chạy cục bộ trong trình duyệt hoặc hệ điều hành của bạn."
        },
        {
          "title": "Quyền tối thiểu",
          "body": "Chúng tôi chỉ yêu cầu những quyền thực sự cần thiết cho các chức năng chính. Mọi xử lý dữ liệu tạm thời đều diễn ra cục bộ trong bộ nhớ, không bao giờ trên máy chủ bên ngoài."
        },
        {
          "title": "Không chia sẻ với bên thứ ba",
          "body": "Vì chúng tôi không thu thập dữ liệu của bạn, chúng tôi không bao giờ bán, chia sẻ hay chuyển giao bất cứ thứ gì cho bên thứ ba."
        },
        {
          "title": "Toàn quyền kiểm soát",
          "body": "Dữ liệu là của bạn. Gỡ cài đặt phần mềm hoặc xóa bộ nhớ trình duyệt sẽ xóa vĩnh viễn mọi thứ."
        }
      ]
    },
    "footer": {
      "rights": "© 2027 PetrovskiStudio. Người sáng lập: Yuri Petrovski."
    },
    "taglines": {
      "musicadapt": "Mastering nhạc ngay trong trình duyệt",
      "soundadapt": "Điều chỉnh âm thanh trên mọi trang web",
      "coloradapt": "Màu sắc dễ chịu trên mọi trang",
      "fotoadapt": "Trình chỉnh sửa ảnh trong trình duyệt",
      "cryptoforecaster": "Dự báo giá tiền mã hóa",
      "matrixrain": "Hiệu ứng mưa kỹ thuật số",
      "graytrigger": "Bớt thời gian trên các trang gây xao nhãng",
      "coloradapt-gaming": "Bộ lọc màu cho game và màn hình máy tính",
      "frameadapt": "Chơi game mượt mà hơn",
      "soundadapt-gaming": "Âm thanh hay hơn khi chơi game",
      "batteryadapt": "Pin laptop dùng lâu hơn",
      "coloradapt-mobile": "Màu sắc hoàn hảo trên thiết bị của bạn"
    }
  },
  "it": {
    "nav": {
      "products": "Prodotti",
      "privacy": "Privacy",
      "theme": "Cambia tema",
      "language": "Lingua"
    },
    "hero": {
      "badge": "Studio di sviluppo innovativo",
      "title": "Costruiamo il ",
      "highlight": "futuro",
      "subtitle": " dei prodotti digitali",
      "text": "Trasformiamo idee audaci in aziende di successo e soluzioni software avanzate. Dall’MVP alla leadership di mercato, siamo il tuo partner tecnologico di fiducia.",
      "start": "Avvia il tuo progetto",
      "more": "I nostri prodotti"
    },
    "about": {
      "quote": "Dopo aver ottenuto un riconoscimento mondiale con la musica, ho fondato PetrovskiStudio — un polo di innovazione all’incrocio tra tecnologia e creatività. Siamo specializzati nello sviluppo di applicazioni e startup all’avanguardia e realizziamo progetti audio e video di livello mondiale. Il nostro lavoro trova riscontro in tutto il mondo, unendo tecnologia e arte, e siamo sulla strada verso scoperte rivoluzionarie. Grazie per far parte di questo viaggio.",
      "author": "Yuri Petrovski"
    },
    "products": {
      "title": "Prodotti",
      "text": "Tutto funziona sul tuo dispositivo. Niente account, niente pubblicità, nessun tracciamento.",
      "extensions": "Estensioni per il browser",
      "apps": "App desktop",
      "mobile": "App mobili",
      "soon": "Prossimamente"
    },
    "privacy": {
      "title": "Informativa sulla privacy",
      "sections": [
        {
          "title": "Nessuna raccolta di dati",
          "body": "Non raccogliamo, archiviamo né trasmettiamo alcuna informazione personale."
        },
        {
          "title": "Architettura local-first",
          "body": "Le tue impostazioni e preferenze restano esclusivamente sul tuo dispositivo. Le nostre app ed estensioni funzionano localmente nel tuo browser o sistema operativo."
        },
        {
          "title": "Autorizzazioni minime",
          "body": "Richiediamo solo le autorizzazioni strettamente necessarie per le funzioni principali. Qualsiasi elaborazione temporanea dei dati avviene localmente in memoria, mai su server esterni."
        },
        {
          "title": "Nessuna condivisione con terze parti",
          "body": "Poiché non raccogliamo i tuoi dati, non vendiamo, condividiamo né trasferiamo mai nulla a terze parti."
        },
        {
          "title": "Controllo totale",
          "body": "I tuoi dati ti appartengono. Disinstallare il software o cancellare la memoria del browser elimina tutto in modo permanente."
        }
      ]
    },
    "footer": {
      "rights": "© 2027 PetrovskiStudio. Fondato da Yuri Petrovski."
    },
    "taglines": {
      "musicadapt": "Mastering musicale nel browser",
      "soundadapt": "Controllo del suono su qualsiasi sito",
      "coloradapt": "Colori confortevoli su ogni pagina",
      "fotoadapt": "Editor di foto nel browser",
      "cryptoforecaster": "Previsioni dei prezzi delle criptovalute",
      "matrixrain": "Effetto pioggia digitale",
      "graytrigger": "Meno tempo sui siti che distraggono",
      "coloradapt-gaming": "Filtro colore per giochi e desktop",
      "frameadapt": "Gameplay più fluido",
      "soundadapt-gaming": "Audio migliore nei giochi",
      "batteryadapt": "Più autonomia per il portatile",
      "coloradapt-mobile": "Colori perfetti sul tuo dispositivo"
    }
  },
  "th": {
    "nav": {
      "products": "ผลิตภัณฑ์",
      "privacy": "ความเป็นส่วนตัว",
      "theme": "เปลี่ยนธีม",
      "language": "ภาษา"
    },
    "hero": {
      "badge": "สตูดิโอพัฒนาเชิงนวัตกรรม",
      "title": "สร้าง",
      "highlight": "อนาคต",
      "subtitle": "ของผลิตภัณฑ์ดิจิทัล",
      "text": "เราเปลี่ยนไอเดียที่กล้าหาญให้กลายเป็นธุรกิจที่เติบโตและโซลูชันซอฟต์แวร์ขั้นสูง ตั้งแต่ MVP ไปจนถึงผู้นำตลาด เราคือพันธมิตรด้านเทคโนโลยีที่คุณไว้วางใจได้",
      "start": "เริ่มโปรเจกต์ของคุณ",
      "more": "ผลิตภัณฑ์ของเรา"
    },
    "about": {
      "quote": "หลังจากได้รับการยอมรับในระดับโลกจากดนตรี ผมได้ก่อตั้ง PetrovskiStudio ศูนย์กลางนวัตกรรม ณ จุดบรรจบของเทคโนโลยีและความคิดสร้างสรรค์ เราเชี่ยวชาญด้านการพัฒนาแอปพลิเคชันและสตาร์ทอัพที่ล้ำสมัย และสร้างสรรค์ผลงานด้านเสียงและวิดีโอระดับโลก ผลงานของเราได้รับการตอบรับทั่วโลกด้วยการผสานเทคโนโลยีเข้ากับศิลปะ และเรากำลังมุ่งสู่การค้นพบครั้งสำคัญ ขอบคุณที่เป็นส่วนหนึ่งของการเดินทางครั้งนี้",
      "author": "Yuri Petrovski"
    },
    "products": {
      "title": "ผลิตภัณฑ์",
      "text": "ทุกอย่างทำงานบนอุปกรณ์ของคุณ ไม่ต้องมีบัญชี ไม่มีโฆษณา ไม่มีการติดตาม",
      "extensions": "ส่วนขยายเบราว์เซอร์",
      "apps": "แอปเดสก์ท็อป",
      "mobile": "แอปมือถือ",
      "soon": "เร็วๆ นี้"
    },
    "privacy": {
      "title": "นโยบายความเป็นส่วนตัว",
      "sections": [
        {
          "title": "ไม่เก็บข้อมูลใดๆ",
          "body": "เราไม่เก็บรวบรวม จัดเก็บ หรือส่งต่อข้อมูลส่วนบุคคลใดๆ"
        },
        {
          "title": "ทำงานบนเครื่องเป็นหลัก",
          "body": "การตั้งค่าและค่ากำหนดของคุณอยู่บนอุปกรณ์ของคุณเท่านั้น แอปและส่วนขยายของเราทำงานภายในเบราว์เซอร์หรือระบบปฏิบัติการของคุณ"
        },
        {
          "title": "สิทธิ์เท่าที่จำเป็น",
          "body": "เราขอเฉพาะสิทธิ์ที่จำเป็นจริงๆ สำหรับฟังก์ชันหลัก การประมวลผลข้อมูลชั่วคราวใดๆ เกิดขึ้นภายในหน่วยความจำของเครื่อง ไม่เคยเกิดขึ้นบนเซิร์ฟเวอร์ภายนอก"
        },
        {
          "title": "ไม่แชร์กับบุคคลที่สาม",
          "body": "เนื่องจากเราไม่เก็บข้อมูลของคุณ เราจึงไม่เคยขาย แชร์ หรือโอนสิ่งใดให้บุคคลที่สาม"
        },
        {
          "title": "ควบคุมได้ทั้งหมด",
          "body": "ข้อมูลเป็นของคุณ การถอนการติดตั้งซอฟต์แวร์หรือล้างพื้นที่จัดเก็บของเบราว์เซอร์จะลบทุกอย่างอย่างถาวร"
        }
      ]
    },
    "footer": {
      "rights": "© 2027 PetrovskiStudio ก่อตั้งโดย Yuri Petrovski"
    },
    "taglines": {
      "musicadapt": "มาสเตอริงเพลงในเบราว์เซอร์",
      "soundadapt": "ควบคุมเสียงได้ทุกเว็บไซต์",
      "coloradapt": "สีที่สบายตาในทุกหน้า",
      "fotoadapt": "โปรแกรมแต่งภาพในเบราว์เซอร์",
      "cryptoforecaster": "พยากรณ์ราคาคริปโต",
      "matrixrain": "เอฟเฟกต์ฝนดิจิทัล",
      "graytrigger": "ใช้เวลาน้อยลงกับเว็บที่ทำให้วอกแวก",
      "coloradapt-gaming": "ฟิลเตอร์สีสำหรับเกมและเดสก์ท็อป",
      "frameadapt": "เล่นเกมลื่นไหลขึ้น",
      "soundadapt-gaming": "เสียงในเกมดีขึ้น",
      "batteryadapt": "แบตเตอรี่แล็ปท็อปอยู่ได้นานขึ้น",
      "coloradapt-mobile": "สีที่สมบูรณ์แบบบนอุปกรณ์ของคุณ"
    }
  },
  "uk": {
    "nav": {
      "products": "Продукти",
      "privacy": "Конфіденційність",
      "theme": "Змінити тему",
      "language": "Мова"
    },
    "hero": {
      "badge": "Інноваційна студія розробки",
      "title": "Будуємо ",
      "highlight": "майбутнє",
      "subtitle": " цифрових продуктів",
      "text": "Ми перетворюємо сміливі ідеї на успішні компанії та передові програмні рішення. Від MVP до лідера ринку — ми ваш надійний технологічний партнер.",
      "start": "Почніть свій проєкт",
      "more": "Наші продукти"
    },
    "about": {
      "quote": "Здобувши світове визнання в музиці, я заснував PetrovskiStudio — інноваційний центр на перетині технологій і творчості. Ми спеціалізуємося на розробці передових застосунків і стартапів, а також створюємо аудіо- та відеопроєкти світового рівня. Наша робота знаходить відгук у всьому світі, поєднуючи технології з мистецтвом, і ми на шляху до проривних відкриттів. Дякуємо, що ви є частиною цієї подорожі.",
      "author": "Юрій Петровський"
    },
    "products": {
      "title": "Продукти",
      "text": "Усе працює на вашому пристрої. Без акаунтів, реклами та стеження.",
      "extensions": "Розширення для браузера",
      "apps": "Програми для комп’ютера",
      "mobile": "Мобільні застосунки",
      "soon": "Незабаром"
    },
    "privacy": {
      "title": "Політика конфіденційності",
      "sections": [
        {
          "title": "Жодного збору даних",
          "body": "Ми не збираємо, не зберігаємо і не передаємо жодної особистої інформації."
        },
        {
          "title": "Усе працює локально",
          "body": "Ваші налаштування та вподобання зберігаються лише на вашому пристрої. Наші застосунки та розширення працюють локально у вашому браузері або системі."
        },
        {
          "title": "Мінімум дозволів",
          "body": "Ми запитуємо лише ті дозволи, без яких не працюють основні функції. Будь-яка тимчасова обробка даних відбувається локально в пам’яті пристрою і ніколи на зовнішніх серверах."
        },
        {
          "title": "Жодної передачі третім особам",
          "body": "Ми не збираємо ваші дані, тому ніколи нічого не продаємо, не передаємо і не надсилаємо третім особам."
        },
        {
          "title": "Повний контроль",
          "body": "Ваші дані належать вам. Видалення програми або очищення сховища браузера повністю стирає все."
        }
      ]
    },
    "footer": {
      "rights": "© 2027 PetrovskiStudio. Засновник — Юрій Петровський."
    },
    "taglines": {
      "musicadapt": "Мастеринг музики в браузері",
      "soundadapt": "Керування звуком на будь-якому сайті",
      "coloradapt": "Комфортні кольори на будь-якій сторінці",
      "fotoadapt": "Фоторедактор у браузері",
      "cryptoforecaster": "Прогнози цін криптовалют",
      "matrixrain": "Ефект цифрового дощу",
      "graytrigger": "Менше часу на сайтах, що відволікають",
      "coloradapt-gaming": "Колірний фільтр для ігор і робочого столу",
      "frameadapt": "Плавна картинка в іграх",
      "soundadapt-gaming": "Кращий звук в іграх",
      "batteryadapt": "Довша робота ноутбука від батареї",
      "coloradapt-mobile": "Ідеальні кольори на вашому пристрої"
    }
  },
  "my": {
    "nav": {
      "products": "ထုတ်ကုန်များ",
      "privacy": "ကိုယ်ရေးအချက်အလက်",
      "theme": "အပြင်အဆင် ပြောင်းရန်",
      "language": "ဘာသာစကား"
    },
    "hero": {
      "badge": "ဆန်းသစ်သော ဆော့ဖ်ဝဲ ဖန်တီးရေး စတူဒီယို",
      "title": "ဒစ်ဂျစ်တယ် ထုတ်ကုန်များ၏ ",
      "highlight": "အနာဂတ်",
      "subtitle": "ကို တည်ဆောက်နေသည်",
      "text": "ကျွန်ုပ်တို့သည် ရဲရင့်သော အတွေးအခေါ်များကို အောင်မြင်သော ကုမ္ပဏီများနှင့် အဆင့်မြင့် ဆော့ဖ်ဝဲ ဖြေရှင်းချက်များအဖြစ် ပြောင်းလဲပေးပါသည်။ MVP မှ ဈေးကွက် ခေါင်းဆောင်အဖြစ်အထိ ကျွန်ုပ်တို့သည် သင်ယုံကြည်ရသော နည်းပညာ မိတ်ဖက်ဖြစ်ပါသည်။",
      "start": "သင့်ပရောဂျက်ကို စတင်ပါ",
      "more": "ကျွန်ုပ်တို့၏ ထုတ်ကုန်များ"
    },
    "about": {
      "quote": "ဂီတဖြင့် ကမ္ဘာတစ်ဝှမ်း အသိအမှတ်ပြုခံရပြီးနောက် ကျွန်တော်သည် နည်းပညာနှင့် ဖန်တီးမှု ဆုံစည်းရာ ဆန်းသစ်တီထွင်မှု ဗဟိုဌာနဖြစ်သော PetrovskiStudio ကို တည်ထောင်ခဲ့ပါသည်။ ကျွန်ုပ်တို့သည် ခေတ်မီ အပလီကေးရှင်းများနှင့် စတားတပ်များ ဖန်တီးရာတွင် အထူးပြုပြီး ကမ္ဘာ့အဆင့်မီ အသံနှင့် ဗီဒီယို ပရောဂျက်များကိုလည်း ဖန်တီးပါသည်။ ကျွန်ုပ်တို့၏ လက်ရာများသည် နည်းပညာကို အနုပညာနှင့် ပေါင်းစပ်ကာ ကမ္ဘာတစ်ဝှမ်းတွင် ပဲ့တင်ထပ်နေပြီး ကျွန်ုပ်တို့သည် အရေးပါသော ရှာဖွေတွေ့ရှိမှုများဆီသို့ ဦးတည်နေပါသည်။ ဤခရီးစဉ်၏ တစ်စိတ်တစ်ပိုင်း ဖြစ်ပေးသည့်အတွက် ကျေးဇူးတင်ပါသည်။",
      "author": "Yuri Petrovski"
    },
    "products": {
      "title": "ထုတ်ကုန်များ",
      "text": "အားလုံး သင့်စက်ပေါ်တွင်သာ အလုပ်လုပ်ပါသည်။ အကောင့် မလိုပါ၊ ကြော်ငြာ မရှိပါ၊ ခြေရာခံခြင်း မရှိပါ။",
      "extensions": "ဘရောက်ဇာ တိုးချဲ့မှုများ",
      "apps": "ကွန်ပျူတာ အက်ပ်များ",
      "mobile": "မိုဘိုင်း အက်ပ်များ",
      "soon": "မကြာမီ ရောက်ရှိမည်"
    },
    "privacy": {
      "title": "ကိုယ်ရေးအချက်အလက် မူဝါဒ",
      "sections": [
        {
          "title": "ဒေတာ လုံးဝ မကောက်ယူပါ",
          "body": "ကျွန်ုပ်တို့သည် မည်သည့် ကိုယ်ရေးအချက်အလက်ကိုမျှ ကောက်ယူခြင်း၊ သိမ်းဆည်းခြင်း သို့မဟုတ် ပေးပို့ခြင်း မပြုပါ။"
        },
        {
          "title": "စက်ပေါ်တွင်သာ အလုပ်လုပ်သော ဒီဇိုင်း",
          "body": "သင့်ဆက်တင်များနှင့် ရွေးချယ်မှုများသည် သင့်စက်ပေါ်တွင်သာ ရှိနေပါသည်။ ကျွန်ုပ်တို့၏ အက်ပ်များနှင့် တိုးချဲ့မှုများသည် သင့်ဘရောက်ဇာ သို့မဟုတ် စနစ်အတွင်း၌သာ အလုပ်လုပ်ပါသည်။"
        },
        {
          "title": "အနည်းဆုံး ခွင့်ပြုချက်များ",
          "body": "အဓိက လုပ်ဆောင်ချက်များအတွက် မရှိမဖြစ်လိုအပ်သော ခွင့်ပြုချက်များကိုသာ တောင်းခံပါသည်။ ယာယီ ဒေတာ လုပ်ဆောင်မှုမှန်သမျှကို စက်၏ မှတ်ဉာဏ်အတွင်း၌သာ ပြုလုပ်ပြီး ပြင်ပ ဆာဗာများပေါ်တွင် ဘယ်တော့မှ မပြုလုပ်ပါ။"
        },
        {
          "title": "တတိယအဖွဲ့အစည်းများနှင့် မမျှဝေပါ",
          "body": "သင့်ဒေတာကို ကျွန်ုပ်တို့ မကောက်ယူသောကြောင့် မည်သည့်အရာကိုမျှ တတိယအဖွဲ့အစည်းများထံ ရောင်းချခြင်း၊ မျှဝေခြင်း သို့မဟုတ် လွှဲပြောင်းခြင်း ဘယ်တော့မှ မပြုပါ။"
        },
        {
          "title": "အပြည့်အဝ ထိန်းချုပ်နိုင်မှု",
          "body": "သင့်ဒေတာသည် သင့်ပိုင်ဆိုင်မှုဖြစ်ပါသည်။ ဆော့ဖ်ဝဲကို ဖြုတ်လိုက်ခြင်း သို့မဟုတ် ဘရောက်ဇာ သိုလှောင်မှုကို ရှင်းလင်းခြင်းဖြင့် အရာအားလုံး အပြီးတိုင် ပျက်သွားပါသည်။"
        }
      ]
    },
    "footer": {
      "rights": "© 2027 PetrovskiStudio။ တည်ထောင်သူ Yuri Petrovski။"
    },
    "taglines": {
      "musicadapt": "ဘရောက်ဇာထဲတွင် ဂီတ မာစတာလုပ်ခြင်း",
      "soundadapt": "မည်သည့်ဝက်ဘ်ဆိုက်တွင်မဆို အသံ ထိန်းချုပ်ခြင်း",
      "coloradapt": "စာမျက်နှာတိုင်းတွင် မျက်စိအေးသော အရောင်များ",
      "fotoadapt": "ဘရောက်ဇာထဲရှိ ဓာတ်ပုံ တည်းဖြတ်ကိရိယာ",
      "cryptoforecaster": "ခရစ်ပတို ဈေးနှုန်း ခန့်မှန်းချက်များ",
      "matrixrain": "ဒစ်ဂျစ်တယ် မိုးရွာ အကျိုးသက်ရောက်မှု",
      "graytrigger": "အာရုံပျံ့စေသော ဆိုက်များတွင် အချိန်နည်းစေခြင်း",
      "coloradapt-gaming": "ဂိမ်းနှင့် ဒက်စ်တော့အတွက် အရောင် စစ်ထုတ်ကိရိယာ",
      "frameadapt": "ပိုချောမွေ့သော ဂိမ်းကစားမှု",
      "soundadapt-gaming": "ဂိမ်းများတွင် ပိုကောင်းသော အသံ",
      "batteryadapt": "လက်ပ်တော့ ဘက်ထရီ ပိုခံစေခြင်း",
      "coloradapt-mobile": "သင့်စက်ပေါ်တွင် ပြီးပြည့်စုံသော အရောင်များ"
    }
  },
  "id": {
    "nav": {
      "products": "Produk",
      "privacy": "Kebijakan Privasi",
      "theme": "Ganti tema",
      "language": "Bahasa"
    },
    "hero": {
      "badge": "Studio pengembangan inovatif",
      "title": "Membangun ",
      "highlight": "Masa Depan",
      "subtitle": " Produk Digital",
      "text": "Kami mengubah ide-ide berani menjadi perusahaan yang berkembang dan solusi perangkat lunak yang canggih. Dari MVP hingga pemimpin pasar, kami adalah mitra teknologi tepercaya Anda.",
      "start": "Mulai proyek Anda",
      "more": "Produk kami"
    },
    "about": {
      "quote": "Setelah meraih pengakuan dunia lewat musik, saya mendirikan PetrovskiStudio — pusat inovasi di persimpangan teknologi dan kreativitas. Kami berspesialisasi dalam mengembangkan aplikasi dan startup mutakhir, serta menciptakan proyek audio dan video kelas dunia. Karya kami bergema di seluruh dunia, memadukan teknologi dengan seni, dan kami sedang menuju penemuan-penemuan terobosan. Terima kasih telah menjadi bagian dari perjalanan ini.",
      "author": "Yuri Petrovski"
    },
    "products": {
      "title": "Produk",
      "text": "Semuanya berjalan di perangkat Anda. Tanpa akun, tanpa iklan, tanpa pelacakan.",
      "extensions": "Ekstensi browser",
      "apps": "Aplikasi desktop",
      "mobile": "Aplikasi seluler",
      "soon": "Segera hadir"
    },
    "privacy": {
      "title": "Kebijakan Privasi",
      "sections": [
        {
          "title": "Tanpa pengumpulan data",
          "body": "Kami tidak mengumpulkan, menyimpan, atau mengirimkan informasi pribadi apa pun."
        },
        {
          "title": "Arsitektur lokal",
          "body": "Pengaturan dan preferensi Anda tetap hanya di perangkat Anda. Aplikasi dan ekstensi kami berjalan secara lokal di browser atau sistem operasi Anda."
        },
        {
          "title": "Izin minimal",
          "body": "Kami hanya meminta izin yang benar-benar diperlukan untuk fungsi utama. Setiap pemrosesan data sementara terjadi secara lokal di memori, tidak pernah di server eksternal."
        },
        {
          "title": "Tidak dibagikan ke pihak ketiga",
          "body": "Karena kami tidak mengumpulkan data Anda, kami tidak pernah menjual, membagikan, atau mentransfer apa pun kepada pihak ketiga."
        },
        {
          "title": "Kendali penuh",
          "body": "Data Anda adalah milik Anda. Mencopot pemasangan perangkat lunak atau menghapus penyimpanan browser akan menghapus semuanya secara permanen."
        }
      ]
    },
    "footer": {
      "rights": "© 2027 PetrovskiStudio. Didirikan oleh Yuri Petrovski."
    },
    "taglines": {
      "musicadapt": "Mastering musik di browser",
      "soundadapt": "Kontrol suara di situs web mana pun",
      "coloradapt": "Warna yang nyaman di setiap halaman",
      "fotoadapt": "Editor foto di browser",
      "cryptoforecaster": "Prakiraan harga kripto",
      "matrixrain": "Efek hujan digital",
      "graytrigger": "Lebih sedikit waktu di situs yang mengganggu",
      "coloradapt-gaming": "Filter warna untuk game dan desktop",
      "frameadapt": "Gameplay lebih mulus",
      "soundadapt-gaming": "Suara lebih baik dalam game",
      "batteryadapt": "Baterai laptop lebih tahan lama",
      "coloradapt-mobile": "Warna sempurna di perangkat Anda"
    }
  },
  "nl": {
    "nav": {
      "products": "Producten",
      "privacy": "Privacybeleid",
      "theme": "Thema wisselen",
      "language": "Taal"
    },
    "hero": {
      "badge": "Innovatieve ontwikkelstudio",
      "title": "Wij bouwen aan de ",
      "highlight": "toekomst",
      "subtitle": " van digitale producten",
      "text": "Wij maken van gedurfde ideeën succesvolle bedrijven en geavanceerde softwareoplossingen. Van MVP tot marktleider: wij zijn uw betrouwbare technologiepartner.",
      "start": "Start uw project",
      "more": "Onze producten"
    },
    "about": {
      "quote": "Nadat ik met mijn muziek wereldwijde erkenning had verworven, richtte ik PetrovskiStudio op — een innovatiecentrum op het snijvlak van technologie en creativiteit. Wij zijn gespecialiseerd in de ontwikkeling van vooruitstrevende applicaties en startups, en maken audio- en videoprojecten van wereldklasse. Ons werk vindt over de hele wereld weerklank, verbindt technologie met kunst, en we zijn op weg naar baanbrekende ontdekkingen. Bedankt dat u deel uitmaakt van deze reis.",
      "author": "Yuri Petrovski"
    },
    "products": {
      "title": "Producten",
      "text": "Alles draait op uw apparaat. Geen accounts, geen advertenties, geen tracking.",
      "extensions": "Browserextensies",
      "apps": "Desktop-apps",
      "mobile": "Mobiele apps",
      "soon": "Binnenkort"
    },
    "privacy": {
      "title": "Privacybeleid",
      "sections": [
        {
          "title": "Geen gegevensverzameling",
          "body": "Wij verzamelen, bewaren of verzenden geen enkele persoonlijke informatie."
        },
        {
          "title": "Local-first-architectuur",
          "body": "Uw instellingen en voorkeuren blijven uitsluitend op uw apparaat. Onze apps en extensies draaien lokaal in uw browser of besturingssysteem."
        },
        {
          "title": "Minimale machtigingen",
          "body": "Wij vragen alleen de machtigingen die strikt nodig zijn voor de kernfuncties. Elke tijdelijke gegevensverwerking gebeurt lokaal in het geheugen, nooit op externe servers."
        },
        {
          "title": "Niet gedeeld met derden",
          "body": "Omdat wij uw gegevens niet verzamelen, verkopen, delen of verstrekken wij nooit iets aan derden."
        },
        {
          "title": "Volledige controle",
          "body": "Uw gegevens zijn van u. Door de software te verwijderen of de browseropslag te wissen, wordt alles permanent verwijderd."
        }
      ]
    },
    "footer": {
      "rights": "© 2027 PetrovskiStudio. Opgericht door Yuri Petrovski."
    },
    "taglines": {
      "musicadapt": "Muziek masteren in de browser",
      "soundadapt": "Geluid regelen op elke website",
      "coloradapt": "Prettige kleuren op elke pagina",
      "fotoadapt": "Foto-editor in de browser",
      "cryptoforecaster": "Koersvoorspellingen voor crypto",
      "matrixrain": "Digitale-regeneffect",
      "graytrigger": "Minder tijd op afleidende websites",
      "coloradapt-gaming": "Kleurfilter voor games en bureaublad",
      "frameadapt": "Vloeiendere gameplay",
      "soundadapt-gaming": "Beter geluid in games",
      "batteryadapt": "Langere accuduur voor laptops",
      "coloradapt-mobile": "Perfecte kleuren op uw apparaat"
    }
  },
  "sv": {
    "nav": {
      "products": "Produkter",
      "privacy": "Integritetspolicy",
      "theme": "Byt tema",
      "language": "Språk"
    },
    "hero": {
      "badge": "Innovativ utvecklingsstudio",
      "title": "Vi bygger ",
      "highlight": "framtidens",
      "subtitle": " digitala produkter",
      "text": "Vi förvandlar djärva idéer till framgångsrika företag och avancerade mjukvarulösningar. Från MVP till marknadsledare är vi din pålitliga teknikpartner.",
      "start": "Starta ditt projekt",
      "more": "Våra produkter"
    },
    "about": {
      "quote": "Efter att ha nått världsomspännande erkännande med min musik grundade jag PetrovskiStudio — ett innovationscentrum där teknik och kreativitet möts. Vi är specialiserade på att utveckla banbrytande applikationer och startups, och vi skapar ljud- och videoprojekt i världsklass. Vårt arbete når ut över hela världen och förenar teknik med konst, och vi är på väg mot banbrytande upptäckter. Tack för att du är en del av den här resan.",
      "author": "Yuri Petrovski"
    },
    "products": {
      "title": "Produkter",
      "text": "Allt körs på din enhet. Inga konton, ingen reklam, ingen spårning.",
      "extensions": "Webbläsartillägg",
      "apps": "Datorappar",
      "mobile": "Mobilappar",
      "soon": "Kommer snart"
    },
    "privacy": {
      "title": "Integritetspolicy",
      "sections": [
        {
          "title": "Ingen datainsamling",
          "body": "Vi samlar inte in, lagrar eller överför några personuppgifter."
        },
        {
          "title": "Lokal arkitektur",
          "body": "Dina inställningar och preferenser stannar enbart på din enhet. Våra appar och tillägg körs lokalt i din webbläsare eller ditt operativsystem."
        },
        {
          "title": "Minimala behörigheter",
          "body": "Vi begär bara de behörigheter som är absolut nödvändiga för kärnfunktionerna. All tillfällig databehandling sker lokalt i minnet, aldrig på externa servrar."
        },
        {
          "title": "Ingen delning med tredje part",
          "body": "Eftersom vi inte samlar in dina uppgifter säljer, delar eller överför vi aldrig något till tredje part."
        },
        {
          "title": "Full kontroll",
          "body": "Dina data är dina. Att avinstallera programvaran eller rensa webbläsarens lagring tar bort allt permanent."
        }
      ]
    },
    "footer": {
      "rights": "© 2027 PetrovskiStudio. Grundat av Yuri Petrovski."
    },
    "taglines": {
      "musicadapt": "Musikmastering i webbläsaren",
      "soundadapt": "Ljudkontroll på alla webbplatser",
      "coloradapt": "Behagliga färger på varje sida",
      "fotoadapt": "Fotoredigerare i webbläsaren",
      "cryptoforecaster": "Prisprognoser för krypto",
      "matrixrain": "Digitalt regn-effekt",
      "graytrigger": "Mindre tid på distraherande webbplatser",
      "coloradapt-gaming": "Färgfilter för spel och skrivbord",
      "frameadapt": "Mjukare spelupplevelse",
      "soundadapt-gaming": "Bättre ljud i spel",
      "batteryadapt": "Längre batteritid för bärbara datorer",
      "coloradapt-mobile": "Perfekta färger på din enhet"
    }
  },
  "pl": {
    "nav": {
      "products": "Produkty",
      "privacy": "Prywatność",
      "theme": "Zmień motyw",
      "language": "Język"
    },
    "hero": {
      "badge": "Innowacyjne studio deweloperskie",
      "title": "Budujemy ",
      "highlight": "przyszłość",
      "subtitle": " produktów cyfrowych",
      "text": "Zamieniamy śmiałe pomysły w dobrze prosperujące firmy i zaawansowane rozwiązania programistyczne. Od MVP do lidera rynku — jesteśmy Twoim zaufanym partnerem technologicznym.",
      "start": "Rozpocznij swój projekt",
      "more": "Nasze produkty"
    },
    "about": {
      "quote": "Po zdobyciu światowego uznania dzięki muzyce założyłem PetrovskiStudio — centrum innowacji na styku technologii i kreatywności. Specjalizujemy się w tworzeniu nowoczesnych aplikacji i startupów, a także realizujemy projekty audio i wideo na światowym poziomie. Nasza praca znajduje oddźwięk na całym świecie, łącząc technologię ze sztuką, a my zmierzamy ku przełomowym odkryciom. Dziękuję, że jesteś częścią tej podróży.",
      "author": "Yuri Petrovski"
    },
    "products": {
      "title": "Produkty",
      "text": "Wszystko działa na Twoim urządzeniu. Bez kont, bez reklam, bez śledzenia.",
      "extensions": "Rozszerzenia przeglądarki",
      "apps": "Aplikacje na komputer",
      "mobile": "Aplikacje mobilne",
      "soon": "Wkrótce"
    },
    "privacy": {
      "title": "Polityka prywatności",
      "sections": [
        {
          "title": "Zero zbierania danych",
          "body": "Nie zbieramy, nie przechowujemy ani nie przesyłamy żadnych danych osobowych."
        },
        {
          "title": "Architektura lokalna",
          "body": "Twoje ustawienia i preferencje pozostają wyłącznie na Twoim urządzeniu. Nasze aplikacje i rozszerzenia działają lokalnie w przeglądarce lub systemie operacyjnym."
        },
        {
          "title": "Minimalne uprawnienia",
          "body": "Prosimy tylko o uprawnienia absolutnie niezbędne do działania podstawowych funkcji. Wszelkie tymczasowe przetwarzanie danych odbywa się lokalnie w pamięci, nigdy na zewnętrznych serwerach."
        },
        {
          "title": "Brak udostępniania stronom trzecim",
          "body": "Ponieważ nie zbieramy Twoich danych, nigdy niczego nie sprzedajemy, nie udostępniamy ani nie przekazujemy stronom trzecim."
        },
        {
          "title": "Pełna kontrola",
          "body": "Twoje dane należą do Ciebie. Odinstalowanie oprogramowania lub wyczyszczenie pamięci przeglądarki trwale usuwa wszystko."
        }
      ]
    },
    "footer": {
      "rights": "© 2027 PetrovskiStudio. Założyciel: Yuri Petrovski."
    },
    "taglines": {
      "musicadapt": "Mastering muzyki w przeglądarce",
      "soundadapt": "Kontrola dźwięku na każdej stronie",
      "coloradapt": "Komfortowe kolory na każdej stronie",
      "fotoadapt": "Edytor zdjęć w przeglądarce",
      "cryptoforecaster": "Prognozy cen kryptowalut",
      "matrixrain": "Efekt cyfrowego deszczu",
      "graytrigger": "Mniej czasu na rozpraszających stronach",
      "coloradapt-gaming": "Filtr kolorów do gier i pulpitu",
      "frameadapt": "Płynniejsza rozgrywka",
      "soundadapt-gaming": "Lepszy dźwięk w grach",
      "batteryadapt": "Dłuższa praca laptopa na baterii",
      "coloradapt-mobile": "Idealne kolory na Twoim urządzeniu"
    }
  },
  "ro": {
    "nav": {
      "products": "Produse",
      "privacy": "Confidențialitate",
      "theme": "Schimbă tema",
      "language": "Limbă"
    },
    "hero": {
      "badge": "Studio de dezvoltare inovator",
      "title": "Construim ",
      "highlight": "viitorul",
      "subtitle": " produselor digitale",
      "text": "Transformăm ideile îndrăznețe în companii prospere și soluții software avansate. De la MVP la liderul pieței, suntem partenerul tău tehnologic de încredere.",
      "start": "Începe-ți proiectul",
      "more": "Produsele noastre"
    },
    "about": {
      "quote": "După ce am obținut recunoaștere mondială în muzică, am fondat PetrovskiStudio — un centru de inovare la intersecția dintre tehnologie și creativitate. Suntem specializați în dezvoltarea de aplicații și startupuri de ultimă generație și creăm proiecte audio și video de nivel mondial. Munca noastră are ecou în întreaga lume, unind tehnologia cu arta, iar noi suntem pe drumul spre descoperiri revoluționare. Îți mulțumim că faci parte din această călătorie.",
      "author": "Yuri Petrovski"
    },
    "products": {
      "title": "Produse",
      "text": "Totul rulează pe dispozitivul tău. Fără conturi, fără reclame, fără urmărire.",
      "extensions": "Extensii de browser",
      "apps": "Aplicații pentru desktop",
      "mobile": "Aplicații mobile",
      "soon": "În curând"
    },
    "privacy": {
      "title": "Politica de confidențialitate",
      "sections": [
        {
          "title": "Zero colectare de date",
          "body": "Nu colectăm, nu stocăm și nu transmitem nicio informație personală."
        },
        {
          "title": "Arhitectură locală",
          "body": "Setările și preferințele tale rămân exclusiv pe dispozitivul tău. Aplicațiile și extensiile noastre rulează local în browser sau în sistemul de operare."
        },
        {
          "title": "Permisiuni minime",
          "body": "Solicităm doar permisiunile strict necesare pentru funcțiile de bază. Orice procesare temporară a datelor are loc local, în memorie, niciodată pe servere externe."
        },
        {
          "title": "Nicio partajare cu terți",
          "body": "Deoarece nu colectăm datele tale, nu vindem, nu partajăm și nu transferăm niciodată nimic către terți."
        },
        {
          "title": "Control total",
          "body": "Datele tale îți aparțin. Dezinstalarea software-ului sau ștergerea spațiului de stocare al browserului elimină totul definitiv."
        }
      ]
    },
    "footer": {
      "rights": "© 2027 PetrovskiStudio. Fondat de Yuri Petrovski."
    },
    "taglines": {
      "musicadapt": "Masterizare muzicală în browser",
      "soundadapt": "Controlul sunetului pe orice site",
      "coloradapt": "Culori confortabile pe fiecare pagină",
      "fotoadapt": "Editor foto în browser",
      "cryptoforecaster": "Prognoze de preț pentru criptomonede",
      "matrixrain": "Efect de ploaie digitală",
      "graytrigger": "Mai puțin timp pe site-urile care distrag",
      "coloradapt-gaming": "Filtru de culoare pentru jocuri și desktop",
      "frameadapt": "Joc mai fluid",
      "soundadapt-gaming": "Sunet mai bun în jocuri",
      "batteryadapt": "Autonomie mai mare pentru laptop",
      "coloradapt-mobile": "Culori perfecte pe dispozitivul tău"
    }
  },
  "hu": {
    "nav": {
      "products": "Termékek",
      "privacy": "Adatvédelem",
      "theme": "Téma váltása",
      "language": "Nyelv"
    },
    "hero": {
      "badge": "Innovatív fejlesztőstúdió",
      "title": "A digitális termékek ",
      "highlight": "jövőjét",
      "subtitle": " építjük",
      "text": "A merész ötleteket virágzó vállalkozásokká és fejlett szoftvermegoldásokká alakítjuk. Az MVP-től a piacvezető pozícióig megbízható technológiai partnere vagyunk.",
      "start": "Indítsa el projektjét",
      "more": "Termékeink"
    },
    "about": {
      "quote": "Miután a zenémmel világszerte elismerést szereztem, megalapítottam a PetrovskiStudiót — egy innovációs központot a technológia és a kreativitás találkozásánál. Élvonalbeli alkalmazások és startupok fejlesztésére specializálódtunk, emellett világszínvonalú audio- és videoprojekteket is készítünk. Munkánk az egész világon visszhangra talál, összekapcsolja a technológiát a művészettel, és úton vagyunk az áttörést jelentő felfedezések felé. Köszönjük, hogy része ennek az utazásnak.",
      "author": "Yuri Petrovski"
    },
    "products": {
      "title": "Termékek",
      "text": "Minden az Ön eszközén fut. Nincs fiók, nincs hirdetés, nincs követés.",
      "extensions": "Böngészőbővítmények",
      "apps": "Asztali alkalmazások",
      "mobile": "Mobilalkalmazások",
      "soon": "Hamarosan"
    },
    "privacy": {
      "title": "Adatvédelmi irányelvek",
      "sections": [
        {
          "title": "Nincs adatgyűjtés",
          "body": "Semmilyen személyes adatot nem gyűjtünk, tárolunk vagy továbbítunk."
        },
        {
          "title": "Helyi működés",
          "body": "Beállításai és preferenciái kizárólag az Ön eszközén maradnak. Alkalmazásaink és bővítményeink helyben futnak a böngészőjében vagy az operációs rendszerében."
        },
        {
          "title": "Minimális engedélyek",
          "body": "Csak az alapfunkciókhoz feltétlenül szükséges engedélyeket kérjük. Az esetleges ideiglenes adatfeldolgozás helyben, a memóriában történik, soha nem külső szervereken."
        },
        {
          "title": "Nincs megosztás harmadik felekkel",
          "body": "Mivel nem gyűjtjük az Ön adatait, soha semmit nem adunk el, osztunk meg vagy továbbítunk harmadik feleknek."
        },
        {
          "title": "Teljes kontroll",
          "body": "Az adatai az Önéi. A szoftver eltávolítása vagy a böngésző tárhelyének törlése mindent véglegesen eltávolít."
        }
      ]
    },
    "footer": {
      "rights": "© 2027 PetrovskiStudio. Alapító: Yuri Petrovski."
    },
    "taglines": {
      "musicadapt": "Zenei masterelés a böngészőben",
      "soundadapt": "Hangvezérlés bármely weboldalon",
      "coloradapt": "Kellemes színek minden oldalon",
      "fotoadapt": "Fotószerkesztő a böngészőben",
      "cryptoforecaster": "Kriptoárfolyam-előrejelzések",
      "matrixrain": "Digitális eső effekt",
      "graytrigger": "Kevesebb idő a figyelemelterelő oldalakon",
      "coloradapt-gaming": "Színszűrő játékokhoz és asztalhoz",
      "frameadapt": "Gördülékenyebb játékmenet",
      "soundadapt-gaming": "Jobb hang a játékokban",
      "batteryadapt": "Hosszabb akkuidő a laptopon",
      "coloradapt-mobile": "Tökéletes színek az eszközén"
    }
  },
  "cs": {
    "nav": {
      "products": "Produkty",
      "privacy": "Soukromí",
      "theme": "Přepnout motiv",
      "language": "Jazyk"
    },
    "hero": {
      "badge": "Inovativní vývojářské studio",
      "title": "Budujeme ",
      "highlight": "budoucnost",
      "subtitle": " digitálních produktů",
      "text": "Proměňujeme odvážné nápady v prosperující firmy a pokročilá softwarová řešení. Od MVP až po lídra trhu jsme vaším spolehlivým technologickým partnerem.",
      "start": "Začněte svůj projekt",
      "more": "Naše produkty"
    },
    "about": {
      "quote": "Poté, co jsem se svou hudbou získal celosvětové uznání, založil jsem PetrovskiStudio — inovační centrum na průsečíku technologií a kreativity. Specializujeme se na vývoj špičkových aplikací a startupů a vytváříme audio a video projekty světové úrovně. Naše práce nachází odezvu po celém světě, spojuje technologie s uměním a jsme na cestě k průlomovým objevům. Děkujeme, že jste součástí této cesty.",
      "author": "Yuri Petrovski"
    },
    "products": {
      "title": "Produkty",
      "text": "Vše běží ve vašem zařízení. Žádné účty, žádné reklamy, žádné sledování.",
      "extensions": "Rozšíření prohlížeče",
      "apps": "Aplikace pro počítač",
      "mobile": "Mobilní aplikace",
      "soon": "Již brzy"
    },
    "privacy": {
      "title": "Zásady ochrany soukromí",
      "sections": [
        {
          "title": "Žádný sběr dat",
          "body": "Neshromažďujeme, neukládáme ani nepřenášíme žádné osobní údaje."
        },
        {
          "title": "Lokální architektura",
          "body": "Vaše nastavení a předvolby zůstávají výhradně ve vašem zařízení. Naše aplikace a rozšíření běží lokálně ve vašem prohlížeči nebo operačním systému."
        },
        {
          "title": "Minimální oprávnění",
          "body": "Žádáme pouze o oprávnění nezbytně nutná pro hlavní funkce. Jakékoli dočasné zpracování dat probíhá lokálně v paměti, nikdy na externích serverech."
        },
        {
          "title": "Žádné sdílení s třetími stranami",
          "body": "Protože vaše data neshromažďujeme, nikdy nic neprodáváme, nesdílíme ani nepředáváme třetím stranám."
        },
        {
          "title": "Úplná kontrola",
          "body": "Vaše data patří vám. Odinstalováním softwaru nebo vymazáním úložiště prohlížeče se vše trvale odstraní."
        }
      ]
    },
    "footer": {
      "rights": "© 2027 PetrovskiStudio. Zakladatel: Yuri Petrovski."
    },
    "taglines": {
      "musicadapt": "Mastering hudby v prohlížeči",
      "soundadapt": "Ovládání zvuku na jakémkoli webu",
      "coloradapt": "Příjemné barvy na každé stránce",
      "fotoadapt": "Fotoeditor v prohlížeči",
      "cryptoforecaster": "Předpovědi cen kryptoměn",
      "matrixrain": "Efekt digitálního deště",
      "graytrigger": "Méně času na rozptylujících webech",
      "coloradapt-gaming": "Barevný filtr pro hry a plochu",
      "frameadapt": "Plynulejší hraní",
      "soundadapt-gaming": "Lepší zvuk ve hrách",
      "batteryadapt": "Delší výdrž baterie notebooku",
      "coloradapt-mobile": "Dokonalé barvy ve vašem zařízení"
    }
  },
  "el": {
    "nav": {
      "products": "Προϊόντα",
      "privacy": "Απόρρητο",
      "theme": "Αλλαγή θέματος",
      "language": "Γλώσσα"
    },
    "hero": {
      "badge": "Καινοτόμο στούντιο ανάπτυξης",
      "title": "Χτίζουμε το ",
      "highlight": "μέλλον",
      "subtitle": " των ψηφιακών προϊόντων",
      "text": "Μετατρέπουμε τολμηρές ιδέες σε ακμάζουσες εταιρείες και προηγμένες λύσεις λογισμικού. Από το MVP μέχρι την ηγεσία της αγοράς, είμαστε ο αξιόπιστος τεχνολογικός σας συνεργάτης.",
      "start": "Ξεκινήστε το έργο σας",
      "more": "Τα προϊόντα μας"
    },
    "about": {
      "quote": "Αφού κέρδισα παγκόσμια αναγνώριση με τη μουσική μου, ίδρυσα το PetrovskiStudio — ένα κέντρο καινοτομίας στο σημείο όπου συναντώνται η τεχνολογία και η δημιουργικότητα. Ειδικευόμαστε στην ανάπτυξη πρωτοποριακών εφαρμογών και startups, ενώ δημιουργούμε και έργα ήχου και βίντεο παγκόσμιας κλάσης. Η δουλειά μας βρίσκει απήχηση σε όλο τον κόσμο, ενώνοντας την τεχνολογία με την τέχνη, και βρισκόμαστε στον δρόμο για ριζοσπαστικές ανακαλύψεις. Σας ευχαριστούμε που είστε μέρος αυτού του ταξιδιού.",
      "author": "Yuri Petrovski"
    },
    "products": {
      "title": "Προϊόντα",
      "text": "Όλα λειτουργούν στη συσκευή σας. Χωρίς λογαριασμούς, χωρίς διαφημίσεις, χωρίς παρακολούθηση.",
      "extensions": "Επεκτάσεις προγράμματος περιήγησης",
      "apps": "Εφαρμογές υπολογιστή",
      "mobile": "Εφαρμογές κινητού",
      "soon": "Σύντομα"
    },
    "privacy": {
      "title": "Πολιτική απορρήτου",
      "sections": [
        {
          "title": "Μηδενική συλλογή δεδομένων",
          "body": "Δεν συλλέγουμε, δεν αποθηκεύουμε και δεν μεταδίδουμε καμία προσωπική πληροφορία."
        },
        {
          "title": "Τοπική αρχιτεκτονική",
          "body": "Οι ρυθμίσεις και οι προτιμήσεις σας παραμένουν αποκλειστικά στη συσκευή σας. Οι εφαρμογές και οι επεκτάσεις μας εκτελούνται τοπικά στο πρόγραμμα περιήγησης ή στο λειτουργικό σας σύστημα."
        },
        {
          "title": "Ελάχιστες άδειες",
          "body": "Ζητάμε μόνο τις άδειες που είναι απολύτως απαραίτητες για τις βασικές λειτουργίες. Κάθε προσωρινή επεξεργασία δεδομένων γίνεται τοπικά στη μνήμη, ποτέ σε εξωτερικούς διακομιστές."
        },
        {
          "title": "Καμία κοινοποίηση σε τρίτους",
          "body": "Επειδή δεν συλλέγουμε τα δεδομένα σας, δεν πουλάμε, δεν κοινοποιούμε και δεν μεταβιβάζουμε ποτέ τίποτα σε τρίτους."
        },
        {
          "title": "Πλήρης έλεγχος",
          "body": "Τα δεδομένα σας ανήκουν σε εσάς. Η απεγκατάσταση του λογισμικού ή η εκκαθάριση του χώρου αποθήκευσης του προγράμματος περιήγησης διαγράφει οριστικά τα πάντα."
        }
      ]
    },
    "footer": {
      "rights": "© 2027 PetrovskiStudio. Ιδρυτής: Yuri Petrovski."
    },
    "taglines": {
      "musicadapt": "Mastering μουσικής στο πρόγραμμα περιήγησης",
      "soundadapt": "Έλεγχος ήχου σε κάθε ιστότοπο",
      "coloradapt": "Άνετα χρώματα σε κάθε σελίδα",
      "fotoadapt": "Επεξεργαστής φωτογραφιών στο πρόγραμμα περιήγησης",
      "cryptoforecaster": "Προβλέψεις τιμών κρυπτονομισμάτων",
      "matrixrain": "Εφέ ψηφιακής βροχής",
      "graytrigger": "Λιγότερος χρόνος σε ιστότοπους που αποσπούν την προσοχή",
      "coloradapt-gaming": "Φίλτρο χρωμάτων για παιχνίδια και επιφάνεια εργασίας",
      "frameadapt": "Πιο ομαλό παιχνίδι",
      "soundadapt-gaming": "Καλύτερος ήχος στα παιχνίδια",
      "batteryadapt": "Μεγαλύτερη αυτονομία μπαταρίας φορητού υπολογιστή",
      "coloradapt-mobile": "Τέλεια χρώματα στη συσκευή σας"
    }
  },
  "he": {
    "nav": {
      "products": "מוצרים",
      "privacy": "פרטיות",
      "theme": "החלפת ערכת נושא",
      "language": "שפה"
    },
    "hero": {
      "badge": "סטודיו פיתוח חדשני",
      "title": "בונים את ",
      "highlight": "העתיד",
      "subtitle": " של המוצרים הדיגיטליים",
      "text": "אנחנו הופכים רעיונות נועזים לחברות משגשגות ולפתרונות תוכנה מתקדמים. מ־MVP ועד הובלת השוק, אנחנו השותף הטכנולוגי שאפשר לסמוך עליו.",
      "start": "התחילו את הפרויקט שלכם",
      "more": "המוצרים שלנו"
    },
    "about": {
      "quote": "לאחר שזכיתי להכרה עולמית במוזיקה, ייסדתי את PetrovskiStudio — מרכז חדשנות בצומת שבין טכנולוגיה ליצירתיות. אנחנו מתמחים בפיתוח אפליקציות וסטארט־אפים חדשניים, ויוצרים גם פרויקטים של אודיו ווידאו ברמה עולמית. העבודה שלנו מהדהדת ברחבי העולם, מחברת בין טכנולוגיה לאמנות, ואנחנו בדרך לתגליות פורצות דרך. תודה שאתם חלק מהמסע הזה.",
      "author": "Yuri Petrovski"
    },
    "products": {
      "title": "מוצרים",
      "text": "הכול פועל במכשיר שלכם. בלי חשבונות, בלי פרסומות, בלי מעקב.",
      "extensions": "תוספים לדפדפן",
      "apps": "אפליקציות למחשב",
      "mobile": "אפליקציות לנייד",
      "soon": "בקרוב"
    },
    "privacy": {
      "title": "מדיניות פרטיות",
      "sections": [
        {
          "title": "אפס איסוף נתונים",
          "body": "איננו אוספים, שומרים או מעבירים מידע אישי כלשהו."
        },
        {
          "title": "ארכיטקטורה מקומית",
          "body": "ההגדרות וההעדפות שלכם נשארות אך ורק במכשיר שלכם. האפליקציות והתוספים שלנו פועלים באופן מקומי בדפדפן או במערכת ההפעלה שלכם."
        },
        {
          "title": "הרשאות מינימליות",
          "body": "אנו מבקשים רק את ההרשאות ההכרחיות לחלוטין לפונקציות הליבה. כל עיבוד נתונים זמני מתבצע באופן מקומי בזיכרון, ולעולם לא בשרתים חיצוניים."
        },
        {
          "title": "ללא שיתוף עם צד שלישי",
          "body": "מכיוון שאיננו אוספים את הנתונים שלכם, איננו מוכרים, משתפים או מעבירים דבר לצד שלישי."
        },
        {
          "title": "שליטה מלאה",
          "body": "הנתונים שלכם שייכים לכם. הסרת התוכנה או ניקוי האחסון של הדפדפן מוחקים הכול לצמיתות."
        }
      ]
    },
    "footer": {
      "rights": "© 2027 PetrovskiStudio. נוסד על ידי Yuri Petrovski."
    },
    "taglines": {
      "musicadapt": "מאסטרינג למוזיקה בדפדפן",
      "soundadapt": "שליטה בצליל בכל אתר",
      "coloradapt": "צבעים נוחים בכל דף",
      "fotoadapt": "עורך תמונות בדפדפן",
      "cryptoforecaster": "תחזיות מחירים לקריפטו",
      "matrixrain": "אפקט גשם דיגיטלי",
      "graytrigger": "פחות זמן באתרים שמסיחים את הדעת",
      "coloradapt-gaming": "פילטר צבע למשחקים ולשולחן העבודה",
      "frameadapt": "משחק חלק יותר",
      "soundadapt-gaming": "סאונד טוב יותר במשחקים",
      "batteryadapt": "חיי סוללה ארוכים יותר למחשב הנייד",
      "coloradapt-mobile": "צבעים מושלמים במכשיר שלכם"
    }
  }
};
