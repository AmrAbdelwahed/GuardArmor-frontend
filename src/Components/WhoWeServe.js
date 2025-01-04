import React from 'react';
import '../Assets/WhoWeServe.css';

import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import Navbar from './Navbar';

// Import icons for each service area
import StoreIcon from '@mui/icons-material/Store';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ConstructionIcon from '@mui/icons-material/Construction';
import FlightIcon from '@mui/icons-material/Flight';
import SchoolIcon from '@mui/icons-material/School';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FactoryIcon from '@mui/icons-material/Factory';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';

// Styled components using MUI's styled API

const WhoWeServeContainer = styled('div')(({ theme }) => ({
    minHeight: '100vh',
  }));

const HeroSection = styled('div')(({ theme }) => ({
  backgroundColor: 'rgb(42, 105, 239)',
  color: 'white',
  padding: theme.spacing(8, 0, 6),
  textAlign: 'center',
}));

const CardGrid = styled(Grid)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
}));

const CardStyled = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: '0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[4],
  },
}));

const IconStyled = styled('div')(({ theme }) => ({
  fontSize: 60,
  color: 'rgb(42, 105, 239)',
  marginBottom: theme.spacing(2),
}));

const serviceDescriptions = {
    'Mall and Retail': 'Enhancing security to create a safe shopping environment for customers and retailers alike.',
    'Healthcare': 'Protecting sensitive patient information and ensuring safety within healthcare facilities.',
    'Construction Site': 'Implementing robust security measures to safeguard construction sites and personnel.',
    'Airport': 'Providing comprehensive security solutions to ensure passenger safety and operational efficiency.',
    'Higher Education': 'Securing campuses and fostering a safe learning environment for students and staff.',
    'Logistics and Transportation': 'Ensuring secure transport of goods and protection against theft and loss.',
    'Manufacturing': 'Protecting valuable assets and ensuring safety in manufacturing environments.',
    'Residential': 'Offering home security solutions for peace of mind and protection for families.',
    'Commercial Properties': 'Delivering tailored security services for diverse commercial spaces to enhance safety and security.',
  };

const services = [
  { title: 'Mall and Retail', icon: StoreIcon },
  { title: 'Healthcare', icon: LocalHospitalIcon },
  { title: 'Construction Site', icon: ConstructionIcon },
  { title: 'Airport', icon: FlightIcon },
  { title: 'Higher Education', icon: SchoolIcon },
  { title: 'Logistics and Transportation', icon: LocalShippingIcon },
  { title: 'Manufacturing', icon: FactoryIcon },
  { title: 'Residential', icon: HomeIcon },
  { title: 'Commercial Properties', icon: BusinessIcon },
];

const WhoWeServe = () => {
  return (
    <WhoWeServeContainer>
      <div
            style={{
              backgroundImage: "url('/path-to-background.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "180px", // Reduced height
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              padding: "20px", // Reduced padding
            }}
          >
            <Typography variant="h2" style={{ color: "black", fontWeight: "bold" }}>
            Who We Serve
            </Typography>
            <Typography
              variant="h5"
              style={{ color: "black", maxWidth: "600px", marginTop: "10px" }}
            >
              Protecting a wide range of industries with expert security solutions
            </Typography>
          </div>
      <Container maxWidth="md">
        <CardGrid container spacing={4}>
          {services.map((service) => (
            <Grid item key={service.title} xs={12} sm={6} md={4}>
              <CardStyled>
                <CardContent>
                  <IconStyled>
                    <service.icon />
                  </IconStyled>
                  <Typography gutterBottom variant="h5" component="h2">
                    {service.title}
                  </Typography>
                  <Typography>
                  {serviceDescriptions[service.title]}
                  </Typography>
                </CardContent>
              </CardStyled>
            </Grid>
          ))}
        </CardGrid>
      </Container>
      </WhoWeServeContainer>
  );
};

export default WhoWeServe;
