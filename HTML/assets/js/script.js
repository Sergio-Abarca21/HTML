import pcsVenta from "./pcsVenta.js";
import juegosPs5Venta from "./juegosPs5Venta.js";

const productosPC = pcsVenta;
const productosJuegosPS5 = juegosPs5Venta;

document.addEventListener("DOMContentLoaded", function () {
  const contenedorPC = document.getElementById("productosPC");
  const contenedorJuegosPS5 = document.getElementById("productosJuegosPS5");

  if (contenedorPC) {
    pintar(productosPC, contenedorPC);
  }

  if (contenedorJuegosPS5) {
    pintar(productosJuegosPS5, contenedorJuegosPS5);
  }
});

function createCard(producto) {
  return `
    <div class="col-md-4 mb-4 h-100 mb-3 my-3">
        <div class="card">
            <img
                src="${producto.src}"
                class="card-img-top"
                alt="Imagen del producto"
            />
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p><i class="fas fa-cogs"></i> ${producto.tipo}</p>
                <p class="card-text">${producto.descripcion}</p>
                <p><i class="fas fa-dollar-sign"></i> ${producto.costo}</p>
            </div>
        </div>
    </div>`;
}

function pintar(arreglo, contenedor) {
  let html = "";
  arreglo.forEach((producto) => {
    html += createCard(producto);
  });
  contenedor.innerHTML = html;
}
