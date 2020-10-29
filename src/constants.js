const back0 = require('./assets/000.jpg');
const back1 = require('./assets/001.jpg');
const back2 = require('./assets/002.jpg');
const screen1 = require('./assets/bg01.jpg');
const screen2 = require('./assets/bg02.jpg');
const screen3 = require('./assets/bg03.jpg');
const dt1 = require('./assets/dt1.jpg');
const dt2 = require('./assets/dt2.jpg');
const dt3 = require('./assets/dt3.jpg');

const fakedata = [
  {
    principal: {
      title: {
        name: 'Coktails',
        emphasis: 'Luango',
      },
      description:
        'Numquam dolorum dolor eaque aut rerum adipisci. Magnam et accusantium ad voluptatem qui nihil. Sit et qui. Doloribus tenetur odit exercitationem veniam odio magnam rerum dolorem quos. Voluptates soluta provident laboriosam. Consequatur eius et.',
      likes: 20,
      comments: 5,
      photo: screen1,
    },
    details: {
      phone: '098 786 8889',
      category: 'Coktails bar',
      homeService: false,
      openTime: '5:00 pm',
      closeTime: '2:00 pm',
      photos: [dt1, dt2, dt3, dt1, dt2, dt3, dt1, dt2, dt3, dt1, dt2, dt3],
      comments: [
        {
          name: 'Cristian Ronda',
          time: 1601233760086,
          photo:
            'https://s3.amazonaws.com/uifaces/faces/twitter/samgrover/128.jpg',
          comment:
            'In est aut corporis id. Et magnam non et. Sint eius pariatur sed id sunt sint dolorem accusamus nesciunt.',
        },
        {
          name: 'Edward Rath',
          photo:
            'https://s3.amazonaws.com/uifaces/faces/twitter/kalmerrautam/128.jpg',
          comment:
            'Quaerat nihil incidunt est maiores. Laboriosam vel optio quaerat nulla eos eum est ab. Aut aut nihil eius est. Non consequatur ipsa debitis adipisci iusto aliquam. Qui nobis explicabo quidem vitae enim deleniti quo. Voluptate enim quas sed quidem molestiae eum aut quas error.',
          time: 1600992700000,
        },
        {
          name: 'Mrs. Jayde Wiegand',
          photo:
            'https://s3.amazonaws.com/uifaces/faces/twitter/michaelmartinho/128.jpg',
          comment:
            'Ex recusandae debitis eveniet voluptatibus pariatur quis quibusdam. Magni ducimus repudiandae id. Quis sunt mollitia deleniti amet consequatur in omnis animi dolores. Rem eaque sunt aut dicta voluptatem inventore labore distinctio. Illum nemo voluptas eum dicta labore corporis et. Velit illum rem voluptatem.',
          time: 1598140834000,
        },
      ],
    },
  },
  {
    principal: {
      title: {
        name: 'Bar',
        emphasis: 'Cheptrusker',
      },
      description:
        'Similique est vitae ut delectus occaecati ut veniam. Ea incidunt enim. Cum dolores explicabo natus dolorem voluptas.',
      likes: 10,
      comments: 2,
      photo: screen2,
    },
    details: {
      phone: '098 786 8889',
      category: 'Coktails bar',
      homeService: false,
      openTime: '2:00 pm',
      closeTime: '10:00 pm',
      photos: [dt3, dt1, dt2, dt1, dt2, dt3],
      comments: [
        {
          name: 'Cristian Ronda',
          time: 1601233760086,
          photo:
            'https://s3.amazonaws.com/uifaces/faces/twitter/samgrover/128.jpg',
          comment:
            'In est aut corporis id. Et magnam non et. Sint eius pariatur sed id sunt sint dolorem accusamus nesciunt.',
        },
        {
          name: 'Edward Rath',
          photo:
            'https://s3.amazonaws.com/uifaces/faces/twitter/kalmerrautam/128.jpg',
          comment:
            'Quaerat nihil incidunt est maiores. Laboriosam vel optio quaerat nulla eos eum est ab. Aut aut nihil eius est. Non consequatur ipsa debitis adipisci iusto aliquam. Qui nobis explicabo quidem vitae enim deleniti quo. Voluptate enim quas sed quidem molestiae eum aut quas error.',
          time: 1600992700000,
        },
        {
          name: 'Mrs. Jayde Wiegand',
          photo:
            'https://s3.amazonaws.com/uifaces/faces/twitter/michaelmartinho/128.jpg',
          comment:
            'Ex recusandae debitis eveniet voluptatibus pariatur quis quibusdam. Magni ducimus repudiandae id. Quis sunt mollitia deleniti amet consequatur in omnis animi dolores. Rem eaque sunt aut dicta voluptatem inventore labore distinctio. Illum nemo voluptas eum dicta labore corporis et. Velit illum rem voluptatem.',
          time: 1598140834000,
        },
        {
          name: 'Joany Becker',
          photo:
            'https://s3.amazonaws.com/uifaces/faces/twitter/eyronn/128.jpg',
          comment:
            'Qui temporibus labore. Inventore recusandae aut et consequatur neque sed. Est repellat rerum ut maiores quibusdam voluptatem. Est magni id minus in veniam.',
          time: 1598140834000,
        },
        {
          name: 'Dr. Freeman Blanda',
          photo:
            'https://s3.amazonaws.com/uifaces/faces/twitter/felipecsl/128.jpg',
          comment:
            'Et esse vero consequatur quam quo. Sapiente aut rerum labore aut laborum esse nam. Excepturi reiciendis cumque ea aliquam. Veritatis qui totam pariatur illum enim maxime. Et consequatur autem alias aut voluptatum.',
          time: 1598140834000,
        },
        {
          name: 'Raoul Gutmann',
          photo:
            'https://s3.amazonaws.com/uifaces/faces/twitter/nwdsha/128.jpg',
          comment:
            'Rem recusandae dolorem dicta est. Sit et quia sunt. Et quasi qui delectus voluptate deserunt unde qui ducimus quae. Adipisci vitae voluptas aliquam eligendi architecto. Laboriosam saepe necessitatibus similique cupiditate suscipit illo iure esse.',
          time: 1598140834000,
        },
      ],
    },
  },
  {
    principal: {
      title: {
        name: 'New Reserve',
        emphasis: 'Mariscal',
      },
      description:
        'Similique est vitae ut delectus occaecati ut veniam. Ea incidunt enim. Cum dolores explicabo natus dolorem voluptas.',
      likes: 3,
      comments: 1,
      photo: screen3,
    },
    details: {
      phone: '098 786 8889',
      category: 'Nature',
      homeService: false,
      openTime: '08:00 am',
      closeTime: '17:00 pm',
      photos: [dt3, dt1, dt2, dt1, dt2, dt3],
      comments: [
        {
          name: 'Cristian Ronda',
          time: 1601233760086,
          photo:
            'https://s3.amazonaws.com/uifaces/faces/twitter/samgrover/128.jpg',
          comment:
            'In est aut corporis id. Et magnam non et. Sint eius pariatur sed id sunt sint dolorem accusamus nesciunt.',
        },
      ],
    },
  },
];
const backgroundImage = [back0, back1, back2];
export {backgroundImage, fakedata};
