import mysql2 from "mysql2/promise";

export async function conectar() {
  const conexao = await mysql2.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "questionario",
  });
  return conexao;
}