const {Router} = require("express");
const Model = require('../models/userModel');


const router = Router ();

router.post('/add' , (req,res) => {
    console.log(req.body);

    //to save data in database
    new Model(req.body).save()
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.json(err);
    });
    
});
router.get('/getall', (req,res) => {

    //reading data
    Model.find({})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// : denotes url parameter
router.get('/getbyemail/:useremail',(req, res)=>{
    Model.find({email : req.params.useremail})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.jason(err);
    });
})

router.post('/authenticate',(req, res) => {
    Model.findOne(req.body)
    .then((result) => {
        if(result){
            res.status(200).json(result);
        }else{
            res.status(401).json(result);
        }
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
}),

module.exports = router;