import { useState } from 'react'
import {Card, CardHeader,Avatar,CardContent,IconButton,Typography,Box,Button,Menu,MenuItem} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Avatar2 from '../assets/avatar2.png'
import Avatar3 from '../assets/avatar3.png'
import Avatar4 from '../assets/avatar4.png'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const connections = [
    {
        name:'Cecilia Payne',
        connections: 45,
        icon: Avatar2, 
        selected: false
    },
    {
        name:'Curtis Fletcher',
        connections: '1.32k',
        icon: Avatar3, 
        selected: true
    },  {
        name:'Alicia Stone',
        connections: 125,
        icon: Avatar2, 
        selected: true
    },  {
        name:'Darrell Barnes',
        connections: 456,
        icon: Avatar4, 
        selected: false
    },  {
        name:'Eugenia Moore',
        connections: '1,2k',
        icon: Avatar2, 
        selected: false
    }
]

const ConnectionsCards = () => {
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
        <IconButton onClick={handleOpenUserMenu} aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title="Connections"
    />
     <Menu
                anchorEl={anchorElUser}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                >
                    <MenuItem onClick={handleCloseUserMenu}>Share Connections</MenuItem>
                    <MenuItem onClick={handleCloseUserMenu}>Suggest Edits</MenuItem>
                    <MenuItem  onClick={handleCloseUserMenu}>Report Bug</MenuItem>
                </Menu>
    <CardContent>
      {
        connections.map(item=>(
            <Box key={item.name} sx={{width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:3}}>
                <Box sx={{display:'flex', alignItems:'center', gap:1}}>
                <Avatar alt="Avatar" src={item.icon} />
                  <Box sx={{display:'flex', flexDirection:'column'}}>
                    <Typography variant='h6'>{item.name}</Typography>
                    <Typography variant='body2' component={'span'} color="text.secondary">{item.connections} connections</Typography>
                  </Box>
                </Box>
                {
                  !item.selected
                &&
                <Button variant="outlined" sx={{borderColor:'#9155fd'}}>
                  <PersonOutlineOutlinedIcon sx={{color:'#9155fd'}} />
                </Button>
                }
                {
                item.selected
                &&
                <Button variant="outlined" sx={{borderColor:'#9155fd',background:'#9155fd'}}>
                <PersonOutlineOutlinedIcon sx={{color:'white'}} />
              </Button>
                }
            </Box>
        ))
      }
      <Box sx={{display:'flex', justifyContent:'center'}}>
      <Button variant="text" sx={{color:'#9155fd'}}>View all Connections</Button>
      </Box>
    </CardContent>
  </Card>
  )
}

export default ConnectionsCards