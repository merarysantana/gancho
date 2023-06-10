// alert("hola humanos")
// //*coonsumir la api de rick and morty

// // alert prompt para ingresar valores del usuario 
// //var nombreUS = prompt("ingresa tu nombre");

// // alert para mostrar al usuario
// //alert(nombreUS + "Bienvenido a la api de rick and morty")


// var numero = parseInt(prompt("ingresa un numero"
// )
// ); // convierte un string a un numero entero
// var numero2 = parseInt(prompt
//     ("ingresa otro numero")
//     ); // convierte un string a un numero entero 

//     var suma = numero + numero2; 
//     alert("la suma de los numeros es:" + suma)
//     //parseint ("1"); // convierte un string a un numero entero 

personajes(mostrarDatos);
function personajes (done) {

   const url = 'https://rickandmortyapi.com/api/character';

   fetch(url)
   
      .then(Resp => Resp.json())
      .then(data => done (data)) 
      .catch(error => console.log(error))
      .finally(() => console.log ('finalizo'));
      
};

function mostrarDatos(data) {
    console.log(data.results);
    const results = data.results;
    const section = document.querySelector('.section');
    let html = '';
    results.forEach(element => {
        html += `
        <div class="card">
        <img src="${element.image}" alt="${element.name}">
        <h2>${element.name}</h2>
        <p>${element.species}</p>
        </div>
        `
    });
    section.innerHTML = html;
}

obtenerDatos(mostrarDatos);



