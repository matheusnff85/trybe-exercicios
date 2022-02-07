let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

console.log('Bem-vinda, ' + info.personagem)
console.log(info)

for (let index in info) {
  console.log(index)
}

for (let index in info) {
  console.log(info[index]) 
}

for (let index2 in info2) {
  console.log(info2[index2])
}

console.log(info.personagem + ' e ' + info2.personagem)
console.log(info.origem + ' e ' + info2.origem)
console.log(info.nota + ' e ' + info2.nota)
if (info.recorrente === 'Sim' && info2.recorrente === 'Sim') {
  console.log('Ambos recorrentes');
}
else {
  console.log(info.recorrente + ' e ' + info2.recorrente)
}