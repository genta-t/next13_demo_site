import Image from 'next/image'
import { Box, Grid } from '@mui/material';
import BoxTypo from './components/BoxTypo';

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
              <BoxTypo ff="Inter" fs="L" lh="150%" color="red">
                あENG11
              </BoxTypo>
              <BoxTypo ff="Notosans" fs="L" lh="150%" color="red">
                あENG11
              </BoxTypo>
              <BoxTypo ff="Notosans" fs="P" fw="medium" lh="150%" color="red">
                ああああああ
              </BoxTypo>
            </Grid>
          </Grid>
        </Box>
      </>  
    )
}

export default Home;