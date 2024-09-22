//#primitve datatypes

// 7 types:String,number, Boolean,null undefind ,Symbol,BigInt

const score=100
const scorevalue=100.3

const isloogedIn=false
const  temp=null
let useremail;

const id=Symbol('123')
const anotherId=Symbol('123')//not equal to id although values are same


//reference type(non primitve)
//Array, Object, Functions

const heros=["shaktiman","nagraj","doga"]
//object 
{
    Name:"sharique",//we use colon:
    age:21,
}
//function
const myFunction=function () {
    console.log("hello world");
}


// ****************************

//stac(primitive), heap(non-primitive)

//stack=copy di jati hai
//heap=refrence diya jata h

let myyoutubename = "sharique240@"

let anothername=myyoutubename
anothername="chai or code"
 console.log(myyoutubename);
 console.log(anothername);
 
    
