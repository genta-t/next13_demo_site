import React, { useState } from "react"
import BoxTypo from "./BoxTypo"
import { Box, Button, Grid } from "@mui/material"
import TopPageButton from "./TopPageButton"
import { TypesMenuBarButton } from "@/app/types"
import Link from "next/link"

const MenuBar = () => {
  const menus = [
    {
      name: 'ABOUT',
      pageLink: '#about',
    },
    {
      name: 'CURRICULUM',
      pageLink: '#curriculum',
    },
    {
      name: 'PRICE',
      pageLink: '#price',
    },
    {
      name: 'PARTNER',
      pageLink: '#partner',
    },
    {
      name: 'NEWS',
      pageLink: '#news',
    },
  ]

  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Box style={isOpen == true ? { display: "none" } : { display: "block" }}>
        <MenuBarButton text={"MENU"} onClick={() => setOpen(!isOpen)}/>
      </Box>
      <Box
        height="100vh"
        width="100vw"
        bgcolor="#2E2E2E"
        style={
          isOpen == true
            ? { position: "fixed", top: "0", left: "0", right: "0", zIndex: "100" }
            : { display: "none" }
        }
      >
        <Box
          width="100%"
          height="100%"
          m="auto"
          style={{
            position: "fixed",
            top: "0",
            right: "0",
            left: "0",
            zIndex: "100",
          }}
        >
          <Box style={{ boxShadow: "0 0 16px rgba(255, 255, 255, 0.2)" }}>  
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
                  <Button onClick={() => setOpen(!isOpen)} style={{ padding: "0", margin: "0", minWidth: "0" }}>
                    <TopPageButton/>
                  </Button>
                  
                </Grid>
                <Grid item xs={10}>
                <Box
                  display="flex"
                  justifyContent="flex-end"
                >
                  <MenuBarButton text={"BACK"} onClick={() => setOpen(!isOpen)}/>
                </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Grid 
            container 
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            height="75%"
          >
            <Grid
              container
              direction="column"
              justifyContent="space-between"
              alignItems={{ xs: "start", sm: "center" }}
              height="80%"
              width="90%"
              maxWidth="650px"
              margin="auto auto 0 auto"
            >
              {menus.map((m, key) => {
                return(
                    <Grid item key={key}>
                      <Button onClick={() => setOpen(!isOpen)}>
                        <Link href={m.pageLink}>
                          <Box display="inline-block">
                            <BoxTypo
                              ff="Inter"
                              fs="P"
                              ls="0.1rem"
                            >
                              {m.name}
                            </BoxTypo>
                          </Box>
                        </Link>
                      </Button>
                    </Grid>
                  )
                })}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default MenuBar;

const MenuBarButton = ({text, onClick}: TypesMenuBarButton) => {
  return (
    <>
      <Button onClick={onClick} style={{ padding: "0", margin: "0", minWidth: "0" }}>
        <Box
          style={{ 
            background: "linear-gradient(90deg, #B392F8 0%, #F1A0C4 33.33%, #F2AB43 66.67%, #A8EF4D 100%)",
            padding: "1px",
            borderRadius: "1.2em",
          }}
          display="inline-block"
        >
          <Box
            style={{ 
              borderRadius: "1.2em",
              background: "#2E2E2E",
            }}
            p="0.3em 1.2em 0.3em 1.5em"
          >
            <BoxTypo
              ff="NotoSans"
              fs="S"
              fw="700"
              lh="150%"
            >
              {text}
            </BoxTypo>
          </Box>
        </Box>
      </Button>
    </>
  )
}