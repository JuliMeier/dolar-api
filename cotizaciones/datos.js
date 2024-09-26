fetch("https://dolarapi.com/v1/cotizaciones")
  .then(response => response.json())
  .then(data => 
    // console.log(data)
    {
         for(let i = 0; i < data.length; i++){
             renderizarCotizaciones(data[i].nombre, data[i].compra, data[i].venta);
    }}
);

function renderizarCotizaciones(nombre, compra, venta){
    let card = document.querySelector(".card-cotizaciones").cloneNode(true);

    console.log(card);

    card.querySelector(".card-name").innerHTML = `<h4>${nombre}</h4>`;
    card.querySelector("#precio-compra").innerHTML = `<p>${compra}</p>`;
    card.querySelector("#precio-venta").innerHTML = `<p>${venta}</p>`;

    card.style.display = "flex";

    document.querySelector(".card-container").appendChild(card);
}








// fetch("https://dolarapi.com/v1/cotizaciones")
//     .then(response => response.json())
//     .then(data => {
//         // Itera sobre cada cotización y renderiza las tarjetas
//         data.forEach(cotizacion => {
//             renderizarCotizaciones(cotizacion.nombre, cotizacion.compra, cotizacion.venta);
//         });
//     })
//     .catch(error => console.error("Error fetching data:", error));

// function renderizarCotizaciones(nombre, compra, venta) {
//     // Clona la tarjeta base
//     let card = document.querySelector(".card-cotizaciones").cloneNode(true);
    
//     // Actualiza los valores de la tarjeta clonada
//     card.querySelector(".card-name").innerHTML = `<h4>${nombre}</h4>`;
//     card.querySelector(".values-left .value-price").innerHTML = `<p>${compra}</p>`;
//     card.querySelector(".values-right .value-price").innerHTML = `<p>${venta}</p>`;
    
//     // Asegúrate de que el clon no esté visible (ocultar el original)
//     card.style.display = "block"; 

//     // Agrega la tarjeta clonada al contenedor adecuado
//     document.querySelector(".card-container").appendChild(card);
// }
