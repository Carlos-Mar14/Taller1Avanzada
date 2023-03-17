temperaturaMedia= (temperaturas)=>{
    let temperaturaMinima=Math.max(...temperaturas)
    let temperaturaMaxima=Math.min(...temperaturas)
    temperaturaMedia= (temperaturaMaxima-temperaturaMinima)/2;
    console.log (`La temperatura promedio es:  ${temperaturaMedia}`)
}
temperaturaMedia(temperaturas =[17, 25, 26, 35])



// function temperaturaMedia2 (temperaturas){
//     let temperaturaMinima=Math.max(...temperaturas)
//     let temperaturaMaxima=Math.min(...temperaturas)
//     temperaturaMedia2= (temperaturaMaxima-temperaturaMinima)/2;
//     console.log (`La temperatura promedio es:  ${temperaturaMedia2}`)
// }
// temperaturaMedia2(temperaturas =[17, 25, 26, 35])
