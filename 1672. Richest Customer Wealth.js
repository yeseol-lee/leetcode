/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let maxWealth = 0;

  // look for the richest customer
  for (let i = 0; i < accounts.length; i++) {
    let customerWealth = 0;
    accounts[i].forEach((wealth) => {
      customerWealth += wealth;
    });
    if (maxWealth < customerWealth) {
      maxWealth = customerWealth;
    }
  }

  return maxWealth;
};

// 2nd answer
var maximumWealth = function (accounts) {
  let result = [];

  // look for the richest customer
  for (let i = 0; i < accounts.length; i++) {
    let customerWealth = 0;

    for (let j = 0; j < accounts[i].length; j++) {
      customerWealth += wealth;
    }
    result.push(customerWealth);
  }

  return Math.max(...result);
};
