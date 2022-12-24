const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(bodyParser.json())
app.use(helmet());
app.use(express.json())
app.use(cors());

const PORT = process.env.PORT;
const MONGO = process.env.DATABASE_URL;

app.listen(PORT, () => {
    console.log('API is listening on port ' + PORT);
});

mongoose.set('strictQuery', false);
mongoose.connect(MONGO);
const db = mongoose.connection;
db.on('error', () => {
    console.log('DB: Connection error' )
})
db.on('connected', () => {
    console.log('DB: Connected')
})