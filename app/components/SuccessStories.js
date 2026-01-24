'use client';

import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      relation: 'Mother of Arjun (Age 6)',
      text: 'My son was shy and hesitant initially, but within just 3 months he\'s transformed! He\'s now confident, stronger, and actually looks forward to every class. The instructors are amazing with the kids!',
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      relation: 'Father of Ananya (Age 9)',
      text: 'We were looking for a sport that would build both physical and mental strength. Gymnastics was the perfect choice. Ananya has developed incredible discipline and body awareness. Highly recommended!',
    },
    {
      id: 3,
      name: 'Neha Verma',
      relation: 'Mother of Rohit (Age 7)',
      text: 'The academy created such a supportive environment. Rohit has made amazing friends and loves the sense of achievement from learning new skills. The staff genuinely cares about each child\'s growth.',
    },
    {
      id: 4,
      name: 'Vikram Singh',
      relation: 'Father of Yara (Age 8)',
      text: 'As a parent, I was worried about safety, but the academy has world-class equipment and trained professionals. Yara has developed incredible flexibility and strength. It\'s an investment in her future!',
    },
  ];

  // Auto-slide testimonials every 5 seconds
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [mounted, testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
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
        backgroundColor: '#F5F5F5',
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255, 107, 53, 0.05) 35px, rgba(255, 107, 53, 0.05) 70px)',
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
            What Parents Say
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
            Real stories from parents who've seen their children transform through gymnastics training.
          </Typography>
        </motion.div>

        {/* Testimonial Carousel */}
        <Box sx={{ py: 4, maxWidth: '900px', mx: 'auto' }}>
          <Box sx={{ position: 'relative' }}>
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut',
                }}
                style={{
                  width: '100%',
                }}
              >
                <Box
                  sx={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                    p: { xs: 4, md: 6 },
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
                    border: '2px solid rgba(255, 107, 53, 0.1)',
                    minHeight: '300px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  {/* Testimonial Text */}
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      color: '#333333',
                      lineHeight: 1.8,
                      fontStyle: 'italic',
                      mb: 4,
                    }}
                  >
                    "{testimonials[currentIndex].text}"
                  </Typography>

                  {/* Author Info */}
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: '#FF6B35',
                        mb: 0.5,
                      }}
                    >
                      {testimonials[currentIndex].name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#999999',
                        fontWeight: 500,
                      }}
                    >
                      {testimonials[currentIndex].relation}
                    </Typography>
                  </Box>

                  {/* Carousel Counter */}
                  <Typography
                    variant="caption"
                    sx={{
                      color: '#CCCCCC',
                      mt: 3,
                    }}
                  >
                    {currentIndex + 1} / {testimonials.length}
                  </Typography>
                </Box>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons - Outside carousel to avoid overlap */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mt: 3,
                gap: 2,
              }}
            >
              <IconButton
                onClick={prevSlide}
                sx={{
                  backgroundColor: '#FF6B35',
                  color: '#FFFFFF',
                  '&:hover': {
                    backgroundColor: '#E55100',
                  },
                  width: { xs: '45px', md: '50px' },
                  height: { xs: '45px', md: '50px' },
                }}
              >
                <ChevronLeftIcon />
              </IconButton>
              
              {/* Spacer */}
              <Box sx={{ flex: 1 }} />
              
              <IconButton
                onClick={nextSlide}
                sx={{
                  backgroundColor: '#FF6B35',
                  color: '#FFFFFF',
                  '&:hover': {
                    backgroundColor: '#E55100',
                  },
                  width: { xs: '45px', md: '50px' },
                  height: { xs: '45px', md: '50px' },
                }}
              >
                <ChevronRightIcon />
              </IconButton>
            </Box>
          </Box>

          {/* Dot Indicators */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 1,
              mt: 4,
            }}
          >
            {testimonials.map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentIndex(index)}
                sx={{
                  width: currentIndex === index ? '12px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  backgroundColor: currentIndex === index ? '#FF6B35' : '#CCCCCC',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SuccessStories;
