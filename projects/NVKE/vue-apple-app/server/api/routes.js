const applemodule = require('applemodule');
const express = require('express');
const router = express.Router();

//Search artists by name
router.post('/search', async (req, res) => {
    try {
        var searchResponse = await applemodule.search(req.body.artistSearch);
        searchResponse = JSON.parse(searchResponse);
        searchResponse = searchResponse["results"]

        res.json(searchResponse);
    } catch (error) {
        res.json(error);
    }
});

//Fetch artist by id
router.post('/artist', async (req, res) => {
    try {
        var fetchResponse = await applemodule.fetch(req.body.artistIDE);
        fetchResponse = JSON.parse(fetchResponse);
        fetchResponse = fetchResponse["results"][0]

        res.json(fetchResponse);
    } catch (error) {
        res.json(error);
    }
});

module.exports = router;