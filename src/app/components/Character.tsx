import React, { useState } from "react";
import { Box, Grid, Drawer } from "@mui/material";
import Image from "next/image";
import BoxTypo from "./items/BoxTypo";
import Title from "./items/Title";
import HoverText from "./items/HoverText";
import { TypesCharacterDrawer } from "../types";

const Character = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState(0);

  const characters = [
    {
      name: "Character1",
      image: "character1",
      description: `テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
      テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
      
      テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト`
    },
    {
      name: "Character2",
      image: "character2",
      description: `テキストテキストテキストテキストテキストテキストテキストテキスト`
    },
    {
      name: "Character3",
      image: "character3",
      description: `テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
      テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト`
    },
    {
      name: "Character4",
      image: "character4",
      description: `テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト`
    },
    {
      name: "Character5",
      image: "character5",
      description: `テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
      
      テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト`
    },
    {
      name: "Character6",
      image: "character6",
      description: `テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
      
      テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
      テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト`
    },
  ]

  const CharacterDrawer = ({
    name,
    image,
    description
  }: TypesCharacterDrawer) => {
    return(
      <Box width={{ xs: "100vw", md: "80vw" }} height="100vh" maxWidth="900px">
        <Box width="90%" m="auto">
          <Box textAlign="right" mb={{ xs: "8px", md: "24px"}}>
            <button onClick={() => setIsOpen(c => !c)}>
              <Box
                fontSize="56px"
                color="#FFFFFF"
              >
                ×
              </Box>
            </button>
          </Box>
          <Box width="100%" maxWidth="400px">
            <Image src={`/images/${image}.png`} layout="responsive" width={100} height={100} alt="" />
          </Box>
          <Box mb={{ xs: "48px", md: "72px"}} />
          <BoxTypo
            ff="Inter"
            fs="L"
            fw="medium"
          >
            {name}
          </BoxTypo>
          <Box mb="24px" />
          <BoxTypo
            ff="Notosans"
            fs="S"
            >
            {description}
          </BoxTypo>
          <Box pb="80px" />
        </Box>
      </Box>
    )
  }

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
                    <Image src={`/images/${c.image}.png`} layout="responsive" width={100} height={100} alt="" />
                  </Box>
                  <BoxTypo
                    ff="Inter"
                    fs="M"
                    fw="medium"
                  >
                    {c.name}
                  </BoxTypo>
                  <button
                    key={i}
                    onClick={() => {setIsOpen(c => !c); setItem(i);}}
                  >
                    <Box display="inline-block">
                      <HoverText
                        text={"more　→"}
                        ff="Inter"
                      />
                    </Box>
                  </button>
                </Box>
              </Grid>
            )
          })}
        </Grid>
      </Box>
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        transitionDuration={400}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "rgba(46, 46, 46, 0.8)",
          },
        }}
      >
        <CharacterDrawer 
          name={characters[item].name}
          image={characters[item].image}
          description={characters[item].description}
        />
      </Drawer>
    </>
  );
};

export default Character;
