const bcrypt = require('bcryptjs')
const hashPower = 12

const userPassOne = bcrypt.hashSync('userPassOne1', hashPower)
const userPassTwo = bcrypt.hashSync('userPassTwo2', hashPower)



exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: "testUserOne",
          email: 'testUserOne@email.com',
          hash : userPassOne
        },{
          username: "testUserTwo",
          email: "testUserTwo@email.com",
          hash: userPassTwo
        }
      ]);
    });
};
