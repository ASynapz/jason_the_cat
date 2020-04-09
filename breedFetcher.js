const request = require("request");
const url = 'https://api.thecatapi.com/v1/breeds/search?q=';


const fetchBreedDescription = function(breedName, callback) {
  request(`${url}${breedName}`, function(error, response, body) {
    if (error) {
      return callback(error, null);
    }

    const data = JSON.parse(body);
    if (data.length === 0) {
      return callback(error, null);
   
    } else {
      return callback(null, data[0].description);
    }
  });
};
module.exports = {fetchBreedDescription};