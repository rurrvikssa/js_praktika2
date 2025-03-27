//1
let admin;
let name;

name = "Джон";
admin = name;
alert(admin);

//2
const name_city = prompt('Введите название города');
const year_city = Number(prompt('Введите год образования города'));
const population_city = prompt('Введите население города');

const age_city = 2025 - year_city;
alert(`Городу ${name_city} исполнилось ${age_city} лет с момента его образования. Население - ${population_city} человек`);

//3
const r_circle = prompt('Введите радиус круга');
const pi = 3.1415;
const s_circle = pi * r_circle * r_circle;
alert(`Площадь круга равна ${s_circle}`);

//4
const first_num = Number(prompt('Введите первое число'));
const second_num = Number(prompt('Введите второе число'));

const sum= first_num + second_num;
const razn = first_num - second_num;
const chast = first_num / second_num;
const proizved = first_num * second_num;

alert(`Сумма чисел равна ${sum}`);
alert(`Разность чисел равна ${razn}`);
alert(`Частное чисел равно ${chast}`);
alert(`Произведение чисел равно ${proizved}`);