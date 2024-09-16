const filmes = [
  {
    titulo: "O Senhor dos Anéis",
    diretor: "Peter Jackson",
    anoLancamento: 2001,
  },
  {
    titulo: "O Poderoso Chefão",
    diretor: "Francis Ford Coppola",
    anoLancamento: 1972,
  },
  {
    titulo: "E.T. - O Extra-Terrestre",
    diretor: "Steven Spielberg",
    anoLancamento: 1982,
  },
];

const titulos = [];
filmes.forEach((filme) => titulos.push(filme.titulo));
console.log(titulos);
