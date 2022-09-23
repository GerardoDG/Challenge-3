const inputNombre = document.querySelector("#nombre")

inputNombre.addEventListener("blur", (evento) => {
    console.log(evento.target);
})

function validarNombre(input) {
    const nombre = input.value;
    console.log(nombre);
}