//agregar al carrito
let articulos = [];
let precio = [];

agregarAlcarrito = (nombreProducto, precioProducto) => {
  articulos.push(nombreProducto);
  precio.push(precioProducto);
  console.log(articulos);
  sumarPrecios();
}

sumarPrecios = () => {
    let suma = precio.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(suma);

    let articulosCarrito = document.getElementById('articulosCarrito');
    articulosCarrito.textContent = "Artículos en el carrito: " + articulos.join(", ");
  
    let totalCarrito = document.getElementById('totalCarrito');
    totalCarrito.textContent = "Total: " + suma; 
}


//desplegar div
let botonDesplegar = document.getElementById('botonDesplegar');
let contenidoDesplegable = document.getElementById('contenidoDesplegable');

botonDesplegar.addEventListener('click', () => {
  if (contenidoDesplegable.style.display === 'none') {
    contenidoDesplegable.style.display = 'block';
  } else {
    contenidoDesplegable.style.display = 'none';
  }
});