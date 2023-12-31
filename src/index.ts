// Number
let num: number = 10;

// String
let message: string = "Hello, TypeScript!";

// Boolean
let isLogged: boolean = true;

// Array
let numbers: number[] = [1, 2, 3, 4, 5];
let numbers2: Array<number> = [1, 2, 3, 4, 5];
numbers.forEach((element) => console.log(element));

// Tuple
let person: [string, number] = ["John", 30];
console.log(person[0]); // John
console.log(person[1]); // 30
console.log(person.length); // 2

// Enum
enum Color {
  Red,
  Green,
  Blue,
}
let color: Color = Color.Red;
console.log(color); // 0

// Any
let value: any = 10;

function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("John")); // Output: Hello, John!

function sum(a: number, b: number): number {
  return a + b;
}
const customAdd: (a: number, b: number) => number = (a, b) => a + b;
console.log(customAdd(1, 2)); // Output: 3

interface Person {
  name: string;
  age: number;
}

function getPersonInfo(person: Person): string {
  return `Name: ${person.name}, Age: ${person.age}`;
}

let john: Person = { name: "John", age: 30 };
console.log(getPersonInfo(john)); // Output: Name: John, Age: 30

interface PersonInteface {
  name: string;
  age?: number;
}

function printPerson(person: PersonInteface): void {
  console.log(`Name: ${person.name}`);
  if (person.age !== undefined) {
    console.log(`Age: ${person.age}`);
  }
}

const person1: PersonInteface = { name: "John" };
const person2: PersonInteface = { name: "Jane", age: 25 };

printPerson(person1);
// Output: Name: John

printPerson(person2);
// Output: Name: Jane
// Age: 25

function reverse<T>(items: T[]): T[] {
  return items.reverse();
}

let sumeNumbers: number[] = [1, 2, 3, 4, 5];
console.log(reverse(sumeNumbers)); // Output: [5, 4, 3, 2, 1]

let names: string[] = ["John", "Jane", "Mary", "Marko"];
console.log(reverse(names)); // Output: ["Marko", "Mary", "Jane", "John"]

function loopOnItems<T>(items: Iterable<T>): void {
  for (let item of items) {
    console.log(item);
  }
}
loopOnItems(names);
loopOnItems(sumeNumbers);

// Union Types
let value1: string | number = "Hello";
value1 = 10;

// Intersection Types
interface A {
  name: string;
}
interface B {
  age: number;
}
let person3: A & B = { name: "John", age: 30 };

// Type Assertions
let someValue: any = "Hello, TypeScript!";
let strLength: number = (someValue as string).length;

// Type Inference
let x = 10; // TypeScript infers x as number type

class Rectangle {
  constructor(public width: number, public height: number) {}

  getArea(): number {
    return this.width * this.height;
  }
}

let rectangle = new Rectangle(10, 5);
console.log(rectangle.getArea()); // Output: 50

class Square extends Rectangle {
  constructor(public side: number) {
    super(side, side);
  }
}

let square = new Square(5);
console.log(square.getArea()); // Output: 25

class PersonClass {
  constructor(public name: string, public age: number) {}

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

//   Type Guards

function processValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // Access string-specific methods
  } else {
    console.log(value.toFixed(2)); // Access number-specific methods
  }
}

processValue("Hello"); // Output: HELLO
processValue(3.14159); // Output: 3.14

// higher order functions

function withLogging(func: () => void): () => void {
  return () => {
    console.log("Calling function...");
    func();
    console.log("Function called.");
  };
}

function sayHello() {
  console.log("Hello, TypeScript!");
}

const withLoggingSayHello = withLogging(sayHello);
withLoggingSayHello();
// Output:
// Calling function...
// Hello, TypeScript!
// Function called.

// function composition

function add(a: number, b: number): number {
  return a + b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function compose<T>(...funcs: Array<(arg: T) => T>): (arg: T) => T {
  return (arg: T) => funcs.reduce((result, func) => func(result), arg);
}

const addAndMultiply = compose(
  (value: number) => add(value, 10),
  (value: number) => multiply(value, 2)
);

console.log(addAndMultiply(5)); // Output: 30

//   function overloading

function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
  return a + b;
}

const result1 = combine("Hello", " TypeScript"); // Output: Hello TypeScript
const result2 = combine(5, 10); // Output: 15
// const result3 = combine(true, false); // Compiler Error: Supplied parameters do not match any signature of call target


/*
*Currying is a technique used in functional programming
* where a function that takes multiple arguments is transformed into a sequence of functions, 
each taking a single argument. 
*The curried function allows partial application,
 meaning you can provide some arguments at a time and get a new function that expects the remaining arguments.

*/

function addCurry(x: number): (y: number) => number {
    return function (y: number): number {
      return x + y;
    };
  }
  
  const add5 = addCurry(5);
  console.log(add5(3)); // Output: 8
  
  const add10 = addCurry(10);
  console.log(add10(7)); // Output: 17
  