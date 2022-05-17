console.log(`
Используя замыкания, написать счётчик, который 
можно как инкрементировать, так и декрементировать 
(за направление счётчика будет отвечать второй (необязательный) параметр).
За приращение счётчика будет отвечать первый параметр.
За сброс будет отвечать третий (необязательный параметр).
`);

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
