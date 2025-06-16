import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const pages = ['On Sale', 'New Arrivals', 'Brands'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const carts = ['item1', 'item2', 'item3', 'item4'];

function Headbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElCart, setAnchorElCart] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleOpenCart = (event) => {
    setAnchorElCart(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleCloseCart = () => {
    setAnchorElCart(null);
  };

  return (
    <AppBar position="static" sx={{ px: { xs: "0px", md: "0px" } }}>
      <Container sx={{ }}>
        <Toolbar >
          {/* Desktop Logo & Pages (Left Section) */}
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, }} />
          <Typography
            variant="h1"
            noWrap
            component="a"
            href="#Home"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'roboto',
              fontWeight: 'bold',
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize: 32,
            }}
          >
            SHOP.CO
          </Typography>

          {/* Desktop Nav Pages - Removed flexGrow: 1 */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#000000', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Icon (Left) */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Mobile Logo (Center) - Removed flexGrow: 1, added mr:auto to push to right only*/}
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1, // Keep flexGrow for mobile Typography to push cart/avatar
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SHOP.CO
          </Typography>

          {/* This empty Box will take up all available space and push the following elements to the right */}
          {/* For desktop, it pushes the cart/avatar to the right. */}
          {/* For mobile, the Typography's flexGrow already handles push, but this ensures general behavior. */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} />


          {/* Cart Icon (Right Section) */}
          <Box sx={{ flexGrow: 0, mr: 1 }}>
            <Tooltip title="Open cart">
              <IconButton onClick={handleOpenCart}>
                <ShoppingCartOutlinedIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElCart}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElCart)}
              onClose={handleCloseCart}
            >
              {carts.map((item, index) => ( // Use item and index for key if items are not unique
                <MenuItem key={index} onClick={handleCloseCart}>
                  <Typography sx={{ textAlign: 'center' }}>{item}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* User Avatar (Far Right Section) */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Headbar;