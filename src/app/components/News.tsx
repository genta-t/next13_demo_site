import React from "react";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import BoxTypo from "./items/BoxTypo";
import Title from "./items/Title";
import HoverText from "./items/HoverText";
import Link from "next/link";
import { news, newsArray } from "./items/data";

const News = () => {
  return (
    <>
      <Box width="90%" m="auto" maxWidth="1300px">
        <Box mb={{ xs: "72px", md: "96px" }}>
          <Title
            japanese="ニュース"
            english="NEWS"
            textAlign="center"
          />
        </Box>
        <Grid container alignItems="center" spacing={{ xs: 5, md: 10}}> 
          {/* {news.map((n, i) => {
            return(
              <Grid item xs={12} md={6} lg={4} key={i}>
                <Box width={{ xs: "90%", md: "100%" }} maxWidth="600px" m="auto">
                  <Link href={`/news/${n.id}/`}>
                    <Box
                      width='100%'
                      height={{ xs: "45vw", md: "25vw", lg: '15vw'}}
                      maxHeight={{ xs: "320px", md: "250px"}}
                      position='relative'
                      mb="8px"
                    >
                      {n.image ? (
                        <Image src={`/images/${n.image}.png`} layout="fill" objectFit="cover" alt="" />
                      ): (
                        <Image src={`/images/no_image.png`} layout="fill" objectFit="cover" alt="" />
                      )}
                    </Box>
                    <Box display="inline-block">
                      <BoxTypo
                        ff="Inter"
                        fs="P"
                        fw="medium"
                      >
                        {n.title}
                      </BoxTypo>
                      <HoverText
                        text={"more　→"}
                        ff="Inter"
                      />
                    </Box>
                  </Link>
                </Box>
              </Grid>
            )
          })} */}
          {newsArray.map((n, i) => {
            const getFirstImage = n.details.find(detail => detail.image);
            let firstImage = getFirstImage ? getFirstImage.image : 'no_image';

            return(
              <Grid item xs={12} md={6} lg={4} key={i}>
                <Box width={{ xs: "90%", md: "100%" }} maxWidth="600px" m="auto">
                  <Link href={`/news/${n.id}/`}>
                    <Box
                      width='100%'
                      height={{ xs: "45vw", md: "25vw", lg: '15vw'}}
                      maxHeight={{ xs: "320px", md: "250px"}}
                      position='relative'
                      mb="8px"
                    >
                      <Image src={`/images/${firstImage}.png`} layout="fill" objectFit="cover" alt="" />
                    </Box>
                    <Box display="inline-block">
                      <BoxTypo
                        ff="Inter"
                        fs="P"
                        fw="medium"
                      >
                        {n.title}
                      </BoxTypo>
                      <HoverText
                        text={"more　→"}
                        ff="Inter"
                      />
                    </Box>
                  </Link>
                </Box>
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </>
  );
};

export default News;
