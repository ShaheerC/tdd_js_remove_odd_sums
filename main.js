function removeOddSum(array) {
    array.forEach((element, index) => {

        if ((element.a + element.b) % 2 !== 0) {
            array.splice(index, 1);
        }
    })
    return array;
}

module.exports = removeOddSum;