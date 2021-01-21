const db = require('../configs/db.config');

class User {
  static tableName = 'users';

  static async findByName(name) {
    return db
      .select()
      .from(User.tableName)
      .where({ name })
      .first();
  }

  static async findByEmail(email) {
    return db
      .select()
      .from(User.tableName)
      .where({ email })
      .first();
  }

  static findByToken(token) {
    return db
      .select()
      .from(User.tableName)
      .where({ accessToken: token })
      .first();
  }

  static async createUser(user, hash) {
    return db(User.tableName).insert({
      name: user.body.name,
      email: user.body.email,
      password: hash,
    });
  }

  static async updateUserToken(user, token) {
    return db(User.tableName)
      .where('email', '=', user.email)
      .update({
        accessToken: token,
      });
  }

  static getUsers() {
    return db
      .select()
      .from(User.tableName)
      .orderBy('id');
  }
}

module.exports = User;
