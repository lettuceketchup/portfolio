import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Pradhumn | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Pradhumn Rishishwar',
  subtitle: "I'm a Web Developer",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'image.jpg',
  paragraphOne:
    'A Full-stack Web Developer with skills such as ReactJS for front-end, Node.js and Express.js for back-end and PostgresQL for database management.',
  paragraphTwo:
    "I've created a few websites and now look forward to testing my skills and learning new ones while interacting with experienced developers.",
  paragraphThree: 'Feel free to drop me a mail in case of any inquiries.',
  resume:
    'https://github.com/lettuceketchup/portfolio/blob/master/examples/resume/PradhumnRishishwar_InternshalaResume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'smart-brain-webpage.png',
    title: 'Smartbrain',
    info: `A simple website to count the number of faces in a picture.
          Facial Recognition using API.`,
    info2: `Front-end using React.js.
          Back-end using Node.js & Express.js.
          Hosted on Heroku.`,
    url: 'http://smartbrain1999.herokuapp.com/',
    repo: 'https://github.com/lettuceketchup/smartbrain', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'robofriends-webpage.png',
    title: 'Robofriends',
    info:
      'A fully responsive React app that takes users from an API, produces a random profile image for them using another one and allows you to search through them.',
    // info2: '',
    url: 'https://lettuceketchup.github.io/robofriends/',
    repo: 'https://github.com/lettuceketchup/robofriends', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'rishishwarmanu@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: uuidv1(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: uuidv1(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/pradhumn-rishishwar-440098170/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/lettuceketchup/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
