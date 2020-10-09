const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

const metric = 'redness';

const judgeVegetable = function(veggies, characteristic) {
  let maxValue = veggies[0][characteristic];
  let winner = veggies[0].submitter;
  for (let i = 1; i < veggies.length; i++){
    if (veggies[i][characteristic] > maxValue) {
      maxValue = veggies[i][characteristic];
      winner = veggies[i].submitter;
    }
  }
  return winner;
};

console.log(judgeVegetable(vegetables, metric));