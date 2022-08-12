// _______________________________
// // problem 1 Redian to Degree 
// _______________________________ 


function radianToDegree(radian) {

    let pi = Math.PI;
    const result = radian * (180 / pi);
    return result.toFixed(2)

}

let totalResult = radianToDegree(10);
console.log(totalResult);


// ____________________________
// // problem:2 check .js file
// ____________________________

function isJavaScriptFile(file) {
    if (file.endsWith('.js')) {
        return true;
    }
    else {
        return false;
    }

}
const result1 = isJavaScriptFile('app.js');
const result2 = isJavaScriptFile('js.png');
const result3 = isJavaScriptFile('image.js.png');
const result4 = isJavaScriptFile('image.jpg.js');
console.log(result1, result2, result3, result4);


// ____________________
// // problem 3: oil price
// ____________________

function oilPrice(diselLiter, petrolLiter, oktenLiter) {

    let diselPrice = diselLiter * 114;
    let petrolPrice = petrolLiter * 130;
    let oktenPrice = oktenLiter * 135;

    let totalPrice = diselPrice + petrolPrice + oktenPrice;
    return totalPrice;
}

const inTotalPrice1 = oilPrice(1, 1, 1);
const inTotalPrice2 = oilPrice(30, 20, 10);
const inTotalPrice3 = oilPrice(1, 0, 2);
const inTotalPrice4 = oilPrice(0, 2, 3);
console.log(inTotalPrice1, inTotalPrice2, inTotalPrice3, inTotalPrice4);



// ___________________________
// problem :4 public bus fare
//____________________________

function publicBusFare(totalPeople) {

    let busSit = 50;
    let extraPeople = totalPeople % busSit;
    let microBus = 11;
    let restPeople = extraPeople % microBus;
    let restPeopleFare = restPeople * 250;
    return restPeopleFare;

}

const restPeoplFareTotal = publicBusFare(235);

console.log(restPeoplFareTotal);




// __________________________
// // Problem 5: isBestFriend
// ____________________________




function isBestFriend(person1, person2) {


    if (person1.name === person2.friend && person2.name === person1.friend) {
        return true
    }
    else {
        return false;
    }
}

let checkCloseFriend = isBestFriend({ name: "abul", friend: "babul" }, { name: "babul", friend: "sabul" });
console.log(checkCloseFriend);



                                        //   The End