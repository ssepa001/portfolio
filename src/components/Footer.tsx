import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";

const Footer: React.FC = () => {
    const theme = useTheme();
    const currentYear = new Date().getFullYear();

    return (
        <Box
            component="footer"
            sx={{
                bgcolor:
                    theme.palette.mode === "dark"
                        ? "rgba(15, 23, 42, 0.8)"
                        : "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(20px)",
                borderTop: `1px solid ${
                    theme.palette.mode === "dark"
                        ? "rgba(255, 255, 255, 0.1)"
                        : "rgba(0, 0, 0, 0.1)"
                }`,
                py: 4,
                mt: "auto",
                width: "100%",
                position: "relative",
                zIndex: 10,
            }}
        >
            <Container maxWidth="lg">
                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                        }}
                    >
                        © {currentYear} Sam Sepasi
                    </Typography>

                    <Stack direction="row" spacing={1}>
                        <IconButton
                            aria-label="LinkedIn"
                            component="a"
                            href="https://www.linkedin.com/in/ssepa001"
                            target="_blank"
                            sx={{
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    color: theme.palette.primary.main,
                                    transform: "translateY(-4px)",
                                },
                            }}
                        >
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton
                            aria-label="GitHub"
                            component="a"
                            href="https://github.com/ssepa001"
                            target="_blank"
                            sx={{
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    color: theme.palette.primary.main,
                                    transform: "translateY(-4px)",
                                },
                            }}
                        >
                            <GitHubIcon />
                        </IconButton>
                        <IconButton
                            aria-label="Email"
                            component="a"
                            href="mailto:samssepasi@gmail.com"
                            sx={{
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    color: theme.palette.primary.main,
                                    transform: "translateY(-4px)",
                                },
                            }}
                        >
                            <EmailIcon />
                        </IconButton>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;
