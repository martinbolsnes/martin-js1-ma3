// Question 2

async function getGames() {
  try {
    const response = await fetch(
      'https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-ratings'
    );
    const jsonFromServer = await response.json();
    const results = jsonFromServer.results;

    document.querySelector('.loading').classList.add('hide');

    for (let i = 0; i < results.length; i++) {
      document.querySelector('main').innerHTML += `
        <div class="card">
            <h2>${results[i].name}</h2>
            <p>Rating: ${results[i].rating}</p>
            <p>Tags: ${results[i].tags.length}</p>
        </div>`;
      if (i === 7) {
        break;
      }
    }
  } catch (error) {
    document.querySelector('.alert').innerHTML = showAlertTouser(
      'An error occured (Cannot load content)',
      'error'
    );
  } finally {
    setTimeout(function () {
      document.querySelector('.alert').innerHTML = '';
    }, 4000);
  }
}

getGames();
