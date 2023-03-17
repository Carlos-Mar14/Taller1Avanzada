//Tradicional
function salarioTotal(){
    let salario = 3500000;
    let comision = 1500000;
    let deducciones= salario*0.05;
    let total=salario+comision-deducciones;
    return total
}
salarioTotal=salarioTotal()
console.log(`El salario mensual a pagar es: ${salarioTotal}`)

//Flecha
let salarioTotal2=()=>{
    let salario = 3500000;
    let comision = 1500000;
    let deducciones= salario*0.05;
    let total=salario+comision-deducciones;
    return total
}
salarioTotal2=salarioTotal2()
console.log(`El salario mensual a pagar es: ${salarioTotal2}`)
