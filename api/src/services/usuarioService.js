import yup from "yup";
import {
  adicionarUsuario,
  findUsuarioByEmail,
} from "../repositories/usuarioRepository.js";

async function validarUsuario(usuario) {
  const usuarioSchema = yup.object({
    nome: yup.string().required("É obrigatório preencher o nome"),
    email: yup.email().required("É obrigatório preencher o endereço de e-mail"),
  });

  try {
    const usuarioValido = await usuarioSchema.validate(usuario, {
      abortEarly: false,
    });
    return usuarioValido;
  } catch (error) {
    console.log("Erro ao validar o usuário: " + error);
    return { error };
  }
}

async function cadastrarUsuario(req, res) {
  try {
    const usuario = {
      nome: req.body.nome,
      email: req.body.email,
    };

    const existente = await findUsuarioByEmail(usuario.email);
    if (existente) {
      return res.status(200).json(existente, { message: "Usuário existente"});
    }

    const criado = await adicionarUsuario(usuario.nome, usuario.email);
    return res.status(201).json(criado, { message: "Usuário criado" });
  } catch (error) {
    console.error("Erro ao cadastrar o Usuario: ", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
}

const usuarioService = {
  cadastrarUsuario,
};

export default usuarioService;
