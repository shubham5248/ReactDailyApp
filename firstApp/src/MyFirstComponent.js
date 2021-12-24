function MyFirstComponent(props) {
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
export default MyFirstComponent;
