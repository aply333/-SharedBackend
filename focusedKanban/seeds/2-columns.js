
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('columns').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('columns').insert([
        {
          col_position: 0,
          column_name: "U1-B1-col1",
          board: 1
        },{
          col_position: 1,
          column_name: "U1-B1-col2",
          board: 1
        },{
          col_position: 2,
          column_name: "U1-B1-col3",
          board: 1
        },{
          col_position: 0,
          column_name: "U1-B2-col1",
          board:2
        },{
          col_position: 1,
          column_name: "U1-B2-col2",
          board:2
        },{
          col_position: 2,
          column_name: "U1-B2-col3",
          board:2
        },{
          col_position: 0,
          column_name: "U2-B1-col1",
          board:3
        },{
          col_position: 1,
          column_name: "U2-B1-col2",
          board:3
        },{
          col_position: 2,
          column_name: "U2-B1-col3",
          board: 3
        },{
          col_position: 0,
          column_name: "U2-B2-col1",
          board: 4
        },{
          col_position: 1,
          column_name: "U2-B2-col2",
          board: 4
        },{
          col_position: 2,
          column_name: "U2-B2-col3",
          board: 4
        }
      ]);
    });
};
