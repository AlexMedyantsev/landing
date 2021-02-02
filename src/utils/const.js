import moment from 'moment';

export const skills = [
  {
    name: `HTML5`,
    info: ``,
    category: ``,
    icon: `../img/html5-icon.svg`,
  },
  {
    name: `CSS3`,
    info: ``,
    category: ``,
    icon: `../img/css3-icon.svg`,
  },
  {
    name: `Flexbox`,
    info: ``,
    category: ``,
    icon: `../img/flexbox-icon.svg`,
  },
  {
    name: `ES6+`,
    info: ``,
    category: ``,
    icon: `../img/es6-icon.svg`,
  },
  {
    name: `React + Redux`,
    info: ``,
    category: `js`,
    icon: `../img/react-icon.jpg`,
  },
  {
    name: `Sass`,
    info: ``,
    category: `css`,
    icon: `../img/sass-icon.svg`,
  },
  {
    name: `BEM`,
    info: ``,
    category: `html`,
    icon: `../img/bem-icon.svg`,
  },
];

export const projects = [
  {
    name: 'Glaccy Shop',
    skillsUsed: ['HTML5', 'CSS3', 'Flexbox',],
    // info: `Сайт для продажи мороженого. Присутствуют декоративные элементы, дропдауны и сложная форма`,
    // info: `Webite ice cream. There are decorative elements, dropdowns and a complex shape`,
    pages: [{
      link: 'https://alexmedyantsev.github.io/1123999-gllacy-26/#',
      image: `../img/glaccy-preview-1.png`,
    },
    {
      link: 'https://alexmedyantsev.github.io/1123999-gllacy-26/catalog.html',
      image: '../img/glaccy-preview-2.png',
    }]
  },
  {
    name: `Mobile App Pink`,
    // skillsUsed: ['Адаптивная верстка для трех категорий - mobile/tablet/desktop', 'Использована методология БЭМ', 'Препроцессор Sass', 'Верстка на Флексбоксах', 'Адаптивные изображения в зависимости от плотности пикселей'],
    skillsUsed: ['Adaptive layout for mobile/tablet/desktop', 'Used BEM Methodology', 'Used Sass preprocessor', 'Flexbox layout', 'Responsive images based on pixel density'],
    info: '',
    pages: [{
      link: 'https://alexmedyantsev.github.io/1123999-pink-18/index.html',
      image: '../img/pink-preview.png',
    }],
  },
  {
    name: `What to Watch`,
    // skillsUsed: ['Использован React + Redux', 'Маршрутизация на Router + History', 'Данные загружаются и отправляются на сервер', 'На каждый компонент написаны тесты и проверки проп тайпсов'],
    skillsUsed: ['Used React + Redux', ' Routing done via Router + History', 'Gets and send data using server', 'Each component has test and prop types checks'],
    info: 'Optimised for Desktop Only',
    pages: [{
      link: 'https://what-to-watch-74388.web.app/',
      image: '../img/wtw-preview.png',
    }],
  }
]