const add = (sum) => {
    let total = 0;
    for (let i = 0; i < sum.length; i++) {
        total += sum[i];
    }
    return total;
}

module.exports = add;



