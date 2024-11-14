const arrayValor = [1,2,3,4,5,6];

const arrayObjeto = [
    {valor1: 1, valor2: '28/10/2005', valor3: 'Gustavo'},
    {valor1: 2, valor2: '02/11/1998', valor3: 'Marcio'},
];


/* Verificar em forma de tabela (.table)*/
console.table(arrayObjeto);

/* Acrescenta manual mais um valor*/
arrayObjeto.push({valor1: 3, valor2: '22/07/1978', valor3: 'Alzira'});

/* Imprime novamente*/
console.table(arrayObjeto);