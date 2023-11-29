import React from "react"
import { Box } from "@mui/material"
import { TypesHoverText } from "@/app/types"
import Link from "next/link"
import { Inter, Noto_Sans_JP } from "next/font/google"


const inter = Inter({ preload: true, subsets: ['latin'] });
const notoSansJP = Noto_Sans_JP({ preload: true, subsets: ['latin'] });

const HoverText = ({
  text,
  fs = null,
  fw = null,
  ff = null,
  lh = null,
} : TypesHoverText) => {
  return (
    <>
        <Box
          letterSpacing="0.1rem"
          sx={{
            color: "#FFFFFF",
            transition: "text-shadow 0.4s, color 0.4s",
            '&:hover': { 
              textShadow: "0 0 4px #FFFFFF",
            }
          }}
          fontSize={
            fs === "LM"
              ? { xs: "36px", md: "96px" }
              : fs === "L"
              ? { xs: "24px", md: "48px" }
              : fs === "M"
              ? { xs: "20px", md: "32px" }
              : fs === "P"
              ? { xs: "14px", md: "18px" }
              : fs === "S"
              ? { xs: "12px", md: "14px" }
              : { xs: "12px", md: "14px" }
          }
          fontWeight={
            fw === "Bold"
              ? "Bold"
              : fw === "normal"
              ? "normal"
              : fw === "medium"
              ? "medium"
              : "normal"
          }
          lineHeight={
            lh === "130%"
              ? "130%"
              : lh === "150%"
              ? "150%"
              : lh === "200%"
              ? "200%"
              : lh === "250%"
              ? "250%"
              : "200%"
          }
        >
          <p 
            style={{
            fontFamily: 
              ff === "Notosans" 
              ? notoSansJP.style.fontFamily
              : ff === "Inter"
              ? inter.style.fontFamily
              : "Inter, NotoSansJP, sans-serif",
            }}
          >
            {text}
          </p>
        </Box>
    </>
  )
}

export default HoverText;