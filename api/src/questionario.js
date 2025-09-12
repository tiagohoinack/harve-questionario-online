import { conectar } from "./conf/db";

async function iniciarQuestionario(id_usuario, data_inicio) {
  const db = await conectar();
  const sqlIniciarQuestionario = "INSERT INTO questionarios (id_usuario, data_inicio) VALUES (?, ?)";
  const [result] = db.execute(sqlIniciarQuestionario, [id_usuario, data_inicio]);
  await db.end();
}
