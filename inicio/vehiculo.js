export default class Vehiculo {

    //estoy declarando el atributo marca
    marca=``
    constructor(km)
    {
      this.kilometraje=km  
    }
    
    
    mostrar_km ()
    {
        alert(`Kilometraje= ${this.kilometraje} `)
    }
    mostrar_marca(){
        console.log(`
            marca del vhiculo: ${this.marcas}
        `)
    }
}