const { Op } = require('sequelize');
const User = require('../models/User')

module.exports = {

    async generate(req, res) {

        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.iLike]: '%@gmail.com'
                }
            },
            include: [
                {
                    association: 'addresses',
                    where: {
                        street: {
                            [Op.iLike]: 'Rua%'
                        }
                    }
                },
                {
                    association: 'techs',
                    required: false,
                    where: {
                        name: {
                            [Op.iLike]: 'J%'
                        }
                    }
                }
            ]
        });


        return res.json(users);
    }

}