const carrinho = {
  itens: [
    { nome: "Camisa", quantidade: 2, precoUnitario: 30 },
    { nome: "Calça", quantidade: 3, precoUnitario: 40 },
    { nome: "Sapato", quantidade: 1, precoUnitario: 50 },
  ],
};

let total = 0;
carrinho.itens.forEach((item) => {
  total += item.quantidade * item.precoUnitario;
});
console.log(`O valor total do carrinho é de: R$ ${total}`);
