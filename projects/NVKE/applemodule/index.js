const superagent = require('superagent');
const config = require('./config.json');

// Export a method for API search (Searches Artists only)
const search = async artist => {
    const searchUrl = `${config.url}/search?term=${artist}&artistType=Artist&entity=allArtist&attribute=allArtistTerm`
    try {
        const searchResponse = await superagent.get(searchUrl);
        return searchResponse.text;
    } catch (error) {
        return error;
    }
};

// Export a method for API fetch by id
const fetch = async artist_id => {
    const fetchUrl = `${config.url}/lookup?id=${artist_id}`
    try {
        const fetchResponse = await superagent.get(fetchUrl);
        return fetchResponse.text;
    } catch (error) {
        return error;
    }
};

module.exports = {
    search,
    fetch
}