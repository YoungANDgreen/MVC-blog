const { Comment } = require('../models');

const dataComment = [
  {
    comment_text: 'Cannot wait to see where this takes the sportsbook!',
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text:
      'Just thinking about how this can charge my own!',
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text: 'Sign me up and take my money!',
    user_id: 3,
    post_id: 3,
  },
];

const commentSeeds = () => Comment.bulkCreate(dataComment);

module.exports = commentSeeds;
