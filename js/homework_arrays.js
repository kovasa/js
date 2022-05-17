/////////////////////////////////////////////////////////////////////////////////////////
console.log(`1. Написать функцию, которая будет принимать массив чисел, и будет убирать
повторяющиеся значения из переданного массива, в качестве результата
возвращать новый массив с уникальными значениями из исходного.`);

function delRepeat(arr) {
    newArr = [];
    arr.forEach(element => {
        if (!newArr.includes(element)) {
            newArr.push(element);
        }         
    });
    return newArr;
}
testArr = [1,2,1,2,3];
console.log(testArr);
console.log(delRepeat(testArr));

/////////////////////////////////////////////////////////////////////////////////////////
console.log(`2. Написать функцию которая будет принимать два массива, и будет сравнивать
их, если они идентичны (элементы совпадают по значению и по индексу) то
функция возвращает true, в противном случае false.`);

function compareArr(arr1, arr2) {
    result = false;
    if (arr1.length === arr2.length) {
        result = true;
        count = 0;
        arr1.forEach(element => {
            if (element != arr2[count]) {
                result = false;
            } 
            count ++;        
        });
    };

    return result;
}
testArr1 = [1,2,1,2,3];
testArr2 = [1,2,5,2,3];
console.log(testArr1);
console.log(testArr2);
console.log(compareArr(testArr1, testArr2));


/////////////////////////////////////////////////////////////////////////////////////////
console.log(`3. Написать функцию которая будет принимать два массива, и в качестве
результата будет возвращать только те значения которые есть и в первом и во
втором массиве.`);

function intersectionArr(arr1, arr2) {
    newArr = [];
    result = true;
    
    arr1.forEach(element => {
        if (arr2.includes(element) && !newArr.includes(element)) {
            newArr.push(element);
        } 
    });
 
    return newArr;
}
testArr1 = [1,2,1,2,8,4];
testArr2 = [1,2,5,2,3];
console.log(testArr1);
console.log(testArr2);
console.log(intersectionArr(testArr1, testArr2));