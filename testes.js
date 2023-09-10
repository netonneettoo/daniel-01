const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

// recuperando apenas 1 linha de retorno de um select
// db.get('select * from users where id = 1', [], (err, row) => {
//     if (err) throw err;
//     console.log(row);
// });

// gravar um usuário dentro do banco de dados
// db.run('insert into users (name, email, password) values (?, ?, ?)', ['Neto', 'neto@neto.com', '123456'], (err) => {
//     if (err) throw err;
//     console.log(`Adicionado com sucesso.`);
// })

// alterar um usuário dentro do banco de dados
// db.run('update users set name = ? where id = 1', ['Daniel Sousa'], (err) => {
//     if (err) throw err;
//     console.log(`Alterado com sucesso.`);
// });

// recuperando várias linhas de retorno de um select
db.all('select * from users', [], (err, rows) => {
    if (err) throw err;
    console.log(rows);
});

db.close();