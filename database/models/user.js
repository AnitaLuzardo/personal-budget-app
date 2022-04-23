module.exports = (sequelize, dataTypes) => {
    const alias = 'users';

    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name: {
            allowNull: false,
            type: dataTypes.STRING,
        },
        last_name: {
            allowNull: false,
            type: dataTypes.STRING
        }, 
        email: {
            allowNull: false,
            type: dataTypes.STRING,
        },
        pwd: {
            allowNull: false,
            type: dataTypes.STRING,
        }
    }

    const config = {
        timestamps: false
    };

    const User = sequelize.define(alias, cols, config);
    
    return User;
}