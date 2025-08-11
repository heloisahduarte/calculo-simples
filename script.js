let historicoCalculo = [];

function Calcular() {


    //1- Pegar o número que o usuário digitou
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let operador = document.getElementById("operador").value;

    //2 - Converter os números de string para número
    numero1 = Number(numero1);
    numero2 = Number(numero2);

    // 3 - Calcular o resultado
    let resultado;
    let textoResultado;

    // 4 - Verificar qual operador foi selecionado
    switch (operador) {
        case "soma":
            resultado = numero1 + numero2;
            textoResultado = `Soma: ${numero1} + ${numero2} = ${resultado}`;
            break;
        case "subtracao":
            resultado = numero1 - numero2;
            textoResultado = `Subtração: ${numero1} - ${numero2} = ${resultado}`;
            break;
        case "multiplicacao":
            resultado = numero1 * numero2;
            textoResultado = `Multiplicação: ${numero1} * ${numero2} = ${resultado}`;
            break;
        case "divisao":
            resultado = numero1 / numero2;
            textoResultado = `Divisão: ${numero1} / ${numero2} = ${resultado}`;
            break;
        default:
            textoResultado = "Operador inválido!";
    }

    //5 - Limpar os campos de entrada após o cálculo
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";

    //6 - Adicionar o resultado ao histórico
    historicoCalculo.push(textoResultado);
    
    //7 - Renderizar o histórico atualizado
    renderizarResultado(historicoCalculo);

    
}

function renderizarResultado(resultado) {

    // 8 - Selecionar a lista de resultados no HTML
    const listaResultado = document.getElementById("listaResultado");
    listaResultado.innerHTML = "";


    // 9 - Adicionar cada resultado como um item da lista
    for ( let i = 0; i < resultado.length; i++ ) {
        let novoCalculo = document.createElement("li");
        novoCalculo.innerText = resultado[i];
        listaResultado.appendChild(novoCalculo);
    };

   
}
