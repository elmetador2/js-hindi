 const marvel_heros =["thor","ironman","spiderman","hulk"]
 const dc_heros=["superman","flash","batman"]


 marvel_heros.push(dc_heros)

 console.log(marvel_heros);
 
 marvel_heros.concat(dc_heros)
 console.log(marvel_heros);//output=array within array
 //concat add the arrays

 const allhero=[...marvel_heros,...dc_heros]
 console.log(allhero);//output=same as concat



 Array.isArray("sharique");//false
 Array.from("SHarique")//form an array 

 let score1=100
 let score2=200
 let score3=300

 console.log(Array.of(score1,score2,score3));//of creates an angle
 
 
 


