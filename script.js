const API_KEY = 'YOUR_API_KEY'; // Replace with your TMDb API key
    const API_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
    const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

    async function loadMovies() {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        displayMovies(data.results);
      } catch (error) {
        document.getElementById('movies').innerText = 'Failed to load movies.';
        console.error(error);
      }
    }
function displayMovies(movies) {
      const movieContainer = document.getElementById('movies');
      movieContainer.innerHTML = '';

      movies.forEach(movie => {
        const div = document.createElement('div');
        div.classList.add('movie');
        div.innerHTML = `
          <img src="${IMG_PATH + movie.poster_path}" alt="${movie.title}" />
          <div class="movie-info">
            <div class="title">${movie.title}</div>
            <div class="rating">⭐ ${movie.vote_average}</div>
          </div>
        `;
        movieContainer.appendChild(div);
      });
    }
