//ActContador
let inputContador = document.getElementById("contador");
let inputBuscador = document.getElementById("buscador");
let inputAcronimo = document.getElementById("acronimo");
let inputSubmit = document.getElementById("subir");
//let ejecutarBtn = document.getElementById('ejecutar-btn');


let textBuscador= inputBuscador.value;
let textAcronimo= inputAcronimo.value;
//Contador
inputSubmit.addEventListener('click', function(){
    let textoContador = inputContador.value; 
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
    //if(inputContador=="none")

});
//Buscador
inputBuscador.addEventListener('click', function(){

});
//Acronimo
inputAcronimo.addEventListener('click', function(){

});