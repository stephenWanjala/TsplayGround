// Number
let num: number = 10;

// String
let message: string = "Hello, TypeScript!";

// Boolean
let isLogged: boolean = true;

// Array
let numbers: number[] = [1, 2, 3, 4, 5];
let numbers2: Array<number> = [1, 2, 3, 4, 5];
numbers.forEach(element => console.log(element));

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
        return a + b
    }
    const  customAdd: (a: number, b: number) => number = (a, b) => a + b;
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
      