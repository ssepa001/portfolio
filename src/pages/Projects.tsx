import GitHubIcon from "@mui/icons-material/GitHub";
import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Chip,
    Container,
    Grid,
    IconButton,
    Typography,
    useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

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

const Projects: React.FC = () => {
    const theme = useTheme();

    return (
        <Container maxWidth="lg">
            <Box sx={{ my: 8 }}>
                <Typography
                    variant="h3"
                    component="h1"
                    gutterBottom
                    align="center"
                    fontWeight="bold"
                    color="primary"
                >
                    Key Projects
                </Typography>
                <Grid container spacing={4}>
                    {projects.map((project, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <motion.div
                                whileHover={{ y: -10 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Card
                                    onClick={() => {
                                        window.open(project.liveUrl, "_blank");
                                    }}
                                    sx={{
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        backgroundColor:
                                            theme.palette.background.paper,
                                        boxShadow:
                                            "0 10px 30px -15px rgba(2,12,27,0.7)",
                                        "&:hover": {
                                            boxShadow:
                                                "0 20px 30px -15px rgba(2,12,27,0.7)",
                                        },
                                    }}
                                >
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={project.image}
                                            alt={project.title}
                                        />
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="div"
                                                fontWeight="bold"
                                                color="primary"
                                            >
                                                {project.title}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                paragraph
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
                                                {project.technologies.map(
                                                    (tech, techIndex) => (
                                                        <Chip
                                                            key={techIndex}
                                                            label={tech}
                                                            size="small"
                                                            sx={{
                                                                backgroundColor:
                                                                    theme
                                                                        .palette
                                                                        .primary
                                                                        .main,
                                                                color: theme
                                                                    .palette
                                                                    .background
                                                                    .default,
                                                                fontWeight:
                                                                    "bold",
                                                            }}
                                                        />
                                                    )
                                                )}
                                            </Box>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    justifyContent: "flex-end",
                                                    alignItems: "center",
                                                }}
                                            >
                                                {project.githubUrl && (
                                                    <IconButton
                                                        aria-label="github"
                                                        href={project.githubUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        color="primary"
                                                    >
                                                        <GitHubIcon />
                                                    </IconButton>
                                                )}
                                                {/* {project.liveUrl && (
                                                    <IconButton
                                                        aria-label="live demo"
                                                        href={project.liveUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        color="primary"
                                                    >
                                                        <LaunchIcon />
                                                    </IconButton>
                                                )} */}
                                            </Box>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default Projects;
