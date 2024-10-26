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

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const menuOptions = [
        { text: "Home", icon: <HomeIcon />, path: "/home" },
        // { text: "Sign Up", icon: <PersonAdd />, path: "/SignUp" },
        { text: "Request a Quote", icon: <RequestQuoteIcon />, path: "/RequestQuote" },
        { text: "What We Do", icon: <SecurityIcon />, path: "/WhatWeDo" },
        { text: "Who We Serve", icon: <PeopleIcon />, path: "/WhoWeServe" },
        { text: "Where We Are", icon: <MapIcon />, path: "/WhereWeAre" },
        { text: "About", icon: <InfoIcon />, path: "/AboutUs" }

    ];

    return (
        <nav className="header-bar">
            <div className="nav-logo-container">
                <Link to="/home"><img src={logo} alt="" style={{ width: 'auto', height: 'auto' }}/></Link>
            </div>
            <div className="navbar-links-container">
            {menuOptions.map((item) => (
                    <Link key={item.text} to={item.path} className="navbar-link">
                        {item.text}
                    </Link>
                ))}
            </div>

            <div className="navbar-menu-container">
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
            </div>

            <Drawer open={openMenu} onClose={() => setOpenMenu(false)}  anchor="right">
                <Box
                    sx={{ width: 250,
                        height: '100vh', 
                        backgroundColor: 'rgb(42, 105, 239)', // Dark background for the menu
                        color: 'white',
                        paddingTop: '10px',
                        paddingBottom: '10px'
                     }}
                    role="presentation"
                    
                    onClick={() => setOpenMenu(false)}
                    onKeyDown={() => setOpenMenu(false)}
                >
                    <List>
                        {menuOptions.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <Link to={item.path}>
                                <ListItemButton
                                sx={{
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Light up with a soft white overlay
                                        color: '#B0C4DE', // Optional: Change text color on hover for contrast
                                        transition: 'background-color 0.6s ease', // Smooth transition for the background color
                                    }
                                }}>
                                    <ListItemIcon sx={{ color: '#fff' }}>{item.icon}</ListItemIcon>
                                    <ListItemText sx={{ color: '#fff' }} primary={item.text} />
                                </ListItemButton></Link>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </nav>
    );
};

export default Navbar;
