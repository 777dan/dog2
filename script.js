function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    let age = 0;
    let speed = 0;
    let maxSpeed = 0;
    let distance = 0;
    let isReached = false;
    this.setAge = function (a) {
        if (a > 0) {
            age = a;
        } else {
            alert("Цей собака, очевидно, ще не з'явився на світ...");
        }
    };
    this.getAge = function () {
        return age;
    };
    this.getDistance = function () {
        return distance;
    };
    this.getIsReached = function () {
        return isReached;
    };
    this.bark = function () {
        (this.weight < 25) ? alert(this.name + " сказав Тяф!") : alert(this.name + " сказав Гав!");
    };
    this.start = function () {
        speed = 1;
    };
    this.stop = function () {
        speed = 0;
    };
    this.changeSpeed = function (n) {
        speed = 1;
        maxSpeed = (this.weight < 25) ? 4 : 20;
        (n > 0 && n <= 2) ? speed *= n : alert("Щось пішло не так...");
    };
    this.measureDistance = function () {
        if (distance < 0.0006) {
            distance += (speed / 3600);
        } else {
            isReached = true;
            this.stop();
        }
    };
    this.toString = function () {
        return `<td>${this.name}</td><td>${this.breed}</td><td>${this.weight}</td><td>${speed}</td><td>${distance.toFixed(4)}</td>`;
    }
}

let fido = new Dog("Fido", "Mixed", 38);
let fluffy = new Dog("Fluffy", "Poodle", 30);
let spot = new Dog("Spot", "Chihuahua", 10);

let dogs = [fido, fluffy, spot];
const infoTable = document.getElementById("info");
for (let i = 0; i < dogs.length; i++) {
    let randSpeed = (Math.random() * 1.5 + 0.5).toFixed(1);
    dogs[i].changeSpeed(randSpeed);
    infoTable.innerHTML += dogs[i];
}

let hasWinning = false;
let reached = 0;
function printTable() {
    for (let i = 0; i < dogs.length; i++) {
        let randSpeed = (Math.random() * 1.5 + 0.5).toFixed(1);
        dogs[i].changeSpeed(randSpeed);
        dogs[i].measureDistance();
        infoTable.children[i + 1].innerHTML = `<tr class='data'>${dogs[i]}</tr>`;
        if (dogs[i].getDistance() >= 0.0006 && hasWinning === false) {
            alert(`${dogs[i].name} виграв`);
            hasWinning = true;
        }
        if (hasWinning === true) {
            if (dogs[i].getIsReached() === true) {
                reached++;
            }
        }
        if (reached >= 3) {
            clearInterval(interval);
            // break;
        }
        console.log(dogs[i].name);
    }
}

let interval = setInterval(printTable, 1000);