import reactDom from "react-dom";
export default ()=>{
    return reactDom.createPortal(
        <h1>In PortalDemo</h1>, document.getElementById("root-portal")
    )
}