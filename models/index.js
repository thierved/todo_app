const mongoose = require('mongoose');

mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost:27017/todo', { useNewUrlParser: true });

module.exports = { mongoose };