
const User = require('mongoose').model('User');

module.exports = {
    async register(req,res) {
        const { email } = req.body;
        try {
            if (await User.findOne({ email })) {
                return res.status(400).send({error: 'User already exists'});
            }

            const user  = await User.create(req.body);
            
            return res.send({ user });
        } catch {
            return res.status(400).send({ error: 'Registration Failed'});
        }
    }
}