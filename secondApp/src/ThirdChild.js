export default (props) => {     
  const {ParentComponentName}=props;                       
    return <h2>3.Third Child
      <h4>ThirdChild called from {ParentComponentName}</h4>
    </h2>;
     
  }; 