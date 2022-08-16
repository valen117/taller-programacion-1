export default class Cliente{


constructor(nm,ap,dni){
    this.nombre=nm
    this.apellido=ap
    this.dni=dni
}
mostrar_datos(){
    alert(
        `
        nombre=${this.nombre}
        apellido=${this.apellido}
        DNI=${this.DNI}
        `
    )
}















}