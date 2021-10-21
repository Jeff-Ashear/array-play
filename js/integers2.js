// given any array of integers
const integers = [10, 6, 77, 93, 94, 16, 72, 13, 8, 2]

// sum up its values
let sum = (int) => {
    let sum = 0
    for (let i = 0; i < int.length; i++) {
        sum += int[i]
        console.log(sum)
    }
    return sum
}
console.log("sum:", sum(integers))

// sum up its values backwards
let backwardsSum = (int) => {
    let mus = 0 

    for (let i = int.length; i > 0; i--) {
        mus += int[i - 1] 
        console.log(mus)
    }
    return mus
}
console.log("Backwards sum:", backwardsSum(integers))


// sum up its middle 3 values
const middle3 = (int) => {
    let mid3 = 0
    for (let i = Math.floor(int.length / 2) - 1; i <= Math.floor(int.length / 2) + 1; i++) {
        mid3 += int[i]
        console.log(int[i])
    }
    return mid3
}
console.log("Middle 3:", middle3(integers))