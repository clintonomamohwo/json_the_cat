//Users can provide any breed name, causing our application to fetch the information from the API and print out a short description of that breed.

const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (data[0] === undefined) {
        callback(null, "This isn't a cat, sorry!");
      } else {
        callback(null, data[0]["description"]);
      }
    }
  });
};

module.exports = { fetchBreedDescription };