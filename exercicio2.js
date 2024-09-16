const livro = {
  titulo: "O Senhor dos Anéis",
  autor: "J.R.R. Tolkien",
  anoPublicacao: 1954,
  genero: "Fantasia",
};

for (const propriedade in livro) {
  if (propriedade === "editora") {
    console.log("A propriedade editora existe no objeto");
  } else {
    livro.editora = "Editora Schwarcz";
    console.log("A propriedade editora foi adicionada ao objeto");
    break;
  }
}
