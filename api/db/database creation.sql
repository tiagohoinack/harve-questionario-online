CREATE DATABASE IF NOT EXISTS questionario;
USE questionario;
CREATE TABLE IF NOT EXISTS usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(200) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
) ENGINE = InnoDB;
CREATE TABLE IF NOT EXISTS questionarios (
    id_questionario INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    pontuacao INT NOT NULL,
    data_inicio DATE,
    data_termino DATE,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
) ENGINE = InnoDB;
CREATE TABLE IF NOT EXISTS perguntas (
    id_pergunta INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL
) ENGINE = InnoDB;
CREATE TABLE IF NOT EXISTS alternativas (
    id_alternativa INT AUTO_INCREMENT PRIMARY KEY,
    id_pergunta INT NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    pontos INT NOT NULL,
    FOREIGN KEY (id_pergunta) REFERENCES perguntas(id_pergunta)
) ENGINE = InnoDB;
CREATE TABLE IF NOT EXISTS questionarios_perguntas (
    id_questionario_pergunta INT AUTO_INCREMENT PRIMARY KEY,
    id_questionario INT NOT NULL,
    id_alternativa INT NOT NULL,
    FOREIGN KEY (id_questionario) REFERENCES questionarios(id_questionario),
    FOREIGN KEY (id_alternativa) REFERENCES alternativas(id_alternativa)
) ENGINE = InnoDB;