import { useState } from 'react'
import {Card, CardHeader,Avatar,CardContent,IconButton,Typography,Box,Button,Chip,Menu,MenuItem} from '@mui/material'
import React from '../assets/reactjs.png'
import Support from '../assets/support.png'
import Figma from '../assets/figma.png'
import Vue from '../assets/vue.png'
import Twitter from '../assets/Twitter.png'
import MoreVertIcon from '@mui/icons-material/MoreVert'
const TeamsInfo = [
    {
        name:'React Developer',
        members: 72,
        icon: React, 
        category : 'Developer'
    },
    {
        name:'Support Team',
        members: 122,
        icon: Support, 
        category:'Support'
    },  
    {
        name:'UI Designer',
        members: 7,
        icon: Figma, 
        category:'Designer'
    },  {
        name:'Vue js Developer',
        members: 289,
        icon: Vue, 
        category :'Developer'
    },  {
        name:'Digital Marketing',
        members: 24,
        icon: Twitter, 
        category: 'Marketing'
    }
]

const TeamsCard = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Card sx={{ width:450,height:520 }}>
    <CardHeader
      action={
        <IconButton aria-label="settings" onClick={handleOpenUserMenu}>
          <MoreVertIcon />
        </IconButton>
      }
      title="Teams"
    />
      <Menu
                anchorEl={anchorElUser}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                >
                    <MenuItem onClick={handleCloseUserMenu}>Share Teams</MenuItem>
                    <MenuItem onClick={handleCloseUserMenu}>Suggest Edits</MenuItem>
                    <MenuItem onClick={handleCloseUserMenu}>Report Bug</MenuItem>
                </Menu>
    <CardContent>
      {
        TeamsInfo.map(item=>(
            <Box sx={{width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:3}}>
                <Box sx={{display:'flex', alignItems:'center', gap:1}}>
                <Avatar alt="Avatar" src={item.icon} />
                  <Box sx={{display:'flex', flexDirection:'column'}}>
                    <Typography variant='h6'>{item.name}</Typography>
                    <Typography variant='body2' component={'span'} color="text.secondary">{item.members} members</Typography>
                  </Box>
                </Box>
                <Chip label={item.category} />
            </Box>
        ))
      }
      <Box sx={{display:'flex', justifyContent:'center'}}>
      <Button variant="text" sx={{color:'#9155fd'}}>View all Teams</Button>
      </Box>
    </CardContent>
  </Card>
  )
}

export default TeamsCard