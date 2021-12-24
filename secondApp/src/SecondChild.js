export default (props) => {   
  const {ParentComponentName}=props;                         
    return <h2>2.Second Child
      <h4>SecondChild called from {ParentComponentName}</h4>
    </h2>;
     
  }; 