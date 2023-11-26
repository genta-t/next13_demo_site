import { TypesNl2br } from "@/app/types";
import React from "react";

export const Nl2br:React.FC<TypesNl2br> = ({ text }) => {
  return (
    <>
      {text && text.split('\n').map((line, i) => (
        <React.Fragment key={i}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </>
  );
};