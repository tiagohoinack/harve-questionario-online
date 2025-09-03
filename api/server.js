import express from "express";

const app = express();

app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000");
});

app.post("/api/usuario", async (req, res) => {
console.log("Consegui bater via POST na API Usuário");
});
