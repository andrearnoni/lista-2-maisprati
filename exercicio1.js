const carro = {
  marca: "Ford",
  modelo: "Mustang",
  ano: 2019,
  cor: "preto",
};

for (const propriedade in carro) {
  console.log(`${propriedade}: ${carro[propriedade]}`);
}
