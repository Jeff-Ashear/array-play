const batman = ["b", "a", "t", "m", "a", "n", " ", "c", "o", "s", "t", "u", "m", "e"]

// concatenate the values of chars into a string
const concat = (chars) => {
    let string = "";

    for (let i = 0; i < chars.length; i++) {
        string += chars[i]
    }

    return string
}


// console.log(concat(batman))
//solved in 3:27 after one false start


//concatenate the values from back to front
const tacnoc = (chars) => {
    let gnirts = ""

    for (let i = chars.length - 1; i >= 0; --i) {
        gnirts += chars[i]
    }

    return gnirts
}

// console.log(tacnoc(chars))
//solved in roughly 2 mintues and 3 tries with some type and variable thinking error bugs


//concat the middle three values
const middleThree = (chars) => {
    let rin = ""
    console.log(Math.floor(chars.length / 2) - 1)
    for (let i = Math.floor(chars.length / 2) - 1; i <= Math.floor(chars.length / 2) + 1; ++i) {
        rin += chars[i]
    }
    
    return rin
}

console.log(middleThree(batman))
// solved in 12 minutes after gettin really stumped by incorrectly using >= instead of <= in the for loop parameters.


//scan for the letter "c" and concat it plus the following 3 letters
const cPlus3 = (chars) => {
    let cAnd3 = "";

    for (let i = 0; i < chars.length; i++) {
        if (chars[i] != "c") {
        continue
        } else {
            for (let j = 0; j < 4; j++) {
                cAnd3 += chars[i + j]
            }
            
            // cAnd3 += chars[i]
        }
    }

    return cAnd3
}

console.log(cPlus3(batman))
//roughly 15 min to solve.  got stuck on handling endless looping


