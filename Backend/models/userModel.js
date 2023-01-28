const {Schema ,model} = require('../connection');

const mySchema = new Schema({
    email : String,
    username : String,
    password : String,
    age : Number
})

module.exports = model('usercollection', mySchema);