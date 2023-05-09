var agora = new Date();
var hora = agora.getHours();

console.log(" Agora sao ", `${hora}`);

if (hora >= 12 && hora <= 17) {
    console.log("Boa tarde");
} else if (hora >= 5 && hora <= 11) {
    console.log("Bom dia");
} else if (hora >= 18 && hora <= 24) {
    console.log("Boa noite");
} else if (hora >= 1 && hora <= 4) {
    console.log("Boa madrugada");
}