// //Normal Function
// function addNumbers(number1, number2){
//    return number1+number2;
// }
// console.log(addNumbers(10,20));// returns value
// console.log(addNumbers); //returns expression


// //Eg-2 function productNum(num1,num2,num3){
//   return num1*num2*num3;
// }
// console.log(productNum);//returns expression
// console.log(productNum(2,3,4));// returns value

// //Function Expression
// const addNumbers2= function (number1, number2){
//     return number1+number2;
// }
// console.log(addNumbers2(20,30));// returns value
// console.log(addNumbers2);//returns expression

////Eg-2 const productNum=function(num1,num2,num3){
//   return num1*num2*num3;
// }
// console.log(productNum(2,3,5));


// //Arrow Function
// const addNumbers3=  (number1, number2) =>{
//     return number1+number2;
// }
// console.log(addNumbers(30,40));// returns value
// console.log(addNumbers3);//returns expression

// //Eg-2  const productNum=(num1,num2,num3)=>{
//   return num1*num2*num3;
// }
// console.log(productNum(2,3,6));


//-------this-------//
 
// const myObject={
//     //1000
//     name:"aniket",
//     getName: function(){
//         return this.name;
//     },
// };
// const myNewObject={
//     //2000
//     name:"shubham",
// };
// //myObject.getName-->1000
// //newGetName-->2000
// const newGetName=myObject.getName.bind(myNewObject);
// console.log(myObject.getName()); //-->aniket
// console.log(newGetName()); //-->shubham

// //-------Constructor function-------//

// function Person(name,age){
//     //check if called with new keyword
//     if (!new.target){
//         return new Person(name,age);
//     }
//     //this={} //added internally
//     this.name=name;
//     //this.number=1234;
//     this.age=age;
//     //return{name}; //return{name:name}
//     //return 1234;//not allowed;
//     //return[1, 2, 3 ,4];//allowed
//     //return this;//added internally
// }
// const personObject= new Person("aniket",24);
// const personObject1=Person("aniket",24);
// console.log(personObject);
// console.log(personObject1);

//--------array Destructuring--------//
//Eg-1
// const myArr=[1,2,3,4,5];
// const a= myArr[0];
// const b= myArr[1];
// const c= myArr[2];
// const d= myArr[3];
// console.log(a,b,c,d); //sequence is very imp
//or
// const[a,b,c,d]=myArr;
// console.log(a,b,c,d);

//Eg-2
// const myarr2=["aniket",23,"JSD","magarpatta","pentagon"]
// const a=myarr2[0];
// const b=myarr2[1];
// const c=myarr2[2];
// const d=myarr2[3];
// const e=myarr2[4];
// console.log(a,b,c,d,e);

// const[a,b,c,d,e]=myarr2;
// console.log(a,b,c,d,e);

//--------object Destructuring--------//
//Eg-1
const myObject = {
    name: "Ankur",
    age: 29,
    dept:"QA",
    qualification:"BE-CS",
  };
  // const name = myObject.name;
  // const age = myObject.age;
  // const dept=myObject.dept;
  // const qualification=myObject.qualification;
  const {name,age, dept, qualification } = myObject; //sequence is not important
  console.log(name,age, qualification, dept);

//Eg-2
// const myOject1={
//   model:"Bullet 350",
//   brand:"royal enfield",
//   price:185000,
//   mileage:"35 kmpl"
// };
// // const model=myOject1.model;
// // const brand=myOject1.brand;
// // const price=myOject1.price;
// // const mileage=myOject1.mileage;
// const{model, brand, price, mileage}=myOject1;
// console.log(model, brand, price, mileage);
