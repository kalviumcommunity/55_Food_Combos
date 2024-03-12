const express = require('express');
const router = express.Router();
const schema = require('./schema');
const { Model } = require('./schema');
const Joi = require('joi');

router.use(express.json());

// Define Joi schema for POST /new route
const addValidationSchema = Joi.object({
    flavour: Joi.string().required(),
    taste: Joi.string().required(),
    color: Joi.string().required(),
    rating: Joi.number().required(),
    image: Joi.string().required(),
});

// Define Joi schema for PUT /update/:id route
const updateValidationSchema = Joi.object({
    flavour: Joi.string(),
    taste: Joi.string(),
    color: Joi.string(),
    rating: Joi.number(),
    image: Joi.string(),
});

// GET request to read all food combinations
router.get('/read', async (req, res) => {
    try {
        const foodCombinations = await Model.find();
        res.json(foodCombinations);
    } catch (err) {
        console.error('Error in GET request:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// POST request to add a new food combination
router.post('/new', async (req, res) => {
    try {
        const { error, value } = addValidationSchema.validate(req.body);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }
        const newData = await Model.create(req.body);
        res.send(newData);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// PUT request to update food combination by ID
router.put('/update/:id', async (req, res) => {
    try {
        const { error, value } = updateValidationSchema.validate(req.body);
        if (error) {
            return res.status(400).send(error.details[0].message);
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

// DELETE request to delete food combination by ID
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

module.exports = router;
