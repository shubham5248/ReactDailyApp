export default (UserId)=>{

//     let status= "online";
//  // code to fetch the user status from server (API call)
//     if(UserId%2===0){
//         status="online";
//     }else{
//         status="offline";
//     } return status;

return UserId %2 ? "offline" : "online";
}