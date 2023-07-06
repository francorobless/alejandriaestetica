let articulos = [];
let precio = [];
let cantidades = {}; // Objeto para realizar el seguimiento de las cantidades de productos

agregarAlcarrito = (nombreProducto, precioProducto) => {
  articulos.push(nombreProducto);
  precio.push(precioProducto);
  if (cantidades.hasOwnProperty(nombreProducto)) {
    cantidades[nombreProducto]++;
  } else {
    cantidades[nombreProducto] = 1;
  }
  sumarPrecios();
}

sumarPrecios = () => {
  let totalCarrito = 0;

  let articulosCarrito = document.getElementById('articulosCarrito');
  let contenido = "";
  for (let producto in cantidades) {
    let cantidad = cantidades[producto];
    contenido += `<span>${producto} x${cantidad}</span><br>`;
  }
  articulosCarrito.innerHTML = contenido;

  let totalCarritoElement = document.getElementById('totalCarrito');
  totalCarritoElement.textContent = "TOTAL: $" + precio.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  let contenedorcarrito = document.getElementById('contenedorcarrito');
  let topePagina = window.innerHeight - 10; // Altura disponible de la ventana menos 10 píxeles
  contenedorcarrito.style.maxHeight = topePagina + 'px';

  const textoCarrito = document.getElementById('textoCarrito');
  if (articulos.length === 0) {
    textoCarrito.textContent = 'EL CARRITO SE ENCUENTRA VACÍO.';
    articulosCarrito.style.display = 'none';
  } else {
    textoCarrito.textContent = 'ARTÍCULOS EN EL CARRITO:';
    articulosCarrito.style.display = 'block';
  }
}

vaciarCarrito = () => {
  articulos = [];
  precio = [];
  cantidades = {};
  sumarPrecios();
}

// Desplegar div
let botonDesplegar = document.getElementById('botonDesplegar');
let contenidoDesplegable = document.getElementById('contenidoDesplegable');
let botonVaciarCarrito = document.getElementById('vaciarCarrito');

botonDesplegar.addEventListener('click', () => {
  if (contenidoDesplegable.style.display === 'none') {
    contenidoDesplegable.style.display = 'block';
  } else {
    contenidoDesplegable.style.display = 'none';
  }
});

botonVaciarCarrito.addEventListener('click', () => {
  vaciarCarrito();
  contenidoDesplegable.style.display = 'block'; // Mostrar el contenidoDesplegable después de vaciar el carrito
});

contenidoDesplegable.style.display = 'none'; // Asegurar que el contenidoDesplegable esté oculto al cargar la página

sumarPrecios(); // Llamar a sumarPrecios() al cargar la página para mostrar el estado inicial del carrito
