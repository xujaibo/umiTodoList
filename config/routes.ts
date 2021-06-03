export default [
  {
    path: '/',
    isLayout: false,
    routes: [
      {
        name: 'home',
        title: ' ',
        path: '/',
        component: '@/pages/test',
        pageTrack: 'sq_shouye',
      },
      {
        name: 'home',
        title: ' ',
        path: '/users',
        component: '@/pages/users',
        pageTrack: 'sq_shouye',
      },
    ],
  },
];
