const URL = 'https://handlers.education.launchcode.org/static/planets.json';

window.addEventListener('load', function () {
  fetch(URL).then(function (response) {
    response.json().then(function (planets) {
      const div = document.getElementById('destination');
      let index = 0;
      console.log(planets);
      planets.forEach(function (planet) {
        console.log(planet);
      });
      div.addEventListener('click', function () {
        div.innerHTML = `
        <div>
            <h3>Planet ${planets[index].name}</h3>
            <img src=${planets[index].image} height=250></img>
        </div>
        `;
        index = (index + 1) % planets.length;
      });
    });
  });
});
