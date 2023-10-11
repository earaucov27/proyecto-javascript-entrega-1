let ages = [];
let totalAges = 0;

while (true) {
    const name = prompt('Ingresa un nombre, si desea finalizar no ingrese ningun nombre');

    if (!name) {
        break;
    }

    const ageString = prompt('Ingresa la edad para ' + name + ':');
    const age = parseInt(ageString, 10);

    if (!isNaN(age)) {
        ages.push(age);
        totalAges += age;
    } else {
        alert('Edad no válida. Por favor, ingresa un número.');
    }
}

const numberOfPeople = ages.length;
const averageAge = totalAges / numberOfPeople;

alert('Número de personas ingresadas: ' + numberOfPeople);
alert('Promedio de edad: ' + averageAge);