// Create a function which returns the number of true values there are in an array.

function countTrue(arr) {
    let filtered = arr.filter(word => word === true)
    return filtered.length
}


// Your function will be passed two functions, f and g, that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.

function whichIsLarger(f, g) {
    if (f() > g()){
        return "f"
    }
    else if (g() > f()){
        return "g"
    }
    else{
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
