const mongoose = require('mongoose');
const Schema = mongoose.Schema


const categorieSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    slug:{
        type: String,
        require: true
    }
})

const createCategorie = mongoose.model('categories', categorieSchema)
module.exports = createCategorie