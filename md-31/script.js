//using for loop::::

// const oddNums = [1,3,5,7,9];

// let evnNums =[];
// for(let item of oddNums){
//     let evenItem = item + 1;
//     evnNums.push(evenItem);
// }
// console.log(evnNums)

//using map::::  map akta new array return kore....
const oddNums = [1, 3, 5, 7, 9];

const evenNums = oddNums.map((e) => e + 1);
// console.log(evenNums);

//filter & find:
const nums = [33, 50, 79, 90, 78, 101, 30];

// const divisibleBy10 = nums.filter(n => n % 10 === 0);
// const divisibleBy10 = nums.find(n => n % 10 === 0);

// console.log(divisibleBy10)

//filter in object::

const instructor = [
  { name: "Spark", age: 28, position: "Senior" },
  { name: "Pasa", age: 26, position: "Junior" },
  { name: "Devid", age: 30, position: "Senior" },
];

const seniorInstructorName = instructor.filter((n) => n.position === "Senior");
// console.log(seniorInstructorName);


//using reduce:::
const people = [
    { name: "Spark", age: 20 },
    { name: "Pasa", age: 15},
    { name: "Devid", age: 22 },
  ];


// let sumOfAges = people.reduce((sum,p)=> sum + p.age , 0);
// console.log(sumOfAges)

let sumOfAges = 0;

  for(let i=0; i < people.length; i++){
    sumOfAges += people[i].age;
  }

console.log(sumOfAges)