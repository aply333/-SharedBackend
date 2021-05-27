
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('boards').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('boards').insert([
        {board_name: "user1-boardOne", user:1},
        {board_name: "user1-boardTwo", user:1},
        {board_name: "user2-boardOne", user:2},
        {board_name: "user2-boardTwo", user:2}
      ]);
    });
};
