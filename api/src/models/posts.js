const db = require('../configs/db.config');

class Posts {
  static tableName = 'posts';

  static async findById(id) {
    return db
      .select()
      .from(Posts.tableName)
      .where({ id })
      .first();
  }

  static getPosts() {
    return db
      .select()
      .from(Posts.tableName)
      .orderBy('id');
  }

  static async getPost(id) {
    return db
      .select('title', 'content')
      .from(Posts.tableName)
      .where({ id })
      .first();
  }

  static async createPost(post) {
    return db(Posts.tableName).insert({
      title: post.title,
      content: post.content,
    });
  }

  static async updatePost(post) {
    return db(Posts.tableName)
      .where('id', '=', post.id)
      .update({
        title: post.title,
        content: post.content,
      });
  }
  static async deletePost(post) {
    return db(Posts.tableName)
      .where('id', '=', post.id)
      .del();
  }
}

module.exports = Posts;
