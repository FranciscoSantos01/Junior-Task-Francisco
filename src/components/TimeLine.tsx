import { Timeline,TimelineItem,TimelineConnector,TimelineContent,TimelineDot,TimelineSeparator,timelineItemClasses } from '@mui/lab';
import {Box,Typography,Avatar} from '@mui/material'
import Icon from '../assets/avatar.png'


const TimeLineActivites = () => {
  return (
    <Timeline position="right" sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}>
                <TimelineItem style={{marginBottom:8}}>
                  <TimelineSeparator>
                    <TimelineDot  color='error' />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Box sx={{width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <Typography variant='h6'>8 invoices have been paid</Typography>
                    <Typography variant='body2' component={'span'} color="text.secondary">Wendsday</Typography>
                    </Box>
                    <Typography variant='body2'component={'p'} color="text.secondary">Invoices have been paid to the company.</Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem style={{marginBottom:8}}>
                  <TimelineSeparator>
                    <TimelineDot color="secondary" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Box sx={{width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <Typography variant='h6'>Create new Project for a Client!</Typography>
                    <Typography variant='body2' component={'span'}  color="text.secondary">April,18</Typography>
                    </Box>
                    <Typography variant='body2'component={'p'}>Invoices have been paid to the company.</Typography>
                     <Box sx={{display:'flex' ,alignItems:'center', gap:2, marginTop:3}}>
                     <Avatar alt="Avatar" src={Icon} />
                     <Typography variant='body2' component={'p'} sx={{fontWeight:'bold'}}>John Doe (client)</Typography>
                     </Box>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem style={{marginBottom:8}}>
                  <TimelineSeparator>
                    <TimelineDot color="info" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Box sx={{width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <Typography variant='h6'>Order #37745 from September</Typography>
                    <Typography variant='body2' component={'span'} color="text.secondary">January, 10</Typography>
                    </Box>
                    <Typography variant='body2'component={'p'} color="text.secondary">Invoices have been paid to the company.</Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem style={{marginBottom:8}}>
                  <TimelineSeparator>
                    <TimelineDot color="warning" />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Box sx={{width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <Typography variant='h6'>Public Meeting</Typography>
                    <Typography variant='body2' component={'span'} color="text.secondary">September, 30</Typography>
                    </Box>
                  </TimelineContent>
                </TimelineItem>
            </Timeline>
  )
}

export default TimeLineActivites