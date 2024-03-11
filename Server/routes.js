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
        const newData = await Model.create(req.body);
        console.log(newData)
        res.send(newData);
    } catch (error) {
        console.error(error);
        res.send('Error');
    }
});

app.get('/read/:id', async (req,res) => {
    const _id = req.params.id
    userModel.findById({_id})
    .then(users => res.json(users))
    .catch(err => console.log(err))
})

router.put('/update/:id', async (req, res) => {
    try {
        const updatedData = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedData) {
            return res.status(404).json({ error: 'Data not found' });
        }
        console.log('Data updated:', updatedData);
        res.status(200).json({ message: 'Data updated successfully', data: updatedData });
    } catch (err) {
        console.error('Error in PUT request:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const deletedData = await Model.findByIdAndDelete(req.params.id); 
        if (!deletedData) {
            return res.status(404).json({ error: 'Data not found' });
        }
        console.log('Data deleted:', deletedData);
        res.status(200).json({ message: 'Data deleted successfully' });
    } catch (err) {
        console.error('Error in DELETE request:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router
