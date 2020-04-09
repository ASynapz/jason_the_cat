const { fetchBreedDescription } = require('./breedFetcher');

let inputArray = process.argv.slice(2);
let breedName = inputArray.toString();


fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});