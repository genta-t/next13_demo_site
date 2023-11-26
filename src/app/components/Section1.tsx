import React from "react";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import BoxTypo from "./items/BoxTypo";
import GradationButton from "./items/GradationButton";

const Section1 = () => {
  const title = `TextText a
  Test_test_test
  DEMO`
  const description =`テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト`
  
  return (
    <>
      <Box width="90%" m="auto" maxWidth="1300px">
        <Grid container alignItems="center" spacing={4}>
          <Grid item xs={12} md={6}>
            <Box width="100%">
              <Image src="/images/image1.png" layout="responsive" width={100} height={100} objectFit="cover" alt="" />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box position={{ xs: "static", md: "relative"}}>
              <Box 
                position={{ xs: "static", md: "absolute"}}
                bottom={{ xs: "0", md: "3vw"}}
                left={{ xs: "0", md: "-80px"}}
                mb={{ xs: "24px", md: "0" }}
              >
                <BoxTypo
                  ff="Inter"
                  fs="L"
                  lh="130%"
                  fw="medium"
                >
                  {title}
                </BoxTypo>
              </Box>
              <Box 
                position={{ xs: "static", md: "absolute"}}
                top={{ xs: "0", md: "1vw"}}
              >
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
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Section1;
