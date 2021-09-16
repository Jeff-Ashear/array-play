const integers = [10, 6, 77, 93, 94, 16, 72, 13, 8, 2, 15]

// get the sum of the ingtegers array's contents
const sum = (int) => {
    let sum = 0

    for (let i = 0; i < int.length; ++i) {
        sum += int[i]
    }

    return "The sum is:", sum
}

// traverse the ingeters array from back to front to gather the sum
console.log(sum(integers))
//2:42 to solve, first try, no struggles.

const backwardsSum = (int) => {
    let mus = 0

    for (let i = int.length - 1; i >= 0; i--) {
        mus += int[i]
        console.log("the backwards sum total is now:", mus)
    }
    return "Done"
}

console.log(backwardsSum(integers))
//3:11 to solve, first try, had to remember to reduce the length by 1 to get the index.
//an additional 3 or so minutes to figure out that the function was returning undefined.

//get the sum of the middle 3 values only
const middle3 = (int) => {
    let midSum = 0

    for (let i = Math.floor(int.length / 2) - 1; i <= Math.floor(int.length / 2) + 1; ++i) {
        midSum += int[i]
    }
    return "Sum of the middle 3 integers:", midSum
}

// console.log(middle3(integers))
//7:27 to solve, first try, but misunderstood the output and had to think it through a few times to realize I wasn't comparing the result to the acutal array and thought something was wrong.
//and an additional 2:47 to make it work with uneven array lengths

