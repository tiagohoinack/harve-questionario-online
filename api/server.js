import express from "express";
import usuarioService from "./src/services/usuarioService.js";
import { listarPerguntasCompletas } from "./src/perguntas.js";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/api/perguntas", async (req, res) => {
  return listarPerguntasCompletas(res);
});

app.post("/api/usuario", async (req, res) => {
  return usuarioService.cadastrarUsuario(req, res);
});

app.post("/api/questionario/email", async (req, res) => {
  res
    .status(200)
    .json({ message: "Endpoint /API/QUESTIONARIO/EMAIL acessado com sucesso" });
});

app.put("/api/questionario", async (req, res) => {
  res
    .status(200)
    .json({ message: "Endpoint /API/QUESTIONARIO acessado com sucesso" });
});

app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
