import React from "react";
import { Grid, Box } from "@mui/material";
import BoxTypo from "./BoxTypo";
import styles from "../../custom.module.css"
import { TypesFormItem } from "@/app/types";

const TextAreaFormItem = ({
  title,
  placeholder,
  name,
  register,
  rule,
  requiredItemFlag,
}: TypesFormItem) => {
  return (
    <>
      <Grid container>
        <Box width="100%">
          <Grid item>
            <Box mb="8px" display="flex">
              <BoxTypo
                ff="Notosans"
                fs="P"
                fw="medium"
                lh="150%"
              >
                {title}
              </BoxTypo>
              <span
                style={
                  requiredItemFlag ? { color: "#FF3535", marginLeft: "0.25em" } : { display: "none" }
                }
              >
                *
              </span>
            </Box>
          </Grid>
          <Grid item>
            <textarea
              {...(requiredItemFlag
              ? register(`${name}`, {
                required: `「${title}」の項目が未入力です`,
                ...rule,
              })
              : register(`${name}`, {...rule}))}
              placeholder={placeholder}
              className={styles.textarea}
            />
          </Grid>
        </Box>
      </Grid>
    </>
  )
}

export default TextAreaFormItem;