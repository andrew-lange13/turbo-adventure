// Create a function which returns the number of true values there are in an array.

function countTrue(arr) {
    let filtered = arr.filter(word => word === true)
    return filtered.length
}


// Your function will be passed two functions, f and g, that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.

function whichIsLarger(f, g) {
    if (f() > g()) {
        return "f"
    } else if (g() > f()) {
        return "g"
    } else {
        return "neither"
    }
}

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

function addUp(num) {
    if (num === 1) return 1;
    return num + addUp(num - 1);
}

// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

function minMax(arr) {
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    return ([min, max])
}

// Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.

function timeForMilkAndCookies(date) {
    return  (date.getMonth() === 11) &&
            (date.getDate() === 24)
}

// The time has a format: hours:minutes. Both hours and minutes has two digits, like 09:00.
//
//     Make a regexp to find time in the string: Breakfast at 09:00 in the room 123:456. In this task there’s no need to check time correctness yet, so 25:99 can also be a valid result. The regexp should not match 123:456.

const REGEXP = /\b\d\d:\d\d\b/


// Create a regular expression to match all red flag and blue flag in a string. You must use | in your expression. Flags can come in any order.

const REGEXP = /(red|blue) flag/g


// Create a function that will take a HEX number and returns the binary equivalent (as a string).

function toBinary(num) {
    return num.toString(2);
}
