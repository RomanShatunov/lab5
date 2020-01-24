function check(data, expectedType) {
    if (typeof data === expectedType || (data === null && expectedType === 'null')) {
        return true;
    }
    else if (!expectedType) {
        return console.log('error expectedType')
    }
    else{
        return false;
    }
  }
   
  check([], 'number'); // false or throw ValidationError
  check([], 'array'); // false or throw ValidationError
   
  check(null, 'null'); // true
  check('test', 'string'); // true
  