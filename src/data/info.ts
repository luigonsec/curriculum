const data = {
  name: 'Luis González Seco',
  position: 'Fullstack developer',

  introduction: [
    "Hi, I'm Luis, a 31 year old Spanish guy. I consider myself a problem solver, who enjoys solving problems. In every chess position, there is always a move that is objectively the best, my passion is to find it. I also apply this way of thinking when developing software or solving problems in the world of technology.",
    'I am a person committed to his work, his profession and his company. In that aspect I consider myself as a hooligan. I am loyal to my company and my work if I feel valued and that I am taken into account within the team. I treat people and companies as they treat me.',
    'I am currently very much in love with front end technologies, as they allow me to unleash and show my creativity, while performing a methodical and complex task. You could say that it encompasses many of my passions (art, problem solving, programming,...) in a single task. ',
  ],

  languages: [
    { name: 'Spanish', level: 'Native' },
    { name: 'English', level: 'Intermediate' },
  ],

  personal: [
    {
      id: 2,
      icon: { value: 'fas fa-birthday-cake', class: 'cake' },
      label: 'Birthday',
      value: '10-12-1991',
      isLink: false,
    },
    {
      id: 3,
      icon: { value: 'fas fa-map-marker', class: 'marker' },
      label: 'Address',
      value: 'Seville, Spain',
      isLink: false,
    },
    {
      id: 4,
      icon: { value: 'fas fa-inbox', class: 'inbox' },
      label: 'Email',
      value: 'luisgonzalezseco@gmail.com',
      isLink: false,
    },
    {
      id: 5,
      icon: { value: 'fab fa-linkedin', class: 'linkedin' },
      label: 'Linkedin',
      value: 'https://linkedin.com/in/luis-gonzález-seco-1076baa7',
      isLink: true,
    },
    {
      id: 6,
      icon: { value: 'fab fa-github', class: 'github' },
      label: 'Github',
      value: 'https://github.com/luigonsec',
      isLink: true,
    },
    {
      id: 7,
      icon: { value: 'fab fa-stack-overflow', class: 'stackoverflow' },
      label: 'Stack Overflow',
      value: 'https://stackoverflow.com/users/3750462/luis-gonzález',
      isLink: true,
    },
    {
      id: 8,
      icon: { value: 'fas fa-address-card', class: 'website' },
      label: 'Website',
      value: 'https://luigonsec.herokuapp.com',
      isLink: true,
    },
  ],

  studies: [
    {
      name: 'Degree in Computer Engineering - Information Technology',
      academy: 'University of Sevilla',
      location: 'Seville, Spain',
      start: '2009',
      end: '2014',
    },
    {
      name: "Master's Degree in Computer Engineering",
      academy: 'University of Sevilla',
      location: 'Seville, Spain',
      start: '2019',
    },
  ],

  skills: [
    {
      category: 'Web development & Programming',
      values: [
        { name: 'Angular', value: 4 },
        { name: 'React', value: 3.5 },
        { name: 'Node.JS', value: 4.5 },
        { name: 'Python', value: 3.5 },
        { name: 'Java', value: 2.5 },
      ],
    },
    {
      category: 'Databases',
      values: [
        { name: 'Cassandra', value: 4 },
        { name: 'MySQL', value: 4 },
        { name: 'MongoDB', value: 2.5 },
        { name: 'Oracle', value: 2 },
      ],
    },
    {
      category: 'DevOps',
      values: [
        { name: 'Docker', value: 3.5 },
        { name: 'Kubernets', value: 3.5 },
      ],
    },
  ],

  experience: [
    {
      position: 'FullStack Developer',
      company: 'Siemens',
      start: '2015',

      location: 'Seville, Spain',
      vertical: 'Energy',
      description:
        'During my years at Siemens I have contributed to the development and maintenance of the EEA (Energy Efficiency Analytics) service. The service consists of a monitoring tool, an automatic reporting system, and other complementary software such as the automatic control system for lighting and air conditioners. I have led the development of all the software offered by the service, as well as I have contributed to identify possible improvements of the service especially regarding new functionalities of the tools. ',
      tasks: [
        'Development and maintenance of websites in different technologies as JQuery or React.',
        'Development and maintenance of automatic reporting system built with Python.',
        'Development of control systems by using the Modbus protocol, MQTT and others.',
        'Development of scripts for debugging data in Cassandra or Redis databases',
        'Train new colleagues to quickly become involved in the development of the tool and to learn about the service.',
      ],
      stack: [
        { name: 'Node.js', image: 'nodejs.webp' },
        { name: 'Python', image: 'python.png' },
        { name: 'Cassandra', image: 'cassandra.png' },
        { name: 'Redis', image: 'redis.png' },
        { name: 'Docker', image: 'docker.png' },
        { name: 'Kubernetes', image: 'kubernetes.png' },
        { name: 'HTML', image: 'html.png' },
        { name: 'CSS', image: 'css.png' },
        { name: 'Modbus', image: 'modbus.jpeg' },
        { name: 'Nodered', image: 'nodered.png' },
        { name: 'React', image: 'react.png' },
        { name: 'Apache Spark', image: 'spark.jpeg' },
      ],
    },
    {
      position: 'Java Junior Developer (Internship)',
      company: 'Elimco',
      start: '2014',
      end: '2015',
      location: 'Seville, Spain',
      vertical: 'Geographical',
      description:
        'At Elimco I had the opportunity to do my first internship. For a year I was helping in the maintenance of SIANE, an application for the development of the maps of the National Atlas of Spain.',
      tasks: [
        'Development and maintenance of the National Atlas of Spain Information System.',
        'Helping to develop some python scripts for different projects.',
      ],
      stack: [
        { name: 'Java', image: 'java.png' },
        { name: 'Spring', image: 'spring.png' },
        { name: 'Python', image: 'python.png' },
        { name: 'Oracle', image: 'oracle.png' },
      ],
    },
    {
      position: 'PHP Junior Developer',
      company: 'Semseo',
      start: '2014',
      end: '2015',
      location: 'Seville, Spain',
      vertical: 'Digital Marketing',
      description:
        'At Semseo I had the opportunity to work in a company for the first time. Although the situation was not entirely regular, it helped me to learn how to work in a team and to start getting by in the working world.',
      tasks: [
        'Development of new feature of a web CMS for smart labeling of local natural products',
        'Development of a web site for a chemical laboratory',
        'Helping to maintain existing wordpress websites',
      ],
      stack: [
        { name: 'PHP', image: 'php.jpeg' },
        { name: 'Laravel', image: 'laravel.png' },
      ],
    },
  ],

  interests: [
    {
      name: 'Chess',
      description:
        'Chess is one of my greatest passions. I have even competed at the local level and every day I dedicate some time to learn new openings, train tactics or watch games of the great masters.',
    },
    {
      name: 'Bachata',
      description:
        'For some time now, one of my hobbies has been dancing bachata. Since I dance, I am no longer comfortable in traditional discos, I like to go to dance clubs where Latin music is playing and where people go out to dance and not to get drunk.',
    },
    {
      name: 'Programming',
      description:
        'It may sound cliché among software engineers, but I love programming. I love learning new languages, frameworks, development technologies, code editors... It is my greatest passion, thanks to programming I can work on something I love.',
    },
    {
      name: 'Cycling',
      description:
        "Although it's been a while since I've dedicated as much time to it as I would like, cycling has always been my favorite sport and has taught me that it's better to be constant and advance little by little, than to stop along the way.",
    },
  ],
};

export default data;
