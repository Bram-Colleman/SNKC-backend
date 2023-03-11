const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activiteitSchema = new Schema({
    titel: String,
    datum: Date,
    opmerking: String,
    plaats: String,
    uur: String
});

const Activiteit = mongoose.model("Activiteit", activiteitSchema);

module.exports = Activiteit;