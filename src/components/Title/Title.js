import useMediaQuery from "hooks/useMediaQuery";
import React from "react";

function Title({ title, className }) {
  const isBellow760px = useMediaQuery("(max-width : 760px)");

  return (
    <h1
      className={`text-yellow-gradient ${
        isBellow760px ? "fs-38px" : "fs-56px"
      }  weight-7  ${className}`}
    >
      {title}
    </h1>
  );
}

export default Title;
