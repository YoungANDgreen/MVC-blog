const { User } = require('../models');

const dataUser = [
  {
    username: 'billy',
    password: 'password123',
    user_id: 1,
  },
  {
    username: 'ryan',
    password: 'password123',
    user_id: 2,
  },
  {
    username: 'emily',
    password: 'password123',
    user_id: 3,
  },
];

const userSeeds = () => User.bulkCreate(dataUser);

module.exports = userSeeds;
