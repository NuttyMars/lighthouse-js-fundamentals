/*Your function will receive an array of stations, where each station itself is an array with a name, a capacity, and a venue type.

In order for a station to be deemed appropriate, it must have a capacity of at least 20, and be a school or community centre.*/

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function(stations) {
  let votingCenters = [];
  for (let i = 0; i < stations.length; i++) {
    if ((stations[i][1] >= 20) && (stations[i][2] === 'school' || stations[i][2] === 'community centre')) {
      votingCenters.push(stations[i][0]);
    }
  }
  return votingCenters;
};
console.log(chooseStations(stations));