import{useEffect, useState} from 'react'
import {CssBaseline,Container,Typography,Box} from '@mui/material'
import Navbar from './components/AppBar'
import { ProfileCard } from './components/Banner'

import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import AppsIcon from '@mui/icons-material/Apps'
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import { Profile } from './sections/Profile';
import Team from './sections/Team';
import { Connections } from './sections/Connections';
import { Projects } from './sections/Projects';
import ScrollToTopButton from './components/ScrollToTopButton';
import { useDispatch,useSelector } from 'react-redux';
import { startLoading, stopLoading } from './Store/TaskSlice';
import type { RootState } from './Store/Store';
import { Loader } from './components/Loader';

const tabs = ['Profile', 'Projects','Teams','Connections']
const App = () => {
const{isLoading} = useSelector((state:RootState)=>state.task)
  const dispatch = useDispatch();
  const[active,setActive]=useState('Profile')
  const handleActive = (tab:string)=>{
    setActive(tab)
    dispatch(startLoading())
    setTimeout(()=>{
      dispatch(stopLoading())
    },2000)
  }
   useEffect(()=>{
    dispatch(startLoading())
    setTimeout(()=>{
      dispatch(stopLoading())
    },2000)
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[])
  return (
    <>
    <CssBaseline />
    <Navbar />
    {/* <Banner /> */}
    <ProfileCard />
    <Container
  maxWidth="xl"
  sx={{
    display: 'flex',
    alignItems: 'center',
    gap: 5,
    background: '#F4F5FA',
    height: 100,
    px: 8,
  }}
>
  {tabs.map((item,index) => (
    <div key={index} onClick={() => handleActive(item)} style={{ cursor: 'pointer' }}>
      <Box
        sx={
          active === item
            ? {
                background: '#9155fd',
                borderRadius: '10px',
                padding: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }
            : {
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }
        }
      >
        {item === 'Profile' && (
          <PermIdentityOutlinedIcon
            style={active === item ? { color: 'white' } : { color: '#3a3541' }}
          />
        )}
        {item === 'Teams' && (
          <PeopleOutlineOutlinedIcon
            style={active === item ? { color: 'white' } : { color: '#3a3541' }}
          />
        )}
        {item === 'Projects' && (
          <AppsIcon
            style={active === item ? { color: 'white' } : { color: '#3a3541' }}
          />
        )}
        {item === 'Connections' && (
          <LinkOutlinedIcon
            style={active === item ? { color: 'white' } : { color: '#3a3541' }}
          />
        )}
        <Typography
          variant="h5"
          sx={
            active === item
              ? {
                  color: 'white',
                  fontSize: 18,
                  textTransform: 'uppercase',
                  fontFamily: 'Inter',
                }
              : {
                  color: '#3a3541',
                  fontSize: 18,
                  textTransform: 'uppercase',
                  fontFamily: 'Inter',
                  display: { xs: 'none', md: 'block' },
                }
          }
        >
          {item}
        </Typography>
      </Box>
    </div>
  ))}
</Container>
       
{isLoading ? (
        <Loader />
      ) : (
        <>
          {active === 'Profile' && <Profile />}
          {active === 'Teams' && <Team />}
          {active === 'Connections' && <Connections />}
          {active === 'Projects' && <Projects />}
        </>
      )}

         <ScrollToTopButton />
    </>

  )
}

export default App