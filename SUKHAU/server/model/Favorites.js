const mongoose = require('mongoose');

const FavouritesSchema = new mongoose.Schema({
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', unique: true },
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
});

const Favourites = mongoose.model('Favourites', FavouritesSchema);

module.exports = Favourites;
