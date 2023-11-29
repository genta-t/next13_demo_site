import React from "react";
import { Box, Grid, Button } from "@mui/material";
import Image from "next/image";
import BoxTypo from "./items/BoxTypo";
import GradationButton from "./items/GradationButton";

const Section2 = () => {
  const title = `セクション2
  セクション2セクション2`
  const description =`テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト`

  return (
    <>
      <Box width={{ xs: "90%", md: "100%" }} m={{ xs: "auto", md: "0" }}>
        <Grid container alignItems="center" spacing={6}>
          <Grid item xs={12} md={5}>
            <Box style={{ width: '100%', height: '460px', position: 'relative' }}>
              <Image src="/images/section2.png" layout="fill" objectFit="cover" alt="" />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box width={{ xs: "100%", md: "90%"}} maxWidth="680px">
              <Box mb={{ xs: "24px", md: "24px" }}>
                <BoxTypo
                  ff="Notosans"
                  fs="M"
                  lh="150%"
                >
                  {title}
                </BoxTypo>
              </Box>
              <Box mb={{ xs: "40px", md: "48px"}} textAlign="justify">
                <BoxTypo
                  ff="Notosans"
                  fs="S"
                  >
                  {description}
                </BoxTypo>
              </Box>
              <GradationButton 
                text={"Link"}
                href="/tests"
                isTarget={false}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Section2;
