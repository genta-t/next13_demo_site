import React from "react";
import { Box } from "@mui/material";
import { TypesBoxTypo } from "../../types";
import { Inter, Noto_Sans_JP } from "next/font/google";
import { Nl2br } from "./utility";

const inter = Inter({ preload: true, subsets: ['latin'] });
const notoSansJP = Noto_Sans_JP({ preload: true, subsets: ['latin'] });

const BoxTypo = ({
  fs = null,
  lh = null,
  ls = null,
  color = null,
  fw = null,
  ff = null,
  children = null,
}: TypesBoxTypo) => {
  return (
    <Box
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
          : { xs: "14px", md: "18px" }
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
      letterSpacing={ls ? ls : "0.2rem"}
      color={
        color === "black"
          ? "#333333"
          : color === "white"
          ? "#ffffff"
          : "#ffffff"
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
        <Nl2br text={children}/>
      </p>
    </Box>
  );
};

export default BoxTypo;
