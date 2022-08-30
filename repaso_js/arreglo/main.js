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