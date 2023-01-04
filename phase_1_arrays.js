Array.prototype.uniq = function() {
    let newArray= []; 
    for (let i = 0; i < this.length; i++) {
        if (!newArray.includes(this[i])) {
            newArray.push(this[i]);
        }
    }
    return newArray;
}

Array.prototype.twoSum = function() {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length; j++) {
            if (this[i] + this[j] === 0 && i < j) {
                newArray.push([i, j]);
            }
        }
    }
    return newArray
}