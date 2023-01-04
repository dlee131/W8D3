Array.prototype.uniq = function() {
    let newArray= []; 
    for (let i = 0; i < this.length; i++) {
        if (!newArray.includes(this[i])) {
            newArray.push(this[i]);
        }
    }
    return newArray;
}