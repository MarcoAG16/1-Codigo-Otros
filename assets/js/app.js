// Establecemos la URL base de la API de GitHub
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
// Seleccionamos elementos en el DOM para mostrar la información del usuario
const $n = document.querySelector('.name'); // Seleccionamos por clase 'name'
const $b = document.querySelector('.blog'); // Seleccionamos por clase 'blog'
const $l = document.querySelector('.location'); // Seleccionamos por clase 'location'

// Función asincrónica para mostrar el perfil de usuario
async function displayUser(username) {
  // Mostramos un mensaje de "cargando..." mientras se realiza la solicitud
  $n.textContent = 'Cargando...';
  
  try {
    // Realizamos una solicitud a la API de GitHub para obtener los datos del usuario
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json(); // Esperamos la respuesta del servidor y almacenamos la información en 'data'
    console.log(data); // Mostramos la información en la consola
    
    // Actualizamos los elementos del DOM con la información del usuario
    $n.textContent = data.name;
    $b.textContent = data.blog;
    $l.textContent = data.location;
  } catch (err) {
    // Si se produce un error, manejamos la excepción en esta función
    handleError(err);
  }
}

// Función para manejar errores
function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`; // Mostramos un mensaje de error en caso de fallo
}

// Llamamos a la función para mostrar el perfil del usuario 'stolinski' y manejamos errores si los hay
displayUser('stolinski').catch(handleError);
