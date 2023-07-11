import { useState } from "react";
import {Box,Card,IconButton,CardHeader,CardContent,Avatar,Typography,Chip,Button,Menu, MenuItem} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {useSelector} from 'react-redux'
import type { RootState } from '../Store/Store';
export const Connections = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const {connections} = useSelector((state:RootState)=> state.task)
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box   
    sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: 4,
        padding:2,
        background:'#F4F5FA',
        placeItems:'center'
      }} >
      {connections.map((item)=>(
         <Card key={item.user}  sx={{ width:440,height:'fit-content' }}>
         <CardHeader
           action={
            <>
             <IconButton onClick={handleOpenUserMenu} aria-label="settings">
               <MoreVertIcon />
             </IconButton>
            </>
           }
         />
           <Menu
                anchorEl={anchorElUser}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                >
                    <MenuItem onClick={handleCloseUserMenu}>Share Connection</MenuItem>
                    <MenuItem onClick={handleCloseUserMenu}>Block Connection</MenuItem>
                    <MenuItem sx={{color:'red'}} onClick={handleCloseUserMenu}>Delete</MenuItem>
                </Menu>
         <CardContent>
           <Typography variant="body1" component={'section'} sx={{display:'flex', flexDirection:'column',alignItems:'center', gap:1}}>
           <Avatar
                alt="Remy Sharp"
                src={item.icon}
                sx={{ width: 170, height: 170 }}
            />
            <div style={{textAlign:'center'}}>
            <Typography variant="h5" sx={{fontSize:30}} >{item.user}</Typography>
            <Typography variant="body2" component={'span'} sx={{fontSize:22}} >{item.profession}</Typography>
             </div>
            <Box sx={{display:'flex', gap:3}}>
              {item.tech.map(item=>(
                <Chip sx={{fontSize:20}} label={item} />
              ))}
            </Box>
               <ul style={{display:'flex', listStyle:'none', justifyContent:'center' , width:'100%', gap:40}}>
                <li style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <p style={{fontSize:25}}>{item.projects}</p>
                    <span style={{fontSize:20}}>Projects</span>
                </li>
                 <li style={{display:'flex', flexDirection:'column', alignItems:'center', }}>
                 <p style={{fontSize:25}}>{item.tasks}</p>
                    <span style={{fontSize:20}}>Tasks</span>
                 </li>
                 <li style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                 <p style={{fontSize:25}}>{item.connections}</p>
                    <span style={{fontSize:20}}>Connections</span>
                 </li>
               </ul>
            <Box sx={{display:'flex', gap:2}}>
            {item.connected 
              ? <Button variant="contained" sx={{color:'white', background:'#9155fd',  fontSize:20}}>
                <HowToRegIcon />
                Connected
                </Button>
              : <Button variant="outlined" sx={{color:'#9155fd', borderColor:'#9155fd', fontSize:20}}>
                <PersonAddAltIcon />
                Connect
                </Button>
            }
                  <Button variant="outlined" sx={{borderColor:'rgb(138, 141, 147,0.5)'}}><MailOutlineIcon sx={{color:'rgb(138, 141, 147)'}} /></Button>
            </Box> 
           </Typography>
         </CardContent>
       </Card>
      ))}
    </Box>
  )
}
