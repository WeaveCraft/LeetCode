function changeString(stringInput){
    let stringBuilder = "";
    for(let i = 0; i < stringInput.length; i++){
        if(i % 2 == 0){
            stringBuilder += stringInput[i].toLowerCase();
        }
        else{
            stringBuilder += stringInput[i].toUpperCase();
        }
    }
    return stringBuilder;
}

console.log(changeString("Hello"));
console.log(changeString("ReVeRsE"));
console.log(changeString("test"));
console.log(changeString("Viktor"));
console.log(changeString("CHANGEME"));
