

function clicar() {
    var text = window.document.querySelector("input#pais");
    var resul = window.document.querySelector("div#resposta");


    var pais = text.value;
    console.log(pais);
    if (pais == "Brasil" || pais == "brasil") {
        resul.innerHTML = `Ola, vc e brasileiro`
    } else {
        resul.innerHTML = 'Ola, vc e estrangeiro'
    }

}
