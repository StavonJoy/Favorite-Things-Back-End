const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema({
    name: String,   
    image: String,
    item1: String,
    item2: String,
    item3: String,
    addedBy: String
}, {
    timestamps: true
})

module.exports = mongoose.model('List', listSchema)