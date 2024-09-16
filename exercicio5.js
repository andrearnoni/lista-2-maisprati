const alunos = [
  { nome: "Ana", nota1: 7, nota2: 8 },
  { nome: "Beto", nota1: 9, nota2: 6 },
  { nome: "Carlos", nota1: 8, nota2: 7 },
];

for (const aluno of alunos) {
  const media = (aluno.nota1 + aluno.nota2) / 2;
  console.log(`${aluno.nome}: ${media}`);
}
