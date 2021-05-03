import React from "react";

const Instruction = () => {
  const style = {
    height: "82.5vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  };
  return (
    <div style={style}>
      <h2>Change url to view changes</h2>
      <p>-- (url)/1 to view first profile.</p>
      <p>-- (url)/2 to view second profile.</p>
      <p>-- Invalid url will take you to this same page.</p>
    </div>
  );
};

export default Instruction;
