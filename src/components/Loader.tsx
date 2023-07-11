import{Box,Typography} from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
export const Loader = () => {
  return (
     <Box sx={{width:'100%', height:'100vh', display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center'}}>
         <CircularProgress />
         <Typography variant='h6'>Loading...</Typography>
     </Box>
  )
}
