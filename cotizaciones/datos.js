cotizacionesDolar();
cotizacionesOtras();

// fetch para traer cotizaciones de dolar
function cotizacionesDolar() {
  fetch("https://dolarapi.com/v1/dolares")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        renderizarCotizaciones(data[i].nombre, data[i].compra, data[i].venta);
      }
      mostrarTiempoReal(data[0].fechaActualizacion);
      console.log(data[0].fechaActualizacion);
    });
}

// fetch para traer otras cotizaciones
function cotizacionesOtras() {
  fetch("https://dolarapi.com/v1/cotizaciones")
    .then((response) => response.json())
    .then((data) =>
      // console.log(data)
      {
        for (let i = 0; i < data.length; i++) {
          renderizarCotizaciones(data[i].nombre, data[i].compra, data[i].venta);
        }
      }
    );
}


function renderizarCotizaciones(nombre, compra, venta){
    let card = document.querySelector(".card-cotizaciones").cloneNode(true);

    console.log(card);

    card.querySelector(".card-name").innerHTML = `<h4>${nombre}</h4>`;
    card.querySelector("#precio-compra").innerHTML = `<p>${compra}</p>`;
    card.querySelector("#precio-venta").innerHTML = `<p>${venta}</p>`;

    card.style.display = "flex";

    document.querySelector(".card-container").appendChild(card);
}


function mostrarTiempoReal(fecha) {


    // Crea un nuevo objeto Date a partir de la fecha recibida
    const fechaObj = new Date(fecha);

    // Opciones para formatear la fecha
    const opciones = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false // Cambia a true si quieres formato de 12 horas
    };

    // Formatear la fecha
    const fechaFormateada = fechaObj.toLocaleString('es-ES', opciones);

    // Actualiza el contenido del elemento con id "hora"
    document.querySelector("#hora").innerHTML = fechaFormateada;

}






