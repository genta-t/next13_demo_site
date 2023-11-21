import React from "react";
import { Box } from "@mui/material";
import { TypesTitle } from "../../types";
import BoxTypo from "./BoxTypo";

const Title = ({
  japanese = null,
  english = null,
  textAlign = null,
}: TypesTitle ) => {
  
  return (
    <Box sx={{ textAlign: textAlign }}>
      <BoxTypo
        ff="Notosans"
        fs="P"
        lh="150%"
        >
        {japanese}
      </BoxTypo>
      <BoxTypo
        ff="Inter"
        fs="LM"
        lh="150%"
        fw="medium"
      >
        {english}
      </BoxTypo>
    </Box>
  );
};

export default Title;
