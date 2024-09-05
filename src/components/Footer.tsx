import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Container, IconButton, Typography } from '@mui/material';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: 'background.paper', 
        py: 3,
        mt: 'auto',
        width: '100%'
      }}
    >
      <Container maxWidth={false} disableGutters>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', px: 2 }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Sam Sepasi. All rights reserved.
          </Typography>
          <Box>
            <IconButton color="primary" aria-label="LinkedIn" component="a" href="https://www.linkedin.com/in/ssepa001" target="_blank">
              <LinkedInIcon />
            </IconButton>
            <IconButton color="primary" aria-label="GitHub" component="a" href="https://github.com/ssepa001" target="_blank">
              <GitHubIcon />
            </IconButton>
            <IconButton color="primary" aria-label="Email" component="a" href="mailto:samssepasi@gmail.com">
              <EmailIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;