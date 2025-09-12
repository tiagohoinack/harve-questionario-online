import { conectar } from "./conf/db.js";
import { findAlternativasByIdPergunta } from "./alternativas.js";

async function listarTitulosPerguntas() {
  const db = await conectar();
  const sqlListarPerguntas = "SELECT * FROM perguntas";
  const [rows] = await db.execute(sqlListarPerguntas);
  db.end();
  return rows;
}

export async function listarPerguntasCompletas(res) {
  const perguntas = await listarTitulosPerguntas();

  const result = await Promise.all(
    perguntas.map(async (p) => {
      const alternativas = await findAlternativasByIdPergunta(p.id_pergunta);
      return {
        id_pergunta: p.id_pergunta,
        titulo: p.titulo,
        alternativas: alternativas.map((c) => ({
          id_alternativa: c.id_alternativa,
          descricao: c.descricao,
          pontos: c.pontos,
        })),
      };
    })
  );
  res.json(result);
}
