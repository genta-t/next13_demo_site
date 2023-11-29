import React from "react";
import { Box, Grid, Button } from "@mui/material";
import Image from "next/image";
import BoxTypo from "./items/BoxTypo";
import Title from "./items/Title";
import HoverText from "./items/HoverText";

const Character = () => {
  const characters = [
    {
      name: "Character1",
      image: "character1",
    },
    {
      name: "Character2",
      image: "character2",
    },
    {
      name: "Character3",
      image: "character3",
    },
    {
      name: "Character4",
      image: "character4",
    },
    {
      name: "Character5",
      image: "character5",
    },
    {
      name: "Character6",
      image: "character6",
    },
  ]

  return (
    <>
      <Box width="90%" m="auto" maxWidth="1300px">
        <Box mb={{ xs: "72px", md: "96px" }}>
          <Title
            japanese="キャラクター"
            english="CHARACTER"
            textAlign="center"
          />
        </Box>
        <Grid container alignItems="center" spacing={10}> 
          {characters.map((c, i) => {
            return(
              <Grid item xs={12} md={6} lg={4} key={i}>
                <Box width={{ xs: "90%", md: "100%" }} maxWidth="600px" m="auto">
                  <Box width="100%">
                    <Image src={`/images/${c.image}.png`} layout="responsive" width={100} height={100} objectFit="cover" alt="" />
                  </Box>
                  <BoxTypo
                    ff="Inter"
                    fs="M"
                    fw="medium"
                  >
                    {c.name}
                  </BoxTypo>
                  <Box display="inline-block">
                    <HoverText
                      text={"more　→"}
                      ff="Inter"
                    />
                  </Box>
                </Box>
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </>
  );
};

export default Character;
