const express = require('express');
const uuid = require('uuid/v1');
const router = express.Router ();

const videoData = require('../data/videoData.json');
const idData = require('../data/idData.json');

router.get('/', (req, res) => {
    res.json(videoData);
});

router.get ('/:id', (req, res) => {
    const data = idData.find( item => {
        req.param.id == item.id
    })
    res.json(data)
});


module.exports = router;