function aplicar_descuento(){
const precio= documen.getElementById("inp_precio").value
const descuento=document.getElementById("slt_operar").value

const resultado_descuento=(precio*descuento)/100
const resultado_final=precio - resultado_descuento

alert(resultado_final)

}
document.getElementById("slt_operar").addEventListener
("change",aplicar_descuento)