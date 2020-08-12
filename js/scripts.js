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

return {
  getAll: getAll,
  add: add
};
})()

pokemonRepository.getAll().forEach(function(pokemon) {
document.write('name: ' + pokemon.name + '<br>' + 'height: ' + pokemon.height + '<br>' + 'types: ' + pokemon.types + '<br>' + 'abilities: ' + pokemon.abilities + '<p>');
})
