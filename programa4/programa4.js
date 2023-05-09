const form = document.querySelector('form');
const resultado = document.querySelector('h3');



form.addEventListener("submit", (e) => {
    e.preventDefault();

    const salario = form.valordigitado.value;

    var invest = salario * 0.3

    resultado.innerText = `${invest}`
    console.log(invest);
    

})







