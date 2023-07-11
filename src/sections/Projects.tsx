import {useState} from 'react'
import {Card,CardHeader,IconButton,CardContent,Avatar,Typography,Box,Grid,Stack,Container, Chip,LinearProgress,Tooltip,Menu,MenuItem} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import{useSelector} from 'react-redux'
import type { RootState } from '../Store/Store';


export const Projects = () => {
    const { projects } = useSelector( (state:RootState) => state.task );
const [anchorEl, setAnchorEl] = useState<null|HTMLElement>(null);

  const handleClick = (event:React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container maxWidth='xl' sx={{ background:'#F4F5FA'}}>
    <Grid container spacing={4} sx={{py:4}}>
        {projects.map(item=>(
            <Grid item key={item.title} xs={12} sm={6} md={4} alignSelf={'center'}>
               <Card sx={{ maxWidth: 480 }}>
                <CardHeader
                    avatar={
                        <Avatar src={item.icon} sx={{width:50, height:50}} />
                    }
                    action={
                        <IconButton onClick={handleClick} aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title={
                        <Typography variant='h6' sx={{fontWeight:'bold'}} color="text.secondary">
                           {item.title}
                        </Typography>
                    }
                    subheader={
                        <Typography variant='h6' color="text.secondary" >
                           <span>Client: </span>{item.client}
                        </Typography>
                    }
                />
                 <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Rename Project</MenuItem>
                    <MenuItem onClick={handleClose}>View Details</MenuItem>
                    <MenuItem onClick={handleClose}>Add to Favorites</MenuItem>
                    <MenuItem sx={{color:'red'}} onClick={handleClose}>Leave Project</MenuItem>
                </Menu>
                <CardContent>
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} spacing={3}>
                        <Box sx={{background:'rgba(58, 53, 65, 0.08)', padding:1}}>
                            <Typography variant='body2' component={'p'} sx={{fontSize:20}} >
                                {item.budget}
                            </Typography>
                            <Typography variant='body2' component={'p'} sx={{fontSize:20}} color="text.secondary">Total budget</Typography>
                        </Box>
                        <Box>
                        <Typography variant='body2' component={'p'} sx={{fontSize:20}}>
                         <strong>StartDate: </strong>{item.startDate}
                        </Typography>
                        <Typography variant='body2' component={'p'} sx={{fontSize:20}}>
                        <strong>Deadline: </strong>{item.deadline}
                        </Typography>
                        </Box>
                    </Stack>
                    <Typography sx={{marginTop:2, fontSize:20}} variant="body2" color="text.secondary">
                     {item.description}
                    </Typography>
                    <Box sx={{borderColor:'divider'}} />
                    <Stack sx={{marginTop:2}} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                        <Typography variant='body2' component={'span'} sx={{fontSize:20}} >
                            <strong>All Hours: </strong>{item.hours}
                        </Typography>
                        <Chip label={`${item.daysLeft} days left`} sx={{fontSize:20}}  />
                    </Stack>
                    <Box sx={{ marginTop:2}}>
                     <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                     <Typography variant='body2' component={'span'} color="text.secondary">
                            Tasks:{item.task}
                    </Typography>
                    <Typography variant='body2' component={'span'} color="text.secondary">
                            {item.percentaje}% completed
                    </Typography>
                    </Stack> 
                    <LinearProgress 
                    sx={{
                        '& .MuiLinearProgress-bar': {
                            backgroundColor: '#9155fd',
                        },
                        height:12,
                        borderRadius:10,
                        marginTop:1
                    }} 
                    variant='determinate' value={Number(item.percentaje)} />
                    </Box>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} gap={15} sx={{marginTop:2, width:'100%'}}>
                    <div style={{ display: 'flex', alignItems:'center', gap:2 }}>
                    {item.icons.map((item, index) => (
                        <Tooltip key={index} title={'avatar'} arrow>
                        <Avatar
                            alt={"avatar"}
                            src={item}
                            sx={{ marginLeft: '0.001rem' }}
                        />
                        </Tooltip>
                      ))}
                      <Typography variant='body2' component={'span'} color="text.secondary">{item.members} members</Typography>
                   </div>
                   <Box sx={{display:'flex', alignItems:'center',gap:2}}>
                     <ChatBubbleOutlineIcon />
                     <Typography variant='body2' component={'span'} sx={{fontSize:20}} color="text.secondary" >{item.messages}</Typography>
                   </Box>
                    </Stack>
                </CardContent>
            </Card>
            </Grid>
        ))}
    </Grid>
    </Container>
    
  )
}
