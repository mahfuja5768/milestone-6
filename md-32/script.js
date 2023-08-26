///call, bind, apply::::

//call
var karim ={
    name: 'karim rahman',
    dob: 1996,
    age: function(currentYear){
        console.log(`${this.name} is ${currentYear - this.dob} years old!`)
    }
}

// karim.age(2018);

var rahim ={
    name: 'rahim abdu',
    dob: 1995,
}

// karim.age.call(rahim, 2018)


//apply
var karim ={
    name: 'karim rahman',
    dob: 1996,
    age: function(msg, currentYear){
        console.log( ` ${msg}! ${this.name} is ${currentYear - this.dob} years old!`)
    }
}

// karim.age("hello world" ,2018);

var rahim ={
    name: 'rahim abdu',
    dob: 1995,
}

// karim.age.apply(rahim, ["hi puchi", 2018])


///bind::

var karim ={
    name: 'karim rahman',
    dob: 1996,
    age: function( currentYear,msg){
        console.log( ` ${msg}! ${this.name} is ${currentYear - this.dob} years old!`)
    }
}

// karim.age("hello world" ,2018);

var rahim ={
    name: 'rahim abdu',
    dob: 1995,
}
// var rahimAge = karim.age.bind(rahim, 2018);
// rahimAge('hello kon')
var rahimAgeCalc = karim.age.bind(rahim);
rahimAgeCalc(2018,'hello kon' )


//callback function:::
function numOne(){
    console.log("numOne is called")
}
function numTwo(){
    console.log("numTwo is called");
    numOne()
}
numTwo()