import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send";
import {
    Box,
    Button,
    Container,
    IconButton,
    Paper,
    Stack,
    TextField,
    Typography,
    useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import React, { useState } from "react";

const Contact: React.FC = () => {
    const theme = useTheme();
    const [status, setStatus] = useState<string>("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

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
                setFormData({ name: "", email: "", message: "" });
                setStatus("SUCCESS");
                setTimeout(() => setStatus(""), 5000);
            } else {
                setStatus("ERROR");
                setTimeout(() => setStatus(""), 5000);
            }
        };
        xhr.send(data);
    };

    const socialLinks = [
        {
            icon: <LinkedInIcon sx={{ fontSize: 32 }} />,
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/ssepa001",
            color: "#0077b5",
        },
        {
            icon: <GitHubIcon sx={{ fontSize: 32 }} />,
            label: "GitHub",
            href: "https://github.com/ssepa001",
            color: theme.palette.mode === "dark" ? "#fff" : "#333",
        },
        {
            icon: <EmailIcon sx={{ fontSize: 32 }} />,
            label: "Email",
            href: "mailto:samssepasi@gmail.com",
            color: theme.palette.secondary.main,
        },
    ];

    return (
        <Container maxWidth="md">
            <Box sx={{ py: { xs: 6, md: 10 } }}>
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Typography
                        variant="h2"
                        component="h1"
                        align="center"
                        fontWeight="bold"
                        sx={{
                            mb: 2,
                            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Get In Touch
                    </Typography>
                    <Typography
                        variant="h6"
                        align="center"
                        color="text.secondary"
                        sx={{ mb: 8, maxWidth: "600px", mx: "auto" }}
                    >
                        Have a project in mind or just want to chat? I'd love to
                        hear from you. Let's create something amazing together.
                    </Typography>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Stack
                        direction="row"
                        spacing={3}
                        justifyContent="center"
                        sx={{ mb: 6 }}
                    >
                        {socialLinks.map((link, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.1, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <IconButton
                                    component="a"
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        width: 70,
                                        height: 70,
                                        background:
                                            theme.palette.background.paper,
                                        border: `2px solid ${theme.palette.primary.main}40`,
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            background: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
                                            borderColor:
                                                theme.palette.primary.main,
                                            boxShadow: `0 8px 24px ${theme.palette.primary.main}40`,
                                        },
                                    }}
                                    aria-label={link.label}
                                >
                                    {link.icon}
                                </IconButton>
                            </motion.div>
                        ))}
                    </Stack>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <Paper
                        elevation={3}
                        sx={{
                            p: { xs: 3, md: 5 },
                            background: theme.palette.background.paper,
                            position: "relative",
                            overflow: "hidden",
                            "&::before": {
                                content: '""',
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                height: 4,
                                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                            },
                        }}
                    >
                        <Typography
                            variant="h4"
                            gutterBottom
                            fontWeight="bold"
                            color="primary"
                            sx={{ mb: 4 }}
                        >
                            Send a Message
                        </Typography>
                        <form
                            onSubmit={submitForm}
                            action="https://formspree.io/f/xyzgvpjz"
                            method="POST"
                        >
                            <TextField
                                fullWidth
                                label="Your Name"
                                name="name"
                                variant="outlined"
                                margin="normal"
                                required
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        name: e.target.value,
                                    })
                                }
                                sx={{
                                    mb: 3,
                                    "& .MuiOutlinedInput-root": {
                                        "&:hover fieldset": {
                                            borderColor:
                                                theme.palette.primary.main,
                                        },
                                        "&.Mui-focused fieldset": {
                                            borderWidth: 2,
                                        },
                                    },
                                }}
                            />
                            <TextField
                                fullWidth
                                label="Your Email"
                                name="email"
                                variant="outlined"
                                margin="normal"
                                required
                                type="email"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        email: e.target.value,
                                    })
                                }
                                sx={{
                                    mb: 3,
                                    "& .MuiOutlinedInput-root": {
                                        "&:hover fieldset": {
                                            borderColor:
                                                theme.palette.primary.main,
                                        },
                                        "&.Mui-focused fieldset": {
                                            borderWidth: 2,
                                        },
                                    },
                                }}
                            />
                            <TextField
                                fullWidth
                                label="Your Message"
                                name="message"
                                variant="outlined"
                                margin="normal"
                                required
                                multiline
                                rows={6}
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        message: e.target.value,
                                    })
                                }
                                sx={{
                                    mb: 3,
                                    "& .MuiOutlinedInput-root": {
                                        "&:hover fieldset": {
                                            borderColor:
                                                theme.palette.primary.main,
                                        },
                                        "&.Mui-focused fieldset": {
                                            borderWidth: 2,
                                        },
                                    },
                                }}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                size="large"
                                fullWidth
                                endIcon={<SendIcon />}
                                sx={{
                                    py: 1.5,
                                    fontSize: "1.1rem",
                                }}
                            >
                                Send Message
                            </Button>
                        </form>
                        {status === "SUCCESS" && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <Box
                                    sx={{
                                        mt: 3,
                                        p: 2,
                                        borderRadius: 2,
                                        background: `${theme.palette.primary.main}20`,
                                        border: `1px solid ${theme.palette.primary.main}`,
                                    }}
                                >
                                    <Typography
                                        color="primary"
                                        fontWeight={600}
                                    >
                                        ✓ Thanks for your message! I'll get back
                                        to you soon.
                                    </Typography>
                                </Box>
                            </motion.div>
                        )}
                        {status === "ERROR" && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <Box
                                    sx={{
                                        mt: 3,
                                        p: 2,
                                        borderRadius: 2,
                                        background: `${theme.palette.error.main}20`,
                                        border: `1px solid ${theme.palette.error.main}`,
                                    }}
                                >
                                    <Typography color="error" fontWeight={600}>
                                        ✗ Oops! Something went wrong. Please try
                                        again.
                                    </Typography>
                                </Box>
                            </motion.div>
                        )}
                    </Paper>
                </motion.div>

                {/* Direct Contact Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <Box
                        sx={{
                            mt: 6,
                            p: 4,
                            textAlign: "center",
                            borderRadius: 4,
                            background: `linear-gradient(135deg, ${theme.palette.primary.main}10, ${theme.palette.secondary.main}10)`,
                            border: `1px solid ${theme.palette.primary.main}30`,
                        }}
                    >
                        <Typography variant="h6" gutterBottom fontWeight={600}>
                            Or reach me directly at
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{
                                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                fontWeight: 700,
                            }}
                        >
                            samssepasi@gmail.com
                        </Typography>
                    </Box>
                </motion.div>
            </Box>
        </Container>
    );
};

export default Contact;
