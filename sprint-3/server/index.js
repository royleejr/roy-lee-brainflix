const express = require('express');
const cors = require('cors');
const videosRoute = require('./routes/videos.js')

const app = express();

app.use(cors());

app.use(express.json());

app.use('/videos', videosRoute)

app.listen(8080, () => {
    console.log('the server is running!')
})