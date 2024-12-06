let elPokemonList = document.querySelector(".list")


function renderCountries(arr, list){
    
    arr.map(item => {
        let elCountryItem = document.createElement("li")
        elCountryItem.className = "w-[250px] rounded-md overflow-hidden bg-slate-200 mt-4"

        elCountryItem.innerHTML = `
            <img class="w-full h-[200px] object-cover cursor-pointer" src=${item.img} width="100" height="160" alt=${item.name}/>
            <div class="p-5 rounded-xl text-center cursor-pointer">
              <p class="text-2xl font-bold text-gray-500 text-center">#${item.num}</p>
              <h2 class="font-bold mb-2 text-[1.5rem] text-2xl">${item.name}</h2>
              <button class="w-[200px] text-2xl ">${item.type}</button>
            </div>
        `
        list.append(elCountryItem)
    })
}

renderCountries(pokemons, elPokemonList)