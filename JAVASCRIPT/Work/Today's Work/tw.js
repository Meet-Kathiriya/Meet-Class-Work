// Single Level Inheritance


// class vehical{
//     constructor(){
//         this.name = ""
//     }

//     greet(){
//         console.log("This is Vehical");  
//     }
// }

// class car extends vehical{
//     carGreet(){
//         console.log("This is a Car");
//     }
// } 

// let obj = new car ()

// obj.greet()
// obj.carGreet()




// Multi Level Inheritance


// class Animal{
//     animalSpeak(){
//         console.log("This is Animal");   
//     }
// }

// class Dog extends Animal{
//     dogSpeak(){
//         console.log("This is Dog");
//     }
// }

// class Pug extends Dog{
//     pugSpeak(){
//         console.log("This is Pug ");
//     }
// }

// let obj = new Pug();

// obj.animalSpeak()
// obj.dogSpeak()
// obj.pugSpeak()



// Hiherichal Inheritance


class parent{
    greet(){
        console.log("I'm the Parent");
    }
}

class child_1 extends parent{
    childGreet(){
        console.log("I'm the Child One");
    }
}

class child_2 extends parent{
    childGreet(){
        console.log("I'm the Child Two");
    }
}

let childOne = new child_1();
let childTwo = new child_2();

childOne.greet()
childOne.childGreet()
childTwo.greet()
childTwo.childGreet()



// Super Keyword


// class parent {
//     constructor() {
//         this.id = 50;
//     }
// }

// class child extends parent {
//     constructor(id) {
//         super(id)
//     }

//     greet() {
//         console.log(`the id is ${this.id}`);
//     }
// }

// let obj = new child;

// obj.greet();