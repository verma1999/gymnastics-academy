'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
} from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Box sx={{ pt: 10, pb: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 3,
              fontWeight: 700,
              color: '#000000',
            }}
          >
            About Our Academy
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              mb: 6,
              color: '#666666',
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.8,
            }}
          >
            Founded on the principles of excellence, safety, and personal growth, our gymnastics 
            academy has been a beacon of athletic development in Bangalore for years. We're committed 
            to transforming lives through the discipline and joy of gymnastics.
          </Typography>
        </motion.div>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=600&h=400&fit=crop"
                alt="Our Academy"
                sx={{
                  width: '100%',
                  borderRadius: '12px',
                  boxShadow: '0 12px 32px rgba(0, 0, 0, 0.12)',
                }}
              />
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: '#000000' }}>
                  Our Mission
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, color: '#555555', lineHeight: 1.8 }}>
                  To inspire and empower individuals of all ages to discover their potential through 
                  gymnastics, building physical strength, mental resilience, and a lifetime passion 
                  for fitness and excellence.
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, mt: 4, color: '#000000' }}>
                  Our Vision
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: '#555555', lineHeight: 1.8 }}>
                  To be the leading gymnastics academy in Bangalore, recognized for producing 
                  champions, nurturing character, and creating a community where every athlete 
                  can thrive.
                </Typography>

                <Box sx={{ mt: 4 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#FF6B35' }}>
                    Core Values
                  </Typography>
                  <ul style={{ paddingLeft: '20px' }}>
                    {[
                      'Excellence in training and coaching',
                      'Safety as our top priority',
                      'Inclusivity for all ages and abilities',
                      'Personal growth and development',
                      'Community and teamwork',
                    ].map((value, index) => (
                      <li key={index} style={{ color: '#555555', marginBottom: '8px' }}>
                        {value}
                      </li>
                    ))}
                  </ul>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              p: 6,
              backgroundColor: '#000000',
              color: '#FFFFFF',
              borderRadius: '12px',
              mb: 8,
            }}
          >
            <Grid container spacing={4} textAlign="center">
              {[
                { number: '15+', label: 'Years of Excellence' },
                { number: '500+', label: 'Happy Students' },
                { number: '20+', label: 'Expert Coaches' },
                { number: '100%', label: 'Satisfaction Rate' },
              ].map((stat, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color: '#FF6B35',
                      mb: 1,
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#CCCCCC' }}>
                    {stat.label}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              mb: 4,
              fontWeight: 700,
              color: '#000000',
            }}
          >
            Why Choose Us?
          </Typography>
          <Grid container spacing={3}>
            {[
              {
                title: 'State-of-the-Art Facilities',
                description:
                  'Modern equipment, spacious training areas, and safe practice environments.',
              },
              {
                title: 'Expert Coaching Staff',
                description: 'Certified trainers with years of competitive and coaching experience.',
              },
              {
                title: 'Personalized Attention',
                description: 'Small class sizes and individualized coaching for maximum progress.',
              },
              {
                title: 'Competitive Programs',
                description: 'Train towards state and national level competitions if desired.',
              },
              {
                title: 'Flexible Schedules',
                description: 'Classes at multiple times to fit your family schedule.',
              },
              {
                title: 'Community Focus',
                description: 'Build lasting friendships and be part of a supportive family.',
              },
            ].map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    p: 3,
                    height: '100%',
                    backgroundColor: '#F5F5F5',
                    border: '2px solid #FF6B3520',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      border: '2px solid #FF6B35',
                      boxShadow: '0 8px 24px rgba(255, 107, 53, 0.15)',
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      mb: 1.5,
                      color: '#FF6B35',
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666666', lineHeight: 1.6 }}>
                    {item.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
