exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cards")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("cards").insert([
        {
          position: 0,
          card_name: "card_one",
          date: "01-11-2021",
          description: "Test description, with stuff in it.",
          column: 1,
        },
        {
          position: 1,
          card_name: "card_two",
          date: "01-11-2021",
          description: "Test description, with stuff in it.",
          column: 1,
        },
        {
          position: 2,
          card_name: "card_three",
          date: "01-11-2021",
          description: "Test description, with stuff in it.",
          column: 1,
        },
        {
          position: 0,
          card_name: "card_one",
          date: "01-11-2021",
          description: "Test description, with stuff in it.",
          column: 2,
        },
        {
          position: 1,
          card_name: "card_two",
          date: "01-11-2021",
          description: "Test description, with stuff in it.",
          column: 2,
        },
        {
          position: 2,
          card_name: "card_three",
          date: "01-11-2021",
          description: "Test description, with stuff in it.",
          column: 2,
        },

        {
          position: 0,
          card_name: "card_one",
          date: "01-11-2021",
          description: "Test description, with stuff in it.",
          column: 4,
        },
        {
          position: 1,
          card_name: "card_two",
          date: "01-11-2021",
          description: "Test description, with stuff in it.",
          column: 4,
        },
        {
          position: 2,
          card_name: "card_three",
          date: "01-11-2021",
          description: "Test description, with stuff in it.",
          column: 4,
        },
        {
          position: 0,
          card_name: "card_one",
          date: "01-11-2021",
          description: "Test description, with stuff in it.",
          column: 9,
        },
        {
          position: 1,
          card_name: "card_two",
          date: "01-11-2021",
          description: "Test description, with stuff in it.",
          column: 9,
        },
        {
          position: 2,
          card_name: "card_three",
          date: "01-11-2021",
          description: "Test description, with stuff in it.",
          column: 9,
        },
      ]);
    });
};
