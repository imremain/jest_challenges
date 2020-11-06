const myAwesomeValidator = (users) =>{
    if(users.every(user => 
        typeof user.id === 'number' &&
        typeof user.first_name === 'string' &&
        typeof user.last_name === 'string' &&
        typeof user.email === 'string')
        ){
        return true
    } else{
        return false
    }
};

module.exports = myAwesomeValidator;