const userModel = require('./user');

module.exports = (sequelize, dataTypes) => {
    const alias = 'movements';

    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        id_user: {
            foreignKey: true,
            allowNull: false,
            type: dataTypes.INTEGER
        },
        concept: {
            allowNull: false,
            type: dataTypes.STRING
        },
        tamount: {
            allowNull: false,
            type: dataTypes.DECIMAL
        },
        register_date: {
            allowNull: false,
            type: dataTypes.STRING
        },
        type_operation: {
            allowNull: false,
            type: dataTypes.STRING
        }

    }

    const config = {
        timestamps: false
    };

    const Movement = sequelize.define(alias, cols, config);
    const User = userModel(sequelize, dataTypes);

    Movement.belongsTo(User, {
        foreignKey: 'id_user',
        as: 'user'
    });

    return Movement;
}