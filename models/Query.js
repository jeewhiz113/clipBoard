//we define the Schema here:

const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const QuerySchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Query = mongoose.model('query', QuerySchema);