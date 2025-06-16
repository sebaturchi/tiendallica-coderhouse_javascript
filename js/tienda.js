let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const botonesAgregar = document.querySelectorAll(".agregar-carrito");

botonesAgregar.forEach(boton => {
  boton.addEventListener("click", function () {
    const card = this.closest(".card");
    const titulo = card.querySelector(".card-title").textContent;
    const descripcion = card.querySelector(".descripcion").textContent;
    const precio = card.querySelector(".precio").textContent;
    const imagen = card.querySelector("img").src;

    const producto = {
      titulo,
      descripcion,
      precio,
      imagen
    };

    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));

    console.log("Agregado al carrito:", producto);
  });
});
