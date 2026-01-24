'use client';

import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  const galleryImages = [
    {
      id: 1,
      title: 'Young Gymnasts Training',
      image: '/IMG_0152.jpg',
      category: 'Kids Training',
    },
    {
      id: 2,
      title: 'Balance & Coordination',
      image: '/IMG_9634.jpg',
      category: 'Skills Development',
    },
    {
      id: 3,
      title: 'Team Gymnastics',
      image: '/IMG_9636.jpg',
      category: 'Teamwork',
    },
    {
      id: 4,
      title: 'Strength Training',
      image: '/IMG_9740.jpg',
      category: 'Physical Development',
    },
  ];

  // Mount tracking for hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const slideVariants = {
    enter: { opacity: 0, x: 50 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <Box
      suppressHydrationWarning
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: '#000000',
        backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255, 107, 53, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(33, 150, 243, 0.08) 0%, transparent 50%)',
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
              color: '#FFFFFF',
            }}
          >
            Gallery
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              mb: 8,
              color: '#CCCCCC',
              maxWidth: '700px',
              mx: 'auto',
              fontWeight: 300,
              lineHeight: 1.8,
            }}
          >
            Explore moments of excellence from our gymnastics academy - from beginner training to advanced achievements.
          </Typography>
        </motion.div>

        {/* Modern Carousel */}
        {mounted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Box sx={{ position: 'relative', maxWidth: '1000px', mx: 'auto' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                  style={{ width: '100%' }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: '16px',
                      height: { xs: '350px', md: '500px' },
                      boxShadow: '0 20px 60px rgba(255, 107, 53, 0.3)',
                      border: '2px solid rgba(255, 107, 53, 0.2)',
                    }}
                  >
                    <Box
                      component="img"
                      src={galleryImages[currentIndex].image}
                      alt={galleryImages[currentIndex].title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                    
                    {/* Dark overlay gradient */}
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.9) 100%)',
                        p: { xs: 3, md: 5 },
                        color: '#FFFFFF',
                      }}
                    >
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 700,
                          mb: 1,
                          color: '#FF6B35',
                        }}
                      >
                        {galleryImages[currentIndex].title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#CCCCCC',
                          mb: 2,
                        }}
                      >
                        {galleryImages[currentIndex].category}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          display: 'inline-block',
                          backgroundColor: 'rgba(255, 107, 53, 0.2)',
                          px: 2,
                          py: 1,
                          borderRadius: '20px',
                          color: '#FF6B35',
                          fontWeight: 600,
                        }}
                      >
                        {currentIndex + 1} / {galleryImages.length}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows - Below carousel */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 3,
                  mt: 5,
                }}
              >
                <IconButton
                  onClick={prevSlide}
                  sx={{
                    backgroundColor: '#FF6B35',
                    color: '#FFFFFF',
                    width: '50px',
                    height: '50px',
                    '&:hover': {
                      backgroundColor: '#FFB84D',
                      transform: 'scale(1.1)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <ChevronLeftIcon fontSize="large" />
                </IconButton>

                {/* Dot Indicators */}
                <Box sx={{ display: 'flex', gap: 1 }}>
                  {galleryImages.map((_, index) => (
                    <Box
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      sx={{
                        width: currentIndex === index ? '32px' : '10px',
                        height: '10px',
                        borderRadius: '5px',
                        backgroundColor: currentIndex === index ? '#FF6B35' : '#555555',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: '#FF6B35',
                        },
                      }}
                    />
                  ))}
                </Box>

                <IconButton
                  onClick={nextSlide}
                  sx={{
                    backgroundColor: '#FF6B35',
                    color: '#FFFFFF',
                    width: '50px',
                    height: '50px',
                    '&:hover': {
                      backgroundColor: '#FFB84D',
                      transform: 'scale(1.1)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <ChevronRightIcon fontSize="large" />
                </IconButton>
              </Box>
            </Box>
          </motion.div>
        )}
      </Container>
    </Box>
  );
};

export default Gallery;
