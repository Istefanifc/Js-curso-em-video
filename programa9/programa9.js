
function calcular() {
    var txtvel = window.document.querySelector("input#textvel");
    var resul = window.document.querySelector("div#resul");
    var vel = Number(textvel.value);
    resul.innerHTML = `Sua velocidade atual e de : <p><strong>${vel}</strong></p>`
    resul.innerHTML += `<p>Use o sinto de seguranca</p>`

    if (vel > 60) {
        resul.innerHTML = "Voce atingiu a velocidade maxima, vc levou multa"
    } else {
        resul.innerHTML = "Parabens, vc esta conforme a lei de transito"
    }

}
