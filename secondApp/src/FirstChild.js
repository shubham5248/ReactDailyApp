export default (props) => {     
  const {ParentComponentName}=props;                       
    return <h2>1.First Child
     <h4>firstChild called from {ParentComponentName}</h4>
     </h2>;
  }; 

//   function FirstChild() {
//     return <h2>1.First Child</h2>
//   };
//   export default FirstChild;          //old way to declare