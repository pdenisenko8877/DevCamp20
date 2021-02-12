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

  static async createUser(user, hash, token) {
    return db(User.tableName).insert({
      name: user.body.name,
      email: user.body.email,
      password: hash,
      accessToken: token,
    });
  }

  static async createSocialUser(user, token) {
    return db(User.tableName).insert({
      name: user.name,
      email: user.email,
      accessToken: token,
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

  static googleUserSanitize(userData) {
    return  {
      name: userData.name || '',
      email: userData.email || '',
      avatar: userData.picture || '',
    };
  };
}

module.exports = User;
