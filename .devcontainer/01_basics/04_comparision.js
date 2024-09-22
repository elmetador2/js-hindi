console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 ==2);

console.log("2">1);//output=true
console.log("02">1);//output=true

console.log(null > 0);//output=false
console.log(null == 0);//output=false
console.log(null => 0);//output=true due to value conversion// we dont use these type of conversion

//note:The reason is that an eqality check==and comparison > < >= <= works differntly
//comparsion convert null to a Number,treating it as 0.
//Thats why (3) null>=0 is true and (1) null> 0 is false

//=== strict check
console.log("2"===2);



