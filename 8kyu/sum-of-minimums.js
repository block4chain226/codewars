// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

function sumOfMinimums(arr) {
    return arr.reduce((acc, item) => {
        const min = Math.min(...item)
        console.log(min)
        return acc += min
    }, 0)
}