import React from "react";

const Instruction = () => {
  const style = {
    height:"82vh",
    border:"1px solid black",
    display: "flex",
    flexDirection: "column",
    justifyContent:"center",
    textAlign:"center",
  };
  return (
    <div style={style}>
      <h2>Change url to view changes</h2>
      <p>(url)/1 to view first profile</p>
      <p>(url)/1 to view second profile</p>
    </div>
  );
};

export default Instruction;
