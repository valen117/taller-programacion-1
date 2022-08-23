import Pitagoras from "./pitagoras";

function calcular(){
    let pitagoras= new Pitagoras()
    pitagoras.ca=document.getElementById("inp_ca").value
    pitagoras.co=document.getElementById("inp_co").value

    let respuesta= pitagoras.calcular_hipotenusa()

    document.getElementById("resultado").textContent= 'H= ' +respuesta
}
document.getElementById("btn_calcular").addEventListener("click",calcular)