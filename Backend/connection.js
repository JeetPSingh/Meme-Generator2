const mongoose = require('mongoose');

const dbName = "MemeGenerator";
const url = `mongodb+srv://Get90:9026249918@cluster0.czlp9g4.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(url)
.then((result) => {
    console.log('database connected')
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;