let db = require("../config/database");

let User = {
  getAllUsers: callback => {
    return db.query("SELECT * from users", callback);
  },
  getUserById: (id, callback) => {
    return db.query("SELECT * FROM users WHERE Id=?", [id], callback);
  },

  addUser: (User, callback) => {
    console.log(JSON.stringify(User, null, 2));
    return db.query("INSERT INTO users SET ?", User, callback);
  },

  deleteUser: (id, callback) => {
    return db.query("DELETE FROM users WHERE Id = ?", [id], callback);
  },

  updateUser: (id, User, callback) => {
    return db.query(
      "UPDATE users SET title = ?, technologies = ?, budget = ?, description = ?, email = ?, where id = ?,",
      [
        User.title,
        User.technologies,
        User.budget,
        User.description,
        User.email,
        id
      ],
      callback
    );
  }
};
module.exports = User;
