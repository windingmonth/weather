var Grid = /** @class */ (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        var xDist = (point.x - Grid.origin.x);
        var yDist = (point.y - Grid.origin.y);
        console.log(Grid.origin.x);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var grid1 = new Grid(1.0); // 1x scale
Grid.origin.x = 4;
var grid2 = new Grid(5.0); // 5x scale
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
// class Animal {
//     name: string;
//     constructor(theName: string) { this.name = theName; }
//     move(distanceInMeters: number = 0) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
// }
// class Snake extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 5) {
//         console.log("Slithering...");
//         super.move(distanceInMeters);
//     }
// }
// class Horse extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 45) {
//         console.log("Galloping...");
//         super.move(distanceInMeters);
//     }
// }
// let sam = new Snake("Sammy the Python");
// let tom: Animal = new Horse("Tommy the Palomino");
// sam.move();
// tom.move(34);
// interface Person {
//     firstName: string;
//     lastName: string;
// }
// function greeter(person: Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }
// let user = { firstName: "Jane", lastName: "User" };
// document.body.innerHTML = greeter(user);
// interface NumberDictionary {
//     [index: string]: number;
//     length: number;    // 可以，length是number类型
//     // name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
//   }
// interface ReadonlyStringArray {
//     readonly [index: number]: string;
// }
// let myArray: ReadonlyStringArray = ["Alice", "Bob"];
// // myArray[2] = "Mallory"; // error!
// interface ClockConstructor {
//     new (hour: number, minute: number): ClockInterface;
// }
// interface ClockInterface {
//     tick();
// }
// function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
//     return new ctor(hour, minute);
// }
// class DigitalClock implements ClockInterface {
//     constructor(h: number, m: number) { }
//     tick() {
//         console.log("beep beep");
//     }
// }
// class AnalogClock implements ClockInterface {
//     constructor(h: number, m: number) { }
//     tick() {
//         console.log("tick tock");
//     }
// }
// let digital = createClock(DigitalClock, 12, 17);
// let analog = createClock(AnalogClock, 7, 32);
// interface Counter {
//     (start: number): string;
//     interval: number;
//     reset(): void;
// }
// function getCounter(): Counter {
//     let counter = <Counter>function (start: number) { };
//     counter.interval = 123;
//     counter.reset = function () { };
//     return counter;
// }
// let c = getCounter();
// c(10);
// c.reset();
// c.interval = 5.0;
