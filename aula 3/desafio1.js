function fatorial(num) {
  // Fatorial de 0 ou 1 é sempre 1
  if (num === 0 || num === 1) {
    return 1;
  }

  // Recursiva: fatorial(n) = n * fatorial(n - 1)
  return num * fatorial(num - 1);
}

//Testando 
const CalcularFatorial = 5;
const resultadoFatorial = fatorial(CalcularFatorial);
console.log(`O fatorial de ${CalcularFatorial} é ${resultadoFatorial}`);
