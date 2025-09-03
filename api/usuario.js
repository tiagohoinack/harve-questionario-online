import express from "express";
import yup from "yup";
import { conectar } from "./db/database";

const app = express();

app.use(express.json());

app.post("/api/usuario", async (req, res) => {
  //validação inicial dos dados, para confirmar informações precisas
  const usuarioSchema = yup.object({
    nome: yup.string().required("É obrigatório preencher o nome"),
    email: yup.email().required("É obrigatório preencher o endereço de e-mail"),
  });

  try {
    const usuarioValido = await usuarioSchema.validate(req.body, {
      abortEarly: false,
    });
  } catch (error) {
    console.log("Erro ao validar o usuário: " + error);
  }

  //Verificação no banco para checar se o usuário já existe ou se será cadastrado
  const db = await conectar();
  const sqlBuscarUsuario = "SELECT * FROM usuarios WHERE email = ?";
  const [usuario] = await db.query(sqlBuscarUsuario, [usuarioValido.email]);
  await db.end();

  //Checa se algum objeto foi retornado do banco. Se sim, segue com o usuário encontrado. Se não, cria um cadastro para prosseguir
  if (usuario.length > 0) {
    console.log("Usuário já existe!");
    //usuário já existe, enviar mensagem "bem vindo novamente"
  } else {
    //usuário não existe, necessário cadastrar no banco
    //const sqlCadastrarUsuario = "INSERT INTO usuarios (nome, email) VALUES (?, ?)";
    console.log("Usuário não existe!");
    
  }
});
