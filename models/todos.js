const mongoose = require('mongoose');

const todo = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Todo = mongoose.model('todo', todo);

module.exports = {Todo};