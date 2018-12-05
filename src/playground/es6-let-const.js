const multiplier = {
    numbers: [1 , 2, 3, 4, 5],
    numToMultiplyBy: 2,
    multiply() {
        return this.numbers.map(number => {
            return number * this.numToMultiplyBy;
        });
    }
};

console.log(multiplier.multiply());