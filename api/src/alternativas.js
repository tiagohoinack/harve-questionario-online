import { conectar } from "./conf/db.js";

export async function findAlternativasByIdPergunta(id_pergunta) {
  const db = await conectar();
  const sqlListarPerguntasPorId =
    "SELECT * FROM alternativas WHERE id_pergunta = ?";
  const [rows] = await db.execute(sqlListarPerguntasPorId, [id_pergunta]);
  db.end();

  return rows;
}
