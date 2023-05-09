
var a = window.document.getElementById('area');
a.addEventListener("click",clicar)
a.addEventListener("mouseenter", entrar)
a.addEventListener("mouseout",saiu)

function clicar() {
    
    a.innerText = "Clicou"
    a.style.background = "black"
}
function entrar() {

    a.innerText = "Entrou"
    a.style.background = "yellow"
}
function saiu() {
    a.innerText = "Saiu"
    a.style.background = "pink"
}
