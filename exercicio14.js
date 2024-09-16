let empresa = {
  departamentos: [
    {
      nome: "Recursos Humanos",
      funcionarios: ["Ana", "Carlos", "Maria"],
    },
    {
      nome: "Desenvolvimento",
      funcionarios: ["João", "Pedro", "Lucas"],
    },
    {
      nome: "Marketing",
      funcionarios: ["Mariana", "Fernanda", "Paulo"],
    },
  ],
};

for (let i in empresa.departamentos) {
  let departamento = empresa.departamentos[i];
  console.log(`Departamento: ${departamento.nome}`);
  for (let funcionario of departamento.funcionarios) {
    console.log(`- Funcionário: ${funcionario}`);
  }
}
