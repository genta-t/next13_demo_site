import React from "react"
import BoxTypo from "./BoxTypo"
import { Box } from "@mui/material"
import Link from "next/link";

const TopPageButton = () => {
  return (
    <Link href="/">
      <Box display="inline-block">
        <BoxTypo
          ff="Inter"
          fs="M"
          fw="medium"
          >
          DEMO
        </BoxTypo>
      </Box>
    </Link>
  );
};

export default TopPageButton;