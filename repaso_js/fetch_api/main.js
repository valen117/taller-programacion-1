function mostrar_objeto()
{
    let cliente= {
        nombre: 'Pepito',
        apellido:'Pozzo',
        dni:44123123,
        correo:{
            outlook:'spuerpepito@outlook.com',
            gmail:'pepis@gmai.com',
            yahoo:'elpepo@yahoo.com.ar',
        }
    }   
    const{ outlook,gmail,yahoo}= cliente.correo





    console.log(`
        correos de pepito:

        outlook:${outlook}
        gmail:${gmail}
        yahoo:${yahoo}
         
    `)
}
mostrar_objeto()

const consumir_api = async ()=>{
    //estamos realizando mediante la funcion nativa de ajavascript denominada fecht, una solicitud HTTP a traves del metodo GET de manera de obtener las publicaciones en notacion JSON.
    const publicaciones= await fetch('https://jsonplaceholder.typicode.com/posts');

    const publicaciones_definitivas=await publicaciones.json();

    let items_totales=[]
    publicaciones_definitivas.forEach(element=>{
        //console.log('Titulo'+Element.title)
        let item=`<li class="list-group-item">${element.title}</li>`
        items_totales.push(item)

    });
    document.getElementById("lista_publicaciones").innerHTML=items_totales.join('');
}

consumir_api()