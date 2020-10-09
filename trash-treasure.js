const smartGarbage = function(trash, bins) {
  Object.keys(bins).forEach(function(key) {
    if (key === trash) {
      bins[key] += 1;
    }
  })
  return bins;
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));