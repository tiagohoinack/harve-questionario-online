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
    return error;
  }
}

async function cadastrarUsuario(req, res) {
    
}

const usuarioService = {
  cadastrarUsuario,
};

export default usuarioService;
