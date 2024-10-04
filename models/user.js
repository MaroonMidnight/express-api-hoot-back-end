const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    username: String,
    hashedPassword: String
})



// this listens for everytime a userDoc is turned into json
// just delete the hashedpassword
userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject.hashedPassword
    }
})

module.exports = mongoose.model('User', userSchema)