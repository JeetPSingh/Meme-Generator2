// import express
const express = require('express');
const userRouter = require('./routers/userRouter');
const cors = require('cors');


//initializing express
const app = express();
const port = 5500;

//middlewares

app.use(cors({
    origin : ['http://localhost:3000']
}));
//convert json to js
app.use(express.json());
app.use('/user', userRouter);


// creating a route
app.get('/home', (req, res) => {
    res.send('response from home');
})
app.get('/', (req, res) => {
    res.send('response from index')
})
app.get('/add',(req,res) => {
    res.send('renponse from add')
})
app.get('/delete', (req, res) => {
    res.send('response from delete')
})

// to start express server
app.listen(port, () => { console.log('server started') } );