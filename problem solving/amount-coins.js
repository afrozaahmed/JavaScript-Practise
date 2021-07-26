function returnWays(amount,coins) {
    //initialize the numOfways array with zeros
    var numOfways = [];
    for (var i = 0; i <= amount; i++) {
        numOfways[i] = 0;
    }
    //there is only one way to return zero cents 
    numOfways[0] = 1;
    //traverse the "coins" array
    for (var j = 0; j < coins.length; j++) {
        //store the coin value at current index in the variable coin
        var coin = coins[j];
        //starting bottom up and reducing amount with current coin each time
        for (var hAmount = coin; hAmount <= amount; hAmount++) {
            var change = hAmount - coin;
            numOfways[hAmount] += numOfways[change];
        }
    }

    return numOfways[amount];
}

var coins = [1, 2, 3];
var amount = 4;
console.log(returnWays(amount,coins)); // 4