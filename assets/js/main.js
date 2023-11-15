
function pokemonTypesToLi(pokemonTypes)
{
  return pokemonTypes.map( (typeslot) => `<li class="tipo">${typeslot.type.name}</li>` );
}

function pokemonToLi(pokemon)
{
  return `<li class="pokemon ${pokemon.types[0].type.name}" >
  <span class="numero">#${pokemon.id}</span>
  <span class="nome">${pokemon.name}</span>
  <div class="detalhes">
    <ol class="tipos">
      ${ pokemonTypesToLi(pokemon.types).join("") }
    </ol>
    <img
      src="${pokemon.sprites.other["official-artwork"].front_default}"
      alt="${pokemon.name}"/>
  </div>
</li>`
}




const pokemonOl = document.getElementById("pokemonList");



pokeApi.getPokemons().then((pokemons = []) =>
pokemonOl.innerHTML = pokemons.map( (pokemon) => pokemonToLi(pokemon) ).join("")
)
