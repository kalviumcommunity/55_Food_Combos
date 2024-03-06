const express = require('express')
const router = express.Router()
const schema = require('./schema')
const { Model } = require('./schema')

router.use(express.json())

router.get('/read', async (req, res) => {
    try {
        const foodCombinations = await Model.find(); // Retrieving all food combinations from the database
        res.json(foodCombinations); // Sending the retrieved data as a JSON response
    } catch (err) {
        console.error('Error in GET request:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/post',(req,res)=>{
    console.log(req.body)
    res.json(req.body)
})

router.put('/put',(req,res)=>{
    res.send("put request")
})

router.delete('/delete',(req,res)=>{
    res.send("delete request")
})

router.post('/new', async (req, res) => {
    try {
        const newData = Model.create(req.body);
        res.send(newData);
    } catch (error) {
        console.error(error);
        res.send('Error');
    }
});


module.exports = router