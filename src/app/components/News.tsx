import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import BoxTypo from "./items/BoxTypo";
import Title from "./items/Title";
import HoverText from "./items/HoverText";
import Link from "next/link";
import { getNewsList } from "../api/microCMSApi";
import { TypesNewsMicroCMS } from "../types";

const News = () => {
  const [contents, setContents] = useState<TypesNewsMicroCMS[] | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      const result = await getNewsList({ limit: 10 });
      setContents(result);
    };

    fetchNews();
  }, []);

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
        {(!contents || contents.length === 0) ? (
          <BoxTypo ff="Inter" fs="S" fw="Bold">
            No contents
          </BoxTypo>
        ) : (
          <></>
        )}
        <Grid container alignItems="center" spacing={{ xs: 5, md: 8 }}> 
          {contents && contents.map((n) => {
            return(
              <Grid item xs={12} md={6} lg={4} key={n.id}>
                <Box width={{ xs: "90%", md: "100%" }} maxWidth="600px" m="auto">
                  <Link href={`/news/${n.id}/`}>
                    <Box
                      width='100%'
                      height={{ xs: "45vw", md: "25vw", lg: '15vw'}}
                      maxHeight={{ xs: "320px", md: "250px"}}
                      position='relative'
                      mb="8px"
                    >
                      {n.image?.url ? (
                        <Image src={`${n.image.url}`} layout="fill" objectFit="cover" alt="" />
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
          })}
          {/* {newsArray.map((n, i) => {
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
          })} */}
        </Grid>
      </Box>
    </>
  );
};

export default News;
