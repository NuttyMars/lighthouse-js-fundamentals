const amounts = [61.00, 52.25, 112.99, 5.00]; 

/*classic for used to add all amounts
const total = 0;
for (let i = 0; i < amounts.length; i++) {
  total += amounts[i];
}
console.log('Order total is: ', total);*/

//for...of loop used for same purpose - the amount variable is automatically set to each item in the array
let total = 0;
for (let amount of amounts) {
  total += amount;
}
console.log('Order total is: ', total);