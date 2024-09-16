const produtos = [
  { nome: "Camisa", preco: 100, desconto: 0 },
  { nome: "Calça", preco: 80, desconto: 0 },
  { nome: "Sapato", preco: 120, desconto: 0 },
];

produtos.forEach((produto) => {
  const desconto = produto.preco * 0.1;
  produto.desconto = desconto;
  produto.preco -= desconto;
  console.log(`${produto.nome}: ${produto.preco}`);
});
