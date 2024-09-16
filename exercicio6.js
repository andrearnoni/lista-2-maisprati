const funcionarios = [
  { nome: "João", cargo: "Desenvolvedor", salario: 3500 },
  { nome: "Maria", cargo: "Analista", salario: 2500 },
  { nome: "Pedro", cargo: "Gerente", salario: 5000 },
  { nome: "Ana", cargo: "Secretaria", salario: 2000 },
];

const salarioMinimo = 3000;

for (const funcionario of funcionarios) {
  if (funcionario.salario > salarioMinimo) {
    console.log(
      `Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: ${funcionario.salario}`
    );
  }
}
