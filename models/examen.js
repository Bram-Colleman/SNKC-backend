const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const examenSchema = new Schema({
    datum: Date,
    plaats: String,
    opmerking: String,
});

const Examen = mongoose.model("Examen", examenSchema);

module.exports = Examen;