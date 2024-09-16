let produto = {
  preco: 150,
  peso: 2,
  quantidade: 10,
  desconto: 5,
};

function filtrarPropriedades(objeto, valor) {
  const novoObjeto = {};
  for (const propriedade in objeto) {
    if (objeto[propriedade] > valor) {
      novoObjeto[propriedade] = objeto[propriedade];
    }
  }
  return novoObjeto;
}

let resultado = filtrarPropriedades(produto, 5);
console.log(resultado);
