console.log('Проанализировав временной промежуток начиная с 1800 и до 2020 года найти и вывести в консоль:');
console.log('-Год первого полета человека в космос и количество итераций которое потребовалось для поиска.');
console.log('-Количество високосных годов принадлежащих данному отрезку и количество итераций которое потребовалось для поиска.'); 

const startDate = 1800;
const finishDate = 2020;
const firstFlight = 1962;

let startInterval = startDate;
let finishInterval = finishDate;
let interval = (finishDate - startDate)/2;
let count = 0;

while (interval != firstFlight) {
    if (startInterval + interval <= firstFlight) { 
        if (startInterval + interval == firstFlight) {
            break;
        } else {
            startInterval = startInterval + interval;
        }
    } else {
        if (finishInterval == firstFlight) {
            break;
        } else {
            finishInterval = startInterval + interval;           
        }
    }
    interval = Math.floor((finishInterval - startInterval)/2);
    count ++;
}

console.log(`Год первого полета человека в космос: ${firstFlight} найден за: ${count} итераций`); 

startInterval = startDate;
finishInterval = finishDate;
let countYears = 0;
count = 0;

while (startInterval <= finishInterval) {
    if (startInterval % 4 == 0 && (startInterval % 100 != 0 || startInterval % 400 == 0)) {
        countYears = Math.floor((finishInterval - startInterval)/4);
        break;
    } else {
        startInterval++; 
    }
    count++;
}

console.log(`Количество високосных годов принадлежащих отрезку ${startDate}-${finishDate} равно: ${countYears} и найдено за: ${count} итераций`);
