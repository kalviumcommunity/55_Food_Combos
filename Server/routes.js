const express = require('express');
const router = express.Router();
const schema = require('./schema');
const { Model } = require('./schema');
const Joi = require('joi');

router.use(express.json());

const newDataSchema = Joi.object({
    FoodCombination: Joi.string().required(),
    Rating: Joi.number().required(),
    Dairyfree: Joi.boolean().required(),
    VegOrNonVEG: Joi.string().required(),
    Img: Joi.string().required()
});

const updateDataSchema = Joi.object({
    FoodCombination: Joi.string(),
    Rating: Joi.number(),
    Dairyfree: Joi.boolean(),
    VegOrNonVEG: Joi.string(),
    Img: Joi.string()
});

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
        const { error } = newDataSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const newData = await Model.create(req.body);
        console.log(newData);
        res.send(newData);
    } catch (error) {
        console.error(error);
        res.send('Error');
    }
});

router.get('/read/:id', async (req,res) => {
    const _id = req.params.id;
    Model.findById({_id})
        .then(users => res.json(users))
        .catch(err => console.log(err));
});

router.put('/update/:id', async (req, res) => {
    try {
        const { error } = updateDataSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
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

app.post('/Signup',async(req,res)=>{
    try{
        const user = await userModel.create({
            username:req.body.username,
            password:req.body.password
        })
        res.send(user)
    }catch(err){
        console.error(err)
    }
  
})
app.post('/Login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await userModel.findOne({ username, password });
        
        if (!user) {
            return res.status(401).json({ error: 'Invalid username / password' });
        }

        
        res.status(200).json({ user });
        
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/logout',(req,res)=>{
    res.clearCookie('username')
    res.clearCookie('password')

    res.status(200).json({message:'Logout succesful'})
})

module.exports = router;
