import {Model, Sequelize} from 'sequelize';

interface BeverageAttributes {
    id: number;
    name: string;
    kcal: number;
    price: number;
    ethylic: boolean;
}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
    class Beverage extends Model<BeverageAttributes> implements BeverageAttributes {
        public id!: number;
        public name!: string;
        public kcal!: number;
        public price!: number;
        public ethylic!: boolean;
    };
    Beverage.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        kcal: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        ethylic: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Beverage',
    });
    return Beverage;
}