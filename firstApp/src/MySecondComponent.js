//normal declation for function
// function MySecondComponent() {
//     return <h2>I am inside MySecondComponent</h2>;
//   }
//   export default MySecondComponent;


    //efficient way to declare function with export as well(arrow function type declaration)
    
    function MySecondComponent(props) {
      // console.log(props.name); 
      // console.log(props.age);
      const{name, age, children, job}=props;  //passing props here (by using object Destructuring)
      return(
          <>
       <h2>Hi My name is {name}, I am {age} yrs old And I'm {job} </h2>
         {children}  
         </>  
      );
    };
    export default MySecondComponent;                          