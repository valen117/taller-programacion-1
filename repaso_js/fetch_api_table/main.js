const obtener_usuario=async ()=>{

    const users =await fetch('https://jsonplaceholder.typicode.com/users')

    const lista_usuarios= await users.json()


    let filas=[]
    lista_usuarios.forEach((element,index) =>{
        let fila=`
            <tr>
                <td>${element.name}</td>
                <td>${element.username}</td>
                <td>${element.email}</td>
                <td>${element.website}</td>
            </tr>
            
        `
        filas.push(fila)
        
       

    });

    document.getElementById("tbl_body").innerHTML=filas.join("")


}

//invocamos a la funcion flecha obtener_usuario
obtener_usuario()