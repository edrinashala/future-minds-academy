const gerneList = document.querySelector('#gerneList');
const movies = document.querySelector('#movies');
gerneList.innerHTML = '';

for (let i = 0; i < allMovies.length; i++) {
    gerneList.innerHTML += `<option value="">${allMovies[i].gerne}</option>`;
}
loadMovies();
function loadMovies(){

  let currentGerne = allMovies[0].movies;
  movies.innerHTML = '';
  for (let i=0; i<currentGerne.length; i++){
    movies.innerHTML = `
  <li>
                    <div><img src="img/${currentGerne[i].thumb}" alt=""></div>
                    <h3>${currentGerne[i].title}</h3>
                    <div class="datetime">
                        <p>${currentGerne[i].date}</p>
                        <p>${currentGerne[i].length}</p>
                    </div>
                </li>
                
    `;
  }
  
}