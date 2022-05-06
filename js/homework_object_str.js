// Реализовать функцию которая заменяет в строке str, все вхождения подстроки
//find, на подстроку replace.

function replaceStr(strObject) {

    let str = strObject.str;
    let strFind = strObject.strFind;
    let strReplace = strObject.strReplace;  
    
    let lenStrReplace = strReplace.length;
    
    let indexStart = 0;
    let indexEnd = str.indexOf(strFind);
    let newStr = "";

    while (indexStart <= indexEnd) {
        newStr = newStr + str.slice(indexStart, indexEnd) + strReplace;
        str =  str.slice(indexEnd + lenStrReplace - 1);
        indexEnd = str.indexOf(strFind); 
        console.log('промежуточное преобразование: ', newStr);
    }
    newStr = newStr + str;
    return newStr;

}

let strObject = {
    str: 'корова',
    strFind: 'о',
    strReplace: 'ОУ'
}


console.log('начальное слово: ', strObject.str);
newStr = replaceStr(strObject);
console.log('конечное слово: ', newStr);