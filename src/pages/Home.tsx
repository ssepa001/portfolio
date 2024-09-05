import CodeIcon from "@mui/icons-material/Code";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import {
    Avatar,
    Box,
    Button,
    Container,
    Typography,
    useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid"; // Updated import
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
    const theme = useTheme();

    return (
        <Box sx={{ width: "100%", overflowX: "hidden" }}>
            <Container maxWidth="xl" disableGutters>
                <Box
                    sx={{
                        minHeight: "100vh",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        py: 8,
                    }}
                >
                    <Grid container spacing={3} alignItems="center">
                        <Grid item xs={12} md={8}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Typography
                                    variant="h5"
                                    component="h2"
                                    sx={{
                                        color: theme.palette.primary.main,
                                        mb: 2,
                                    }}
                                >
                                    Hi, my name is
                                </Typography>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <Typography
                                    variant="h1"
                                    component="h1"
                                    sx={{ mb: 2 }}
                                >
                                    Sam Sepasi.
                                </Typography>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <Typography
                                    variant="h2"
                                    component="h2"
                                    color="secondary"
                                    sx={{ mb: 4 }}
                                >
                                    I build things for the web.
                                </Typography>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <Typography
                                    variant="body1"
                                    sx={{ maxWidth: "600px", mb: 6 }}
                                >
                                    I'm a Senior Staff Software Engineer
                                    specializing in building exceptional digital
                                    experiences. Currently, I'm focused on
                                    creating scalable and efficient applications
                                    that deliver outstanding user experiences.
                                </Typography>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <Grid container spacing={2}>
                                    <Grid item>
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            size="large"
                                            component={Link}
                                            to="/projects"
                                            startIcon={<CodeIcon />}
                                        >
                                            Projects
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            size="large"
                                            component={Link}
                                            to="/resume"
                                            startIcon={<PersonIcon />}
                                        >
                                            Resume
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            size="large"
                                            component={Link}
                                            to="/contact"
                                            startIcon={<EmailIcon />}
                                        >
                                            Contact
                                        </Button>
                                    </Grid>
                                </Grid>
                            </motion.div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Avatar
                                    alt="Sam Sepasi"
                                    src="/images/profileImage.jpg"
                                    sx={{
                                        width: { xs: 200, md: 300 },
                                        height: { xs: 200, md: 300 },
                                        margin: "auto",
                                        border: `4px solid ${theme.palette.primary.main}`,
                                        boxShadow: `0 0 20px ${theme.palette.primary.main}`,
                                    }}
                                />
                            </motion.div>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Home;
