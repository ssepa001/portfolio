import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Button, Container, Grid, IconButton, Link, Paper, TextField, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<string>('');

  const submitForm = (ev: React.FormEvent) => {
    ev.preventDefault();
    const form = ev.target as HTMLFormElement;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 8 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center" fontWeight="bold" color="primary">
          Get in Touch
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
                <Typography variant="h5" gutterBottom color="primary">
                  Contact Information
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Link href="mailto:samssepasi@gmail.com" sx={{ display: 'flex', alignItems: 'center', mb: 1, color: 'text.primary', textDecoration: 'none' }}>
                    <EmailIcon sx={{ mr: 1 }} />
                    samssepasi@gmail.com
                  </Link>
                </Box>
                <Typography variant="body1" gutterBottom>
                  Connect with me on:
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <IconButton color="primary" aria-label="LinkedIn" component="a" href="https://www.linkedin.com/in/ssepa001" target="_blank">
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton color="primary" aria-label="GitHub" component="a" href="https://github.com/ssepa001" target="_blank">
                    <GitHubIcon />
                  </IconButton>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom color="primary">
                  Send a Message
                </Typography>
                <form
                  onSubmit={submitForm}
                  action="https://formspree.io/f/xyzgvpjz"
                  method="POST"
                >
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    variant="outlined"
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    variant="outlined"
                    margin="normal"
                    required
                    type="email"
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    variant="outlined"
                    margin="normal"
                    required
                    multiline
                    rows={4}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                    fullWidth
                  >
                    Send Message
                  </Button>
                </form>
                {status === "SUCCESS" && <Typography color="primary">Thanks for your message!</Typography>}
                {status === "ERROR" && <Typography color="error">Ooops! There was an error.</Typography>}
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Contact;