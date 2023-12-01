import React from "react";
import { Box, Button } from "@mui/material";
import BoxTypo from "./BoxTypo";
import { TypesFormButton } from "@/app/types";

const FormButton = ({ name }: TypesFormButton) => {
  return (
    <Button
      type="submit"
      style={{
        borderRadius: "20px",
        border: "1px solid #333333",
        backgroundColor: "#201F62",
      }}
    >
      <Box p="0.75em 1.25em">
        <BoxTypo 
          ff="Notosans"
          fs="S"
          fw="medium"
          lh="150%"
          color="white"
        >
          {name}
        </BoxTypo>
      </Box>
    </Button>
  );
};

export default FormButton;
