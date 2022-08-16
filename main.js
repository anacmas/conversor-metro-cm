document.getElementById("n1").onkeyup = function() {converteParaCm()};
document.getElementById("n2").onkeyup = function() {converteParaM()};
let novoValorEmCm;
let novoValorEmM;


function converteParaCm() {
    let inputEmM = document.getElementById("n1").value;
    let inputEmCm = document.getElementById("n2");
    inputEmCm.value = inputEmM * 100
}

function converteParaM() {
    let inputEmM = document.getElementById("n1");
    let inputEmCm = document.getElementById("n2").value;
    inputEmM.value = inputEmCm/ 100

}


