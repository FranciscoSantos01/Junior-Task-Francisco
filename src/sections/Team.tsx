import {useState} from 'react'
import {Box,Card,IconButton,CardHeader,CardContent,Avatar,Typography,Menu,MenuItem,Stack,AvatarGroup,Chip} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {useSelector} from 'react-redux'
import type { RootState } from '../Store/Store';
const Team = () => {
  const [anchorEl, setAnchorEl] = useState<null|HTMLElement>(null);
  const {teams} = useSelector((state:RootState)=> state.task)
  const handleClick = (event:React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
      {teams.map((item)=>(
         <Card key={item.title}  sx={{ width:450,height:250 }}>
         <CardHeader
            avatar={
                <Avatar src={item.img} sx={{width:50, height:50}}  />
              }
           action={
            <>
            <IconButton aria-label='favorite'>
                <StarBorderIcon sx={{fontSize:30}} />
            </IconButton>
             <IconButton onClick={handleClick} aria-label="settings">
               <MoreVertIcon />
             </IconButton>
            </>
           }
           title={
             <Typography variant='h5'>{item.title}</Typography>
           }
         />
          <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                >
                    <MenuItem onClick={handleClose}>Rename Team</MenuItem>
                    <MenuItem onClick={handleClose}>View Details</MenuItem>
                    <MenuItem onClick={handleClose}>Add to Favorites</MenuItem>
                    <MenuItem sx={{color:'red'}} onClick={handleClose}>Delete Team</MenuItem>
                </Menu>
         <CardContent>
           <Typography variant='body2' component={'p'} sx={{fontSize:20, fontWeight:200}}>
            {item.description}
           </Typography>
           <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} sx={{marginTop:2}}>
                  <AvatarGroup total={item.extra + item.icons.length } >
                  {item.icons.map(item=>(
                    <Avatar src={item} />
                  ))}
                  </AvatarGroup>
                <div style={{display:'flex', gap:10}}>
                  {item.tech.map(item=>(
                    <Chip label={item} />
                  ))}
                </div>
           </Stack>
         </CardContent>
       </Card>
      ))}
    </Box>
  )
}

export default Team