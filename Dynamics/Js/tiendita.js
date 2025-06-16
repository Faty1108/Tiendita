lista = document.getElementById("lista");
lista.innerHTML = "<li> <button id=\"qlapiz\"></button></li>"
lista.innerHTML += "<li><button id=\"qgoma\"></button></li>"
lista.innerHTML += "<li><button id=\"qsacapuntas\"></button></li> "
//Botones de añadir productos
producto1btn = document.getElementById("lapiz");
producto2btn = document.getElementById("goma");
producto3btn = document.getElementById("sacapuntas");
//Botones de quitar productos
qproducto1btn = document.getElementById("qlapiz");
qproducto2btn = document.getElementById("qgoma");
qproducto3btn = document.getElementById("qsacapuntas");

let cantidad1 = 0;
let cantidad2 = 0;
let cantidad3 = 0;


function productos(cantidad, producto, lugar)
{
        lista.children[lugar].textContent = (producto+" " + cantidad) ;
}
//Eventos para poner
producto1btn.addEventListener("click", () => {
    cantidad1 ++ ;
    productos(cantidad1, "Lapiz ",0) ;
})

producto2btn.addEventListener("click", () => {
    cantidad2 ++ ;
    productos(cantidad2, "Goma ",1) ;
})

producto3btn.addEventListener("click", () => {
    cantidad3 ++ ;
    productos(cantidad3, "Sacapuntas",2) ;
})

//Eventos para quitar
qproducto1btn.addEventListener("click", () => {
    if(cantidad1 > 0)
    {
        cantidad1 -- ;
        productos(cantidad1, "Lapiz ",0) ;
    }
    
})

qproducto2btn.addEventListener("click", () => {
    if(cantidad1 > 0)
    {
        cantidad2 -- ;
        productos(cantidad2, "Goma ",1) ;
    }
})

qproducto3btn.addEventListener("click", () => {
    if(cantidad1 > 0)
    {
        cantidad2 -- ;
        productos(cantidad2, "Goma ",1) ;
    }
})

productos(cantidad1, "Lapiz ",0) ;
productos(cantidad2, "Goma ",1) ;
productos(cantidad3, "Sacapuntas ",2) ;