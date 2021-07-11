
function minMax(min = 0, max = 100) {
    [min, max] = min > max ? [max, min] : [min, max];
    console.log(min, max);
}

minMax(200, 40);
minMax(40);
minMax(200);

const  nomeCompleto = ({ nome, sobrenome }) => `${nome} ${sobrenome}`;

const pessoa = {
    nome: "Matheus",
    sobrenome: "Alves",
    idade: 24
}

const { nome: n } = pessoa;
const { sobrenome, idade } = pessoa;

console.log(n)
console.log(sobrenome, idade)
console.log(nomeCompleto(pessoa))
console.log(`Prazer ${pessoa.nome}`)