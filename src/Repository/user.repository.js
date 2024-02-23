const UserError = require('../Error/user.error');
const { User } = require('../models/index')


class UserRepository{

    async createUser(data){
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            // if (error.name == 'SequelizeValidationError') {
            //     let validattionError = new ValidationError(error);
            //     console.log(validattionError);
            // }
            // console.log('something went wrong in repository layer');
            throw { error };
        }
    }

    async getUserByEmail(email){
        try {
            const user = await User.findOne({ where: { email: email } });
            return user;
        } catch (error) {
            console.error('Error finding user by email:', error);
            throw error;
        }
    }

    async changeUserPassword(user, newPassword){
        try {
            const user = await User.findByPk(user.id);
            if(!user){
                throw new UserError('User not found')
            }

            user.password = newPassword;
            return await user.save()
        } catch (error) {
            throw { error }
        }
    }

}

module.exports = UserRepository;