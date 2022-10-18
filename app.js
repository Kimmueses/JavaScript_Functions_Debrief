//console.log("connected");

const myArray = ['Romeo', 'Lenny','Tobby'];

function getFirstValue(arr){
    return arr[0];
}


function convertMinsToSecs(min){
    return min*60;
}
console.log(convertMinsToSecs(3));



function lessThan100(num1, num2){
    const sum = num1 + num2;
    sum < 100 ? true: false;
}

lessThan100(12,88) ? console.log("True! This is less than 100") : console.log("This is greater than 100");