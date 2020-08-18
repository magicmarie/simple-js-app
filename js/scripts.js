var pokemonRepository = (function() {
  var pokemonList = [
  {
  name: 'Bulbasaur',
  height: 2.04,
  types: ['grass','poison'],
  abilities: 'overgrow'
  },
  {
  name: 'Weedle',
  height: 1.00,
  types: ['bug','poison'],
  abilities: 'shield dust'
  },
  {
  name: 'Jigglypuff',
  height: 1.08,
  types: ['normal', 'fairy'],
  abilities: ['cute charm', 'competitive']
  },
  {
  name: 'Nidoqueen',
  height: 4.03,
  types: ['poison', 'ground'],
  abilities: ['poison point', 'rivalry']
  }
];

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function addListItem(pokemon) {
    var pokelist = document.querySelector('.pokemon-list');
    var listItem = document.createElement('li');
    pokelist.appendChild(listItem);
    var button = document.createElement('button');
    listItem.appendChild(button);
    button.innerText = pokemon.name;
    button.classList.add('button-name');

    button.addEventListener('click', function(){
      showDetails(pokemon);
      });
  }

  function showDetails(pokemon) {
      console.log(pokemon);
  }

return {
  getAll: getAll,
  add: add,
  addListItem: addListItem,
  showDetails: showDetails,
};
})()

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
})
