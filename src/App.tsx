import CloseIcon from "@mui/icons-material/Close";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import {
    AppBar,
    Box,
    Button,
    Container,
    createTheme,
    CssBaseline,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    Stack,
    ThemeProvider,
    Toolbar,
    Typography,
    useMediaQuery,
    useScrollTrigger,
} from "@mui/material";
import { AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Link, Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

const getTheme = (mode: 'light' | 'dark') => createTheme({
    palette: {
        mode,
        ...(mode === 'dark' ? {
            primary: {
                main: "#4fdbc8",
                light: "#71f8e4",
                dark: "#14b8a6",
            },
            secondary: {
                main: "#ffb95f",
                light: "#ffddb8",
                dark: "#ee9800",
            },
            background: {
                default: "#0b1326",
                paper: "rgba(34, 42, 61, 0.75)",
            },
            text: {
                primary: "#dae2fd",
                secondary: "#bbcac6",
            },
        } : {
            primary: {
                main: "#0d9488",
                light: "#14b8a6",
                dark: "#0f766e",
            },
            secondary: {
                main: "#ea580c",
                light: "#f97316",
                dark: "#c2410c",
            },
            background: {
                default: "#f8fafc",
                paper: "rgba(255, 255, 255, 0.9)",
            },
            text: {
                primary: "#0f172a",
                secondary: "#475569",
            },
        }),
    },
    typography: {
        fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
        h1: {
            fontFamily: "'Space Grotesk', 'Inter', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2.5rem, 8vw, 5rem)",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
        },
        h2: {
            fontFamily: "'Space Grotesk', 'Inter', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(2rem, 6vw, 3.5rem)",
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
        },
        h3: {
            fontFamily: "'Space Grotesk', 'Inter', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
            letterSpacing: "-0.01em",
        },
        h4: {
            fontFamily: "'Space Grotesk', 'Inter', sans-serif",
            fontWeight: 600,
            fontSize: "clamp(1.25rem, 4vw, 2rem)",
        },
        h5: {
            fontFamily: "'Space Grotesk', 'Inter', sans-serif",
            fontWeight: 600,
        },
        h6: {
            fontFamily: "'Space Grotesk', 'Inter', sans-serif",
            fontWeight: 600,
        },
        body1: {
            fontSize: "1.125rem",
            lineHeight: 1.8,
        },
    },
    shape: {
        borderRadius: 16,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "10px",
                    textTransform: "none",
                    fontFamily: "'Space Grotesk', 'Inter', sans-serif",
                    fontSize: "1rem",
                    fontWeight: 600,
                    padding: "12px 28px",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                },
                contained: {
                    color: mode === 'dark' ? "#003731" : "#ffffff",
                    boxShadow: mode === 'dark'
                        ? "0 4px 20px rgba(79, 219, 200, 0.25)"
                        : "0 4px 14px rgba(13, 148, 136, 0.39)",
                    "&:hover": {
                        boxShadow: mode === 'dark'
                            ? "0 8px 30px rgba(79, 219, 200, 0.4)"
                            : "0 6px 20px rgba(13, 148, 136, 0.5)",
                        transform: "translateY(-2px)",
                    },
                },
                outlined: {
                    borderWidth: "1.5px",
                    "&:hover": {
                        borderWidth: "1.5px",
                        transform: "translateY(-2px)",
                        boxShadow: mode === 'dark'
                            ? "0 4px 20px rgba(79, 219, 200, 0.15)"
                            : "none",
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: "none",
                    backdropFilter: "blur(12px)",
                    border: mode === 'dark'
                        ? "1px solid rgba(60, 73, 71, 0.4)"
                        : "1px solid rgba(0, 0, 0, 0.05)",
                    boxShadow: mode === 'dark'
                        ? "0 20px 40px rgba(20, 184, 166, 0.06)"
                        : "0 4px 24px rgba(0,0,0,0.06)",
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backdropFilter: "blur(12px)",
                    border: mode === 'dark'
                        ? "1px solid rgba(60, 73, 71, 0.4)"
                        : "1px solid rgba(0, 0, 0, 0.05)",
                    boxShadow: mode === 'dark'
                        ? "0 20px 40px rgba(20, 184, 166, 0.06)"
                        : "none",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                },
            },
        },
    },
});


function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function App() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mode, setMode] = useState<'light' | 'dark'>('dark');
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const isMobile = useMediaQuery('(max-width:900px)');
    
    const theme = useMemo(() => getTheme(mode), [mode]);

    useEffect(() => {
        const savedMode = localStorage.getItem('themeMode') as 'light' | 'dark';
        if (savedMode) {
            setMode(savedMode);
        } else {
            setMode(prefersDarkMode ? 'dark' : 'light');
        }
    }, [prefersDarkMode]);

    const toggleTheme = () => {
        const newMode = mode === 'dark' ? 'light' : 'dark';
        setMode(newMode);
        localStorage.setItem('themeMode', newMode);
    };

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 50,
    });

    const navItems = [
        { label: "Home", path: "/" },
        { label: "Resume", path: "/resume" },
        { label: "Projects", path: "/projects" },
        { label: "Contact", path: "/contact" },
    ];

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <ScrollToTop />
                <Box
                    sx={{
                        minHeight: "100vh",
                        display: "flex",
                        flexDirection: "column",
                        background: mode === 'dark'
                            ? "#0b1326"
                            : "linear-gradient(135deg, #f8fafc 0%, #e0f2f1 50%, #f8fafc 100%)",
                        position: "relative",
                        overflow: "hidden",
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: mode === 'dark'
                                ? "radial-gradient(ellipse at 15% 40%, rgba(79, 219, 200, 0.07) 0%, transparent 55%), radial-gradient(ellipse at 85% 75%, rgba(255, 185, 95, 0.07) 0%, transparent 55%)"
                                : "radial-gradient(circle at 20% 50%, rgba(13, 148, 136, 0.06) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(234, 88, 12, 0.06) 0%, transparent 50%)",
                            zIndex: 0,
                            pointerEvents: "none",
                        },
                    }}
                >
                    <AppBar
                        position="sticky"
                        elevation={0}
                        sx={{
                            background: mode === 'dark'
                                ? "rgba(19, 27, 46, 0.75)"
                                : "rgba(255, 255, 255, 0.85)",
                            backdropFilter: "blur(24px)",
                            borderBottom: mode === 'dark'
                                ? "1px solid rgba(60, 73, 71, 0.25)"
                                : "1px solid rgba(0, 0, 0, 0.06)",
                            transition: "all 0.3s ease-in-out",
                            boxShadow: trigger
                                ? mode === 'dark'
                                    ? "0 4px 24px rgba(0,0,0,0.3)"
                                    : "0 4px 24px rgba(0,0,0,0.08)"
                                : "none",
                            color: mode === 'dark' ? '#dae2fd' : '#0f172a',
                        }}
                    >
                        <Toolbar sx={{ justifyContent: "space-between" }}>
                            <Typography
                                variant="h6"
                                component={Link}
                                to="/"
                                sx={{
                                    textDecoration: "none",
                                    color: "inherit",
                                    fontWeight: 700,
                                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    fontSize: "1.5rem",
                                }}
                            >
                                Sam Sepasi
                            </Typography>
                            
                            <Stack direction="row" spacing={1} alignItems="center">
                                <IconButton 
                                    onClick={toggleTheme} 
                                    color="inherit"
                                    sx={{ 
                                        mr: 1,
                                        transition: "transform 0.3s ease",
                                        "&:hover": { transform: "rotate(180deg)" }
                                    }}
                                >
                                    {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
                                </IconButton>
                                
                                {isMobile ? (
                                    <IconButton
                                        color="inherit"
                                        onClick={() => setMobileMenuOpen(true)}
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                ) : (
                                    <Stack direction="row" spacing={1}>
                                        {navItems.map((item) => (
                                            <Button
                                                key={item.path}
                                                color="inherit"
                                                component={Link}
                                                to={item.path}
                                                sx={{
                                                    position: "relative",
                                                    "&::after": {
                                                        content: '""',
                                                        position: "absolute",
                                                        bottom: 0,
                                                        left: "50%",
                                                        transform: "translateX(-50%)",
                                                        width: 0,
                                                        height: "2px",
                                                        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                                        transition: "width 0.3s ease",
                                                    },
                                                    "&:hover::after": {
                                                        width: "80%",
                                                    },
                                                }}
                                            >
                                                {item.label}
                                            </Button>
                                        ))}
                                    </Stack>
                                )}
                            </Stack>
                        </Toolbar>
                    </AppBar>

                    <Drawer
                        anchor="right"
                        open={mobileMenuOpen}
                        onClose={() => setMobileMenuOpen(false)}
                        PaperProps={{
                            sx: {
                                width: "75%",
                                maxWidth: "300px",
                                background: mode === 'dark'
                                    ? "rgba(30, 41, 59, 0.95)"
                                    : "rgba(255, 255, 255, 0.95)",
                                backdropFilter: "blur(20px)",
                            },
                        }}
                    >
                        <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
                            <IconButton onClick={() => setMobileMenuOpen(false)}>
                                <CloseIcon />
                            </IconButton>
                        </Box>
                        <List>
                            {navItems.map((item) => (
                                <ListItem key={item.path} disablePadding>
                                    <ListItemButton
                                        component={Link}
                                        to={item.path}
                                        onClick={() => setMobileMenuOpen(false)}
                                        sx={{
                                            py: 2,
                                            px: 3,
                                            "&:hover": {
                                                background: `linear-gradient(90deg, ${theme.palette.primary.main}20, transparent)`,
                                            },
                                        }}
                                    >
                                        <Typography variant="h6">{item.label}</Typography>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Drawer>

                    <Container 
                        maxWidth="xl" 
                        sx={{ 
                            mt: 2, 
                            mb: 4, 
                            flexGrow: 1,
                            position: "relative",
                            zIndex: 1,
                        }}
                    >
                        <AnimatePresence mode="wait">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/resume" element={<Resume />} />
                                <Route path="/projects" element={<Projects />} />
                                <Route path="/contact" element={<Contact />} />
                            </Routes>
                        </AnimatePresence>
                    </Container>

                    <Footer />
                </Box>
            </Router>
        </ThemeProvider>
    );
}

export default App;
