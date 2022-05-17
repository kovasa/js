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


let cityObject1 = {
    name: 'NN',
    number: 1300000,
    getName: function() {
        return this.name;
    },
    getNumber: function() {
        return this.number;
    },
    addProperty: function(property, value) {
        this[property] = value;
    }
};

let cityObject2 = {
    name: 'YY',
    number: 1200000
};

console.log(cityObject1.getName());
console.log(cityObject1.getNumber());
//cityObject.addProperty('name', 'YY');
//console.log(cityObject.getName());

console.log(cityObject1.getName.call(cityObject2));
//console.log(cityObject1.getNumber());
newFun = cityObject1.addProperty.bind(cityObject2, 'name', 'FF');
console.log(cityObject1.getName.call(cityObject2));
newFun();
console.log(cityObject1.getName.call(cityObject2));

function example() {
    return function(a,b) {
        return a*b*10;
    }
}
console.log(example()(2,2));

function example2(a) {
    return function(b) {
        return function(c) {
            return a*b*c;
        }
    }
}
console.log(example2(1)(2)(2));

function counter(start) {
    let count = start;
    return function(increment, direction = 1, reset = true) {
        result = 0;
        if (reset) {
            result = count+increment*direction;
            count = result;
        }
        return result;
    }
}
let generator = counter(5);
console.log(generator(5));
console.log(generator(2,-1));
console.log(generator(5,1,false));
