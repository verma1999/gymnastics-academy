'use client';

import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#000000',
        color: '#FFFFFF',
        py: 3,
        mt: 0,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center" alignItems="flex-start">
          {/* Contact Info */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: '#FF6B35',
              }}
            >
              Contact Info
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                <PhoneIcon sx={{ fontSize: '1.2rem', color: '#FF6B35', mt: 0.5 }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                  <Link href="tel:+916363865144" underline="none" sx={{ color: '#CCCCCC', '&:hover': { color: '#FF6B35' } }}>
                    <Typography variant="body2" component="span">
                      +91 6363865144
                    </Typography>
                  </Link>
                  <Link href="tel:+917975403855" underline="none" sx={{ color: '#CCCCCC', '&:hover': { color: '#FF6B35' } }}>
                    <Typography variant="body2" component="span">
                      +91 7975403855
                    </Typography>
                  </Link>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                <EmailIcon sx={{ fontSize: '1.2rem', color: '#FF6B35', mt: 0.5 }} />
                <Typography variant="body2" sx={{ color: '#CCCCCC' }}>
                  info@gymnastics.in
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                <LocationOnIcon sx={{ fontSize: '1.2rem', color: '#FF6B35', mt: 0.5 }} />
                <Typography variant="body2" sx={{ color: '#CCCCCC' }}>
                  5th Cross, Ravi Prakash Nagar<br />
                  HAL Airport Area, Bengaluru 560017
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Social Links */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: '#FF6B35',
              }}
            >
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mb: 3, alignItems: 'center' }}>
              <IconButton
                component="a"
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#FF6B35',
                  '&:hover': { backgroundColor: 'rgba(255, 107, 53, 0.1)' },
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#FF6B35',
                  '&:hover': { backgroundColor: 'rgba(255, 107, 53, 0.1)' },
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://wa.me/916363865144"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#FF6B35',
                  '&:hover': { backgroundColor: 'rgba(255, 107, 53, 0.1)' },
                }}
              >
                <WhatsAppIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>


        {/* Copyright */}
        <Box sx={{ textAlign: 'center', borderTop: '1px solid #333333', pt: 3 }}>
          <Typography variant="body2" sx={{ color: '#999999' }}>
            © {currentYear} Gymnastics Academy. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
