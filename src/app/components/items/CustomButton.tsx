import React from "react";
import { Box } from "@mui/material";
import BoxTypo from "./BoxTypo";
import Link from "next/link";
import { TypesCustomButton } from "../../types";

const CustomButton = ({
  text = null,
  href = null,
  isTarget = true,
  bgcolor = null,
  borderColor = null,
}: TypesCustomButton ) => {
  return (
    <Link 
      href={href ? href : ""}
      passHref
      target={isTarget ? "_blank" : ""}
      rel={isTarget ? "noopener noreferrer" : ""}
    >
      <Box
        bgcolor={bgcolor ? bgcolor : "#F7F7F7"}
        display="inline-block"
        p="0.8em 2em"
        border={borderColor ? `1px solid ${borderColor}` : "1px solid #F7F7F7"}
        borderRadius="8px"
      >
        <BoxTypo
          ff="Inter"
          fs="S"
          color="black"
          >
          {text}
        </BoxTypo>
      </Box>
    </Link>
  );
};

export default CustomButton;
