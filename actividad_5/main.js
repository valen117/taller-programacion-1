let criptos = ['Bitcoins','Ethereum','Tether','BNB','Cardano','Dai','Helium','Shiba Inu','Tron','Cronos','Solana']

criptos.push('Stellar')
console.log(criptos)


let  indice2=criptos.indexOf('Shiba Inu')
let eliminados= criptos.splice(indice2,2)
console.log(criptos)
console.log('eliminados: '+eliminados)

criptos.push('Gate')
console.log(criptos)


function mostrar(){
    let parrafo=document.getElementById("parrafo");

    let longitud=criptos.length;
    let ultimo= criptos[longitud-1];
    let indice3=criptos.indexOf('Helium');

    parrafo.innerHTML=`
    <b>Longitud</b>=${longitud}<br>
    <b>ultimo elemento</b>${ultimo}<br>
    <b>elemento seleccionado</b>=${criptos[indice3]}`
}

document.getElementById("hola").addEventListener("click", mostrar)
