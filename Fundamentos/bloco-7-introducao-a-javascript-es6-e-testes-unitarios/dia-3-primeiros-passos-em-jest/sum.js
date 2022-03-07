function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

function encode(param1) {
  let encoded = '';
  for (index in param1) {
    if (param1[index] === 'a') {
      encoded += '1';
    }
    else if (param1[index] === 'e') {
      encoded += '2';
    }
    else if (param1[index] === 'i') {
      encoded += '3';
    }
    else if (param1[index] === 'o') {
      encoded += '4';
    }
    else if (param1[index] === 'u') {
      encoded += '5';
    }
    else {
      encoded += param1[index];
    }
  }
  return encoded;
}

function decode(param1) {
  let decoded = '';
  for (index in param1) {
    if (param1[index] === '1') {
      decoded += 'a';
    }
    else if (param1[index] === '2') {
      decoded += 'e';
    }
    else if (param1[index] === '3') {
      decoded += 'i';
    }
    else if (param1[index] === '4') {
      decoded += 'o';
    }
    else if (param1[index] === '5') {
      decoded += 'u';
    }
    else {
      decoded += param1[index];
    }
  }
  return decoded;
}

function techList(param1, name) {
  param1.sort();
  let list = [];
  for (index in param1) {
    list.push({
      tech: param1[index],
      name: name,
    })
  }
  if (param1.length === 0) {
    return "Vazio!"
  }
  return list
}

function hydrate(param1) {
  let copos = 0;
  let base = "123456789";
  for (index in param1) {
    for (verificador in base) {
      if (param1[index] == base[verificador]) {
        copos += parseInt(param1[index])
      }
    }
  }
  if (copos === 1) {
    return copos + " copo de água"
  }
  else {
    return copos + " copos de água"
  } 
}

module.exports = {sum,myRemove,myFizzBuzz,encode,decode,techList,hydrate};
