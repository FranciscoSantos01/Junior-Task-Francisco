import {Container,Typography,CardMedia,CardContent,Card,Button,Box,Avatar,Stack} from '@mui/material'
import Background from '../assets/profile-banner.png'
import Icon from '../assets/avatar.png'
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HowToRegIcon from '@mui/icons-material/HowToReg';

    export const ProfileCard = () => {
      return (
        <Container maxWidth="xl" style={{ marginTop: 30 }}>

        <Card sx={{ height: 'auto' }}>
          <CardMedia
            component="img"
            src={Background}
            alt="profile-header"
            height={280}
          />
          <CardContent>
              <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems="center" justifyContent="space-between" gap={2}>
                <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems="center" gap={2}>
                  <Avatar src={Icon} sx={{ width: 130, height: 130, borderRadius: '10px', border: '8px solid white' }} />
                  <Stack direction="column" gap={3} sx={{ marginTop: 2 }}>
                    <Typography variant="h5" color="text.secondary" sx={{ textTransform: 'capitalize', fontSize: { xs: 20, md: 26 }, fontWeight: 700, textAlign:{xs:'center', md:'start'} }}>
                      John Doe
                    </Typography>
                    <Box display="flex" alignItems="center" gap={2}>
                      <Box display="flex" alignItems="center">
                        <InvertColorsIcon sx={{ color: '#757575' }} />
                        <Typography variant="body1" sx={{ fontSize: 20 }} color="text.secondary">
                          UX Designer
                        </Typography>
                      </Box>
                      <Box display="flex" alignItems="center">
                        <LocationOnIcon sx={{ color: '#757575' }} />
                        <Typography variant="body1" sx={{ fontSize: 20 }} color="text.secondary">
                          Vatican City
                        </Typography>
                      </Box>
                      <Box display="flex" alignItems="center">
                        <CalendarTodayIcon sx={{ color: '#757575' }} />
                        <Typography variant="body1" sx={{ fontSize: 20 }} color="text.secondary">
                          Joined April 2021
                        </Typography>
                      </Box>
                    </Box>
                  </Stack>
                </Box>
                <Button variant="contained" size="large" color="primary" sx={{ alignSelf: {xs:'center',md:'flex-end'}, background: '#9155fd' }}>
                  <HowToRegIcon />
                  Connected
                </Button>
              </Box>
            </CardContent>
        </Card>
        </Container>
  )
}