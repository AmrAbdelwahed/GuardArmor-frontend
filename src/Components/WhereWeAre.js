import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import Navbar from './Navbar';
import '../Assets/WhereWeAre.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fixing marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

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

const StyledIcon = styled('div')(({ theme }) => ({
  fontSize: 80,
  marginBottom: theme.spacing(2),
  color: 'rgb(42, 105, 239)',
}));

const locations = [
  { city: 'Toronto', province: 'Ontario', lat: 43.6532, lng: -79.3832 },
  { city: 'London', province: 'Ontario', lat: 42.9849, lng: -81.2453 },
  { city: 'Windsor', province: 'Ontario', lat: 42.3149, lng: -83.0364 },
  { city: 'Belleville', province: 'Ontario', lat: 44.1628, lng: -77.3832 },
  { city: 'Kingston', province: 'Ontario', lat: 44.2312, lng: -76.4860 },
  { city: 'Ottawa', province: 'Ontario', lat: 45.4215, lng: -75.6972 },
];

const WhereWeAre = () => {
  return (
    <div className="whereWeAre-container">
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
      <Typography variant="h2" style={{ color: "white", fontWeight: "bold" }}>
      Where We Are
      </Typography>
      <Typography
        variant="h5"
        style={{ color: "white", maxWidth: "600px", marginTop: "10px" }}
      >
        Serving communities across Ontario
      </Typography>
    </div>
      
      {/* Move MapContainer here */}
      <Container maxWidth="md" className="map-container">
        <MapContainer center={[44.0, -79.0]} zoom={6} style={{ height: '400px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {locations.map((location) => (
            <Marker key={location.city} position={[location.lat, location.lng]}>
              <Popup>
                {location.city}, {location.province}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </Container>
      
      <Container className="locations-grid" maxWidth="md">
        <Grid container spacing={4}>
          {locations.map((location) => (
            <Grid item key={location.city} xs={12} sm={6} md={4}>
              <StyledCard className="location-card">
                <CardContent>
                  <StyledIcon>
                    <LocationOnIcon />
                  </StyledIcon>
                  <Typography gutterBottom variant="h4" component="h2" className="location-title">
                    {location.city}
                  </Typography>
                  <Typography variant="body1" className="location-description">
                    {location.province}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default WhereWeAre;
