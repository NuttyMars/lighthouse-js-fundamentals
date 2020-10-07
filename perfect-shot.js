const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = function(moves) {
  let stoppingPoint = [0, 0];
  for (let i = 0; i < moves.length; i++) {
    switch (moves[i]) {
    case 'north':
      stoppingPoint[1] += 1; 
      break;
    case 'west':
      stoppingPoint[0] -= 1; 
      break;
    case 'south':
      stoppingPoint[1] -= 1; 
      break;
    case 'east':
      stoppingPoint[0] += 1; 
      break;
    }
  }
  return stoppingPoint;
};

console.log(finalPosition(moves));