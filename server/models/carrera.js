const mongoose = require('mongoose');

const { Schema } = mongoose;

const CarreraSchema = new Schema({
    carrera: { type: String, require: true, unique: true },
});

module.exports = mongoose.model('Carrera', CarreraSchema)