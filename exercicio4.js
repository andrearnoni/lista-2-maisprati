const pessoas = [
  { nome: "João", idade: 25, cidade: "São Paulo" },
  { nome: "Maria", idade: 30, cidade: "Rio de Janeiro" },
  { nome: "Pedro", idade: 28, cidade: "Brasília" },
];

for (const pessoa of pessoas) {
  console.log(
    `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`
  );
}
