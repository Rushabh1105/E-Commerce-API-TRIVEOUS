const bcrypt = require('bcrypt')
const UserError = require('../Error/user.error');
const UserRepository = require('../Repository/user.repository');
const jwt = require('jsonwebtoken');
const { JWT_KEY } = require('../config/serverConfig');

class UserServiece{
    constructor(){
        this.userRepository = new UserRepository()
    }

    async createUser(data){
        try {

            const user = await this.userRepository.getUserByEmail(data.email);
            if(user){
                console.log(user.password)
                throw new UserError('User already exists')
            }

            const hashPW = await this.hashPassword(data.password);
            const userData = {
                name: data.name,
                email: data.email,
                password: hashPW,
                type: data.type || 'customer',
            }

            return await this.userRepository.createUser(userData);
        } catch (error) {
            throw {error}
        }
    }

    async hashPassword(password){
        const hash = await bcrypt.hash(password, 5);
        return hash;
    }

    async checkPassword(hashedPassword, password){
        const compare = await bcrypt.compare(hashedPassword, password);
        return compare;
    }

    async generateToken(data){
        const token = await jwt.sign(data, JWT_KEY, {expiresIn: '7d'})
        return token;
    }

    async chechUser(data){
        try {
            const { email, password } = data;

            const user = await this.userRepository.getUserByEmail(email);
            
            if(!user){
                throw new UserError('User not exists please signup')
            }
            
            const compare = await this.checkPassword(password, user.password);
            // console.log(user.dataValues)
            if(!compare){
                throw new UserError('Wrong password');
            }
            
            return this.generateToken(user.dataValues);
        } catch (error) {
            
            throw {error}
        }

        
    }

}

module.exports = UserServiece;