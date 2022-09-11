export const ALEX_INFO = {
  name: {
    firstName1: 'Alexandru',
    firstName2: 'Marian',
    lastName: 'Boscu',
    nickName: {
      name: 'Chappie',
      heading: 'Why Chappie?',
      description:
        "It all started a long time ago when I saw a movie called Chappie. I am not going to tell you about the movie because it's better to watch it yourself but short story long, it's about the fact that humanity last hope is not human!",
    },
    shortDescription:
      'A frontend developer in the begging of my jurney, located in Romania and looking for a new opportunity.',
  },

  about: {
    quote: {
      text: `I am not the fastest, smartest or most talented person in the world, but I succeed because I keep going and going and going.`,
      author: ' Sylvester Stallone',
    },
    description:
      "Hy, my name is Alex, I'm a 23 years old web deveoper from Romania. It all started like a hobby, all I wanted was to make a website for myself were to have a list with all the movies that I've watched. From usig HTML and CSS to build the website and struggling to make a button work, now I am able to work with javascript and frameworks to build amazing websites. Google was my best teacher in this journey of learning web development",
    shortDescription:
      'I’m eager for something new every day, open to any kind of challenges and always ready for something different.',
    job: 'Web developer',
    dateOfBirth: { full: '24.12.1998', day: 24, month: 12, year: 1998 },
    age: new Date().getFullYear() - 1998,
    location: { city: 'Bucharest', country: 'ROMANIA' },
    phoneNumber: '0771558180',
    email: 'boscu20@gmail.com',
    languages: {
      rom: 'romanian',
      eng: 'english',
    },
    providedServices: {
      frontend: 'frontend',
      backend: 'backend',
      design: {
        ui: 'UI/UX',
        design: 'design',
      },
    },

    programming: {
      css: 'CSS',
      html: 'HTML',
      js: 'JavaScript',
      react: 'REACTjs',
    },

    education: {
      hightSchool: {
        education: 'High school diploma',
        institution: 'Colegiul National Unirea',
        specialization: 'Mathematics-Computer Science',
        city: 'Turnu Magurele',
        country: 'ROMANIA',
        date: {
          start: 'September 2013',
          finished: 'June 2017',
        },
      },
      college: {
        education: 'Bachelor studies',
        institution: 'POLITEHNICA University of Bucharest',
        faculty: 'Mechanics and Mechatronics',
        specialization: 'Fine Mechanics and Nanotechnologies',
        city: 'Bucharest',
        country: 'ROMANIA',
        date: {
          start: 'Octomber 2017',
          finished: 'June 2021',
        },
      },
      master: {
        education: 'Master degree',
        institution: 'POLITEHNICA University of Bucharest',
        faculty: 'Mechanics and Mechatronics',
        specialization: 'Precision Mechanics for Mechatronic Systems',
        city: 'Bucharest',
        country: 'ROMANIA',
        date: {
          start: 'Octomber 2021',
          finished: 'Present',
        },
      },
    },

    experience: {
      job1: {
        post: 'Mechanical Design Engineer',
        company: 'Expleo Romania',
        shortDescription:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum.',
        period: {
          start: 'Octomber 2021',
          finished: 'July 2022',
        },
        location: {
          city: 'Bucharest',
          country: 'ROMANIA',
        },
      },

      job2: {
        post: 'Telecommunication Engineer',
        company: 'ASGO Telecom',
        shortDescription:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum.',
        period: {
          start: 'July 2022',
          finished: 'Present',
        },
        location: {
          city: 'Bucharest',
          country: 'ROMANIA',
        },
      },
    },
  },

  projects: {
    aboutMovies: {
      technologies: {
        css: 'CSS',
        html: 'HTML',
        js: 'JavaScript',
      },
      description:
        'Information about your favorite movie, read a short description and watch the trailer before seeing the movie',
      link: '',
    },
    dadJokes: {
      technologies: {
        css: 'CSS',
        html: 'HTML',
        js: 'JavaScript',
      },
      description: 'Generate random dad jokes to make your days',
      link: '',
    },
    portfolio: {
      technologies: {
        css: 'CSS',
        html: 'HTML',
        js: 'JavaScript',
        react: 'REACTjs',
      },
      description: 'You already saw this one, no description needed',
      link: '',
    },
    resume: {
      technologies: {
        css: 'CSS',
        html: 'HTML',
        js: 'JavaScript',
        react: 'REACTjs',
      },
      description: "I will keept it shor, it's my personal resume",
      link: '',
    },
    weatherApp: {
      technologies: {
        css: 'CSS',
        html: 'HTML',
        js: 'JavaScript',
      },
      description:
        'From here, you can see weather for your location or with a simple search, for every location on earth',
      link: '',
    },
    ticTacToe: {
      technologies: {
        css: 'CSS',
        html: 'HTML',
        js: 'JavaScript',
      },
      description: 'Tic Tac Toe game, alien vs astronaut edition',
      link: '',
    },
  },
};
