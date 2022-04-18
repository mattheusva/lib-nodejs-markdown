const chalk = require('chalk');
const fs = require('fs');

function extraiLinks(texto) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const arrResultados = [];
  let temp;
  while ((temp = regex.exec(texto)) !== null) {
    arrResultados.push({ [temp[1]]: temp[2] })
  }
  return arrResultados.length === 0 ? 'não há links' : arrResultados;
}

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, 'arquivo não encontrado'));
}

async function pegaArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8';
  try {
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
    return extraiLinks(texto);
  } catch (erro) {
    trataErro(erro);
  }
}

module.exports = pegaArquivo;