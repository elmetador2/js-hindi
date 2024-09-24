//arays are resizeable
 const myArr = [0,1,2,3,4,5]//array declaration
 const myHeros =["shaktiman","nagarj"]

 const Myarr2=new  Array(1,2,3,4)

 console.log(myArr[0]);
 //array creates shallow copies (is a copy whose properties share the same reference point)
 
 // array methods

 myArr.push(6)//push add the elements to the existing array.
 console.log(myArr);//output=> 0,1,2,3,4,5,6
 myArr.pop()//Removes the last element from an array and returns it. If the array is empty,
             //undefined is returned and the array is not modified.
 myArr.unshift(9)//Inserts new elements at the start of an array, and returns the new length of the array.
 myArr.shift()
 const newArr= myArr.join()
 console.log(newArr);//output=>0,1,2,3,4,5 type=string

 //slice, splice
 console.log("A",myArr);
 const myNewarr=myArr.slice(1,3)//output==>[1,2]

 const myNewarr2=myArr.splice(1,3)//output==>[1,2,3] 
 //splice manipulate the original array while slice didnt

  
 


 

 