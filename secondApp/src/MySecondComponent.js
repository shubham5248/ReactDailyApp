import FirstChild from "./FirstChild";
import SecondChild from "./SecondChild";
import ThirdChild from "./ThirdChild";

export default (props) => {     
     const{ParentComponentName}=props;                       
    return( 
      <>
    <h2>++====Second Component====++
    <h4>Second Component called from {ParentComponentName}</h4>
    </h2>
    <FirstChild ParentComponentName={"SecondComponent"}/>
    <SecondChild ParentComponentName={"SecondComponent"}/>
    <ThirdChild ParentComponentName={"SecondComponent"}/>
    </>
    );
  };     