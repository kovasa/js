`Создайте класс People, он должен содержать свойства name (имя), surname
(фамилия) и метод getFullName() (возвращает полное имя человека).`

class People {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }

    getFullName(){
        return`${this.surname} ${this.name}`;
    }
}

const p1 = new People('Ivan', 'Petrov');
console.log(p1.getFullName());


`Создайте класс Worker который будет наследоваться от класса People. Класс Worker должен
содержать свойства name, surname унаследованные от родительского класса, и
свойства rate (ставка по которой происходит оплата руб/день), day (количество
отработанных дней) и метод getSalary() (возвращает заработную плату сотрудника).`

class Worker extends People {
    constructor(name, surname, rate, day) {
        super(name, surname); 
        this.rate = rate;
        this.day = day;
    }

    getSalary(){
        return this.rate*this.day;
    }
}

const w1 = new Worker('Petr', 'Popov', 1000, 20);
console.log(w1.getFullName(), w1.getSalary());
console.log(w1.name);
delete(w1.name);
console.log(w1.name);
console.log(w1.getFullName());


`Создать несколько экземпляров класса Worker с различными данными и проверить
корректность работы.`