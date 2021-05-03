const { Comment } = require('../models');

const commentData = [
{
    "content": "fdjkslajflkdsaj",
    "user_id": "2",
    "post_id": "3"
    },
    {
    "content": "daslkfjdsalkfjk",
    "user_id": "3",
    "post_id": "1"
    },
    {
    "content": "ajlfkdja",
    "user_id": "1",
    "post_id": "2"
    }
]

const seedComments = () => Comment.bulkCreate(commentData)

module.exports = seedComments