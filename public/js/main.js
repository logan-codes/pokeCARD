
function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}




document.addEventListener("DOMContentLoaded", () => {
    const random = getRandomInt(1, 152)
    dataPokemon(random)
})

const dataPokemon = async (id) => {
    try {

        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()

        const poke = {
            img: data.sprites.other.dream_world.front_default,
            name: data.name,
            id: data.id,
            move: data.moves[0].move.name,
            ability: data.abilities[0].ability.name,
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            sp_atk: data.stats[3].base_stat,
            sp_def: data.stats[4].base_stat,
            vel: data.stats[5].base_stat,

        };

        componentePokemon(poke);
        statsPokemon(poke);




    } catch (error) {
        console.log(error)
    }


}




const componentePokemon = (poke) => {
    const cardPokemon = document.getElementsByClassName("card-header");



    const imgPokemon = document.createElement("img");
    imgPokemon.classList.add("img-fluid")
    imgPokemon.src = poke.img;


    cardPokemon[0].appendChild(imgPokemon)


}

const statsPokemon = (poke) => {
    const staPokemon = document.getElementsByClassName("card-body");

    const namePoke = document.createElement("h1");
    namePoke.classList.add("card-text")
    namePoke.innerHTML= "Nombre: " + poke.name[0].toUpperCase() + poke.name.slice(1);

    const row = document.createElement("div");
    row.classList.add("row")

    const col = document.createElement("div")
    col.classList.add("col-6")
    col.classList.add("mt-3")

    const atkPokemon = document.createElement("h5")
    atkPokemon.classList.add("card-text")
    atkPokemon.innerHTML = "Ataque: "+ poke.attack

    const dfsPokemon = document.createElement("h5")
    dfsPokemon.classList.add("card-text")
    dfsPokemon.innerHTML = "Defensa: " + poke.defense

    const sp_atk = document.createElement("h5");
    sp_atk.classList.add("card-text")
    sp_atk.innerHTML = "Atq. Esp: " + poke.sp_atk

    const sp_def = document.createElement("h5");
    sp_def.classList.add("card-text")
    sp_def.innerHTML = "Def. Esp: " + poke.sp_def

    const col_1 = document.createElement("div")
    col_1.classList.add("col-6")
    col_1.classList.add("mt-3")

    const numberPoke = document.createElement('h5')
    numberPoke.classList.add('card-text')
    numberPoke.innerHTML = "No: " + `#${poke.id.toString().padStart(3, 0)}`;

    const healt = document.createElement('h5')
    healt.classList.add('card-text')
    healt.innerHTML = "Salud: " + poke.hp;

    const hab = document.createElement("h5")
    hab.classList.add("card-text")
    hab.innerHTML = "Habilidad: " + poke.ability

    const vel = document.createElement("h5")
    vel.classList.add("card-text")
    vel.innerHTML = "Velocidad: " + poke.vel;



    staPokemon[0].appendChild(namePoke)
    staPokemon[0].appendChild(row)

    row.appendChild(col)
    col.appendChild(atkPokemon)
    col.appendChild(dfsPokemon)
    col.appendChild(sp_atk)
    col.appendChild(sp_def)

    row.appendChild(col_1)
    col_1.appendChild(numberPoke)
    col_1.appendChild(healt)
    col_1.appendChild(hab)
    col_1.appendChild(vel)





}



function actualizar(){
    location.reload(true);
}

setInterval("actualizar()",30000);




/*

const pokemonContainer = document.querySelector("pokemonContainer")

function fetchPokemon(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(data => {
        createPokemon(data)
    } )
}

function fetchPokemons(number){
    for (let i = 1; i <= number; i++){
        fetchPokemon(i)
    }
}

function createPokemon(pokemon){
    const cardContainer = document.createElement("div")
    cardContainer.classList.add("card-container")

    const sprite = document.createElement("img")
    sprite.src = pokemon.sprites.front_default;

    cardContainer.appendChild(pokemonContainer)
    cardContainer.appendChild(sprite)


}

fetchPokemons(8);

const pokemon = document.getElementsByClassName("card-body")


function traerPokemon(){
    fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
    .then(res => res.json())
    .then(data => crearComponente(data))
    .then(data => console.log(data))
}

    function crearComponente(pokemon){

        const card = document.getElementsByClassName('card-body')


        const imagenPoke = document.createElement('img')
        imagenPoke.classList.add('img-fluid')
        imagenPoke.src = pokemon.sprites.front_shiny

        const nombrePoke = document.createElement('h5')
        nombrePoke.classList.add('card-title')
        nombrePoke.textContent = pokemon.name;

        const numberPokemon = document.createElement('p')
        numberPoke.classList.add('card-text')
        numberPoke.textContent = `#${pokemon.id.toString().padStart(3, 0)}`




        card[0].appendChild(imagen)
        card[0].appendChild(nombrePoke)
        card[0].appendChild(numberPokemon)




    }

traerPokemon()


function crearPokemon(pokemon){
    const card = document.createElement('div');
    card.classList.add('pokemon-block');

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('img-container');

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default;

    spriteContainer.appendChild(sprite);

    const number = document.createElement('p');
    number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = pokemon.name;

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);

    pokemonContainer.appendChild(card);
}

fetchPokemons(8);

 */
