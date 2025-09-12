import { conectar } from "../conf/db.js";

export async function findUsuarioByEmail(email) {
  const db = await conectar();
  const sqlBuscarUsuario = "SELECT * FROM usuarios WHERE email = ?";
  const [rows] = await db.execute(sqlBuscarUsuario, [email]);
  await db.end();

  if (rows.length > 0) {
    console.log("Usuário já existe!");
    return rows[0];
  } else {
    return null;
  }
}

export async function adicionarUsuario(nome, email) {
  const db = await conectar();
  const sqlAdicionarUsuario =
    "INSERT INTO usuarios (nome, email) VALUES (?, ?)";
  const [result] = await db.execute(sqlAdicionarUsuario, [nome, email]);
  await db.end();

  return result;
}
