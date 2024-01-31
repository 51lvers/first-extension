document.addEventListener('DOMContentLoaded', function () {
  const jokeButton = document.getElementById('jokeButton');

  jokeButton.addEventListener('click', function () {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Log the entire response to the console

        const jokeText = data.value ? data.value.joke : "Failed to fetch Chuck Norris joke";
        alert(jokeText);
      })
      .catch(error => console.error('Error fetching Chuck Norris joke:', error));
  });
});