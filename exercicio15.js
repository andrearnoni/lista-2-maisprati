const transacoes = [
  { tipo: "entrada", valor: 150 },
  { tipo: "saida", valor: 50 },
  { tipo: "entrada", valor: 200 },
  { tipo: "saida", valor: 30 },
  { tipo: "entrada", valor: 100 },
];

let saldo = 0;
transacoes.forEach((transacao) => {
  if (transacao.tipo === "entrada") {
    saldo += transacao.valor;
  } else {
    saldo -= transacao.valor;
  }
});
console.log(`O saldo final é de: R$ ${saldo}`);
