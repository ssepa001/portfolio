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
    ListItemText,
    ThemeProvider,
    Toolbar,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#64ffda",
        },
        secondary: {
            main: "#8892b0",
        },
        background: {
            default: "#0a192f",
            paper: "#112240",
        },
        text: {
            primary: "#ccd6f6",
            secondary: "#8892b0",
        },
    },
    typography: {
        fontFamily: "'Poppins', sans-serif",
        h1: {
            fontWeight: 700,
            fontSize: "clamp(40px, 8vw, 80px)",
        },
        h2: {
            fontWeight: 600,
            fontSize: "clamp(30px, 6vw, 60px)",
        },
        h3: {
            fontWeight: 600,
            fontSize: "clamp(24px, 5vw, 40px)",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 0,
                    textTransform: "none",
                    fontSize: "1rem",
                    fontWeight: 500,
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: "none",
                    backgroundColor: "#112240",
                },
            },
        },
    },
});

const quotes = [
    "The best way to predict the future is to invent it. - Alan Kay",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Code is like humor. When you have to explain it, it's bad. - Cory House",
    "It's not a bug – it's an undocumented feature. - Anonymous",
    "There are two ways to write error-free programs; only the third one works. - Alan J. Perlis",
    "First, solve the problem. Then, write the code. - John Johnson",
    "Experience is the name everyone gives to their mistakes. - Oscar Wilde",
    "The best thing about a boolean is even if you are wrong you are only off by a bit. - Anonymous",
    "Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstein",
    "The only constant in the technology industry is change. - Marc Benioff",
    "The computer was born to solve problems that did not exist before. - Bill Gates",
    "Talk is cheap. Show me the code. - Linus Torvalds",
];

function App() {
    const [currentQuote, setCurrentQuote] = useState(quotes[0]);
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
        }, 8000); // Change quote every 7 seconds

        return () => clearInterval(intervalId);
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Box
                    sx={{
                        minHeight: "100vh",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <AppBar position="static" color="transparent" elevation={0}>
                        <Toolbar>
                            <Typography
                                variant="h6"
                                component={Link}
                                to="/"
                                sx={{
                                    flexGrow: 1,
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                Sam Sepasi
                            </Typography>
                            {isMobile ? (
                                <>
                                    <IconButton
                                        color="inherit"
                                        aria-label="open drawer"
                                        edge="start"
                                        onClick={() => setMobileMenuOpen(true)}
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                    <Drawer
                                        anchor="right"
                                        open={mobileMenuOpen}
                                        onClose={() => setMobileMenuOpen(false)}
                                    >
                                        <List>
                                            {[
                                                "Home",
                                                "Resume",
                                                "Projects",
                                                "Contact",
                                            ].map((text) => (
                                                <ListItem
                                                    key={text}
                                                    component={Link}
                                                    to={
                                                        text === "Home"
                                                            ? "/"
                                                            : `/${text.toLowerCase()}`
                                                    }
                                                    onClick={() =>
                                                        setMobileMenuOpen(false)
                                                    }
                                                >
                                                    <ListItemText
                                                        primary={text}
                                                    />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Drawer>
                                </>
                            ) : (
                                <>
                                    <Button
                                        color="inherit"
                                        component={Link}
                                        to="/"
                                    >
                                        Home
                                    </Button>
                                    <Button
                                        color="inherit"
                                        component={Link}
                                        to="/resume"
                                    >
                                        Resume
                                    </Button>
                                    <Button
                                        color="inherit"
                                        component={Link}
                                        to="/projects"
                                    >
                                        Projects
                                    </Button>
                                    <Button
                                        color="inherit"
                                        component={Link}
                                        to="/contact"
                                    >
                                        Contact
                                    </Button>
                                </>
                            )}
                        </Toolbar>
                    </AppBar>

                    <Container maxWidth="xl" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentQuote}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Typography
                                    variant="h6"
                                    align="center"
                                    gutterBottom
                                    color="primary"
                                    fontStyle="italic"
                                >
                                    {currentQuote}
                                </Typography>
                            </motion.div>
                        </AnimatePresence>

                        <AnimatePresence mode="wait">
                            <Routes>
                                <Route
                                    path="/"
                                    element={
                                        <motion.div
                                            key="home"
                                            initial={{ opacity: 0, x: -100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 100 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <Home />
                                        </motion.div>
                                    }
                                />
                                <Route
                                    path="/resume"
                                    element={
                                        <motion.div
                                            key="resume"
                                            initial={{ opacity: 0, x: -100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 100 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <Resume />
                                        </motion.div>
                                    }
                                />
                                <Route
                                    path="/projects"
                                    element={
                                        <motion.div
                                            key="projects"
                                            initial={{ opacity: 0, x: -100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 100 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <Projects />
                                        </motion.div>
                                    }
                                />
                                <Route
                                    path="/contact"
                                    element={
                                        <motion.div
                                            key="contact"
                                            initial={{ opacity: 0, x: -100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 100 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <Contact />
                                        </motion.div>
                                    }
                                />
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
