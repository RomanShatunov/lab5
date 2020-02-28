function replaceString (receivedStr, sourseStr, replaceStr) {
    if (typeof receivedStr === 'string' && typeof sourseStr === 'string' && typeof replaceStr === 'string' && receivedStr.indexOf(sourseStr) >= 0) {
        receivedStr = receivedStr.slice(0, receivedStr.indexOf(sourseStr)) + replaceStr + receivedStr.slice(receivedStr.indexOf(sourseStr) + sourseStr.length, receivedStr.length);
        return receivedStr;
    }
    else {
        return false; 
    }
}
console.log(replaceString('davaiprivet', 'ip','poka'))