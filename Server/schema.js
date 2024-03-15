const mongoose = require("mongoose");

const testSchema = mongoose.Schema({
    FoodCombination: String,
    Rating: Number,
    Dairyfree: Boolean,
    VegOrNonVEG: String,
    Img: String,
    created_by: String,
});
const Model = mongoose.model("foodcombination-collections", testSchema);
module.exports = {Model};