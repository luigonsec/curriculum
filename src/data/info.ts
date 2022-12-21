const data = {
  personal: [
    {
      id: 1,
      icon: { value: 'fas fa-signature', class: 'signature' },
      label: 'Name',
      value: 'Luis González Seco',
    },
    {
      id: 2,
      icon: { value: 'fas fa-birthday-cake', class: 'cake' },
      label: 'Birthday',
      value: '10-12-1991',
    },
    {
      id: 3,
      icon: { value: 'fas fa-map-marker', class: 'marker' },
      label: 'Address',
      value: 'Seville, Spain',
    },
    {
      id: 4,
      icon: { value: 'fas fa-inbox', class: 'inbox' },
      label: 'Email',
      value: 'luisgonzalezseco@gmail.com',
    },
    {
      id: 5,
      icon: { value: 'fab fa-linkedin', class: 'linkedin' },
      label: 'Linkedin',
      value: 'http://linkedin.com/luisgonzalezseco',
    },
    {
      id: 6,
      icon: { value: 'fab fa-github', class: 'github' },
      label: 'Github',
      value: 'http://github.com/luigonsec',
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
      description: [
        'Development and maintenance of a tool for energy monitoring and analysis.',
        'Development of control systems for optimization of air conditioning and lighting consumption.',
        'Development of scripts for debugging data in databases',
      ],
    },
    {
      position: 'Java Junior Developer',
      company: 'Elimco',
      start: '2014',
      end: '2015',
      location: 'Seville, Spain',
      vertical: 'Geographical',
      description: [
        'Development and maintenance of the National Atlas of Spain Information System.',
      ],
    },
    {
      position: 'PHP Junior Developer',
      company: 'Semseo',
      start: '2014',
      end: '2015',
      location: 'Seville, Spain',
      vertical: 'Digital Marketing',
      description: [
        'Development of a web CMS for smart labeling of local natural products',
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
