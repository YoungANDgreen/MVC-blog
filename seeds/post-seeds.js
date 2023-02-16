const { Post } = require('../models');

const dataPost = [
  {
    title: 'Youbet',
    content:
      'Youbet will increase annuanl revenue from sportsbook by 123% with ability to go higher.',
    user_id: 1,
  },
  {
    title: 'Invest in solar now!',
    content:
      'Industry recap finds that 33% of cars on road will be electric by 2030. They are going to need power from somewhere!',
    user_id: 2,
  },
  {
    title: 'Eats and Greets',
    content:
      'Get reservations more easily by grouping up and meeting new people with this innovative startup!',
    user_id: 3,
  },
];

const postSeeds = () => Post.bulkCreate(dataPost);

module.exports = postSeeds;
