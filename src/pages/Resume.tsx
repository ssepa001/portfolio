import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import { Box, Chip, Container, Paper, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

const Resume: React.FC = () => {
    const theme = useTheme();
    const skills = [
        "AWS", "GCP", "Azure", "NestJS", "React.js", "React Native", "JavaScript", "TypeScript", "Node.js",
        "PostgreSQL", "MongoDB", "Docker", "Kubernetes", "C++", "Java", "Python", "Agile", "Scrum"
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
    };

    return (
        <Container maxWidth="lg">
            <Box sx={{ my: 8 }}>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants}>
                        <Typography variant="h3" component="h1" gutterBottom align="center" fontWeight="bold" color="primary">
                            Resume
                        </Typography>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Paper elevation={3} sx={{ p: 4, mb: 4, background: `linear-gradient(45deg, ${theme.palette.background.paper} 30%, ${theme.palette.background.default} 90%)` }}>
                            <Typography variant="h5" gutterBottom color="primary">
                                Summary
                            </Typography>
                            <Typography variant="body1">
                                Senior Staff Software Engineer with 10+ years of experience in developing scalable web and cross-platform applications. Expert in cloud infrastructure, full stack development, and database management. Committed to driving innovation and delivering high-performance solutions.
                            </Typography>
                        </Paper>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Paper elevation={3} sx={{ p: 4, mb: 4, background: `linear-gradient(45deg, ${theme.palette.background.paper} 30%, ${theme.palette.background.default} 90%)` }}>
                            <Typography variant="h5" gutterBottom color="primary">
                                Technical Skills
                            </Typography>
                            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                                {skills.map((skill, index) => (
                                    <Chip
                                        key={index}
                                        label={skill}
                                        color="primary"
                                        variant="outlined"
                                        sx={{ 
                                            '&:hover': { 
                                                backgroundColor: theme.palette.primary.main,
                                                color: theme.palette.background.default
                                            }
                                        }}
                                    />
                                ))}
                            </Box>
                        </Paper>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Paper elevation={3} sx={{ p: 4, mb: 4, background: `linear-gradient(45deg, ${theme.palette.background.paper} 30%, ${theme.palette.background.default} 90%)` }}>
                            <Typography variant="h5" gutterBottom color="primary">
                                Professional Experience
                            </Typography>
                            <Box sx={{ position: 'relative' }}>
                                <Box sx={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 2, backgroundColor: theme.palette.primary.main }} />
                                {[
                                    { 
                                        title: "Senior Staff Software Engineer",
                                        company: "Treeline Interactive",
                                        location: "San Diego, CA",
                                        period: "August 2021 – Present",
                                        achievements: [
                                            "Led development of scalable APIs and microservices architecture, reducing API response times by 20%.",
                                            "Integrated AI-powered chatbot, reducing support response times by 40%.",
                                            "Developed and maintained Node.js and React.js applications, ensuring high performance and reliability.",
                                            "Ensured adherence to Agile Methodology and coding standards, reducing QA efforts by 50%.",
                                            "Mentored engineers, fostering a culture of continuous learning and improvement."
                                        ]
                                    },
                                    {
                                        title: "Software Engineer III",
                                        company: "Northrop Grumman",
                                        location: "San Diego, CA",
                                        period: "June 2016 – August 2021",
                                        achievements: [
                                            "Launched products contributing to $14M in contracts.",
                                            "Developed software using C++, Java and AWS, improving code quality and reducing technical debt.",
                                            "Managed software integration team, increasing productivity by 20%.",
                                            "Saved $1M by mitigating hardware defects.",
                                            "Co-founded Employee Advocacy Group, enhancing workplace efficiency.",
                                            "Practiced Agile Methodology, supporting sprint planning and execution."
                                        ]
                                    },
                                    {
                                        title: "Lead Software Engineer",
                                        company: "TutorTub LLC",
                                        location: "Los Angeles, CA",
                                        period: "May 2015 – June 2018",
                                        achievements: [
                                            "Led design and testing of hybrid web/mobile applications using MEAN stack.",
                                            "Increased user engagement by 30% and reduced time-to-market by 25%.",
                                            "Aligned technical solutions with business goals.",
                                            "Acted as a key communicator between cross-functional teams."
                                        ]
                                    }
                                ].map((job, index) => (
                                    <Box key={index} sx={{ ml: 4, mb: 4, position: 'relative' }}>
                                        <Box sx={{ position: 'absolute', left: -36, top: 0, width: 32, height: 32, borderRadius: '50%', backgroundColor: theme.palette.background.paper, border: `2px solid ${theme.palette.primary.main}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <WorkIcon color="primary" />
                                        </Box>
                                        <Typography variant="h6" gutterBottom color="primary">
                                            {job.title}
                                        </Typography>
                                        <Typography variant="subtitle1" gutterBottom>
                                            {job.company} | {job.location}
                                        </Typography>
                                        <Typography variant="subtitle2" gutterBottom color="secondary">
                                            {job.period}
                                        </Typography>
                                        <ul>
                                            {job.achievements.map((achievement, i) => (
                                                <li key={i}>{achievement}</li>
                                            ))}
                                        </ul>
                                    </Box>
                                ))}
                            </Box>
                        </Paper>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Paper elevation={3} sx={{ p: 4, mb: 4, background: `linear-gradient(45deg, ${theme.palette.background.paper} 30%, ${theme.palette.background.default} 90%)` }}>
                            <Typography variant="h5" gutterBottom color="primary">
                                Education
                            </Typography>
                            <Box sx={{ ml: 4, position: 'relative' }}>
                                <Box sx={{ position: 'absolute', left: -36, top: 0, width: 32, height: 32, borderRadius: '50%', backgroundColor: theme.palette.background.paper, border: `2px solid ${theme.palette.primary.main}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <SchoolIcon color="primary" />
                                </Box>
                                <Typography variant="h6" gutterBottom>
                                    Bachelor of Science in Computer Science
                                </Typography>
                                <Typography variant="subtitle1">
                                    University of California, Riverside | Riverside, CA | 2016
                                </Typography>
                            </Box>
                        </Paper>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Paper elevation={3} sx={{ p: 4, mb: 4, background: `linear-gradient(45deg, ${theme.palette.background.paper} 30%, ${theme.palette.background.default} 90%)` }}>
                            <Typography variant="h5" gutterBottom color="primary">
                                Certifications
                            </Typography>
                            <Box sx={{ ml: 4, position: 'relative' }}>
                                <Box sx={{ position: 'absolute', left: -36, top: 0, width: 32, height: 32, borderRadius: '50%', backgroundColor: theme.palette.background.paper, border: `2px solid ${theme.palette.primary.main}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <CodeIcon color="primary" />
                                </Box>
                                <Typography variant="body1" paragraph>
                                    AWS Certified Solutions Architect - 2016
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    Udacity Nanodegree: Algorithms & Data Structures - 2021
                                </Typography>
                                <Typography variant="body1">
                                    Udemy: The Complete Node.js Developer Course - 2022
                                </Typography>
                            </Box>
                        </Paper>
                    </motion.div>
                </motion.div>
            </Box>
        </Container>
    );
};

export default Resume;
