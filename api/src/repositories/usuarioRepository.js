import { conectar } from "../conf/db";

async function findUsuarioByEmail(email) {
  const db = await conectar();
  const sqlBuscarUsuario = "SELECT * FROM usuarios WHERE email = ?";
  const [usuario] = await db.execute(sqlBuscarUsuario, email);
  await db.end();

  if (usuario.length > 0) {
    console.log("Usuário já existe!");
    return usuario;
  } else {
    console.error("Usuário não existe!");
  }
}

async function cadastrarUsuario(nome, email) {
  const db = await conectar();
  const sqlCadastrarUsuario =
    "INSERT INTO usuarios (nome, email) VALUES (?, ?)";
  const [usuario] = await db.execute(sqlCadastrarUsuario, (nome, email));
  await db.end();
}
