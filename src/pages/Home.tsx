import CodeIcon from "@mui/icons-material/Code";
import EmailIcon from "@mui/icons-material/Email";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import PsychologyIcon from "@mui/icons-material/Psychology";
import VerifiedIcon from "@mui/icons-material/Verified";
import {
    Avatar,
    Box,
    Button,
    Container,
    Paper,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

const featureCards = [
    {
        icon: <PsychologyIcon sx={{ fontSize: 36 }} />,
        title: "AI-Augmented Development",
        description:
            "I use Claude, Cursor, and custom LLM pipelines to 10x engineering throughput — with rigorous review gates to ensure every line is production-ready.",
        color: "#4fdbc8",
    },
    {
        icon: <LockIcon sx={{ fontSize: 36 }} />,
        title: "Security-First Engineering",
        description:
            "Every architecture decision considers HIPAA, PCI compliance, and zero-trust principles. AI accelerates output — security is never the tradeoff.",
        color: "#ffb95f",
    },
    {
        icon: <VerifiedIcon sx={{ fontSize: 36 }} />,
        title: "Quality at Scale",
        description:
            "50% QA cycle reduction through AI-assisted automated testing, code review culture, and CI/CD discipline across concurrent client projects.",
        color: "#4fdbc8",
    },
];

const FloatingElement = ({ delay = 0 }: { delay?: number }) => {
    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: [-20, 20, -20] }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay,
            }}
            style={{
                position: "absolute",
                width: "150px",
                height: "150px",
                borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                background:
                    "linear-gradient(135deg, rgba(20, 184, 166, 0.08), rgba(245, 158, 11, 0.08))",
                filter: "blur(40px)",
                zIndex: 0,
            }}
        />
    );
};

const Home: React.FC = () => {
    const theme = useTheme();
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <Box ref={containerRef} sx={{ width: "100%", overflow: "hidden" }}>
            <Container maxWidth="xl" disableGutters>

                <Box
                    sx={{
                        minHeight: "calc(100vh - 120px)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        position: "relative",
                        py: { xs: 8, md: 12 },
                    }}
                >
                    {/* Floating Background Elements */}
                    <FloatingElement delay={0} />
                    <Box
                        sx={{
                            position: "absolute",
                            top: "20%",
                            right: "10%",
                            zIndex: 0,
                        }}
                    >
                        <FloatingElement delay={1} />
                    </Box>
                    <Box
                        sx={{
                            position: "absolute",
                            bottom: "20%",
                            left: "15%",
                            zIndex: 0,
                        }}
                    >
                        <FloatingElement delay={2} />
                    </Box>

                    <motion.div style={{ y, opacity }}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: {
                                    xs: "column-reverse",
                                    md: "row",
                                },
                                alignItems: "center",
                                gap: { xs: 6, md: 8 },
                                position: "relative",
                                zIndex: 1,
                            }}
                        >
                            <Box sx={{ flex: 1, px: { xs: 2, md: 4 } }}>
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            color: theme.palette.primary.main,
                                            mb: 1,
                                            fontWeight: 600,
                                            letterSpacing: "0.5px",
                                        }}
                                    >
                                        Hey there, I'm
                                    </Typography>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                >
                                    <Typography
                                        variant="h1"
                                        component="h1"
                                        sx={{
                                            mb: 3,
                                            fontWeight: 800,
                                            background: `linear-gradient(120deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 50%, ${theme.palette.secondary.main} 100%)`,
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                            backgroundClip: "text",
                                            backgroundSize: "200% auto",
                                        }}
                                    >
                                        Sam Sepasi.
                                    </Typography>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                >
                                    <Typography
                                        variant="h2"
                                        component="h2"
                                        sx={{
                                            mb: 4,
                                            fontWeight: 700,
                                            color: theme.palette.text.primary,
                                        }}
                                    >
                                        I engineer{" "}
                                        <Box
                                            component="span"
                                            sx={{
                                                background: `linear-gradient(120deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                                backgroundClip: "text",
                                                fontWeight: 800,
                                            }}
                                        >
                                            smarter — with AI.
                                        </Box>
                                    </Typography>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                >
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            maxWidth: "600px",
                                            mb: 5,
                                            lineHeight: 1.8,
                                            fontSize: "1.125rem",
                                            color: theme.palette.text.secondary,
                                            fontWeight: 400,
                                        }}
                                    >
                                        Senior Staff Engineer & AI Usage Expert with 10+ years shipping production systems.
                                        I leverage AI-powered workflows — Claude, Cursor, and custom LLM pipelines — to
                                        multiply team output and accelerate delivery, without sacrificing security or code quality.
                                        From real-money wagering platforms to nationwide telehealth systems, I turn complex
                                        problems into elegant, scalable solutions.
                                    </Typography>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                >
                                    <Stack
                                        direction={{ xs: "column", sm: "row" }}
                                        spacing={2}
                                    >
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            size="large"
                                            component={Link}
                                            to="/projects"
                                            startIcon={<CodeIcon />}
                                            sx={{
                                                px: 4,
                                                py: 1.5,
                                            }}
                                        >
                                            See My Work
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            size="large"
                                            component={Link}
                                            to="/resume"
                                            startIcon={<PersonIcon />}
                                            sx={{
                                                px: 4,
                                                py: 1.5,
                                            }}
                                        >
                                            Resume
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            color="secondary"
                                            size="large"
                                            component={Link}
                                            to="/contact"
                                            startIcon={<EmailIcon />}
                                            sx={{
                                                px: 4,
                                                py: 1.5,
                                            }}
                                        >
                                            Let's Talk
                                        </Button>
                                    </Stack>
                                </motion.div>
                            </Box>

                            <Box
                                sx={{
                                    flex: { xs: "none", md: 1 },
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    position: "relative",
                                }}
                            >
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        scale: 0.5,
                                        rotate: -10,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                        rotate: 0,
                                    }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                >
                                    <Box
                                        sx={{
                                            position: "relative",
                                            "&::before": {
                                                content: '""',
                                                position: "absolute",
                                                top: "-20px",
                                                left: "-20px",
                                                right: "-20px",
                                                bottom: "-20px",
                                                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                                borderRadius: "50%",
                                                filter: "blur(30px)",
                                                opacity: 0.3,
                                                animation:
                                                    "pulse 3s ease-in-out infinite",
                                            },
                                            "@keyframes pulse": {
                                                "0%, 100%": {
                                                    opacity: 0.3,
                                                    transform: "scale(1)",
                                                },
                                                "50%": {
                                                    opacity: 0.5,
                                                    transform: "scale(1.05)",
                                                },
                                            },
                                        }}
                                    >
                                        <Avatar
                                            alt="Sam Sepasi"
                                            src="/images/profileImage.jpg"
                                            sx={{
                                                width: {
                                                    xs: 220,
                                                    sm: 280,
                                                    md: 350,
                                                },
                                                height: {
                                                    xs: 220,
                                                    sm: 280,
                                                    md: 350,
                                                },
                                                border: `4px solid ${theme.palette.primary.main}`,
                                                boxShadow: `0 0 40px ${theme.palette.primary.main}50`,
                                                position: "relative",
                                                zIndex: 1,
                                            }}
                                        />
                                    </Box>
                                </motion.div>
                            </Box>
                        </Box>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 1,
                            delay: 1.2,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                        style={{
                            position: "absolute",
                            bottom: "20px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            zIndex: 1,
                        }}
                    >
                        <KeyboardArrowDownIcon
                            sx={{
                                fontSize: 40,
                                color: theme.palette.primary.main,
                            }}
                        />
                    </motion.div>
                </Box>

                {/* Feature Cards */}
                <Box sx={{ px: { xs: 2, md: 4 }, pb: { xs: 8, md: 12 } }}>
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "1fr",
                                md: "repeat(3, 1fr)",
                            },
                            gap: 3,
                        }}
                    >
                        {featureCards.map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                            >
                                <Paper
                                    sx={{
                                        p: { xs: 3, md: 4 },
                                        height: "100%",
                                        background: theme.palette.mode === "dark"
                                            ? "rgba(34, 42, 61, 0.6)"
                                            : theme.palette.background.paper,
                                        position: "relative",
                                        overflow: "hidden",
                                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                        "&:hover": {
                                            transform: "translateY(-6px)",
                                            boxShadow: `0 24px 48px rgba(20, 184, 166, 0.12)`,
                                        },
                                        "&::before": {
                                            content: '""',
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            height: "3px",
                                            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            color: card.color,
                                            mb: 2,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            width: 64,
                                            height: 64,
                                            borderRadius: "16px",
                                            background: `${card.color}15`,
                                            border: `1px solid ${card.color}30`,
                                        }}
                                    >
                                        {card.icon}
                                    </Box>
                                    <Typography
                                        variant="h6"
                                        fontWeight={700}
                                        sx={{ mb: 1.5 }}
                                    >
                                        {card.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ lineHeight: 1.8 }}
                                    >
                                        {card.description}
                                    </Typography>
                                </Paper>
                            </motion.div>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Home;
