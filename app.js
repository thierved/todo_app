const express = require('express');
const { json, urlencoded } = require('body-parser');

const routes = require('./routes/todoRoutes');

const app = express();
app.use(json())
app.use(urlencoded({ extended: true }));

app.use('/api/todos', routes);

app.listen(3000, () => console.log('listening...'));