const { Post } = require('../models');

const postData = [
{
    "title": "Hot Dogs Rule",
    "body": "ajfldajkfldajklfdja",
    "user_id": "1"
    },
    {
    "title": "Turkey Sandwich is Underrated",
    "body": "afjdlkajfdklsafj;las",
    "user_id": "2"
    },
    {
    "title": "Daves Bread is weird",
    "body": "jsalfjdklas;fjd;as",
    "user_id": "3"
    }
]

const seedPosts = () => Post.bulkCreate(postData)

module.exports = seedPosts