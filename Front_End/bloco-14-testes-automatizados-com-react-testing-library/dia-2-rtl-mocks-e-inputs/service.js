function generateNumber() {
  return Math.floor(Math.random() * (100 - 0)) + 1;
}

function upperCaseConvert(string) {
  return string.toUpperCase();
}

function firstLetter(string) {
  return string[0];
}

function concatStrings(string1, string2) {
  return `${string1} ${string2}`;
}

function fetchDog() {
  return fetch("https://dog.ceo/api/breeds/image/random").then(response =>
    response
      .json()
      .then(json =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );
}

module.exports = { generateNumber, upperCaseConvert, firstLetter, concatStrings, fetchDog };