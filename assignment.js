//------------  Feet to Mile code start  ---------------//

function feetToMile(feet) {
    if (feet >= 1) {
        const mile = parseFloat(feet) * 0.00018939;    //1 feet = 0.00018939 mile
        return `${feet} feet = ${mile} mile`;
    }
    else if ( feet <= 0){
        return "Please Enter a Positive Number";
    }  
}

const result = feetToMile(500.555);
console.log(result);//Output: 500.555 feet = 0.09480011145 mile

const negativeValue = feetToMile(-10);
console.log(negativeValue);//Output: Please Enter a Positive Number

//------------  Feet to Mile code End   ---------------//



//------------   WoodCalculator code Start  ---------------//

function woodCalculator(chairNumber, tableNumber, khatNumber) {
    
    if(chairNumber >= 1 && tableNumber >= 1 && khatNumber >= 1){
       let chair = parseFloat(chairNumber) * 1;
       let table = parseFloat(tableNumber) * 3;
       let khat = parseFloat(khatNumber) * 5;

        let total = chair + table + khat;
        return `You need total ${total} cubic feet wood for make your furniture.`;
    }
    else if (chairNumber <= 0 || tableNumber <= 0 || khatNumber <= 0){
        return `Please Enter a Positive Value`;
    }
}

const woodResult = woodCalculator(6, 2, 3);
console.log(woodResult);//Output: You need total 27 cubic feet wood for make your furniture.

const woodNegativeValue = woodCalculator(6, -2, 5);
console.log(woodNegativeValue);//Output: Please Enter a Positive Value

//------------   WoodCalculator code  End  ---------------//



//------------   tinyFriend code  Start  ---------------//

function tinyFriend(arr) {
    let shortLength = Infinity;
    let shortest = "";

    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            if ( arr[i].length < shortLength) {
                shortest = arr[i];
                shortLength = arr[i].length;
            }
        }
    }
    return shortest;
}

const friendsName = ['Mahbub', 'Hasan', 'Hira', 'Jhankar Mahbub', 'Mukto', 'Zunayed'];
const output = tinyFriend(friendsName);
console.log(output); // - Hira

//------------   tinyFriend code  End  ---------------//


//------------   brickCalculator code  start  ---------------//

function brickCalculator(tola){
    for(let i = 0; i < tola; i++){
        const element = tola[i];
        
        const brick = 1000;
        
        if(element >= 1 && element <= 10){
            const feet = 15;
            let under_10TolaBrick = brick * feet * element;
            return under_10TolaBrick;
        }
        else if(element >=11 && element <= 20){
            const feet = 12;
            let upper_11TotalBrick = brick * feet * element;
            return upper_11TotalBrick;
        }
        else if (element >= 21){
           const feet = 10;
            let upper_21TotalBrick = brick * feet * element;
            return upper_21TotalBrick;
        }
       
    }   
} 

brickCalculator();

//------------   brickCalculator code  End  ---------------//

