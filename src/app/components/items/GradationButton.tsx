import React from "react"
import { Box } from "@mui/material"
import { TypesGradationButton } from "@/app/types"
import Link from "next/link"
import styles from "../../custom.module.css"
import { Inter } from "next/font/google"


const inter = Inter({ preload: true, subsets: ['latin'] });

const GradationButton = ({
  text,
  href = null,
  isTarget = true,
}: TypesGradationButton) => {
  return (
    <>
      <Link 
        href={href ? href : ""}
        passHref
        target={isTarget ? "_blank" : ""}
        rel={isTarget ? "noopener noreferrer" : ""}
      >
        <Box
          style={{ 
            background: "linear-gradient(90deg, #B392F8 0%, #F1A0C4 33.33%, #F2AB43 66.67%, #A8EF4D 100%)",
            padding: "1px",
            borderRadius: "1.3em",
          }}
          display="inline-block"
        >
          <Box
            className={styles.gradationButton}
            fontSize={{ xs: "14px", md: "18px" }}
            letterSpacing="0.2rem"
          >
            <p style={{ fontFamily: inter.style.fontFamily }}>
              {text}
            </p>
          </Box>
        </Box>
      </Link>
    </>
  )
}

export default GradationButton;