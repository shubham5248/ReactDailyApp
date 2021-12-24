// //-------Spread Operator-------//
// const myArr =[1,2,3,4,5,];
// const myArrrNew=[];//old way
// for (let i=0;i<myArr.length;i++){
//     myArrrNew.push(myArr[i]);
// }
// console.log(...myArr); //same as writing console.log(1,2,3,4,5);//new way
// console.log(myArr);
// myArr.push(6);
// console.log(myArr);
// console.log(myArrNew);


// const myObject={
//     name:"ankur",
//     age:29
// }
// const myNewObject={...myObject};
// console.log(myNewObject);


//-------Rest-------//

// function product(num1,num2){
//     return num1*num2;
// }
// console.log(product(5,5,5,5));  //if user gives more or less inputs than predefined in function then,
//                                 // it doesnt take it into consideration
//                                 // to solve this, Rest is used 

//  function product(...numbers){
//      let result=1;
//      for(let i=0;i<numbers.length;i++){
//          result=result*numbers[i];
//      }
//      return result;
//  }
//  console.log(product(5));                              

// function addNumbers(...args){
//     //const args=[10,20,30,40];//takes internally
//     let result=0;
//     for(let i=0;i<args.length;i++){
//         result+=args[i]; // same as result=result + args[i];
//     }
//     return result;
// }
// console.log(addNumbers(10,20,30,40));
