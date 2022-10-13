let nome = prompt("Digite o seu nome")

//MATÉRIAS DO ALUNO//
let materia1 = prompt("Digite a Materia");
let materia2 = prompt("Digite a Materia");
let materia3 = prompt("Digite a Materia");
let materia4 = prompt("Digite a Materia");
let materia5 = prompt("Digite a Materia");
let materia6 = prompt("Digite a Materia");

//NOTAS DE CADA MÁTERIA//

let nota1 = parseFloat(prompt(`Qual a sua nota em ${materia1}`))
let nota2 = parseFloat(prompt(`Qual a sua nota em ${materia2}`))
let nota3 = parseFloat(prompt(`Qual a sua nota em ${materia3}`))
let nota4 = parseFloat(prompt(`Qual a sua nota em ${materia4}`))
let nota5 = parseFloat(prompt(`Qual a sua nota em ${materia5}`))
let nota6 = parseFloat(prompt(`Qual a sua nota em ${materia6}`))


//PRESENÇA EM AULA//
let presenca1 = parseInt(prompt(`Qual a presença ?`))

//VARIAVEIS//
let soma = parseInt((nota1 + nota2 + nota3 + nota4 + nota5 +nota6 + presenca1) / 7) ;
    if (soma >= 8) 
       alert(`A nota do aluno ${nome} é de ${soma} Aprovado ! Parabéns`);
    else
    alert(`A nota do aluno ${nome} é de ${soma} Reprovado !`);


// Criado por Wellington Scheffer //