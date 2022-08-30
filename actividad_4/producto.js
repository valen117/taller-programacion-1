export default class Producto{
    
    constructor(){}
    
    async getAPI(){
        const producto=await fetch('https://fakestoreapi.com/products/category/'+document.getElementById("slt").value)

    

        const carta_producto=await producto.json()
        let columnas=[]
        carta_producto.forEach((element) => {
            let columna=`
            <div class="col-lg-3">
              <div class="card" >
                  <img height="330" src="${element.image}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.description}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
            </div>
          </div>`
            columnas.push(columna)
        });
    
        document.getElementById("row1").innerHTML=columnas.join("")
    
    }
    
}    