import Image from 'next/image'
import { Box, Grid } from '@mui/material';
import BoxTypo from './components/items/BoxTypo';
import Title from './components/items/Title';

const Home = () => {
  return (
      <>
        <Box  bgcolor="red"width="90%" m="auto" maxWidth="1200px">
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <Box style={{ width: '100%', height: '600px', position: 'relative' }}>
                <Image src="/images/author.jpg" layout="fill" objectFit="cover" alt="" />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Title
                japanese={"てきすとああああああああああああああああああああああああああああああああ"}
                english={"TEXT"}
                textAlign={"center"}
              />
            </Grid>
          </Grid>
        </Box>
      </>  
    )
}

export default Home;