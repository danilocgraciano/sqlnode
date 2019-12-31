const { Model, DataTypes } = require('sequelize');

class User extends Model {

    static init(conn) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING
        }, {
            tableName: 'user',
            sequelize: conn
        });
    }

    static associate(models) {
        this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses' })
    }

}

module.exports = User;