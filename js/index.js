let answe='';
let temp = 22;

if(temp<-30){answe='Оставайтесь дома';}
else if(temp<-10){answe='Сегодня холодно';}
else if(temp<5){answe='Не холодно';}
else if(temp<15){answe='Тепло';}
else if(temp<25){answe='Очень тепло';}
else if(temp<35){answe='Жарко';}
else {answe='Пекло';}

console.log(`Сейчас на улице: ${temp} ${answe}`);

let rol = "user";
switch (rol) {
    case "admin":
        console.log('1');
        break;
        case "manager":
            console.log('2');
            break;    case "user":
            console.log('3');
            break;
    default:
        break;
}