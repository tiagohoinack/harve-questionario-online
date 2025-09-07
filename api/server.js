import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});

app.get("/api/perguntas", async (req, res) => {
  res
    .status(200)
    .json({ message: "Endpoint /API/PERGUNTAS acessado com sucesso" });
});

app.post("/api/usuario", async (req, res) => {
  res
    .status(200)
    .json({ message: "Endpoint /API/USUARIOS acessado com sucesso" });
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
