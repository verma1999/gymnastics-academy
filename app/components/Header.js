'use client';

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Drawer,
  IconButton,
  Box,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/navigation';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Classes', href: '/#classes' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    if (href.startsWith('/#')) {
      const elementId = href.split('#')[1];
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push(href);
    }
    setMobileOpen(false);
  };

  return (
    <AppBar
      position="absolute"
      sx={{
        backgroundColor: 'transparent',
        color: '#FFFFFF',
        boxShadow: 'none',
        zIndex: 100,
        pt: 2,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            py: 1,
          }}
        >
          {/* Logo Text Only */}
          <Box
            onClick={() => handleNavClick('/')}
            sx={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            role="button"
            aria-label="Go to home"
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
                background: 'linear-gradient(135deg, #FFFFFF 0%, #FF6B35 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
              }}
            >
              Airborne Ministry of Gymnastics
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 3,
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                sx={{
                  color: '#FFFFFF',
                  textTransform: 'uppercase',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  position: 'relative',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -4,
                    left: 0,
                    width: 0,
                    height: 2,
                    backgroundColor: '#FF6B35',
                    transition: 'width 0.3s ease',
                  },
                  '&:hover::after': {
                    width: '100%',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#FF6B35',
                color: '#FFFFFF',
                '&:hover': {
                  backgroundColor: '#E55100',
                },
              }}
            >
              Book Trial
            </Button>
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            color="inherit"
            edge="end"
            onClick={() => setMobileOpen(!mobileOpen)}
            sx={{ 
              display: { xs: 'flex', md: 'none' },
              color: '#FFFFFF'
            }}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        <Box
          sx={{
            width: 250,
            backgroundColor: '#FFFFFF',
            height: '100%',
            padding: 2,
          }}
        >
          <List>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  onClick={() => handleNavClick(item.href)}
                  sx={{
                    '&:hover': {
                      backgroundColor: '#F5F5F5',
                    },
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    sx={{
                      '& .MuiTypography-root': {
                        fontWeight: 600,
                        color: '#000000',
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding sx={{ mt: 2 }}>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: '#FF6B35',
                  color: '#FFFFFF',
                  '&:hover': {
                    backgroundColor: '#E55100',
                  },
                }}
              >
                Book Trial
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
