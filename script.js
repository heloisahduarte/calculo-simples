function Calcular() {

    console.log("Função calcular foi chamada");

    //1- Pegar o número que o usuário digitou
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;


    //2- Transformar o número que o usuário digitou em um número
    numero1 = Number(numero1);
    numero2 = Number(numero2);


    let soma = numero1 + numero2;
    let subtracao = numero1 - numero2;
    let multiplicacao = numero1 * numero2;

    //3- Mostrar o resultado na tela
}

function resultado() {

    let listaResultado = document.getElementById("listaResultado");
    listaResultado.innerHTML = ""

    let item = document.createElement("li");

    item.textContent = "Sosma: ${numero1} + ${numero2} = ${soma}";
    listaResultado.appendChild(item);

    item = document.createElement("li");
    item.textContent = "Subtração: ${numero1} - ${numero2} = ${subtracao}";
    listaResultado.appendChild(item);   

    item = document.createElement("li");
    item.textContent = "Multiplicação: ${numero1} * ${numero2} = ${multiplicacao}";
    listaResultado.appendChild(item);   


}