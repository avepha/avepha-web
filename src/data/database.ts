export default {
  information: {
    name: 'Farhan Poh-Asae',
    aboutContent: 'Software engineer with 4 years of experience in programming, Front-end, Back-end, Cloud and Embedded system in various projects.',
    age: 26,
    // phone: '+669-3790-0099',
    phone: '-',
    nationality: 'Thailand',
    language: 'English, Thai, Bahasa Malayu',
    email: 'farhan.abuhazan@gmail.com',
    address: 'Phayathai, Ratchathewi Bangkok, Thailand 10400',
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: 'https://facebook.com/s.alfarie',
      twitter: '',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/fa-dev',
      dribbble: '',
      github: 'https://github.com/avepha/avepha-web'
    },
    brandImage: '/images/brand-image.jpg',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: '/files/cv.pdf'
  },
  contactInfo: {
    // phoneNumbers: ['+669-3730-0099', '+666-1521-3030'],
    phoneNumbers: ['-'],
    emailAddress: ['farhan.abuhazan@gmail.com'],
    address: 'Phayathai, Ratchathewi Bangkok, Thailand 10400'
  },
  experiences: [
    {
      topic: 'Embedded System Developer',
      icon: 'briefcase',
      details: [
        {
          year: '2015 - 2016',
          position: 'Hydroponics Timer and Solution Controller',
          company: 'Agro Intelligent',
          mdFile: 'hydroponic-timer-solution-controller.md',
        },
        {
          year: '2015 - (Internship)',
          position: 'Screen printing machine',
          company: 'Internship',
          mdFile: 'screen-printing-machine.md',
        },
      ]
    },
    {
      topic: 'Embedded system & Full stack developer',
      icon: 'briefcase',
      details: [
        {
          year: '2016 - 2020',
          position: 'Electrical Conductivity Control for indoor plant factory.(JP)',
          company: 'Agro Intelligent',
          mdFile: 'conductivity-control.md',
        },
        {
          year: '2016 - 2020',
          position: '4 years of development smart farming device.',
          company: 'Agro Intelligent',
          mdFile: 'smartgrobot.md',
        },
        {
          year: '2017-2018',
          position: 'Volume Measurement Network smart farming device',
          company: 'Agro Intelligent',
          mdFile: 'volumn-measurement-network.md',
        },
        {
          year: '2016-2017',
          position: 'Full function vertical hydroponic system in container',
          company: 'Agro Intelligent',
          mdFile: 'vertical-hydroponic-system-in-container.md',
        },
      ]
    },
    {
      topic: 'Back-end developer',
      icon: 'briefcase',
      details: [
        {
          year: '2018 - 2018',
          position: 'Back-end Developer for Thailand well-known social media platform Blockdit',
          company: 'LTMAN',
          mdFile: 'blockdit.md',
        }
      ]
    },
    {
      topic: 'Game engine developer',
      icon: 'briefcase',
      details: [
        {
          year: '2015-2016',
          position: 'Alpha Wolf Cyber Range System',
          company: 'Alpha Wolf',
          mdFile: 'cyber-range-system.md',
        },
      ]
    },
  ],
  skill: {
    programming: [
      {name: 'Javascript(ES5-2020)', src: ''},
      {name: 'Typescript', src: ''},
      {name: 'C/C++', src: ''},
      {name: 'Golang', src: ''},
      {name: 'Python', src: ''},
      {name: 'Java', src: ''},
      {name: 'HTML/CSS', src: ''},
      {name: 'Lua script(redis)', src: ''},
    ],
    backend: [
      {name: 'nodejs', src: '/images/nodejs-256.png'},
      {name: 'graphql', src: '/images/graphql-256.png'},
      {name: 'apollo', src: '/images/apollo-256.png'},
      {name: 'redis', src: '/images/redis-256.png'},
      {name: 'elasticsearch', src: '/images/elasticsearch-256.png'},
      {name: 'mongo', src: '/images/mongo-256.png'},
      {name: 'sqlite', src: '/images/sqlite-256.png'},
      {name: 'mysql', src: '/images/mysql-256.png'},
    ],
    frontend: [
      {name: 'react', src: '/images/react-256.png'},
      {name: 'apollo', src: '/images/apollo-256.png'},
      {name: 'vue', src: '/images/vue-256.png'},
    ],
    others: [
      {name: 'git', src: '/images/git-256.png'},
      {name: 'docker', src: '/images/docker-256.png'},
      {name: 'aws', src: '/images/aws-256.png'},
      {name: 'raspberry-pi', src: '/images/rpi-256.png'},
      {name: 'espressif', src: '/images/espressif-256.png'},
      {name: 'atmel', src: '/images/atmel-256.png'},
    ]
  },
  projects: [
    {
      id: 'sg-model-1',
      title: 'Smart Grobot - Model 3',
      featuredImage: '/images/project-sg-model-3.jpg',
      mdFile: 'empty.md',
      createDay: '01',
      createMonth: 'October',
      createYear: '2020'
    },
    {
      id: 'sg-model-2',
      title: 'Smart Grobot - Model 2',
      featuredImage: '/images/project-sg-model-2.jpg',
      mdFile: 'empty.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2018'
    },
    {
      id: 'sg-model-1',
      title: 'Smart Grobot - Model 1',
      featuredImage: '/images/project-sg-model-1.jpg',
      mdFile: 'empty.md',
      createDay: '10',
      createMonth: 'June',
      createYear: '2016'
    },
    {
      id: 'hydroponic-timer',
      title: 'Hydroponics Timer and Solution Controller',
      featuredImage: '/images/timer-solution-control.jpg',
      mdFile: 'empty.md',
      createDay: '20',
      createMonth: 'May',
      createYear: '2019'
    },
    {
      id: 'min-vertical-hydroponic',
      title: 'Mini Vertical hydroponic system',
      featuredImage: '/images/mini-vertical-hydroponics.jpg',
      mdFile: 'empty.md',
      createDay: '20',
      createMonth: 'Jan',
      createYear: '2017'
    },
    {
      id: 'hanmo-model-1',
      title: 'Hanmo Conductivity control - Model 1',
      featuredImage: '/images/hanmo-model-1.jpg',
      mdFile: 'empty.md',
      createDay: '20',
      createMonth: 'Oct',
      createYear: '2016'
    },
    {
      id: 'hanmo-model-2',
      title: 'Hanmo Conductivity control - Model 2',
      featuredImage: '/images/hanmo-model-2.jpg',
      mdFile: 'empty.md',
      createDay: '20',
      createMonth: 'Nov',
      createYear: '2019'
    },
    {
      id: 'cyber-range',
      title: 'Cyber Range Dashboard',
      featuredImage: '/images/project-cyber-range.gif',
      mdFile: 'empty.md',
      createDay: '20',
      createMonth: 'Sep',
      createYear: '2015'
    },
  ]
}
