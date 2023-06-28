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

        function loopOnItems<T> (items:Iterable<T>):void{
            for(let item of items){
                console.log(item)
            }
        }
        loopOnItems(names)
        loopOnItems(sumeNumbers)



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

      
      
      