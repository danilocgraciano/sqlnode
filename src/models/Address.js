const { Model, DataTypes } = require('sequelize');

class Address extends Model {

    static init(conn) {
        super.init({
            zipcode: DataTypes.STRING,
            street: DataTypes.STRING,
            number: DataTypes.STRING
        }, {
            tableName: 'address',
            sequelize: conn
        });
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    }

}

module.exports = Address;