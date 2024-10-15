// Seleccionar elementos del DOM
const fetchPostsBtn = document.getElementById('fetchPostsBtn');
const postsList = document.getElementById('postsList');

// Función para traer los posts de la API
async function fetchPosts() {
  try {
    // Hacer el request a la API
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    // Manejo de error si la respuesta no es exitosa
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }
    
    // Convertir la respuesta a JSON
    const posts = await response.json();

    // Limpiar la lista antes de mostrar nuevos resultados
    postsList.innerHTML = '';

    // Mostrar los posts en la lista
    posts.forEach(post => {
      const listItem = document.createElement('li');
      listItem.classList.add('list-group-item');
      listItem.textContent = `${post.id}: ${post.title}`;
      postsList.appendChild(listItem);
    });
  } catch (error) {
    // Manejo de errores
    console.error('Ocurrió un error:', error);
    postsList.innerHTML = '<li class="list-group-item text-danger">Error al traer los posts. Intenta de nuevo más tarde.</li>';
  }
}

// Evento para el botón
fetchPostsBtn.addEventListener('click', fetchPosts);
