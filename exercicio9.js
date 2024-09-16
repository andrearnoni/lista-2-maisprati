const clientes = [
  { nome: "João", idade: 25, cidade: "São Paulo" },
  { nome: "Maria", idade: 30, cidade: "Rio de Janeiro" },
  { nome: "Pedro", idade: 28, cidade: "Brasília" },
  { nome: "Ana", idade: 32, cidade: "São Paulo" },
  { nome: "Beto", idade: 35, cidade: "Rio de Janeiro" },
  { nome: "Carlos", idade: 27, cidade: "Brasília" },
];

let contador = 0;
clientes.forEach((cliente) => {
  if (cliente.idade > 30) {
    contador++;
  }
});
console.log(`Existem ${contador} clientes com mais de 30 anos.`);
