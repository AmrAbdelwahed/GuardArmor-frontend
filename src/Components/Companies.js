import React, { useState } from 'react';
import '../Assets/LoginSignup.css';
import { TextField, Snackbar, Alert, CircularProgress } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';
import DialpadTwoToneIcon from '@mui/icons-material/DialpadTwoTone';
import InfoIcon from '@mui/icons-material/Info';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import Navbar from './Navbar';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const CompaniesStartHere = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    city: '',
    securityGuardType: '',
    numberOfGuards: '',
    service: '',
    details: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[\d\s-]{10,}$/;

    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!phoneRegex.test(formData.phone)) newErrors.phone = 'Invalid phone format';
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.securityGuardType.trim()) newErrors.securityGuardType = 'Security guard type is required';
    if (!formData.numberOfGuards.trim()) newErrors.numberOfGuards = 'Number of security guards is required';
    if (!formData.service.trim()) newErrors.service = 'Type of service is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/submit-company`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSnackbar({
          open: true,
          message: 'Form submitted successfully!',
          severity: 'success',
        });
        setFormData({
          companyName: '',
          email: '',
          phone: '',
          firstName: '',
          lastName: '',
          city: '',
          securityGuardType: '',
          numberOfGuards: '',
          service: '',
          details: '',
        });
      } else {
        throw new Error(data.error || 'Failed to submit form');
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: error.message,
        severity: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-container" style={{ backgroundColor: 'rgb(44, 44, 44)', minHeight: '100vh', color: '#fff' }}>
      <Navbar />

      <div className="container">
        <div className="header">
          <div className="text">Companies Start Here</div>
        </div>
        <div className="inputs">
          {[
            { icon: BusinessIcon, name: 'companyName', placeholder: 'Company Name' },
            { icon: EmailIcon, name: 'email', placeholder: 'Enter your email address', type: 'email' },
            { icon: DialpadTwoToneIcon, name: 'phone', placeholder: 'Business phone number', type: 'tel' },
            { icon: AccountCircleIcon, name: 'firstName', placeholder: 'Enter your First Name' },
            { icon: AccountCircleIcon, name: 'lastName', placeholder: 'Enter your Last Name' },
            { icon: LocationCityIcon, name: 'city', placeholder: 'Enter your City' },
            { icon: InfoIcon, name: 'securityGuardType', placeholder: 'Type of Security Guard' },
            { icon: InfoIcon, name: 'numberOfGuards', placeholder: "Number of Security Guards" },
            { icon: InfoIcon, name: 'service', placeholder: 'Type of Service' },
          ].map(({ icon: Icon, name, placeholder, type = 'text' }) => (
            <div className="input" key={name}>
              <Icon style={{ margin: '0px 30px', color: '#555' }} />
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={formData[name]}
                onChange={handleChange}
              />
              {errors[name] && <p className="error" style={{ color: 'red' }}>{errors[name]}</p>}
            </div>
          ))}

          <div className="input" style={{ position: 'relative', margin: '30px 60px', color: '#555' }}>
            <TextField
              label="Additional Details"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              name="details"
              value={formData.details}
              onChange={handleChange}
              InputProps={{
                style: { backgroundColor: '#f0f0f0', marginTop: '5px' },
              }}
            />
            {errors.details && (
              <p
                className="error"
                style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '0',
                  color: 'red',
                  margin: 0,
                  textAlign: 'right',
                }}
              >
                {errors.details}
              </p>
            )}
          </div>
        </div>
        <div className="submit-container">
          <button className="submit" onClick={handleSubmit}>
            Submit
            {loading && <CircularProgress size={20} style={{ marginLeft: '10px', color: '#fff' }} />}
          </button>
        </div>
      </div>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CompaniesStartHere;
