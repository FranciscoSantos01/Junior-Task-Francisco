import {useState} from 'react'
import { AppBar, Toolbar, Typography, IconButton, Avatar, Badge,Box, Tooltip,Menu,MenuItem,useTheme,CssBaseline } from '@mui/material';
import Notifications from '@mui/icons-material/NotificationsOutlined'
import AppsIcon from '@mui/icons-material/Apps'
import ModeNightIcON from '@mui/icons-material/ModeNight'
import TranslateIcon from '@mui/icons-material/Translate';
import SearchIcon from '@mui/icons-material/Search';
import Icon from '../assets/avatar.png'
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
function Navbar() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const theme = useTheme();
  const isMd = theme.breakpoints.up('md');
  return (
       <div>
      <CssBaseline />
      <AppBar position="static" style={{ width: '100%' }} sx={{ borderColor: 'divider' }}>
        <Toolbar style={{ backgroundColor: 'white', padding: '20px' }}>
          <Typography
            variant="h3"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: isMd ? 'flex' : 'none',
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '20px',
              textTransform: 'uppercase',
              letterSpacing: '.3rem',
              color: '#3a3541',
              textDecoration: 'none',
              flexGrow: 1,
            }}
          >
            Materio
          </Typography>
          <IconButton color="inherit" aria-label="Apps" style={{ display: isMd ? 'flex' : 'none' }}>
            <Badge style={{ marginRight: '10px', alignSelf: 'center' }}>
              <SearchIcon fontSize="large" style={{ color: 'black' }} />
            </Badge>
          </IconButton>
          <IconButton color="inherit" aria-label="Apps" style={{ display: isMd ? 'flex' : 'none' }}>
            <Badge style={{ marginRight: '10px', alignSelf: 'center' }}>
              <TranslateIcon fontSize="large" style={{ color: 'black' }} />
            </Badge>
          </IconButton>
          <IconButton color="inherit" aria-label="modenighticon" style={{ display: isMd ? 'flex' : 'none' }}>
            <Badge style={{ marginRight: '10px' }}>
              <ModeNightIcON fontSize="large" style={{ color: 'black' }} />
            </Badge>
          </IconButton>
          <IconButton color="inherit" aria-label="Apps" style={{ display: isMd ? 'flex' : 'none' }}>
            <Badge style={{ marginRight: '10px', alignSelf: 'center' }}>
              <AppsIcon fontSize="large" style={{ color: 'black' }} />
            </Badge>
          </IconButton>
          <IconButton color="inherit" aria-label="notifications" style={{ display: isMd ? 'flex' : 'none' }}>
            <Badge badgeContent={0} color="error" style={{ marginRight: '10px' }}>
              <Notifications fontSize="large" style={{ color: 'black' }} />
            </Badge>
          </IconButton>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={Icon} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      {/* Rest of your application */}
    </div>
  );
}


export default Navbar;