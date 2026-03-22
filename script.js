function cambiarModo() {
    document.body.classList.toggle("oscuro");
    let modo = document.getElementById("modo");    
    if (document.body.classList.contains("oscuro")) {
        modo.textContent = "Modo Claro";
    }
    else {
        modo.textContent = "Modo Oscuro";
    }
}

let btn = document.getElementById("arriba");
btn.style.display = "none";
window.onscroll = function(){
    btn.style.display = window.scrollY > 200 ? "block" : "none";
}
btn.onclick = function(){
    window.scrollTo({top:0, behavior:"smooth"})
}

document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let mensaje = document.getElementById("mensaje");

    if (nombre === "" || correo === "") {
        mensaje.textContent = "Todos los campos son obligatorios";
    } else if (!correo.includes("@")) {
        mensaje.textContent = "Correo inválido";
    } else {
        mensaje.textContent = "Formulario enviado correctamente";
    }
});

function agregar() {
    let tarea = document.getElementById("tarea").value;
    let lista = document.getElementById("list");

    let li = document.createElement("li");
    li.textContent = tarea;

    lista.appendChild(li);
}

let checks = document.querySelectorAll("input[type='checkbox']");
checks.forEach(c=>{
    c.addEventListener("change", ()=>{
        let total = document.querySelectorAll("input[type='checkbox']:checked").length;
        console.log("Seleccionados: ", total);
    });
});

let links = document.querySelectorAll("a[href*='instagram']");
links.forEach(function(link) {
    link.addEventListener("click", function(e) {
        if (!confirm("¿Quieres salir del sitio?")) {
            e.preventDefault();
        }
    });
});

function cambiar(img) {
    document.getElementById("principal").src = img.dataset.grande;
    principal.src = img.dataset.grande;
    let nombre = document.getElementById("nombreConsola");

    nombre.textContent = img.dataset.nombre;
    principal.scrollIntoView({behavior: "smooth", block: "center"});
}