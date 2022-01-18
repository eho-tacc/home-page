// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Ethan',
  imageBackground: true,
  openInNewTab: true,
  twelveHourFormat: true,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to sleep!',

  // Weather
  weatherKey: '496e03699168389264fefc3da96d3078',
  weatherIcons: 'White', // 'Nord', 'Dark', 'White'
  weatherUnit: 'F', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '41.7909857644868',
  defaultLongitude: '-87.5935007845269',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '2',
      name: 'Taskwarrior',
      icon: 'check-square',
      link: 'https://inthe.am/tasks/2627fe92-ed5b-45d5-8ecc-9561eb4f6758',
    },
    {
      id: '3',
      name: 'YouTube',
      icon: 'youtube',
      link: 'https://www.youtube.com',
    },
    {
      id: '4',
      name: 'Canvas',
      icon: 'briefcase',
      link: 'https://canvas.uchicago.edu',
    },
    {
      id: '5',
      name: 'home-page',
      icon: 'home',
      link: 'https://github.com/eho-tacc/home-page',
    },
    {
      id: '6',
      name: 'Maps',
      icon: 'map-pin',
      link: 'https://maps.google.com',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'users',
  secondListIcon: 'coffee',

  // Links
  lists: {
    firstList: [
      {
        name: 'Reddit',
        link: 'https://reddit.com',
      },
      {
        name: 'Linkedin',
        link: 'https://linkedin.com/in/ethan-n-ho',
      },
      {
        name: 'WhatsApp',
        link: 'https://web.whatsapp.com/',
      },
      {
        name: 'Messages',
        link: 'https://messages.google.com/',
      },
    ],
    secondList: [
      {
        name: 'Drive',
        link: 'https://drive.google.com',
      },
      {
        name: 'Outlook',
        link: 'https://outlook.office.com',
      },
      {
        name: 'White Noise',
        link: 'https://www.youtube.com/watch?v=nMfPqeZjc2c&t=8571s',
      },
    ],
  },
};
