
function name(params) {
    var msg = window.document.querySelector("msg")
    var img = window.document.querySelector("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Afora sao ${hora} horas`
}