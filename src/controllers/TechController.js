const User = require('../models/User');
const Address = require('../models/Address');
const Tech = require('../models/Tech');

module.exports = {
    async save(req, res) {
        const { user_id } = req.params;
        const { name } = req.body;

        const user = await User.findByPk(user_id);

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        const [tech, created] = await Tech.findOrCreate({
            where: { name }
        });

        await user.addTech(tech);

        return res.json(tech);
    },

    async delete(req, res) {
        const { user_id } = req.params;
        const { name } = req.body;

        const user = await User.findByPk(user_id);

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        const tech = await Tech.findOne({
            where: { name }
        });

        await user.removeTech(tech);

        return res.json();
    },

    async all(req, res) {
        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: { association: 'techs' }
        });

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        return res.json(user);
    }
};