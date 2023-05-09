function somar() {
    var tx1 = window.document.getElementById("texto1");
    var tx2 = window.document.getElementById("texto2");
    var resul = window.document.getElementById("resultado");

    var n1 = parseInt(tx1.value);
    var n2 = parseInt(tx2.value);
    var resultado = n1 + n2
resul.innerHTML = `A soma dos numeros é <strong> ${resultado}</strong>`
}

