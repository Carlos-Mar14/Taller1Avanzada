class Planeta {
    constructor(nombre, latitud, longitud, nivelOxigeno, volumenAgua) {
      this.nombre = nombre;
      this.latitud = latitud;
      this.longitud = longitud;
      this.nivelOxigeno = nivelOxigeno;
      this.volumenAgua = volumenAgua;
    }
}
const planetas = [
    new Planeta("Tatooine", 50.000, 70.000, 25, 0),
    new Planeta("Coruscant", 25.000, -75.000, 50, 1000),
    new Planeta("Naboo", -10.000, 80.000, 80, 500),
    new Planeta("Dagobah", 40.000, -30.000, -10, 50),
    new Planeta("Endor", -20.000, 100.000, 70, 200),
    new Planeta("Hoth", 80.000, -60.000, 20, 0),
    new Planeta("Kashyyyk", -40.000, -120.000, 60, 1000),
    new Planeta("Mustafar", 0, 170.000, -5, 0),
    new Planeta("Alderaan", -60.000, 50.000, 90, 500),
    new Planeta("Yavin 4", 0, -150.000, 60, 100),
    new Planeta("Kamino", -30.000, -170.000, 40, 1000),
    new Planeta("Geonosis", -50.000, -80.000, 30, 0),
    new Planeta("Jakku", 10.000, 50.000, 10, 0),
    new Planeta("Lothal", -20.000, -60.000, 50, 100),
    new Planeta("Scarif", 0, -100.000, 70, 500)
];
let totalAgua = planetas.reduce((acumulador, planeta) => acumulador + planeta.volumenAgua, 0);
console.log(`Total de agua de los 15 planetas: ${totalAgua}`);

let totalOxigeno = planetas.reduce((acumulador, planeta) => acumulador + planeta.nivelOxigeno, 0);
let totalOxigenoMultiplicado = totalOxigeno * 100;
console.log(`Total de oxígeno multiplicado por 100: ${totalOxigenoMultiplicado}`);

let planetasNivelNegativo = planetas.filter(function(planeta){
    return planeta.nivelOxigeno<0
})
console.log("Los planetas con nivel de oxígeno negativo son: ")
console.log(planetasNivelNegativo)

let planetasSinAgua = planetas.filter(function(planeta){
    return planeta.volumenAgua<=0
})
console.log("Los planetas sin agua son: ")
console.log(planetasSinAgua)