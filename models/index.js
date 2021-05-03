const User = require("./User");
const Comment = require("./Comment");
const Post = require("./Post");

User.hasMany(Post, {
    forigenKey: "user_id",
    onDelete: "CASCADE"
});

User.hasMany(Comment, {
    forigenKey: "user_id",
    onDelete: "CASCADE"
});

Post.belongsTo(User, {
    forigenKey: "user_id"
});

Comment.belongsTo(User, {
    forigenKey: "user_id"
});

Post.hasMany(Comment, {
    forigenKey: "post_id",
    onDelete: "CASCADE"
});

Comment.belongsTo(Post, {
    forigenKey: "post_id"
});


module.exports = {User, Comment, Post};
