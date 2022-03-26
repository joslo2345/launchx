const fetchPokemon = () => {

    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;

    const pokemonName = document.getElementById("pokemonName");
    pokemonName.innerHTML = capitalize(pokeInput);
    
    fetch(url).then((res) => {
        if (res.status != "200"){
            //console.log(res);
            pokeImage("./misigno-pokemon-error.png")
            pokemonName.innerHTML = "Error Invalid Pokemon";

            // eliminate types
            let ordertype = `type-1`;
            let boxtype = document.getElementById(ordertype);
            boxtype.style.color = "#F8F8F8";
            boxtype.innerHTML = "";
            boxtype.style.backgroundColor = "inherit";

            ordertype = `type-2`;
            boxtype = document.getElementById(ordertype);
            boxtype.style.color = "#F8F8F8";
            boxtype.innerHTML = "";
            boxtype.style.backgroundColor = "inherit";

            //eliminate stats
            let textStats = "";
            let boxStats = document.getElementById("pokemonStatistics");
            boxStats.innerHTML = textStats;
            boxStats.style.border = "";
            boxStats.style.backgroundColor = "inherit";

            let statsLabel = document.getElementById('statsLabel');
            statsLabel.innerHTML = "";

            //eliminate moves
            let textMoves = "";
            let boxMoves = document.getElementById("pokemonMoves");
            boxMoves.innerHTML = textMoves;
            boxMoves.style.border = "";
            boxMoves.style.backgroundColor = "inherit";

            let movesLabel = document.getElementById('movesLabel');
            movesLabel.innerHTML = "";

        }
        else{
            return res.json();
        }
        
    }).then((data) => {

        if (data == undefined){
            console.log("Invalid Pokemon Name")
            return;
        }
        else{
            //console.log(data);
            console.log(`Pokemon ${capitalize(pokeInput)} Found`);

            let moves = data.moves;
            pokemovements(moves);

            let stats = data.stats
            pokeStats(stats);

            let types = data.types;
            pokeTypes(types);
        
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);

            return;
        }
        
    })
}

//fetchPokemon();


const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
    return;
}

const pokeStats = (stats) => {
    let textStats = "";
    let boxStats = document.getElementById("pokemonStatistics");

    let statsLabel = document.getElementById('statsLabel');
    statsLabel.innerHTML = "Statistics";

    for(let index = 0; index <6 ;index++){
        textStats += "<p>base " + String( stats[index].stat.name ) + ": ";
        textStats += String( stats[index].base_stat ) + ".</p>";
        //textStats += "<br>";
    }
    boxStats.innerHTML = textStats;
    boxStats.style.border = "solid 5px #F8F8F8";
    boxStats.style.backgroundColor = "#8FAFBB";
    return;
}


const pokemovements = (moves) =>{
    let textMoves = "";
    let boxMoves = document.getElementById("pokemonMoves");

    let movesLabel = document.getElementById('movesLabel');
    movesLabel.innerHTML = "Movements";

    for(let index = 0; index < moves.length ;index++){
        textMoves += "<p><br>" + String( moves[index].move.name ) + ".</p>";
    }
    boxMoves.innerHTML = textMoves;
    boxMoves.style.border = "solid 5px #F8F8F8";
    boxMoves.style.backgroundColor = "#8FAFBB";
    return;
}


const pokeTypes = (types) => {
    if (types.length > 1){
        for (let index = 0; index < types.length; index += 1){

            let ordertype = `type-${index+1}`;
            let boxtype = document.getElementById(ordertype);
            boxtype.style.color = "#F8F8F8";
    
            switch(types[index].type.name){
    
                case "normal":
                    boxtype.innerHTML = capitalize("normal");
                    boxtype.style.backgroundColor = '#A8A878';
                    break;
                
                case "fire":
                    boxtype.innerHTML = capitalize("fire");
                    boxtype.style.backgroundColor = '#F08030' ;
                    break;
    
                case "water":
                    boxtype.innerHTML = capitalize("water");
                    boxtype.style.backgroundColor = '#6890F0' ;
                    break;
    
                case "grass":
                    boxtype.innerHTML = capitalize("grass");
                    boxtype.style.backgroundColor = '#78C850' ;
                    break;
    
                case "electric":
                    boxtype.innerHTML = capitalize("electric");
                    boxtype.style.backgroundColor = '#F8D030';
                    break;
    
                case "ice":
                    boxtype.innerHTML = capitalize("ice");
                    boxtype.style.backgroundColor = '#98D8D8';
                    break;
    
                case "fighting":
                    boxtype.innerHTML = capitalize("fighting");
                    boxtype.style.backgroundColor = '#C03028';
                    break;
    
                case "poison":
                    boxtype.innerHTML = capitalize("poison");
                    boxtype.style.backgroundColor = '#A040A0';
                    break;
    
                case "ground":
                    boxtype.innerHTML = capitalize("ground");
                    boxtype.style.backgroundColor = '#E0C068';
                    break;
    
                case "flying":
                    boxtype.innerHTML = capitalize("flying");
                    boxtype.style.backgroundColor = '#A890F0';
                    break;
    
                case "psychic":
                    boxtype.innerHTML = capitalize("psychic");
                    boxtype.style.backgroundColor = '#F85888';
                    break;
    
                case "bug":
                    boxtype.innerHTML = capitalize("bug");
                    boxtype.style.backgroundColor = '#A8B820';
                    break;
    
                case "rock":
                    boxtype.innerHTML = capitalize("rock");
                    boxtype.style.backgroundColor = '#B8A038';
                    break;
    
                case "ghost":
                    boxtype.innerHTML = capitalize("ghost");
                    boxtype.style.backgroundColor = '#705898';
                    break;
    
                case "dark":
                    boxtype.innerHTML = capitalize("dark");
                    boxtype.style.backgroundColor = '#705848';
                    break;
                
                case "dragon":
                    boxtype.innerHTML = capitalize("dragon");
                    boxtype.style.backgroundColor = '#7038F8';
                    break;
    
                case "steel":
                    boxtype.innerHTML = capitalize("steel");
                    boxtype.style.backgroundColor = '#B8B8D0';
                    break;
    
                case "fairy":
                    boxtype.innerHTML = capitalize("fairy");
                    boxtype.style.backgroundColor = '#F0B6BC';
                    break;
            };
        }
    }
    else{
        let ordertype = `type-1`;
        let boxtype = document.getElementById(ordertype);
        boxtype.style.color = "#F8F8F8";
    
        switch(types[0].type.name){
    
            case "normal":
                boxtype.innerHTML = capitalize("normal");
                boxtype.style.backgroundColor = '#A8A878';
                break;
                
            case "fire":
                boxtype.innerHTML = capitalize("fire");
                boxtype.style.backgroundColor = '#F08030' ;
                break;
    
            case "water":
                boxtype.innerHTML = capitalize("water");
                boxtype.style.backgroundColor = '#6890F0' ;
                break;
    
            case "grass":
                boxtype.innerHTML = capitalize("grass");
                boxtype.style.backgroundColor = '#78C850' ;
                break;
    
            case "electric":
                boxtype.innerHTML = capitalize("electric");
                boxtype.style.backgroundColor = '#F8D030';
                break;
    
            case "ice":
                boxtype.innerHTML = capitalize("ice");
                boxtype.style.backgroundColor = '#98D8D8';
                break;
    
            case "fighting":
                boxtype.innerHTML = capitalize("fighting");
                boxtype.style.backgroundColor = '#C03028';
                break;
    
            case "poison":
                boxtype.innerHTML = capitalize("poison");
                boxtype.style.backgroundColor = '#A040A0';
                break;
    
            case "ground":
                boxtype.innerHTML = capitalize("ground");
                boxtype.style.backgroundColor = '#E0C068';
                break;
    
            case "flying":
                boxtype.innerHTML = capitalize("flying");
                boxtype.style.backgroundColor = '#A890F0';
                break;
    
            case "psychic":
                boxtype.innerHTML = capitalize("psychic");
                boxtype.style.backgroundColor = '#F85888';
                break;
    
            case "bug":
                boxtype.innerHTML = capitalize("bug");
                boxtype.style.backgroundColor = '#A8B820';
                break;
    
            case "rock":
                boxtype.innerHTML = capitalize("rock");
                boxtype.style.backgroundColor = '#B8A038';
                break;
    
            case "ghost":
                boxtype.innerHTML = capitalize("ghost");
                boxtype.style.backgroundColor = '#705898';
                break;
    
            case "dark":
                boxtype.innerHTML = capitalize("dark");
                boxtype.style.backgroundColor = '#705848';
                break;
                
            case "dragon":
                boxtype.innerHTML = capitalize("dragon");
                boxtype.style.backgroundColor = '#7038F8';
                break;
    
            case "steel":
                boxtype.innerHTML = capitalize("steel");
                boxtype.style.backgroundColor = '#B8B8D0';
                break;
    
            case "fairy":
                boxtype.innerHTML = capitalize("fairy");
                boxtype.style.backgroundColor = '#F0B6BC';
                break;
            };
            
        ordertype = `type-2`;
        boxtype = document.getElementById(ordertype);
        boxtype.style.color = "#F8F8F8";
        boxtype.innerHTML = "";
        boxtype.style.backgroundColor = "inherit";
    }
    
    return;
}

function capitalize(word) {
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1);
}

//pokeImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png");
