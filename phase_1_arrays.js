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

Array.prototype.transpose = function () {
    let newArray = [];
    for (let i = 0; i < this[0].length; i++) {
        let subArray = [];
        for (let j = 0; j < this.length; j++) {
            subArray.push(this[j][i]);
        }
        newArray.push(subArray)
    }
    return newArray
}


//[ [4,5],
//  [6,7],
//  [8,9]  ]

//[ [4,6,8],
// [5,7,9] ]

// 