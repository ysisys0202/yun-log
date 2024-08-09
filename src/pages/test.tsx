import React, { useEffect } from "react";

const test = () => {
  const flag = true;
  if (flag) {
    return null;
  }
  useEffect(() => {
    console.log("aa");
  });
  return <div>test</div>;
};

export default test;
