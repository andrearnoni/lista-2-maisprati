const vendas = [
  { produto: "Camisa", quantidade: 2, valor: 30 },
  { produto: "Calça", quantidade: 3, valor: 40 },
  { produto: "Sapato", quantidade: 1, valor: 50 },
];

let total = 0;
vendas.forEach((venda) => {
  total += venda.quantidade * venda.valor;
});
console.log(`O valor total de vendas é de: R$ ${total}`);
