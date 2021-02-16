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
      title: post.body.title,
      content: post.body.content,
      user_id: post.user.id,
    });
  }

  static async updatePost(post) {
    return db(Posts.tableName)
      .where('id', '=', post.body.id)
      .update({
        title: post.body.title,
        content: post.body.content,
      });
  }
  static async deletePost(post) {
    return db(Posts.tableName)
      .where('id', '=', post.params.id)
      .del();
  }
}

module.exports = Posts;
