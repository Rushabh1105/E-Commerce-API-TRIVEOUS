

// class UserError extends Error{
//     constructor(message){
//         super(message);
//         this.name= 'UserError';
//         this.stack = (new Error()).stack;
//     }
// }

class UserError extends Error {
    constructor(message = 'Default message') {
        super(message);
        this.name = 'User Error';
        this.stack = (new Error()).stack;
    }
}


module.exports = UserError;