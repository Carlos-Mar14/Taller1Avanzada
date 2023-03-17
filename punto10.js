
const tiposAlimento = ['vegetal', 'animal', 'insecto'];
const nombresAlimento = ['manzana', 'banana', 'naranja', 'pollo', 'res', 'cerdo', 'zanahoria', 'espinaca', 'tomate', 'camarón'];

function generarAlimentoAleatorio() {
  const nombre = nombresAlimento[Math.floor(Math.random() * nombresAlimento.length)];
  const tipo = tiposAlimento[Math.floor(Math.random() * tiposAlimento.length)];
  const nivelEnergia = Math.floor(Math.random() * 401) + 100; 
  return { nombre, tipo, nivelEnergia };
}
const alimentos = [];
for (let i = 0; i < 300; i++) {
  alimentos.push(generarAlimentoAleatorio());
}console.log(alimentos)

let filtro=alimentos.filter(function(alimento){
  return alimento.tipo==='vegetal'&& alimento.nivelEnergia >=200
})
console.log(filtro)

const filtrarAlimentos=(alimentos, sumatoriaEnergiaVegetales)=>{
  setTimeout(function(){
      let alimentosFiltrados = alimentos.filter(alimento => alimento.tipo ==='vegetal' && alimento.nivelEnergia >200)
      sumatoriaEnergiaVegetales(alimentosFiltrados)
  },5000)
} 
filtrarAlimentos(alimentos, (alimentosFiltrados)=>{
  let sumatoriaEnergiaVegetales = 0
  console.log(alimentosFiltrados)
  alimentosFiltrados.forEach(alimento => {
      sumatoriaEnergiaVegetales = sumatoriaEnergiaVegetales + alimento.nivelEnergia
  })
  console.log("La suma del nivel de energia en los vegetales consumidos en la dieta de Grogu son: " + sumatoriaEnergiaVegetales)
})

