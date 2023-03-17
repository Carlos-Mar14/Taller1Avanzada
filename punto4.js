// Punto 4 taller 
let sables = [2, 4, -8, 5, -6];

let filtro= sables.filter(sable=>sable < 0)
console.log(filtro);

//Tradicional
function contarNegativos(sables){
    return sables.filter(sable=>sable<0).length
}
console.log(contarNegativos([2, 4, -8, 5, -6]));
    