let elName = document.querySelector(".name")

let elPokemon = pokemons.map(item => {
    console.log( item.name)
})

elName.textContent = elPokemon