'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { motion } from 'framer-motion';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [loading, setLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitMessage('Thank you! Your inquiry has been sent successfully. We will contact you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitMessage('Error sending message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitMessage('Error sending message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      id="contact"
      suppressHydrationWarning
      sx={{
        py: { xs: 4, md: 6 },
        backgroundColor: '#F5F5F5',
        mb: 0,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{
              textAlign: 'center',
              fontWeight: 700,
              mb: 3,
              color: '#000000',
            }}
          >
            Get in Touch
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              color: '#666666',
              mb: 6,
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Ready to start your gymnastics journey? Fill out our form or chat with us on WhatsApp!
          </Typography>

          <Box sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}>
            <Box
              sx={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
                border: '1px solid #E0E0E0',
              }}
            >
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfpQFYNfFRumAcvK4DCi8qJ0AyEg-tCAjXnjPHNxyX3l-4ryQ/viewform?embedded=true"
                width="100%"
                height="600"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                style={{ border: 'none' }}
                title="Gymnastics Academy Registration Form"
              >
                Loading…
              </iframe>
            </Box>
          </Box>

          <Box sx={{ maxWidth: '400px', mx: 'auto' }}>
            <Button
              component="a"
              href="https://wa.me/916363865144"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: '#25D366',
                color: '#FFFFFF',
                py: 2.5,
                fontSize: '1.2rem',
                fontWeight: 600,
                borderRadius: '12px',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#128C7E',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 12px 30px rgba(37, 211, 102, 0.4)',
                },
                transition: 'all 0.3s ease',
                boxShadow: '0 6px 20px rgba(37, 211, 102, 0.3)',
              }}
            >
              💬 Start WhatsApp Chat
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;
