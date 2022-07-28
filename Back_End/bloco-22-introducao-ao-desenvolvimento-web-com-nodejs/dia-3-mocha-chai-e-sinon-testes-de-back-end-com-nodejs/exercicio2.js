const fs = require('fs');

function escreveArquivo(fileName, fileContent) {
  fs.writeFileSync(`${__dirname}/${fileName}`, fileContent);
  return 'ok';
};

module.exports = escreveArquivo;
