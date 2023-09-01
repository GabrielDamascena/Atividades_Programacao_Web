function palavrasDistintas(texto) {
  // Remove caracteres especiais e converte para letras minúsculas
  const textoFormatado = texto.toLowerCase().replace(/[^\w\s]/g, '');

  // Divide o texto em palavras
  const palavras = textoFormatado.split(/\s+/);

  // Cria um conjunto para armazenar palavras únicas
  const palavrasUnicas = new Set(palavras);

  // Converte o conjunto de palavras únicas de volta para um array
  const resultado = Array.from(palavrasUnicas);

  return resultado;
}

const textoExemplo = "Olá mundo do JavaScript que é muito legal";
const palavrasExclusivas = palavrasDistintas(textoExemplo);
console.log(palavrasExclusivas);
