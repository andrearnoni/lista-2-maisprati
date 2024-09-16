const pedidos = [
  { cliente: "João", produto: "Camisa", quantidade: 2 },
  { cliente: "Maria", produto: "Calça", quantidade: 3 },
  { cliente: "João", produto: "Sapato", quantidade: 1 },
];

const totalPorCliente = {};
pedidos.forEach((pedido) => {
  if (!totalPorCliente[pedido.cliente]) {
    totalPorCliente[pedido.cliente] = 0;
  }
  totalPorCliente[pedido.cliente] += pedido.quantidade;
});
console.log(totalPorCliente);
