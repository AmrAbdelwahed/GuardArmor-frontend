import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { HiOutlineBars3 } from 'react-icons/hi2';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import { PersonAdd } from '@mui/icons-material'; // Using PersonAdd for the Sign Up icon
import logo from '../Assets/guardarmor.png';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import SecurityIcon from '@mui/icons-material/Security';
import PeopleIcon from '@mui/icons-material/People';
import MapIcon from '@mui/icons-material/Map';
import mapleLeaf from '../Assets/leaf.png';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const menuOptions = [
        { text: "Home", icon: <HomeIcon />, href: "/home" },
        { text: "What We Do", icon: <SecurityIcon />, href: "#what-we-do" },
        { text: "Who We Serve", icon: <PeopleIcon />, href: "#who-we-serve" },
        { text: "Where We Are", icon: <MapIcon />, href: "#where-we-are" },
        { text: "About", icon: <InfoIcon />, href: "#about" }

    ];

    return (
        <nav className="header-bar">
          <div className="nav-logo-container" style={{ display: 'flex', alignItems: 'center' }}>
          <a href="/home" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="GuardArmor Logo" style={{ width: 'auto', height: 'auto' }} />
              <img 
                src={mapleLeaf} 
                alt="Canadian Maple Leaf" 
                style={{ width: '45px', height: 'auto', marginLeft: '10px' }} // Adjust size and spacing here
              />            </a>
          </div>
          <div className="navbar-links-container">
            {menuOptions.map((item) => (
              <a key={item.text} href={item.href} className="navbar-link">
                {item.text}
              </a>
            ))}
          </div>
          <div className="navbar-menu-container">
            <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
          </div>
          <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
            <Box
              sx={{
                width: 250,
                height: '100vh',
                backgroundColor: 'rgb(42, 105, 239)',
                color: 'white',
                paddingTop: '10px',
                paddingBottom: '10px',
              }}
              role="presentation"
              onClick={() => setOpenMenu(false)}
              onKeyDown={() => setOpenMenu(false)}
            >
              <List>
                {menuOptions.map((item) => (
                  <ListItem key={item.text} disablePadding>
                    <a href={item.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <ListItemButton>
                        <ListItemIcon sx={{ color: '#fff' }}>{item.icon}</ListItemIcon>
                        <ListItemText sx={{ color: '#fff' }} primary={item.text} />
                      </ListItemButton>
                    </a>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </nav>
      );
    };
    
    export default Navbar;
