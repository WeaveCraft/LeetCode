function reverseUsernames(array){
    const reversedInput = [];
    for(const name of array){
        const reverse = name.split('').reverse().join('');
        reversedInput.push(reverse);
        
    }
    return reversedInput;
}

const inputArr = ["alice", "bob", "charlie"];
const result = reverseUsernames(inputArr);

console.log(result);
