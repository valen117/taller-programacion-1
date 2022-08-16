import Cliente from "./cliente.js";



function ejecutar(){
 let nombre= document.getElementById("nombre").value;
 let apellido= document.getElementById("apellido").value;
 let dni=document.getElementById("DNI").value;

 let cliente= new Cliente(nombre,apellido,dni);
 cliente.mostrar_datos()
}
document.getElementById("Aceptar").addEventListener("click",ejecutar);