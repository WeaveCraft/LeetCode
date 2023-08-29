let summa = 0;

function calcArray(array){
    for(let i = 0; i < array.length; i++){
        summa += array[i];
    }
    return summa;
}

const testArray = [2, 6];

const result = calcArray(testArray);

console.log(result);