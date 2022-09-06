//EXERCISE 1

function upperCase (string) {
    let reg = /^[A-Z]/g;
    if (string.match(reg)){
        console.log('String\'s first character is uppercase');
    } else{
        console.log('String\'s first character is not uppercase');
    };
};

upperCase('Alice in wonderland');

//EXERCISE 2

function isValidDate(mydate){
    let reg = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/g;
    let x = Boolean(mydate.match(reg))
    return x;
};

console.log(isValidDate('12/02/2015'));


//EXERCISE 3

function myTrimFunction(string){
    let reg = /\s/g;
    let x = string.replace(reg,'');
    return x;
};

console.log(myTrimFunction('  Alice in wonderland   '));

//EXERCISE 4 

function quantityOfVowels(string){
    let reg = /[aeiouy]/gi;
    let arr = string.split('');
    let myArr = [];

    arr.filter(function(item) {
        if(item.match(reg)) {
            myArr.push(item);
        }
    })

    return myArr.length;
    
}

console.log(quantityOfVowels('Alice in wonderland'));

//EXERCISE 5

function isValidPostCode (code) {
    let reg = /^([0-9]{5})(-[0-9]{4})?$/i;
    let x = Boolean(code.match(reg))
    return x;
};

console.log(isValidPostCode('03201-2150'));