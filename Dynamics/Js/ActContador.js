//ActContador
let botonContador = document.getElementById("contador");
let botonBuscador = document.getElementById("buscador");
let botonAcronimo = document.getElementById("acronimo");
let inputSubmit = document.getElementById("subir");
//let ejecutarBtn = document.getElementById('ejecutar-btn');


let textBuscador= botonBuscador.value;
let textAcronimo= botonAcronimo.value;
//Contador
botonSubmit.addEventListener('click', function(){
    let textoContador = botonContador.value; 
    textoContador.length

    let resultados = document.getElementById("resultados");
    let valor;
    for(let i=0; i<textoContador.length;i++){
        let sinEspacios=textoContador.value;
        if(sinEspacios[i]!=" "){
            valor += sinEspacios[i];
        }
    }

    resultados.innerHTML +=`Los resultados obtenidos son: ${textoContador.length}`;
    resultados.innerHTML +=`Los resultados obtenidos sin espacios son: ${valor.length}`;
    //if(botonContador=="none")

});
//Buscador
botonBuscador.addEventListener('click', function(){

});
//Acronimo
botonAcronimo.addEventListener('click', function(){

});

//Función para cambiar de sección
function cambio(){
    contenedor = document.getElementsByClassName("derecha");
    if(contenedor.id==="contador"){

    }
}