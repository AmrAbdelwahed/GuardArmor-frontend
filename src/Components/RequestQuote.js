import React, { useState } from 'react';
import '../Assets/LoginSignup.css';
import { Link } from 'react-router-dom';
import { TextField, Snackbar, Alert, CircularProgress } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email'; // Email icon
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // User icon
import LockIcon from '@mui/icons-material/Lock'; // Password icon
import InfoIcon from '@mui/icons-material/Info';
import DialpadTwoToneIcon from '@mui/icons-material/DialpadTwoTone';
import { FiArrowLeft } from 'react-icons/fi';
import Navbar from './Navbar';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const RequestQuote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '', // Added a separate field for "Type of Service"
    details: ''
  });
  
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[\d\s-]{10,}$/;

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!phoneRegex.test(formData.phone)) newErrors.phone = 'Invalid phone format';
    if (!formData.service.trim()) newErrors.service = 'Type of service is required';
    if (!formData.details.trim()) newErrors.details = 'Details are required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/submit-quote`, {
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
          message: 'Quote submitted successfully!',
          severity: 'success'
        });
        setFormData({ name: '', email: '', phone: '', company: '', service: '', details: '' });
      } else {
        throw new Error(data.error || 'Failed to submit quote');
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: error.message,
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-container" style={{ backgroundColor: 'rgb(44, 44, 44)', minHeight: '100vh', color: '#fff' }}>
      <Navbar />

      <div className='container'>
        <div className='header'>
          <div className='text'> Request A Quote </div>
        </div>
        <div className='inputs'>
          <div className='input'>
            <AccountCircleIcon style={{ margin: '0px 30px', color: '#555' }} />
            <input
              type='text'
              name='name'
              placeholder='Full Name'
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error" style={{ color: 'red' }}>{errors.name}</p>}
          </div>
          
          <div className='input'>
            <AccountCircleIcon style={{ margin: '0px 30px', color: '#555' }} />
            <input
              type='text'
              name='company'
              placeholder='Company Name'
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <div className='input'>
            <DialpadTwoToneIcon style={{ margin: '0px 30px', color: '#555' }} />
            <input
              type='tel'
              name='phone'
              placeholder='Phone Number'
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="error" style={{ color: 'red' }}>{errors.phone}</p>}
          </div>

          <div className='input'>
            <EmailIcon style={{ margin: '0px 30px', color: '#555' }} />
            <input
              type='email'
              name='email'
              placeholder='Email Id'
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error" style={{ color: 'red' }}>{errors.email}</p>}
          </div>

          <div className='input'>
            <InfoIcon style={{ margin: '0px 30px', color: '#555' }} />
            <input
              type='text'
              name='service'
              placeholder='Type of Service'
              value={formData.service}
              onChange={handleChange}
            />
            {errors.service && <p className="error" style={{ color: 'red' }}>{errors.service}</p>}
          </div>

          {/* Wrapping the TextField and error message in a relative container */}
          <div className='input' style={{ position: 'relative', margin: '30px 60px', color: '#555' }}>
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
                style: { backgroundColor: '#f0f0f0', marginTop: '5px' }
              }}
            />
            {errors.details && (
              <p className="error" style={{
                position: 'absolute',
                top: '-20px', 
                right: '0',  // Anchoring it to the top-right
                color: 'red',
                margin: 0,   
                textAlign: 'right' 
              }}>
                {errors.details}
              </p>
            )}
          </div>
        </div>
        <div className='submit-container'>
          <button className="submit" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default RequestQuote;
