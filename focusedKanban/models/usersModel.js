const bcrypt = require("bcryptjs")

module.exports = {
  findUser,
  registerNewUser
};

const hashPower = 12

const db = require("./dbconfig");

function findUser(email) {
  const user = db("users").first("*").where("email", email);
  return user;
}

async function registerNewUser(new_user) {
  try {
    if (new_user.username && new_user.email && new_user.password) {
        const newHash = await bcrypt.hashSync(new_user.password, hashPower)
        await db('users').insert({
            username: new_user.username,
            email: new_user.email,
            hash: newHash
        })
        let returnUser = await findUser(new_user.email)
        return returnUser
    }else{
        return "Incomplete input, no user created."
    }
  } catch (err) {}
}
