const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema({
  name:  String, // String is shorthand for {type: String}
  img: String,
  summary:   String,
});

module.exports = mongoose.model('Movie', movieSchema)