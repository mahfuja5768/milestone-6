//  const myAdd = (a,b,c) => a+b+c;

//  const nums = myAdd(1,2,3);
//  console.log(nums)

const myAdd2 = (a, b = 3) => a + b;

const nums = myAdd2(1);
// console.log(nums);



const myLine = `
    I am a web developer.
    I love to code.
    I love to eat kathlichu.
`

// console.log(myLine)


const myFrnds =(arr) =>{
    let evenNames = [];
    for(let name of arr){
        if(name.length % 2 === 0){
            evenNames.push(name)
        }
    }
    return evenNames
}

const names = ['Nadu', 'Nats', 'Spark'];

const evenNames = myFrnds(names);
// console.log(evenNames)




const square =(arr)=>{
    let sqNums = [];
    let sum = 0;
    let avg;
    for(let item of arr){
       let itemSq = item * item;
       sqNums.push(itemSq);
    }
    for( let sqNum of sqNums){
        sum += sqNum;
        avg = sum / 3;
    }
 
    return avg;
}


const nums2 = [1, 1, 2];

const res = square(nums2)
// console.log(res)


const addArrs = (arr1, arr2)=>{
    let arrJoin = [...arr1, ...arr2];
    return Math.max(...arrJoin)
}


const num3 = [1,2,3];
const num4 = [4,5,6];

const res5 = addArrs(num3, num4);
console.log(res5)