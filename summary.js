let priyoPerson = 'Koolsum Begum';
priyoPerson = 'Momotaj Begum';
const hubby = 'Akbar the great';

// default parameter
function getName(first, last = 'Chowdhury') {
    return first + ' ' + last;
}

// template string
const myPeople = `My lovely person is are ${hubby} and his fullName is ${getName('Akbar')}. My name is ${priyoPerson}.`

console.log(myPeople);

// arrow function
const getName2 = (first, last) => first + ' ' + last;
const fiveTimes = x => x * 5;
const bigArrowFunc = (x, y, z) => {
    const firstPart = x + y;
    const secondPart = y * z;
    const thirdPart = x / z;
    const result = (firstPart + secondPart) * thirdPart;
    return result;
}

const numbers = [2, 4, 67, 54];
const min = Math.min(...numbers)



// // function getSum(a, b = 9) { return a + b; }
// // console.log(getSum(2, 7));

// const y = x => x * x;
// const x = y(5);

// const cube = x => x * x * x;
// console.log(cube(2))
// const [a, b] = [1, 2, 3, 4, 45, 5];
// console.log(a + b);


// const { x, y, z } = { x: 1, y1: 2, z: 3 };

// console.log(...x, y, z)
// const nums = [1, 2, 3, 4, 5];
// let output = nums.filter(n => n % 2);
// console.log(output);