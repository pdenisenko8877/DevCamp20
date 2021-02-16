const db = require('../configs/db.config');

module.exports = function checkAuthorized({ table, column = 'user_id' }) {
  return async (req, res, next) => {
    const { user } = req;

    if (user) {
      const entity = await db
        .select()
        .from(table)
        .where({ id: req.params.id })
        .first();

      if (entity && entity[column] === req.user.id) {
        next();
      } else {
        next('Access denied');
      }
    }
    return next('Access denied');
  };
};
