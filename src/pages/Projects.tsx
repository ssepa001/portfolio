import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Chip,
    Container,
    IconButton,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

interface Project {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
}

const projects: Project[] = [
    {
        title: "Real-Money Golf Wagering Platform",
        description:
            "First-to-market wagering system for golf simulators featuring a React Native mobile app and full backend infrastructure. Real-time scoring integration with Trackman, compliant payment processing via Lucra, automated bracket progression, and scalable tournament management handling concurrent matches.",
        image: "/images/golfWagering.png",
        technologies: ["React Native", "NestJS", "Trackman API", "Lucra API", "AWS", "PostgreSQL"],
        liveUrl: "https://fiveirongolf.com/en-us/leagues",
    },
    {
        title: "Golf Simulator Booking Application",
        description:
            "Integrated MindBody, Firebase, and AWS services to create a seamless booking experience for golf simulator users.",
        image: "/images/golfSim.jpg",
        technologies: ["MindBody", "Firebase", "AWS", "React", "Node.js"],
        liveUrl: "https://booking.fiveirongolf.com/",
    },
    {
        title: "Video Proctoring System",
        description:
            "Deployed a robust video proctoring system using Kubernetes on Google Cloud, ensuring secure and scalable remote examination capabilities.",
        image: "/images/telehealth.jpg",
        technologies: [
            "Kubernetes",
            "Google Cloud",
            "Docker",
            "Python",
            "WebRTC",
        ],
        liveUrl: "https://cuehealth.com/",
    },
    {
        title: "FHIR Compliant APIs",
        description:
            "Developed APIs and frontend for an online health clinic, ensuring compliance with FHIR standards for seamless healthcare data exchange.",
        image: "/images/fhir.jpg",
        technologies: ["FHIR", "REST API", "React", "Node.js", "MongoDB"],
        liveUrl: "https://cuehealth.com/",
    },
    {
        title: "Virtual Care Platform",
        description:
            "Built a nationwide virtual care platform, enabling remote healthcare consultations and improving patient access to medical services.",
        image: "/images/proctor.jpg",
        technologies: [
            "React Native",
            "Express.js",
            "WebRTC",
            "AWS",
            "HIPAA Compliance",
        ],
        liveUrl: "https://cuehealth.com/",
    },
    {
        title: "Online Tutoring Platform",
        description:
            "Co-founded an online tutoring marketplace company in 2015. Two engineers and hundreds of thousands of code to go production after 12 months.",
        image: "/images/tutortub.jpg",
        technologies: [
            "MeteorJs",
            "Blaze Js",
            "MongoDB",
            "AccurateBackground",
            "BrainTree",
        ],
        liveUrl: "https://tutortub.meteorapp.com/",
    },
];

const ProjectCard = ({
    project,
    index,
}: {
    project: Project;
    index: number;
}) => {
    const theme = useTheme();
    const cardRef = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
        stiffness: 300,
        damping: 30,
    });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
        stiffness: 300,
        damping: 30,
    });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set((e.clientX - centerX) / (rect.width / 2));
        mouseY.set((e.clientY - centerY) / (rect.height / 2));
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <motion.div
                ref={cardRef}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                    height: "100%",
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                whileHover={{ scale: 1.02, z: 50 }}
                transition={{ duration: 0.3 }}
            >
                <Card
                    sx={{
                        height: "100%",
                        minHeight: 550,
                        display: "flex",
                        flexDirection: "column",
                        background: theme.palette.background.paper,
                        overflow: "hidden",
                        position: "relative",
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: `linear-gradient(135deg, ${theme.palette.primary.main}10, ${theme.palette.secondary.main}10)`,
                            opacity: 0,
                            transition: "opacity 0.3s ease",
                            zIndex: 1,
                        },
                        "&:hover::before": {
                            opacity: 1,
                        },
                        "&:hover": {
                            boxShadow: `0 20px 40px -15px ${theme.palette.primary.main}40`,
                        },
                    }}
                >
                    <Box
                        sx={{
                            position: "relative",
                            overflow: "hidden",
                            height: 220,
                            flexShrink: 0,
                        }}
                    >
                        <CardMedia
                            component="img"
                            image={project.image}
                            alt={project.title}
                            sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                transition: "transform 0.4s ease",
                                "&:hover": {
                                    transform: "scale(1.1)",
                                },
                            }}
                        />
                        <Box
                            sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: `linear-gradient(180deg, transparent 0%, ${theme.palette.background.paper}E6 100%)`,
                            }}
                        />
                    </Box>
                    <CardContent
                        sx={{
                            flexGrow: 1,
                            position: "relative",
                            zIndex: 2,
                            display: "flex",
                            flexDirection: "column",
                            p: 3,
                        }}
                    >
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                fontWeight="bold"
                                sx={{
                                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    mb: 2,
                                    minHeight: "2.5em",
                                }}
                            >
                                {project.title}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{
                                    alignContent: "flex-start",
                                    lineHeight: 1.7,
                                    mb: 3,
                                    flexGrow: 1,
                                    minHeight: "4.5em",
                                }}
                            >
                                {project.description}
                            </Typography>
                            <Box
                                sx={{
                                    mb: 2,
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: 1,
                                }}
                            >
                                {project.technologies.map((tech, techIndex) => (
                                    <Chip
                                        key={techIndex}
                                        label={tech}
                                        size="small"
                                        sx={{
                                            background: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
                                            border: `1px solid ${theme.palette.primary.main}40`,
                                            fontWeight: 600,
                                            fontSize: "0.75rem",
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                                transform: "translateY(-2px)",
                                            },
                                        }}
                                    />
                                ))}
                            </Box>
                            <Stack
                                direction="row"
                                spacing={1}
                                justifyContent="flex-end"
                            >
                                {project.liveUrl && (
                                    <IconButton
                                        aria-label="live demo"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            window.open(
                                                project.liveUrl,
                                                "_blank",
                                            );
                                        }}
                                        sx={{
                                            color: theme.palette.primary.main,
                                            "&:hover": {
                                                background: `${theme.palette.primary.main}20`,
                                                transform: "scale(1.1)",
                                            },
                                        }}
                                    >
                                        <LaunchIcon />
                                    </IconButton>
                                )}
                                {project.githubUrl && (
                                    <IconButton
                                        aria-label="github"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            window.open(
                                                project.githubUrl,
                                                "_blank",
                                            );
                                        }}
                                        sx={{
                                            color: theme.palette.primary.main,
                                            "&:hover": {
                                                background: `${theme.palette.primary.main}20`,
                                                transform: "scale(1.1)",
                                            },
                                        }}
                                    >
                                        <GitHubIcon />
                                    </IconButton>
                                )}
                            </Stack>
                        </CardContent>
                    </Card>
                </motion.div>
        </motion.div>
    );
};

const Projects: React.FC = () => {
    const theme = useTheme();

    return (
        <Container maxWidth="lg">
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
                        Featured Projects
                    </Typography>
                    <Typography
                        variant="h6"
                        align="center"
                        color="text.secondary"
                        sx={{ mb: 8, maxWidth: "700px", mx: "auto" }}
                    >
                        A collection of projects I've worked on, showcasing my
                        expertise in full-stack development, cloud architecture,
                        and modern web technologies.
                    </Typography>
                </motion.div>

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            sm: "repeat(2, 1fr)",
                        },
                        gap: 4,
                    }}
                >
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            index={index}
                        />
                    ))}
                </Box>
            </Box>
        </Container>
    );
};

export default Projects;
