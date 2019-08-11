const router = require('express').Router();
const {mongoose} = require('../models/index');
const {Todo} = require('../models/todos');

router.get('/', (req, res) => {
    Todo.find()
        .then(todo => res.json(todo))
        .catch(err => res.send(err));
});

router.post('/', (req, res) => {
    Todo.create(req.body)
        .then(todo => res.json(todo))
        .catch(err => res.send(err));
});

router.get('/:todoId', (req, res) => {
    Todo.findById(req.params.todoId)
        .then(todo => res.json(todo))
        .catch(e => res.send(e));
});

router.put('/:todoId', (req, res) => {
    Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
        .then(todo => res.json(todo))
        .catch(e => res.send(e));
});

router.delete('/:todoId', (req, res) => {
    Todo.remove({_id: req.params.todoId})
        .then(todo => res.send({message: "todo deleted successfully!"}))
        .catch(e => res.send(e));
})

module.exports = router;