const db = require('../models');
const Time = db.times;
const fetch = require('node-fetch');

const URLAPIPOKEMON = 'https://pokeapi.co/api/v2/pokemon/';
async function getdadosPokemon(namePokemon){
    const response = await fetch(URLAPIPOKEMON + `${namePokemon}`);
    if(!response.ok){
        console.error(`Erro ao buscar dados do pokemon ${namePokemon}`);
        //throw new Error(`Erro ao buscar dados do pokemon ${namePokemon}`);
    }
    return await response.json();

}

exports.criarTime = async (req, res) => {
    const {user, team} = req.body;

    try {
        const pokemonDados = await Promise.all(team.map(getdadosPokemon));

        const pokemons = pokemonDados.map( pokemon =>({

            id: pokemon.id,
            name: pokemon.name,
            weight: pokemon.weight,
            height: pokemon.height,
        }));

        let novoteam = await Time.create({
                owner: user,
                pokemons: pokemons,
        });

        res.status(201).json(novoteam);
    } catch (error){
        res.status(500).json({
            message: `Erro ao criar novo time: ${error.message}`
        });

    }
};
exports.getListarTimes = async (req , res) => {
    try{
        const times = await Time.findAll();

        const teamsObject = times.reduce((acc, team) => {
            acc["ID:"+ team.id] = {
                owner: team.owner,
                pokemons: team.pokemons
            };
            return acc;
        }, {});
        res.status(200).json(teamsObject);

    } catch (error) {
        res.status(500).json({
            message: `Erro ao buscar time: ${error.message}`
        });
    }
}

exports.getBuscarTimeDoUsuario = async (req, res) => {
    try{
        let time = await Time.findOne({
            where: {owner: req.params.user}
        });
        if(!time){
            return res.status(404).json({
                message: `Time não encontrado para esse usuário!`
            });
        }
        res.status(200).json(time);

    } catch (error) {
        res.status(500).json({
            message: `Erro ao buscar time pelo usuario: ${req.params.user}`
        });
    }
}