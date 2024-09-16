import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link}  from '@mui/material';


const drawerWidth = 240;
const navItems = [
    { name: 'Home', href: '/' },
    { name: 'News', href: '/news' },
    { name: 'distribute', href: '/signup' },
    { name: 'GitHub', href: 'https://github.com/D1nast' }
  ];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };



  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor:'#CCB3B7'}}>
        <Toolbar>
          {/* ここからヘッダー */}
          <Typography variant="h" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block',color:'#22292C'}}}>
            仮想通貨情報サイト
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.name} component={Link} href={item.href} sx={{ color: '#22292C' }}>
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
        </Drawer>
      </nav>
    </Box>
  );
}



export default Header;
