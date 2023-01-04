Array.prototype.myEach = function(callback) {  // why doesn't (callback) after myEach instead work?
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
        // ?????? why doesn't 1.callback() work
    }
}

function cLog2(num) {
    return (num * 2);
}

// [1,2,3].myEach(cLog2)


Array.prototype.myMap = function (callback) {
    let newArray = [];
    for ( let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i]));
    }
    return newArray
}

