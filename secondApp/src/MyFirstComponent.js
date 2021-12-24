import FirstChild from "./FirstChild";
import SecondChild from "./SecondChild";
import ThirdChild from "./ThirdChild";


export default (props) => {
     const{ParentComponentName}=props;
    return( 
    <>
    <h2>++====First Component====++
      <h4>First Component called from {ParentComponentName}</h4>
    </h2>
    <FirstChild ParentComponentName={"FirstComponent"}/>
    <SecondChild ParentComponentName={"FirstComponent"}/>
    <ThirdChild ParentComponentName={"FirstComponent"}/>
    </>
    );
  };     

  // function MyFirstComponent() {
  //   return(
  //     <>
  //     <h2>===FirstComponent===</h2>
  //   <FirstChild />
  //   <SecondChild />
  //   <ThirdChild />
  //   </>
  //   );
  // };
  // export default MyFirstComponent;  //old way to declare(function way)