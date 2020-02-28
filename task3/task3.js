function pulloutArray(arr) {
    if (Array.isArray(arr)) {
      var resultArr = [];
  
      for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          for (var j = 0; j < arr[i].length; j++) {
            if (typeof arr[i][j] === 'number' && !isNaN(arr[i][j]) && arr[i][j] !== null) {
              resultArr.push(arr[i][j]);
            }
          }
        } else if (typeof arr[i] === 'number' && !isNaN(arr[i]) && arr[i] !== null) {
          resultArr.push(arr[i]);
        }
      }
    } else {
      return null;
    }
  
    return resultArr;
  }

console.log(pulloutArray([1, 2, 3]));
console.log(pulloutArray([]));
console.log(pulloutArray([1, [2, 3, 4], 5]));
console.log(pulloutArray([1, [2, 3, 4], 5, [1]]));
console.log(pulloutArray([1, [1], null, NaN, ['test']]));