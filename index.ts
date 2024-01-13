// inferencia de tipagem em constantes
const nomeDoUsuario = prompt("Qual seu nome?");

console.log(nomeDoUsuario?.toUpperCase());

// inferencia de tipagem em array

// number[] maneira mais usual
const num: number[] = [1, 2, 3, 4, 5, 6];

// array<number>  maneira menos usual
const numeros: Array<number> = [1, 2, 2, 3];

/* inferencia de tipagem em função de alta ordem, 
o typescript ja infere que o retorno de uma função de alta ordem é derivada do tipo declarado no array.*/
const idades: number[] = [];

idades.push(106);

idades.push(10);

idades.push(6);

idades.push(19);

const menor = idades.filter((idade) => idade < 21);

console.log(menor);

// tuples inferencia de tipagem para array que possui dois tipos.
const pessoaTupla: [string, number] = ["ian adson", 30];

// inferencia de tipos em objeto

/* interface */
interface Person {
  nome: string;
  idade: number;
  profissao?: string; // este parametro com ?, não é obrigatorio no objeto.
  altura: number;
}
const pessoa: Person = {
  nome: "ian adson",
  idade: 30,
  profissao: "dev",
  altura: 1.8,
};
const pessoa2: Person = {
  //exemplo usando interface sem os parametros obrigatorios.
  nome: "tamires",
  idade: 26,
  altura: 1.6,
};
/* type */
type MyString = "greater" | "lower"; //aliases types

//literal types, union type
function escolhaNumber(
  numb1: number,
  numb2: number,
  criterio?: MyString
): number {
  switch (criterio) {
    case "greater":
      return numb1 > numb2 ? numb1 : numb2;
    case "lower":
      return numb1 < numb2 ? numb1 : numb2;
    default:
      const numberRamdom = Math.random();

      if (numberRamdom >= 0.5) return numb1;
      return numb2;
  }
}

const numeroEscolhido = escolhaNumber(10, 20, "greater");

console.log("numeroEscolhido", numeroEscolhido);

// inferindo tipagem no retorno

function somei(nu1: number, nu2: number): void {
  //no exemplo esta sendo inferido o tipo vazio pois a função retorna vazio
}

// *utility type: a ideia é criar novos tipos a partir dos ja existentes

type PersonPartial = Partial<Person>; //Partial, cria um novo tipo envolvendo person, só que com todos os parametros não sendo obrigatorios.

const pers: PersonPartial = {};

type PersonRequire = Required<Person>; // Required, faz o mesmo obrigando a usar todos os parametros mesmo que tenha algum opcial no tipo envolvido

// const pers1: PersonRequire = {};

type PersonPicked = Pick<Person, "idade" | "altura">;

// const pers2: PersonPicked = {};

type OmitedPerson = Omit<Person, "profissao">;

// const pers3: Omitedperson = {};

type ExcludesCriterio = Exclude<MyString, "greater">;

// const pers4: ExcludesCriterio = {};
