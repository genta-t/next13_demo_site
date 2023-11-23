'use client'
import Image from 'next/image';
import { Box, Grid } from '@mui/material';
import Title from './components/items/Title';
import CustomButton from './components/items/CustomButton';
import FV from './components/FV';
import Header from './components/Header';

const Home = () => {
  return (
      <>
        <Header />
        <FV src='fv'/>
        <Box width="90%" m="auto" maxWidth="1200px">
          <Title
            japanese={"てきすとああああああああああああああああああああああああああああああああ"}
            english={"TEXT"}
            textAlign={"center"}
          />
          <CustomButton
            text={"テストページ"}
            href={"/tests"}
            isTarget={false}
          />
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <Box style={{ width: '100%', height: '600px', position: 'relative' }}>
                <Image src="/images/author.jpg" layout="fill" objectFit="cover" alt="" />
              </Box>
            </Grid>
            <Grid item xs={6}>
            </Grid>
          </Grid>
        </Box>
      </>  
    )
}

export default Home;

