const { Client } = require('pg'); // imports the pg module

// supply the db name and location of the database
const client = new Client('postgres://localhost:5432/juicebox-dev');

async function getAllUsers() {
    const { rows } = await client.query(
      `SELECT id, username 
      FROM users;
    `);
  
    return rows;
}

//async function getSingleUsers() {
//  const { rows } = await client.query(
//    `SELECT id, username 
//    FROM users
//  `);

//  return rows;
//}

async function createUser({ username, password }) {
  try {
    const result = await client.query( 
    `SELECT id, username 
    FROM users;`
    );

    return result;
  } catch (error) {
    throw error;
  }
}

async function removeUser ({ username }) {
  try {
    const remove = await client.query(
      `DELETE from users WHERE username = ` + username 
    )
  } catch(error){throw error;}
}

// and export them
module.exports = {
    client,
    getAllUsers,
    createUser,
    removeUser,
}