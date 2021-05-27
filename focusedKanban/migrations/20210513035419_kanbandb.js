
exports.up = function(knex) {
  return knex.schema
    .createTable("users", table => {
        table.increments('user_id')
        table.string('username', 26)
            .notNullable()
        table.string('email')
            .unique()
            .notNullable()
        table.string('hash')
            .notNullable()
    })
    .createTable("boards", table => {
        table.increments('board_id')
        table.string('board_name', 128)
        table.integer('user')
        table.foreign('user')
            .references('user_id')
            .inTable('users')
    })
    .createTable("columns", table => {
        table.increments('column_id')
        table.integer('col_position')
        table.string('column_name', 128)
        table.integer('board')
        table.foreign('board')
            .references('board_id')
            .inTable('boards')
    })
    .createTable("cards", table => {
        table.increments('card_id')
        table.integer('position')
        table.string('card_name', 128)
        table.string('date', 10)
        table.string('description', 512)
        table.integer('column')
        table.foreign('column')
            .references('column_id')
            .inTable('columns')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("cards")
    .dropTableIfExists("columns")
    .dropTableIfExists("boards")
    .dropTableIfExists("users")
};
