export default class Crypto{
    
constructor(){}

async getAPI(){
    const Crypto_json=await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')

    this.Crypto_js=await Crypto_json.json();
}


async Armartabla(){

    await this.getAPI()

    let filas=[]
    this.Crypto_js.forEach((element,index)=>{
        let fila=`
            <tr>
            <td>${index+1}</td>
                <td><img src="${element.image}" alt="" style="width:25px; height:25px;"></img></td>
                <td>${element.name}</td>
                <td>${element.symbol}</td>
                <td>${element.current_price}</td>   
                <td>${element.total_volume}</td>
            </tr>
            
        `
        filas.push(fila)
        
       

    });

    document.getElementById("tbl_body").innerHTML=filas.join("")

}







}