'use client';

import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const floatingVariants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

const Hero = () => {
  return (
    <Box
      suppressHydrationWarning
      sx={{
        background: 'linear-gradient(135deg, #000000 0%, #1A1A1A 50%, #000000 100%)',
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 50 Q25 25 50 50 T100 50" fill="none" stroke="rgba(255,107,53,0.1)" stroke-width="1"/%3E%3C/svg%3E")',
        color: '#FFFFFF',
        py: { xs: 8, md: 12 },
        pt: { xs: 16, md: 20 }, // Increased top padding to account for absolute header
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Animated Background Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          top: -50,
          right: -50,
          width: '200px',
          height: '200px',
          border: '2px solid rgba(255, 107, 53, 0.1)',
          borderRadius: '50%',
        }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          bottom: -100,
          left: -100,
          width: '300px',
          height: '300px',
          border: '2px solid rgba(255, 107, 53, 0.05)',
          borderRadius: '50%',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center' }}>
          {/* Centered Hero Content */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Typography
              variant="h1"
              component={motion.div}
              custom={0}
              variants={textVariants}
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                fontWeight: 800,
                mb: 2,
                lineHeight: 1.1,
                letterSpacing: '-2px',
              }}
            >
              <Box
                sx={{
                  background: 'linear-gradient(135deg, #FF6B35 0%, #FFB84D 50%, #FF6B35 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Why Gymnastics is for Everyone?
              </Box>
            </Typography>

            <Typography
              variant="h5"
              component={motion.div}
              custom={1}
              variants={textVariants}
              sx={{
                fontSize: { xs: '1rem', md: '1.2rem' },
                color: '#CCCCCC',
                mb: 6,
                fontWeight: 300,
                lineHeight: 1.8,
                maxWidth: '700px',
                mx: 'auto',
              }}
            >
              Build strength, confidence, and lifelong skills in a safe, fun environment. 
              From toddlers to adults, everyone deserves to shine.
            </Typography>

            <motion.div
              custom={2}
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
            </motion.div>
          </motion.div>
        </Box>

        {/* CTA Section */}
        <Box sx={{ mt: 12, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.1rem',
                color: '#CCCCCC',
                mb: 3,
              }}
            >
              Ready to start your gymnastics journey?
            </Typography>
            <Button
              variant="contained"
              size="large"
              href="#contact"
              sx={{
                backgroundColor: '#FF6B35',
                color: '#FFFFFF',
                px: 8,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 700,
                borderRadius: '50px',
                '&:hover': {
                  backgroundColor: '#E55100',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 12px 24px rgba(255, 107, 53, 0.4)',
                },
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 16px rgba(255, 107, 53, 0.3)',
              }}
            >
              Inquire Now
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
