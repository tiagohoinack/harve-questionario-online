import express from "express";
import { conectar } from "./database";

const app = express();

app.use(express.json());

app.post("/api/usuario", async (req, res) => {
  const dados = req.body;

  const db = await conectar();
  const sqlBuscarUsuario = "SELECT * FROM usuarios WHERE email = ?";

  
});
