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
    <Stack sx={{padding:{xs:'0',  lg:'2em 4em 5em  7em' } ,marginLeft:{lg: '2em'}  }}>
       <Grid container direction={{xs:'column', lg:'row-reverse' }}>
            <Grid   id='order1'  sx={{position: 'relative', top: '2.9em'}}  size={{xs: 12,lg:6}}>
            <Stack maxWidth={{xs: '100%',lg: '70%' }} >
           <img src={Mobile} id='mobile' alt='M'/>
           <img src={Desktop} id='desk'  alt='D'/>
        </Stack>
            </Grid> 
            <Grid p={'0 1em'} mt={3}  id='order2'  size={{xs: 12,lg:6}} >
            <Stack id='info' textAlign={{xs:  'center', lg: 'left'}}>
           <Typography component='h1' sx={{margin: '2em 0 0 0'}} fontWeight={'bold'} fontSize={{xs: '2.2em', md: '2.7em', lg:'4em'}} >Make  <br/> remote work</Typography>
           <Typography component='p' sx={{margin: '1em 0'}} >Get your team in sync, no matter your location. Streamline processes, 
           create team rituals, and watch productivity soar.</Typography>
           <Box m={'.5em 0'}>
              <Button id='black-btn'>Learn More</Button>
           </Box>
        <Box sx={{display: 'flex', margin: {
         xs: '.4em 0',
         lg: '0'
        },position: 'relative', top: {
         xs:'1em',
         md: '0'
        }, justifyContent: {
         xs: 'center',
         md: 'flex-start'
        }}} className='row' > 
           <Box className='row-item'  >
              <img src={Databiz} alt='' />
           </Box>
           <Box className='row-item' >
              <img src={Audiophile} alt='' />
           </Box>
           <Box className='row-item' >
              <img src={Meet} alt='' />
           </Box>
           <Box className='row-item' >
              <img src={Marker} alt='' />
           </Box>
        </Box>
        </Stack>
            </Grid> 
        </Grid>     
        
        
    </Stack>
  )
}
