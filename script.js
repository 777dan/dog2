function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    let age = 0;
    let speed = 0;
    let maxSpeed = 0;
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
    this.bark = function () {
        (this.weight < 25) ? alert(this.name + " сказал Тяф!") : alert(this.name + " сказав Гав!");
    };
    this.start = function () {
        speed = 1;
    };
    this.stop = function () {
        speed = 0;
    };
    this.changeSpeed = function (n) {
        // this.start();
        maxSpeed = (this.weight < 25) ? 4 : 20;
        (n >= 0.5 && n <= maxSpeed) ? speed *= n : alert("Щось пішло не так...");
        alert(speed);
    };
    this.toString = function () {
        return `Name: ${this.name}; Breed: ${this.breed}; Weight: ${this.weight}`;
    }
}

let fido = new Dog("Fido", "Mixed", 38);
let fluffy = new Dog("Fluffy", "Poodle", 30);
let spot = new Dog("Spot", "Chihuahua", 10);

// fido.setAge(-100);
let dogs = [fido, fluffy, spot];
for (let i = 0; i < dogs.length; i++) {
    // alert(dogs[i].getAge());
    // dogs[i].bark();
    // dogs[i].changeSpeed(2);
    alert(dogs[i]);
}

if (fido instanceof Dog) {
    console.log("it's a Dog!");
};