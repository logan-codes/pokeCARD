
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

    const namePoke = document.createElement("input");
    namePoke.classList.add("form-control")
    namePoke.classList.add("card-text")
    namePoke.setAttribute("name", "name");
    namePoke.setAttribute("id", "name");
    namePoke.setAttribute("value", poke.name[0].toUpperCase() + poke.name.slice(1));
    namePoke.setAttribute("readonly", "");



    const row = document.createElement("div");
    row.classList.add("row")

    const col = document.createElement("div")
    col.classList.add("col-6")
    col.classList.add("mt-3")

    const atkPokemon = document.createElement("input")
    atkPokemon.classList.add("card-text")
    atkPokemon.classList.add("form-control")
    atkPokemon.setAttribute("id", "attack");
    atkPokemon.setAttribute("name", "attack");
    atkPokemon.setAttribute("value", poke.attack);
    atkPokemon.setAttribute("readonly", "");


    const dfsPokemon = document.createElement("input")
    dfsPokemon.classList.add("card-text")
    dfsPokemon.classList.add("form-control")
    dfsPokemon.setAttribute("name", "defense")
    dfsPokemon.setAttribute("id", "defense");
    dfsPokemon.setAttribute("value", poke.defense)
    dfsPokemon.setAttribute("readonly", "")


    const sp_atk = document.createElement("input");
    sp_atk.classList.add("card-text")
    sp_atk.classList.add("form-control")
    sp_atk.setAttribute("name", "atk_esp")
    sp_atk.setAttribute("id", "sp_atk");
    sp_atk.setAttribute("value", poke.sp_atk);
    sp_atk.setAttribute("readonly", "");


    const sp_def = document.createElement("input");
    sp_def.classList.add("card-text")
    sp_def.classList.add("form-control")
    sp_def.setAttribute("id", "sp_def");
    sp_def.setAttribute("name", "def_esp");
    sp_def.setAttribute("value", poke.sp_def);
    sp_def.setAttribute("readonly", "");


    const col_1 = document.createElement("div")
    col_1.classList.add("col-6")
    col_1.classList.add("mt-3")

    const numberPoke = document.createElement('input')
    numberPoke.classList.add('card-text')
    numberPoke.classList.add('form-control')
    numberPoke.setAttribute("id", "no_pokedex");
    numberPoke.setAttribute("name", "id_pokedex");
    numberPoke.setAttribute("value", `${poke.id.toString().padStart(3, 0)}`);
    numberPoke.setAttribute("readonly", "");


    const healt = document.createElement('input')
    healt.classList.add('card-text')
    healt.classList.add('form-control')
    healt.setAttribute("id", "healt");
    healt.setAttribute("name", "healt");
    healt.setAttribute("value", poke.hp);
    healt.setAttribute("readonly", "");


    const hab = document.createElement("input")
    hab.classList.add("card-text")
    hab.classList.add("form-control")
    hab.setAttribute("id", "ability");
    hab.setAttribute("name", "ability");
    hab.setAttribute("value", poke.ability);
    hab.setAttribute("readonly", "");


    const vel = document.createElement("input")
    vel.classList.add("card-text")
    vel.classList.add("form-control")
    vel.setAttribute("id", "velocity");
    vel.setAttribute("name", "velocity");
    vel.setAttribute("value", poke.vel);
    vel.setAttribute("readonly", "");




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
