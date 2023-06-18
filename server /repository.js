const pool = require('./db');

 const getTodos = async (userEmail) => {
    let todos = await pool.query('SELECT * FROM todos WHERE user_email = $1', [userEmail]);
    return todos;
}

module.exports = {getTodos}
