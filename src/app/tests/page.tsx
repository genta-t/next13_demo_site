
import { Box } from '@mui/material';
import Title from '../components/items/Title';
import CustomButton from '../components/items/CustomButton';

const Tests = () => {
  return (
      <>
        <Box width="90%" m="auto" maxWidth="1200px">
          <Title
            japanese={"テストページ"}
            english={"TESTPAGE"}
            textAlign={"left"}
          />
          <CustomButton
            text={"ホーム"}
            href={"/"}
            isTarget={false}
          />
        </Box>
      </>  
    )
}

export default Tests;