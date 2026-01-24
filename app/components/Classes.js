'use client';

import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Classes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Track image load errors for slides that include an image
  const [imageError, setImageError] = useState(false);

  // Reset image error when changing slides so each slide's image is checked independently
  useEffect(() => {
    setImageError(false);
  }, [currentIndex]);

  const classesData = [
    {
      id: 1,
      title: 'Toddlers',
      age: 'Toddlers: 2.5 – 5 years',
      description: 'Perfect first step! Build confidence and essential motor skills through playful gymnastics activities.',
      features: [
        'Fundamental movement skills',
        'Balance and coordination',
        'Fun-based learning approach',
        'Safe, supervised environment',
      ],
      image: '/toddlers.jpg',
    },
    {
      id: 2,
      title: 'Kids',
      age: 'Kids: 5 – 8 years',
      description: 'Build strength, flexibility, and confidence while learning essential life skills through structured training.',
      features: [
        'Artistic gymnastics basics',
        'Strength & flexibility training',
        'Competition readiness programs',
        'Team building & friendships',
      ],
      image: '/kids.jpg',
    },
    {
      id: 3,
      title: 'Juniors',
      age: 'Juniors: 8 – 12 years',
      description: 'Progressive training for juniors focused on skill development, strength, and coordination.',
      features: [
        'Skill progressions & technique',
        'Strength & flexibility',
        'Competition preparation',
        'Teamwork and discipline',
      ],
      image: '/juniors.jpg',
    },
    {
      id: 4,
      title: 'Teens',
      age: 'Teens: 12 – 16 years',
      description: 'Programs for teens focused on advanced skills, conditioning, and safe progression.',
      features: [
        'Progressive skill development',
        'Strength & mobility-focused sessions',
        'Advanced conditioning & spotting',
        'Group & private coaching options',
      ],
      image: '/teens.jpg',
    },
    {
      id: 5,
      title: 'Adult Intermediate & Advanced',
      age: 'Adults: 16+ years',
      description: 'Comprehensive adult programs — from intermediate to advanced — focused on strength, mobility, skill progressions, and safe coaching.',
      features: [
        'Progressive skill development',
        'Strength & mobility-focused sessions',
        'Advanced conditioning & spotting',
        'Group & private coaching options',
      ],
      image: '/adult-classes.jpg',
    },
  ];

  // Auto-scroll carousel every 5 seconds
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % classesData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [mounted, classesData.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + classesData.length) % classesData.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % classesData.length);
  };

  const slideVariants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <Box
      id="classes"
      suppressHydrationWarning
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: '#F5F5F5',
        backgroundImage: 'linear-gradient(135deg, transparent 25%, rgba(255, 107, 53, 0.05) 25%, rgba(255, 107, 53, 0.05) 50%, transparent 50%, transparent 75%, rgba(255, 107, 53, 0.05) 75%, rgba(255, 107, 53, 0.05))',
        backgroundSize: '60px 60px',
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
            Our Classes
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              mb: 6,
              color: '#666666',
              maxWidth: '600px',
              mx: 'auto',
              fontWeight: 300,
            }}
          >
            Age-specific programs designed to help your child develop confidence, strength, and vital motor skills in a safe, supportive environment.
          </Typography>
        </motion.div>

        {/* Carousel Container */}
        <Box sx={{ position: 'relative', py: 4, maxWidth: '900px', mx: 'auto', minHeight: { xs: '820px', md: '500px' } }}>
          <AnimatePresence initial={false} custom={currentIndex}>
            <motion.div
              key={currentIndex}
              custom={currentIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              style={{ position: 'relative', width: '100%' }}
            >
              <Box
                sx={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                  p: { xs: 3, md: 5 },
                  textAlign: { xs: 'center', md: 'left' },
                  minHeight: { xs: 'auto', md: '500px' },
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  alignItems: 'center',
                  gap: 3,
                  border: '2px solid #FF6B35',
                }}
              >
                {/* Optional image (for slides that include image) with error fallback */}
                {classesData[currentIndex].image && !imageError && (
                  <Box
                    component="img"
                    src={classesData[currentIndex].image}
                    alt={classesData[currentIndex].title}
                    onError={() => setImageError(true)}
                    onLoad={() => setImageError(false)}
                    sx={{
                      width: { xs: '100%', md: '45%' },
                      height: { xs: '220px', md: '380px' },
                      objectFit: 'cover',
                      borderRadius: '8px',
                      flexShrink: 0,
                    }}
                  />
                )}

                {/* Fallback message when image is missing or fails to load */}
                {classesData[currentIndex].image && imageError && (
                  <Box
                    sx={{
                      width: { xs: '100%', md: '45%' },
                      height: { xs: '220px', md: '380px' },
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '8px',
                      backgroundColor: '#FFF3E6',
                      color: '#E55100',
                      p: 2,
                      textAlign: 'center',
                    }}
                  >
                    <div>
                      <strong>Image failed to load</strong>
                      <div style={{ marginTop: 6, color: '#666', fontSize: '0.95rem' }}>
                        Place the photo in the project's public folder as:
                        <br />
                        <code>/public/[toddlers|kids|juniors|teens|adult-classes].jpg</code>
                        <br />
                        Check filename (case-sensitive), extension (.jpg/.jpeg/.png), then restart the dev server.
                      </div>
                    </div>
                  </Box>
                )}

                <Box sx={{ flex: 1 }}>
                  {/* Age Badge */}
                  <Box
                    sx={{
                      display: 'inline-block',
                      backgroundColor: '#FF6B35',
                      color: '#FFFFFF',
                      px: 3,
                      py: 1,
                      borderRadius: '50px',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      mb: 2,
                    }}
                  >
                    {classesData[currentIndex].age}
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      color: '#000000',
                      mb: 2,
                      fontSize: { xs: '1.6rem', md: '2.2rem' },
                    }}
                  >
                    {classesData[currentIndex].title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#666666',
                      mb: 4,
                      lineHeight: 1.8,
                      maxWidth: '700px',
                      fontSize: { xs: '0.95rem', md: '1.05rem' },
                    }}
                  >
                    {classesData[currentIndex].description}
                  </Typography>

                  {/* Features */}
                  <Box sx={{ textAlign: 'left', maxWidth: '600px', mb: 4 }}>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        color: '#000000',
                        mb: 2,
                        fontSize: '1.05rem',
                      }}
                    >
                      Program Benefits:
                    </Typography>
                    {classesData[currentIndex].features.map((feature, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                          mb: 1.5,
                        }}
                      >
                        <CheckCircleIcon
                          sx={{
                            color: '#FF6B35',
                            fontSize: '1.3rem',
                            flexShrink: 0,
                          }}
                        />
                        <Typography
                          sx={{
                            color: '#555555',
                            fontSize: '0.95rem',
                          }}
                        >
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  {/* CTA Button */}
                  <Button
                    href="#contact"
                    sx={{
                      backgroundColor: '#FF6B35',
                      color: '#FFFFFF',
                      px: 4,
                      py: 1.2,
                      borderRadius: '50px',
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      '&:hover': {
                        backgroundColor: '#FF6B35',
                        opacity: 0.9,
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Inquire Now
                  </Button>
                </Box>
              </Box>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <Button
            onClick={goToPrevious}
            sx={{
              position: 'absolute',
              left: { xs: -40, md: -60 },
              top: '50%',
              transform: 'translateY(-50%)',
              minWidth: 'auto',
              p: 1,
              color: '#FF6B35',
              '&:hover': { backgroundColor: 'rgba(255, 107, 53, 0.1)' },
            }}
          >
            <ChevronLeftIcon sx={{ fontSize: '2rem' }} />
          </Button>

          <Button
            onClick={goToNext}
            sx={{
              position: 'absolute',
              right: { xs: -40, md: -60 },
              top: '50%',
              transform: 'translateY(-50%)',
              minWidth: 'auto',
              p: 1,
              color: '#FF6B35',
              '&:hover': { backgroundColor: 'rgba(255, 107, 53, 0.1)' },
            }}
          >
            <ChevronRightIcon sx={{ fontSize: '2rem' }} />
          </Button>

          {/* Dot Indicators */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 1.5,
              mt: 4,
            }}
          >
            {classesData.map((_, idx) => (
              <Box
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                sx={{
                  width: currentIndex === idx ? '28px' : '12px',
                  height: '12px',
                  borderRadius: '50px',
                  backgroundColor: currentIndex === idx ? '#FF6B35' : '#D0D0D0',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#FF6B35',
                  },
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              mt: { xs: 14, md: 10 },
              p: 4,
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
              border: '2px solid #FF6B35',
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 4,
                color: '#000000',
              }}
            >
              Why Choose Our Academy?
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' },
                gap: 3,
              }}
            >
              {[
                { title: 'Expert Coaches', desc: 'Certified and experienced trainers dedicated to your growth' },
                { title: 'Safety First', desc: 'State-of-the-art equipment and safety protocols' },
                { title: 'Personal Growth', desc: 'Build confidence, discipline, and lifelong skills' },
                { title: 'Community', desc: 'Join a supportive family of athletes and enthusiasts' },
              ].map((item, idx) => (
                <Box key={idx}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      color: '#FF6B35',
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666666',
                      fontSize: '0.9rem',
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Classes;
