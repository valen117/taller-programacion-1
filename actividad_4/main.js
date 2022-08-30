import Producto from './producto.js'

    function ejecutar(){
    let producto= new Producto()
    producto.getAPI();

    }
document.getElementById("slt").addEventListener("change",ejecutar)