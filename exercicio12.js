const estoque = [
  { produto: "Camisa", quantidade: 2, minimo: 5 },
  { produto: "Calça", quantidade: 3, minimo: 4 },
  { produto: "Sapato", quantidade: 1, minimo: 6 },
];

estoque.forEach((item) => {
  if (item.quantidade < item.minimo) {
    item.quantidade *= 2;
  }
});
console.log(estoque);
