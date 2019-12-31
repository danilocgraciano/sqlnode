const { Model, DataTypes } = require('sequelize');

class Tech extends Model {

    static init(conn) {
        super.init({
            name: DataTypes.STRING,
        }, {
            tableName: 'tech',
            sequelize: conn
        });
    }

    static associate(models) {
        this.belongsToMany(models.User, { foreignKey: 'tech_id', through: 'user_tech', as: 'users' });
    }

}

module.exports = Tech;