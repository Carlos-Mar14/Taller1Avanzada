
//Flecha
const naves ="ARQ2555:Sara Bel-Sun, ARQ2556:Nodin Chavdri, ARQ2557:Finn"
const filtro = naves.split(',').map(piloto => piloto.split(':')[1]);
console.log(filtro);

// //Tradicional
// function filtro(naves1) {
//     const pilotos = naves1.split(',').map(piloto => piloto.split(':')[1]);
//     return pilotos;
//     }
//     const naves1 = "ARQ2555:Sara Bel-Sun, ARQ2556:Nodin Chavdri, ARQ2557:Finn";
//     const pilotos = filtro(naves1);
//     console.log(pilotos);
