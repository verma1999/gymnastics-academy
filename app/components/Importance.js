'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
} from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Importance = () => {
  const benefits = [
    'Physical Strength & Flexibility - Build strong muscles, improve flexibility, and develop excellent posture for a healthier body.',
    'Mental Resilience - Overcome challenges, build confidence, and develop a stronger mindset through training.',
    'Achievement & Goals - Set goals, work towards them, and celebrate victories both big and small.',
    'Social Skills & Teamwork - Make friends, learn teamwork, and develop lasting friendships in a supportive environment.',
    'Health & Wellness - Improve cardiovascular health, coordination, and develop healthy lifestyle habits.',
    'Discipline & Focus - Learn discipline, focus, and the importance of dedication towards achieving excellence.',
  ];

  return (
    <Box
      suppressHydrationWarning
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: '#FFFFFF',
        backgroundImage: 'radial-gradient(circle at 100% 100%, rgba(33, 150, 243, 0.1) 0%, transparent 50%), radial-gradient(circle at 0% 0%, rgba(255, 107, 53, 0.1) 0%, transparent 50%)',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              textAlign: 'center',
              mb: 2,
              fontWeight: 700,
              color: '#000000',
            }}
          >
            Why Gymnastics Matters
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              mb: 6,
              color: '#666666',
              maxWidth: '700px',
              mx: 'auto',
              fontWeight: 300,
              lineHeight: 1.8,
            }}
          >
            Looking to give your child more than just exercise? Gymnastics develops physical strength, mental resilience, and life skills that will benefit them for years to come. Discover why thousands of parents trust us.
          </Typography>
        </motion.div>

        {/* Consolidated Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              backgroundColor: '#FFFFFF',
              border: '2px solid #FF6B35',
              borderRadius: '12px',
              p: { xs: 3, md: 5 },
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
              maxWidth: '900px',
              mx: 'auto',
            }}
          >
            {benefits.map((benefit, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 2.5,
                  mb: index !== benefits.length - 1 ? 3 : 0,
                }}
              >
                <CheckCircleIcon
                  sx={{
                    color: '#FF6B35',
                    fontSize: '1.4rem',
                    flexShrink: 0,
                    mt: 0.3,
                  }}
                />
                <Typography
                  sx={{
                    color: '#333333',
                    fontSize: { xs: '0.95rem', md: '1rem' },
                    lineHeight: 1.7,
                  }}
                >
                  <strong style={{ color: '#000000' }}>
                    {benefit.split(' - ')[0]}
                  </strong>
                  {' - '}
                  {benefit.split(' - ')[1]}
                </Typography>
              </Box>
            ))}
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              mt: 8,
              p: { xs: 3, md: 5 },
              backgroundColor: '#000000',
              color: '#FFFFFF',
              borderRadius: '12px',
              textAlign: 'center',
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              Start Your Gymnastics Journey Today!
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: '#CCCCCC', lineHeight: 1.8 }}>
              Whether you're 3 years old or an adult, it's never too early or too late to discover 
              the transformative power of gymnastics. Join our community and experience the difference 
              expert training makes.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Box>
                <Typography variant="h6" sx={{ color: '#FF6B35', fontWeight: 700 }}>
                  Free Trial Class
                </Typography>
                <Typography variant="body2" sx={{ color: '#CCCCCC' }}>
                  No commitment required
                </Typography>
              </Box>
              <Box sx={{ width: '2px', backgroundColor: '#333333' }} />
              <Box>
                <Typography variant="h6" sx={{ color: '#FF6B35', fontWeight: 700 }}>
                  Expert Guidance
                </Typography>
                <Typography variant="body2" sx={{ color: '#CCCCCC' }}>
                  Certified trainers
                </Typography>
              </Box>
              <Box sx={{ width: '2px', backgroundColor: '#333333' }} />
              <Box>
                <Typography variant="h6" sx={{ color: '#FF6B35', fontWeight: 700 }}>
                  Safe Environment
                </Typography>
                <Typography variant="body2" sx={{ color: '#CCCCCC' }}>
                  Top quality equipment
                </Typography>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Importance;
