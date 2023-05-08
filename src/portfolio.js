import resume_en from './assets/cv_en.pdf';
import resume_ru from './assets/cv_ru.pdf';
import udemy from './assets/img/icons/common/udemy.svg';
import harvard from './assets/img/icons/common/harvard.svg';
import vladilen from './assets/img/icons/common/vladilen.png';
import plehanova from './assets/img/icons/common/plehanova.png';
import softconstruct from './assets/img/icons/common/softconstruct.svg';
import careerist from './assets/img/icons/common/careerist.svg';
import aimit from './assets/img/icons/common/aimit.svg';
import result from './assets/img/icons/common/result.jpeg';
export const greetings = {
  name: 'Vazgen Zadayan',
  en: resume_en,
  ru: resume_ru,
};

export const openSource = {
  githubUserName: 'VazgenZadayan',
};

export const socialLinks = {
  facebook: 'https://www.facebook.com/zadayan.vazgen/',
  github: 'https://github.com/VazgenZadayan',
  linkedin: 'https://www.linkedin.com/in/vazgenzadayan/',
  instagram: 'https://www.instagram.com/vazgen.zadayan/',
};

export const skillsSection = {
  softwareSkills: [
    {
      skillName: 'html-5',
      fontAwesomeClassname: 'vscode-icons:file-type-html',
    },
    {
      skillName: 'css3',
      fontAwesomeClassname: 'vscode-icons:file-type-css',
    },
    {
      skillName: 'sass',
      fontAwesomeClassname: 'logos:sass',
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'logos:javascript',
    },
    {
    	skillName: "TypeScript",
    	fontAwesomeClassname: "logos:typescript-icon",
    },
    {
      skillName: 'reactjs',
      fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
    },
    {
      skillName: 'redux',
      fontAwesomeClassname: 'vscode-icons:folder-type-light-redux',
    },
    {
      skillName: 'nextJS',
      fontAwesomeClassname: 'logos:nextjs-icon',
    },
    {
      skillName: 'nodejs',
      fontAwesomeClassname: 'logos:nodejs-icon',
    },
    {
      skillName: 'mongoDB',
      fontAwesomeClassname: 'vscode-icons:file-type-mongo',
    },
    {
      skillName: 'redis',
      fontAwesomeClassname: 'logos:redis',
    },
    {
      skillName: 'firebase',
      fontAwesomeClassname: 'logos:firebase',
    },
    {
      skillName: 'git',
      fontAwesomeClassname: 'logos:git-icon',
    },
  ],
};

export const educationInfo = [
  {
    schoolName: 'plehanova',
    subHeader: 'plehanova_fakultet',
    duration: '09/2012 - 06/2016',
    link: 'https://erevan.rea.ru/',
    logo: plehanova,
    descBullets: ['architecture', 'metodology', 'modeling'],
  },
  {
    schoolName: 'udemy',
    subHeader: 'js_basics',
    duration: '06/2020 - 10/2020',
    link: 'https://www.udemy.com/',
    logo: udemy,
    descBullets: ['fundaments', 'basics_principles_js', 'js_more'],
  },
  {
    schoolName: 'harvard',
    subHeader: 'cs50',
    duration: '07/2021 - 09/2021',
    link: 'https://cs50.harvard.edu/',
    logo: harvard,
    descBullets: [
      'arrays',
      'memory',
      'algorithms',
      'data_structures',
      'computer_science',
    ],
  },
  {
    schoolName: 'vladilen',
    subHeader: 'web_developer',
    duration: '09/2021 - 02/2022',
    link: 'https://result.school/products/junior-js',
    logo: vladilen,
    descBullets: [
      'vladilen_front',
      'vladilen_else',
      'vladilen_back',
      'vladilen_more',
    ],
  },
];

export const experience = [
  {
    role: 'software_intern',
    company: 'SOFTCONSTRUCT',
    link: 'https://www.softconstruct.com/',
    companylogo: softconstruct,
    date: '05/2021 – 08/2021',
    descBullets: ['team_integration', 'consolidation', 'performing'],
  },
  {
    role: 'software_junior',
    company: 'SOFTCONSTRUCT',
    link: 'https://www.softconstruct.com/',
    companylogo: softconstruct,
    date: '08/2021 – 05/2022',
    descBullets: ['developing', 'striking', 'building', 'optimizing'],
  },
  {
    role: 'fullstack_developer',
    company: 'CAREERIST',
    link: 'https://www.careerist.com/',
    companylogo: careerist,
    date: '05/2022 – 10/2022',
    descBullets: ['developing', 'materialUI', 'optimizing', "careerist_mysql","careerist_nodeJS"],
  },
  {
    role: 'supervisor',
    company: 'Result School',
    link: 'https://result.school/products/junior-js',
    companylogo: result,
    date: '10/2022 – present',
    descBullets: ['homeWork_check', 'answer_questions', 'motivate_students', "work_with_collegues"],
  },
  {
    role: 'fullstack_developer',
    company: 'AimIT',
    link: 'https://aimit.company/',
    companylogo: aimit,
    date: '10/2022 – present',
    descBullets: ['aimit_react', 'aimit_next', 'aimit_nodejs', "aimit_arch"],
  },
];

export const projects = [
  {
    name: 'lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    link: 'https://example.com',
  },
  {
    name: 'lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    github: 'https://github.com/1hanzla100',
  },
  {
    name: 'lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    github: 'https://github.com/1hanzla100',
    link: 'https://example.com',
  },
];
