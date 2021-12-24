// console.log("how are you")

// TYPES OF VARIABLES
//1.Var
    //var a=10;
    // console.log(a);
    // var a=10;
    // console.log(a)
    
    //2.let
    // console.log(b);
    // let b=20;

    //3.const
    // const a;
    // a=25;
    // console.log(a);  //not allowed you must initialize const at time of declaration

    // const myArr={name:"aniket",
    //              age:23
    // };
    // console.log(myArr);
    // myArr.name="sanket";
    // myArr.age=22;
    // console.log(myArr);

    // myArr={name:"virat"};
    // console.log(myArr);//error


   
    // let mystr1="10";
    // let mystr2=10;

    // if(mystr1===mystr2){
    //     console.log("matched");
    // }else{
    //     console.log("not matched");
    // }  //== only cheks values and ===checks values along with their datatypes

     //String
    //  let mystr1="abcd@xyz.com";
    //  let mystr2="Abcd@xyz.com";
    //  console.log(mystr1.toUpperCase===mystr2.toUpperCase)


    // let mystr="abcdafgdbjcj";
        //Q.WAP to find repeated values from string
    // let strArray = [ "a", "b", "c", "d", "a", "f", "g", "d","b","j","c","j"];
    // let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)

    // console.log(findDuplicates(strArray)) // All duplicates
// console.log([...new Set(findDuplicates(strArray))]) // Unique duplicates

// let input="abcdafgdbjcj";
// let output="";
// for(let i=0;i<input.length;i++){
//     let count=0;
//     for(let j=0;j<input.length;j++){
//         if(input[i]===input[j] && i<=j){
//             count++;
//             if(count>1){
//                 output=output+ input[i];
//                 break;
//             }
//         }
//     }
// }
// console.log(output); //abcdj

//Array

//  let myarr=[1,2,3,4,5];
//  let myarr1=[1,2,3,4,5];
// //console.log(myarr===myarr1);//false

// let isSame=true;
// for(i=0;i<myarr.length;i++){
//     if(myarr[i]!==myarr1[i]){
//       isSame=false;
//       break;
//     }
// }
// console.log(isSame);//true


 let myarr=[1,2,3,4,5,[1,2,3,4]];
 let myarr1=[1,2,3,4,5,[1,2,3,4]];

// //console.log(myarr===myarr1);//false
// let isSame=true;
//  for(i=0;i<myarr.length;i++){
//     if(myarr[i]!==myarr1[i]){
//       isSame=false;
//       break;    
//      }
// }
//  console.log(isSame);//true

//Q.2 WAP to reverse letters in string
// input="india is my country"   //output="aidni si ym yrtnuoc"
// output="";

// function reverseString(value){
//     let returnValue="";
//     for(let i=value.length-1;i>-1;i--){
//         returnValue=returnValue + value[i];
//     }
//     return returnValue;
// }

// let wordString="";
// for(let i=0;i<input.length;i++){
//     if(input[i]===" "){
//         output=output+ reverseString(wordString)+ " ";
//         console.log(wordString);
//         wordString="";
//         continue;
//     }else{
//         wordString=wordString+input[i];
//         if(i+1 ===input.length){
//             output=output+ reverseString(wordString);
//             console.log(wordString);  
//             wordString="";
//         }  
//     }
// }
// console.log(output);

