const Comment = require("./Comment");
const Post = require("./Post");
const User = require("./User");

// Users can make infinite amount of comments
User.hasMany(Comment, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
  });

// Users can make infinite amount of tech blog posts
User.hasMany(Post, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
  });

// A tech blog post can have infinite amount of comments
Post.hasMany(Comment, {
    foreignKey: "post_id",
    onDelete: "CASCADE",
  });

// Tech blog post belongs to one user, unique
Post.belongsTo(User, {
    foreignKey: "user_id",
  });

// Comment belongs to the tech blog post 
Comment.belongsTo(Post, {
    foreignKey: "post_id",
  });

// Comments only belong to one user, unique
Comment.belongsTo(User, {
    foreignKey: "user_id",
  });

module.exports = { Comment, Post, User };