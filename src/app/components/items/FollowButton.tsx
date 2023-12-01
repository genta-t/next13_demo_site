import React from "react";
import { Box } from "@mui/material";
import { TypesFollowButton } from "../../types";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Link as Scroll } from 'react-scroll';

const FollowButton = ({ to } : TypesFollowButton ) => {
  return (
    <>
      <Box 
        width="100%"
        position="fixed"
        zIndex="5"
        bottom="16px"
        left="0"
        right="0"
      >
        <Box width="90%" maxWidth="1500px" mx="auto">
          <Box display="flex" justifyContent="end">
            <Scroll to={to} smooth={true} duration={500} offset={-120}>
              <Box
                bgcolor="#2E2E2E"
                display="inline-block"
                borderRadius="100%"
                boxShadow="0 0 20px 0 rgba(255, 255, 255, 0.40)"
                sx={{ cursor: "pointer" }}
              >
                <ExpandLessIcon
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "60px"
                  }}
                />
              </Box>
            </Scroll>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FollowButton;
