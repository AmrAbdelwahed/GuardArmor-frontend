import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import Navbar from './Navbar';
import '../Assets/WhatWeDo.css';
import SecurityIcon from '@mui/icons-material/Security';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import SearchIcon from '@mui/icons-material/Search';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: '0.3s',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[4],
  },
}));

const WhatWeDoContainer = styled('div')(({ theme }) => ({
    backgroundColor: 'rgb(44,44,44)',
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

const StyledIcon = styled('div')(({ theme }) => ({
  fontSize: 80,
  marginBottom: theme.spacing(2),
  color: 'rgb(42, 105, 239)',
}));

const services = [
  {
    title: 'Security Guards',
    icon: SecurityIcon,
    description: 'Our highly trained security guards provide vigilant protection for your property and personnel.'
  },
  {
    title: 'Mobile Patrol & Security',
    icon: DriveEtaIcon,
    description: 'Our mobile patrol units offer flexible and responsive security solutions for multiple locations.'
  },
  {
    title: 'Consulting and Investigations',
    icon: SearchIcon,
    description: 'We provide expert security consulting and conduct thorough investigations to address your security concerns.'
  },
];

const WhatWeDo = () => {
  return (
    <WhatWeDoContainer>
      <Navbar />
      <HeroSection>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" gutterBottom>
            What We Do
          </Typography>
          <Typography variant="h5">
            Comprehensive security solutions tailored to your needs
          </Typography>
        </Container>
      </HeroSection>
      <Container className="services-grid" maxWidth="md">
        <Grid container spacing={4}>
          {services.map((service) => (
            <Grid item key={service.title} xs={12} sm={6} md={4}>
              <StyledCard className="service-card">
                <CardContent>
                  <StyledIcon>
                    <service.icon />
                  </StyledIcon>
                  <Typography gutterBottom variant="h4" component="h2" className="service-title">
                    {service.title}
                  </Typography>
                  <Typography variant="body1" className="service-description">
                    {service.description}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </WhatWeDoContainer>
  );
};


export default WhatWeDo;