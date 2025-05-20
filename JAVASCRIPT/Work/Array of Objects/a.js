// array of objects

let arr = [
    {id:1,name:"rahul",subject:"node"},
    {id:1,name:"meet",subject:"react"},
    {id:3,name:"raj",subject:"react"},
    {id:4,name:"vivek",subject:"node"},
    {id:5,name:"shyam",subject:"node"}

]
    
console.log(arr[0].name);
console.log(arr[1].name);
console.log(arr[2].name);
console.log(arr[3].name);
console.log(arr[4].name);


// map filter find forEach :-

// let newArr = arr.filter((item)=>item.id !=2);
// let newArr2 = arr.filter((item)=>item.subjects == "react");

// console.log(newArr);


// find :-

// let singleData = arr.find((item)=>item.id==2);

// console.log(singleData);


// map :-

let mrr = arr.map((e)=>{
return e;
})

// forEach :-

arr.forEach(Element=>
{
    console.log(Element);
}
)