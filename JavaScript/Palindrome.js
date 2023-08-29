function CheckPalindrome(string){
    const lowerCase = string.toLowerCase();
    const reverse = lowerCase.split('').reverse().join('');

    return reverse === lowerCase;
}

const checkMe = "raceCar";
const result = CheckPalindrome(checkMe);

if(result){
    console.log("True");
}
else{
    console.log("False");
}