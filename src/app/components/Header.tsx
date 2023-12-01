import React from "react"
import BoxTypo from "./items/BoxTypo"
import { Box, Grid } from "@mui/material"
import MenuBar from "./items/MenuBar"
import Link from "next/link"
import TopPageButton from "./items/TopPageButton"
import HoverText from "./items/HoverText"

const Header = () => {
  const menus = [
    {
      name: "ABOUT",
      pageLink: "#about",
    },
    {
      name: "WORK",
      pageLink: "#works",
    },
    {
      name: "MISSION",
      pageLink: "#mission",
    },
  ]

  return (
    <>
      <Box 
        width="100%"
        position="fixed"
        zIndex="10"
        top="0"
        left="0"
        right="0"
        bgcolor="#2E2E2E"
      >
        <Box
          width="90%"
          maxWidth="1300px"
          m="auto"
          py={{ xs: "16px", md: "8px" }}
        >
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs={2}>
              <TopPageButton />
            </Grid>
            <Grid item xs={10}>
              <Box
                display="flex"
                justifyContent="flex-end"
              >
                {menus.map((m, key) => {
                  return (
                    <Box ml="5vw" py="0.1em" key={key} display={{ xs: "none", md: "flex"}}>
                      <Link href={m.pageLink ? m.pageLink : ""} >
                        <Box display="inline-block">
                          <HoverText 
                            text={m.name}
                            ff="Inter"
                          />
                        </Box>
                      </Link>
                    </Box>
                  )
                })}
                <Box ml="4vw">
                  <MenuBar />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default Header
