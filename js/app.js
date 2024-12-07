let elPokemonList = document.querySelector(".list")
let elInput = document.querySelector(".input_text")
let elCount = document.querySelector(".show_count")
let elBigCard = document.querySelector(".big_card")

elCount.textContent = `The Number Of Cards: ${pokemons.length}`

function renderCountries(arr, list){
    list.innerHTML = null
    arr.map(item => {
        let elCountryItem = document.createElement("li")
        elCountryItem.className = "w-[250px] rounded-md overflow-hidden bg-slate-200 mt-4"
        elCountryItem.innerHTML = `
          <div onClick="handleClick(${item.id})">
               <img class="w-full h-[200px] object-cover cursor-pointer" src=${item.img} width="100" height="160" alt=${item.name}/>
                <div class="p-5 rounded-xl text-center cursor-pointer">
                 <p class="text-2xl font-bold text-gray-500 text-center">#${item.num}</p>
                 <h2 class="font-bold mb-2 text-[1.5rem] text-2xl">${item.name}</h2>
                <button class="w-[200px] text-2xl ">${item.type}</button>
                </div>
          </div>
        `
        list.append(elCountryItem)
    })
}

renderCountries(pokemons, elPokemonList)


// Search input
elInput.addEventListener("input", (event)=> {
    const value = event.target.value.toLowerCase()
    const searchedValue = pokemons.filter(item => item.name.toLowerCase().includes(value) || item.num.toLowerCase().includes(value))
    renderCountries(searchedValue, elPokemonList)
})


// HandleClick
function handleClick(id){
   pokemons.find(item => {
        if(item.id === id){
            elBigCard.innerHTML = `
            <div class="px-10">
              <div class="flex justify-between items-center ">
                 <div class="flex justify-center items-center w-[70px] h-[40px]  text-center border border-black rounded-xl">
                   <p class="font-bold text-2xl">${item.height}</p>
                 </div>
                 <div>
                     <img class="w-full h-[200px] cursor-pointer mb-10" src=${item.img} width="100" height="160" alt=${item.name}/>
                     <p class="text-center text-2xl font-bold text-gray-600">#${item.num}</p>
                     <h2 class="text-center text-[3.5rem] font-bold text-gray-600">${item.name}</h2>
                 </div>
                  <div class="flex justify-center items-center w-[70px] h-[40px] text-center border border-black rounded-xl">
                   <p class="text-2xl font-bold">${item.weight}</p>
                 </div>
              </div>

              <div class="flex justify-between items-center mt-20">
               <div>
                <p class="text-center text-[2rem] font-bold mb-2">Types</p>
                 <div class="w-[200px] text-center p-2 bg-green-500 h-[45px]">
                   <h3 class="text-[2.5rem] font-bold gap-2 text-white">
                     ${item.type}
                   </h3>
                 </div>
               </div>
                <div>
                <p class="text-center text-[2rem] font-bold mb-2">Weaknesses</p>
                 <div class="w-[300px] text-center p-2 bg-red-500 h-[45px]">
                   <h3 class="text-[2.5rem] font-bold gap-2 text-white">
                     ${item.weaknesses}
                   </h3>
                 </div>
               </div>
              </div>
              </div>
            `
        }
    })
  

}