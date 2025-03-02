import { Box, Button, Stack, Typography } from '@mui/material'
import Databiz from '../assets/images/client-databiz.svg';
import Audiophile from '../assets/images/client-audiophile.svg';
import Meet from '../assets/images/client-meet.svg';
import Marker from '../assets/images/client-maker.svg';
import Desktop from '../assets/images/image-hero-desktop.png'
import Mobile from '../assets/images/image-hero-mobile.png'
import Grid from '@mui/material/Grid2'
export default function Home() {
  return (
    <Stack sx={{padding:{xs:'0',  lg:'5em 7em 0  7em' } ,marginLeft:{lg: '2em'}  }}>
       <Grid container direction={{xs:'column', lg:'row-reverse' }}>
            <Grid   id='order1'    size={{xs: 12,lg:6}}>
            <Stack maxWidth={{xs: '100%',lg: '70%' }} >
           <img src={Mobile} id='mobile' alt='M'/>
           <img src={Desktop} id='desk'  alt='D'/>
        </Stack>
            </Grid> 
            <Grid p={2}   id='order1'  size={{xs: 12,lg:6}} >
            <Stack>
           <Typography component='h1' >Make remote work</Typography>
           <Typography component='p'>Get your team in sync, no matter your location. Streamline processes, 
           create team rituals, and watch productivity soar.</Typography>
           <Button >Learn More</Button>
        <Box sx={{display: 'flex'}}> 
           <Box>
              <img src={Databiz} alt='' />
           </Box>
           <Box>
              <img src={Audiophile} alt='' />
           </Box>
           <Box>
              <img src={Meet} alt='' />
           </Box>
           <Box>
              <img src={Marker} alt='' />
           </Box>
        </Box>
        </Stack>
            </Grid> 
        </Grid>     
        
        
    </Stack>
  )
}
