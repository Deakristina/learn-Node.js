const Joi = require('joi');
const genres = require('./routes/genres');
const home = require('./routes/home');
const express = require('express');
const app = express();

app.use(express.json());
app.use('/api/genres', genres);
app.use('/', home);

//PORT
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}`));
