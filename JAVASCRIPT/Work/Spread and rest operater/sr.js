// spread operater  (...) <--- Syntax

// let arr = [12,163,1,31,6];

// let arr2 = [...arr.11,11,11,21];

// console.log(arr);
// console.log(arr2);



// rest operater (...) <--- Syntax

// allows you to collect multiple into a n array , enanling function sto accept an indefinite number of arguments.




// Object {}


let obj = {
    name : "meet",
    subject : "react",
    city : "rajkot",
    mobilenum : 654665,
    married : true
}

console.log(obj.name);
console.log(obj.subject);
console.log(obj.city);
console.log(obj.mobilenum);
console.log(obj.married);


// value change 

// defination :- key nhi hogi to modified ho jayegi
                //  key pehle se hogi to overight ho jayegi


                // let obj2 = obj
                // obj2.name = "rahul";

                // console.log(obj.name);
                // console.log(obj2.name);


            // passed by refernace hee 

            let obj2 = {
                ...obj ,
                key : "value"  
            }

            console.log(obj2);
            

// Not use on knowledge purpose


// for (const key in object){
    
// }


// for (const key of object){

// }


// prototype inheritance

// defination :- the mechanism by which objects inherit properties and methods from other onjects , forming a prototype chain wrer objects inherit from theri prototype.

