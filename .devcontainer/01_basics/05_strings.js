const name="sharique"
const repocount=40

console.log(name+ repocount+" value");//output=sharique40 value(not recommended)

console.log(`hello my name is ${name} and my repo is${repocount}`);//modern way of syntax

const gameName = new String(`sharique`)
console.log(gameName[0]);//output='s'


console.log(gameName.length);//output=8
console.log(gameName.toUpperCase());//ouput=SHARIQUE

//charAt=gives character at certain index
//indexof=gives index of certain char
//substring=give some charcter from in between index
//slice =same as substring but we can alsi give negative values hence can work in reverse
//trim=removes the starting space and ending space
//replace=replace a charcrer at perticular index
//refer MDN refrence
//split=refr mdn refrecne
