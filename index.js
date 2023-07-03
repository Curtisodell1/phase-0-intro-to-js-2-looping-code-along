const myArray = ["Luis", "Curtis", "Nancy"]
const array1 = []


function writeCards(arrayOfNames, eventString) {
    for (let i = 0; i < arrayOfNames.length; i++) {
    let message = (`Thank you, ${arrayOfNames[i]}, for the wonderful ${eventString} gift!`);
    array1.push(message)
    }  
    return array1
}

//writeCards(myArray, "graduation");
console.log(array1)

function countDown(startingNumber) {
    while (startingNumber >= 0) {
    console.log(startingNumber--);
    }
}


//countDown(10)
// let countDown = 10;
// while (countDown >= 0) {
//   //console.log(countDown--);
// }