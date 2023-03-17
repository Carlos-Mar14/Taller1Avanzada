// //Tradicional
// function medirDistancia(x1,x2,y1,y2){
//     return Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2))
// }
// let distanciaCalculada=medirDistancia(10,20,30,40)
// console.log(`la distancia calculada fue de ${distanciaCalculada}`)


//Flecha
let medirDistancia2= (x1,x2,y1,y2)=>{
    distancia= Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2))
    return distancia.toFixed(2) //toFixed(2): redondear valor a dos decimales  
}
console.log(`la distancia calculada fue de ${medirDistancia2(10,20,30,40)}`)