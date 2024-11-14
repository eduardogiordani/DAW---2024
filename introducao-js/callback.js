const inicio = () => {
    console.log(inicio);
}

const fim = () => {
    console.log(fim);
}

const processa = (funcao1, funcao2) => {
    funcao1();

    funcao2();
}

// 1° Forma de chamar:
processa(inicio, fim); 


// 2° Forma de chamar:
processa(() => {
    console.log('funcao1');
}, () => {
    console.log('funcao2');
});