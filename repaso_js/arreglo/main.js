//vamos a crear  un arreglo
let lenguajes=['java','Python','JavaScript','c++','Visual Basic','Go']


//longitud de un arreglo
let longitud= lenguajes.length
console.log(longitud)

//acceder al ultimo elemento de un arreglo
let ultimo=lenguajes[longitud-1]

//recorrer un arreglo
lenguajes.forEach((element,index) => {
    console.log((index+1)+'-'+element)
});

//agregar un elemento al final del arreglo 
lenguajes.push('php')
console.log(lenguajes)

//como elimino el ultimo elemento de un arreglo
lenguajes.pop()
console.log(lenguajes)

//como agregar unn elemento al inicio del arreglo 
lenguajes.unshift('c#')
console.log(lenguajes)

//como eliminar el primer elemento de un arreglo
lenguajes.shift()
console.log(lenguajes)


//como encontrar el indice de un elemento y mostrarlo posteriormente
let indice=lenguajes.indexOf('JavaScript')
console.log(lenguajes[indice])

//como elimiar un elemento arrgelo segun el indice
let  indice2=lenguajes.indexOf('c++')
let eliminados= lenguajes.splice(indice2,2)
console.log(lenguajes)
console.log('eliminados: '+eliminados)

//como agrego elementos dentro de un arreglo
lenguajes.splice(indice,0,'Visual Basic')
console.log(lengueajes)

//como copiar un arreglo
let copia=lenguajes.slice()
copia.push('rubi')
console.log(copia)