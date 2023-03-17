function generarClones(){
    const codigos = Math.floor(Math.random() * 20);
    const edades = Math.floor(Math.random() * 40);
    console.log(codigos,edades)
    return{codigos,edades}
}
const clones=[]
for (let i = 0; i < 20; i++) {
    clones.push(generarClones());
}console.log(clones)

let edadMayor= 0;
clones.forEach(function(clon){
    if (clon.edades>edadMayor){
        edadMayor=clon.edades
    }
    
   

}) 
console.log(edadMayor)