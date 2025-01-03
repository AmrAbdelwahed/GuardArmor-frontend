import React from 'react';
import { Container, Typography, Grid, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import '../Assets/About.css'; // Assuming you want to create custom styling here

// Styled components
const AboutContainer = styled('div')(({ theme }) => ({
  backgroundColor: 'rgb(44, 44, 44)',
  padding: theme.spacing(8, 0),
  color: 'white',
}));

const FooterButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#2A69EF',
  color: 'white',
  padding: '15px 30px',
  fontSize: '18px',
  fontWeight: 'bold',
  textDecoration: 'none',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: '#1A4EB7',
  },
  marginTop: '20px',
}));

const FooterSection = styled('div')(({ theme }) => ({
  textAlign: 'center',
  marginTop: '40px',
}));

const About = () => {
  return (
    <AboutContainer>
      <Container maxWidth="md">
        <Typography variant="h2" align="center" style={{ fontWeight: 'bold', marginBottom: '20px' }}>
          About Us
        </Typography>
        <Typography variant="h5" align="center" style={{ marginBottom: '40px' }}>
          Get in touch with us for more information or inquiries.
        </Typography>

        {/* Contact Information */}
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" align="center">
              <strong>Email:</strong> contact@guardarmor.com
            </Typography>
            <Typography variant="h6" align="center" style={{ marginTop: '10px' }}>
              <strong>Phone:</strong> +123 456 7890
            </Typography>
          </Grid>
        </Grid>

        {/* Footer Buttons */}
        <FooterSection>
          <FooterButton href="/security-guard-register" style={{ margin: '10px' }}>Guards Start Here</FooterButton>
          <FooterButton  href="/companies-for-hire" style={{ margin: '10px' }}>Companies Start Here</FooterButton>
        </FooterSection>
      </Container>
    </AboutContainer>
  );
};

export default About;
