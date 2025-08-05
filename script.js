function Calcular() {

    console.log("Função calcular foi chamada");

    //1- Pegar o número que o usuário digitou
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;

    //2- Transformar o número que o usuário digitou em um número
    numero1 = Number(numero1);
    numero2 = Number(numero2);

    //3- Fazer as contas
    let soma = numero1 + numero2;
    let subtracao = numero1 - numero2;
    let multiplicacao = numero1 * numero2;
    let divisao = numero1 / numero2;

    //4- Guardar os resultados em um array
    let resultados = [
        `soma: ${soma}`,
        `subtração: ${subtracao}`,
        `multiplicação: ${multiplicacao}`,
        `divisão: ${divisao}`
    ];

    //5- Passar os resultados para a função de renderização
    renderizarResultado(resultados);
}

function renderizarResultado(resultados) {

    const listaResultado = document.getElementById("listaResultado");
    listaResultado.innerHTML = ""; // Limpa a lista antes de adicionar novos resultados     

    for ( let i = 0; i < resultados.length; i++ ) {
        let novoCalculo = document.createElement("li");
        novoCalculo.innerText = resultados[i];
        listaResultado.appendChild(novoCalculo);
    };

   
}
