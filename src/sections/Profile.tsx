
import {Container,Typography,Box,Grid,useTheme} from '@mui/material'


import TimeLineActivites from '../components/TimeLine'
import ConnectionsCards from '../components/ConnectionsCards'
import TeamsCard from '../components/TeamsCard'
import DataTable from '../components/Table'
import TimelineIcon from '@mui/icons-material/Timeline';
import {useSelector} from 'react-redux'
import type { RootState } from '../Store/Store';
export const Profile = () => {
   const{profile}= useSelector((state:RootState)=>state.task)
  const theme = useTheme()
  return (
    <Grid container spacing={2} sx={{padding:3, background:'#F4F5FA', justifyContent:'center'}} >
    <Grid item xs={12} sm={12} md={4} justifyContent="center">
          {profile.map(sectionData=>(
            <Box  key={sectionData.section} sx={sectionData.section === 'overview' ?{width:450,marginTop:5, background:'white', height:'450',padding:2, boxShadow:2} : {width:450, background:'white', height:'450',padding:2, boxShadow:2}}>
            <Typography variant='h6' sx={{textTransform:'capitalize'}} color="text.secondary">{sectionData.section}</Typography>
            <ul style={{listStyle:'none'}}>
              {sectionData.items.map(item=>(
                   <li key={item.title} style={{fontWeight:'600', fontSize:20,color:'#3a3541',marginBottom:5, display:'flex',gap:8,alignItems:'center'}}>
                   {item.icon && <item.icon sx={{color:'#757575',fontSize:28}} />  }
                   <div style={{color:'#757575', fontSize:22}}>
                   {item.title}:<span style={{fontWeight:'200', fontSize:24}}> {item?.data} </span>
                   </div>
                   </li>
              ))}
            </ul>
            </Box>
          ))}
    </Grid>
    <Grid item xs={12} sm={12} md={8} lg={8} sx={{width:'100%'}}>
      <Box sx={{width:'100%', height:'fit-content', background:'white'}}>
        <Typography variant='h5' sx={{padding:2, display:'flex', alignItems:'center',gap:3}}>
          <TimelineIcon sx={{fontSize:30}} />
          <span>Activity Timeline</span>
          </Typography>
         <TimeLineActivites />
      </Box>
      <Container maxWidth='xl' sx={{ 
         display: 'flex',
         flexDirection: 'column',
         marginTop: 3,
         padding: 2,
         gap:2,
         [theme.breakpoints.up('xs')]: {
           flexDirection: 'column',
           gap:2
         },
         [theme.breakpoints.up('sm')]: {
           flexDirection: 'column',
           gap:2
         },
         [theme.breakpoints.up('md')]: {
           flexDirection: 'row',
           justifyContent: 'space-between',
         },
         [theme.breakpoints.up('lg')]: {
           flexDirection: 'row',
           justifyContent: 'space-between',
         },
         [theme.breakpoints.up('xl')]: {
           flexDirection: 'row',
           justifyContent: 'space-between',
         },
        }}>
            <Box>
                  <ConnectionsCards />
            </Box>
            <Box>
                  <TeamsCard />
            </Box>
      </Container>
      <Container maxWidth='xl' sx={{background:'white', marginTop:7}}>
          <DataTable />
      </Container>
    </Grid>
   </Grid>
  )
}
