const calcular_tension=(a,b)=>{
    const t= a*b
    return t
}

const operar=()=>{
   let r= document.getElementById("imp_r").value
   let i= document.getElementById("imp_i").value

   let respuesta= calcular_tension(r,i)

   alert(respuesta)
}
document.getElementById("btn_calcular").addEventListener 
("click",operar)