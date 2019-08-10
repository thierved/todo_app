const router = require('express').Router();
const {mongoose} = require('../models/index');
const {Todo} = require('../models/todos');

router.get('/', (req, res) => {
    Todo.find()
        .then(todo => {
            res.json(todo);
        })
        .catch(err => {
            res.send(err);
        });
});

router.post('/', (req, res) => {
    Todo.create(req.body)
        .then(todo => res.json(todo))
        .catch(err => res.send(err));
});

module.exports = router;