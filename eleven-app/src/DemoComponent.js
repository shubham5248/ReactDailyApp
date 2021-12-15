import React from "react";

export default () => {
  // return <h1>In Demo Component</h1>
  // return React.createElement("h1", null, "In Demo Component"); //same as above using React.createElement
  //================================================================================================//
  //   return (
  //     <div>
  //       {" "}
  //       return <h1>In Demo Component</h1>
  //     </div>
  //   );
  //   return React.createElement(
  //     "div",
  //     null,
  //     React.createElement("h1", null, "In Demo Component")
  //   );
  //============================================================================================//
  // return (
  //   <div>
  //     <h1 style={{ backgroundColor: "orange" }}>In Demo Component</h1>
  //     <h2 style={{ backgroundColor: "green" }}>In Demo Component</h2>
  //   </div>
  // );
  //   return React.createElement(
  //     "div",
  //     { style: { backgroundColor: "orange" } },
  //     React.createElement("h1", null, "In Demo Component"),
  //     React.createElement(
  //       "h2",
  //       { style: { backgroundColor: "green" } },
  //       "In Demo Component"
  //     )
  //   ); //same as above
  //================================================================================//
  // return (
  //   <div>
  //     <h1 style={{ backgroundColor: "red" }}>Heading</h1>
  //     <h2 style={{ backgroundColor: "green" }}>Sub-Heading</h2>
  //     <div style={{ backgroundColor: "yellow" }}>
  //       <p style={{ color: "orange" }}>My First Paragraph</p>
  //       <p style={{ color: "blue" }}>My First Paragraph</p>
  //     </div>
  //   </div>
  // );
  return React.createElement(
    "div",
    null,
    React.createElement("h1", { style: { backgroundColor: "red" } }, "Heading"),
    React.createElement(
      "h2",
      { style: { backgroundColor: "green" } },
      "Sub-Heading"
    ),
    React.createElement(
      "div",
      { style: { backgroundColor: "yellow" } },
      React.createElement("p", { style: { color: "orange" } }, "My first para"),
      React.createElement("p", { style: { color: "blue" } }, "My second para")
    )
  );
};
