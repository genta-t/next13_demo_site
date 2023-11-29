import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { TypesFV } from "../types";

const FV = ({ src }: TypesFV ) => {
  return (
    <>
      <Box mt={{xs: "72px", md: "80px"}}>
        <Box style={{ width: '100%', height: '55vw', position: 'relative' }}>
          <Image src={`/images/${src}.png`} layout="fill" objectFit="cover" alt="" />
        </Box>
      </Box>
    </>
  );
};

export default FV;
