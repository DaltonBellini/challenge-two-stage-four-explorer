
let student  = [

    { 
        name:'Dalton',
        testOne:9,
        testTwo:9,
    },
    { 
        name:'Samira',
        testOne: 4,
        testTwo:3,
    },
    { 
        name:'Bruno',
        testOne: 9,
        testTwo:7,
    },
]

student.testOne = Number(student.testOne)
student.testTwo = Number(student.testTwo)



function soma (student){ 
    let resultado = (student.testOne + student.testTwo)/2
    let operation = resultado >= 7

    if(operation){ 
        alert (`
        A média do(a) aluno(a) ${student.name} é de: ${resultado}
        Parabéns, ${student.name} você foi aprovado no concurso
        `)
    }else{ 
        alert(`
        A média do(a) aluno(a) ${student.name} é de ${resultado}
        Não foi dessa vez ${student.name}, tente novamente !!
        `) 
    }
}

for(let result of student){ 
    soma(result)
}