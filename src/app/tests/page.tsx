'use client'
import { Box } from '@mui/material';
import Title from '../components/items/Title';
import CustomButton from '../components/items/CustomButton';
import FV from '../components/FV';
import Header from '../components/Header';
import SectionMb from '../components/items/SectionMb';

const Tests = () => {
  return (
      <>
        <Header />
        <FV src='fv-test' />
        <SectionMb />
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
        <SectionMb />
      </>  
    )
}

export default Tests;