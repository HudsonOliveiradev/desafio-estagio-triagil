const {DataTypes} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    const Time = sequelize.define('time', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        owner: {
            type: DataTypes.STRING
        },
        pokemons: {
            type: DataTypes.TEXT,
            get(){
                return JSON.parse(this.getDataValue('pokemons'));
            },
            set(value){
                this.setDataValue('pokemons', JSON.stringify(value));
            }
        }
    });
    return Time;
};