var id = 1;

const criarDiv = () => {

    
        dados = fetch(`https://pokeapi.co/api/v2/pokemon/${id++}`)
            .then(response => response.json())
            .then(result => {

                var idPoke = result.id
                var pokemon = result.name;
                var tipo = result.types[0].type.name;

                recebeDados(idPoke, pokemon, tipo)
            });
    
}

for (let i = 1; i < 8; i++) {
    criarDiv()
}

function recebeDados(id, pokemon, tipo) {

    const listPokemons = document.querySelector('[data-div-app]');
    const divPokemon = document.createElement('div');
    divPokemon.classList.add('content');

    const conteudo = `
    <div class="grid card-novo" >
    <div class="card" style=" width: 26rem;">
        <div class="card-body">
        <h4 class="card-title">#${id}</h4>
        <img height="180px" width="180px" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg" class="img-cards" alt="...">
            
            <h5 class="card-title">#${pokemon}</h5>
            <p class="card-text">${tipo}</p>
            <a href="#" class="btn btn-dark">Usar Pokemon</a>
        </div>
    </div>
    </div>
    `

   
    divPokemon.innerHTML = conteudo;
    listPokemons.appendChild(divPokemon);
}

const botaoCarregar = document.querySelector('[data-button-louding]');
botaoCarregar.addEventListener('click', () => {
    for (let index = 1; index < 8; index++) {
        criarDiv()
        }
});








