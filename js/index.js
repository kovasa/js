let answe='';
let temp = 22;

if(temp<-30){answe='Оставайтесь дома';}
else if(temp<-10){answe='Сегодня холодно';}
else if(temp<5){answe='Не холодно';}
else if(temp<15){answe='Тепло';}
else if(temp<25){answe='Очень тепло';}
else if(temp<35){answe='Жарко';}
else {answe='Пекло';}

//console.log(`Сейчас на улице: ${temp} ${answe}`);

let rol = "user";
switch (rol) {
    case "admin":
        //console.log('1');
        break;
        case "manager":
            //console.log('2');
            break;    case "user":
            //console.log('3');
            break;
    default:
        break;
}

//let sum = (min, max) => console.log(math.random());
//sum(10,20);

function getRandom(min, max) {
    let a = min + (max-min)*Math.random();
    let b = max - (max-min)*Math.random();
   
    if (a<max) {
        c = Math.floor(a);
        console.log('var 1: ',c); 
    } else {
        c = Math.floor(b);
        console.log('var 2: ',c);
    }
    return c;
}

s = getRandom(3, 9);

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
