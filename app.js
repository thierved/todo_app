const express = require('express');
const { json, urlencoded } = require('body-parser');

const routes = require('./routes/todoRoutes');

const app = express();
app.use(json())
app.use(urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"))
app.use(express.static(__dirname + "/views"))

app.use('/api/todos', routes);

app.listen(3000, () => console.log('listening...'));