$('#clic').on('click', function() {
let a = $("#search").val();

  xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/' +a, true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let pokemon = JSON.parse(this.responseText);

      let name = pokemon.species.name;
      let move = pokemon.moves[0].move.name;
      let moveTwo = pokemon.moves[1].move.name;
      let moveThree = pokemon.moves[2].move.name;
      let moveFour = pokemon.moves[3].move.name;
      let pic = pokemon.sprites.front_default;
      let id =  pokemon.id;

      document.getElementById("pic").src = pic;
      document.getElementById("name").innerHTML = name +" #" +id;
      document.getElementById("text").innerHTML = move;
      document.getElementById("textTwo").innerHTML = moveTwo;
      document.getElementById("textThree").innerHTML = moveThree;
      document.getElementById("textFour").innerHTML = moveFour;


    };
  };
  xhr.send();

});
