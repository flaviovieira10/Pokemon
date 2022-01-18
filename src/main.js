var id = 1;

const criarDiv = () => {

    for (let i = 1; i < 10; i++) {
        dados = fetch(`https://pokeapi.co/api/v2/pokemon/${id++}`)
            .then(response => response.json())
            .then(result => {

                var idPoke = result.id
                var pokemon = result.name;
                var tipo = result.types[0].type.name;

                recebeDados(idPoke, pokemon, tipo)
                
            });
        }
    
}

criarDiv()

function recebeDados(id, pokemon, tipo) {

    const listPokemons = document.querySelector('[data-div-app]');
    const divPokemon = document.createElement('div');
    divPokemon.classList.add('col-4', 'my-3');

    const conteudo = `    
    <div class="card ">
            <div class="card-body ${tipo}">
                <h4 class="card-title">#${id}</h4>
                <img height="180px" width="180px" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg" class="img-cards" alt="...">
                <h5 class="card-title">#${pokemon}</h5>
                <p class="card-text">${tipo}</p>
                
            </div>
        </div>
    `
    divPokemon.innerHTML = conteudo;
    listPokemons.appendChild(divPokemon);
}


const botaoCarregar = document.querySelector('[data-button-louding]');
botaoCarregar.addEventListener('click', () => {
    criarDiv()
});








