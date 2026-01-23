import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import {
    Box,
    Chip,
    Container,
    LinearProgress,
    Paper,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const SkillBar = ({ skill, level }: { skill: string; level: number }) => {
    const theme = useTheme();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <Box ref={ref} sx={{ mb: 3 }}>
            <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
                <Typography variant="body1" fontWeight={600}>
                    {skill}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {level}%
                </Typography>
            </Box>
            <Box sx={{ position: "relative" }}>
                <LinearProgress
                    variant="determinate"
                    value={isInView ? level : 0}
                    sx={{
                        height: 8,
                        borderRadius: 4,
                        backgroundColor:
                            theme.palette.mode === "dark"
                                ? "rgba(255, 255, 255, 0.1)"
                                : "rgba(0, 0, 0, 0.1)",
                        "& .MuiLinearProgress-bar": {
                            borderRadius: 4,
                            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                            transition: "transform 1s ease-in-out",
                        },
                    }}
                />
            </Box>
        </Box>
    );
};

const TimelineItem = ({
    icon,
    title,
    subtitle,
    period,
    description,
    index,
}: {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    period: string;
    description: string[] | string;
    index: number;
}) => {
    const theme = useTheme();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Box
                sx={{
                    position: "relative",
                    pl: { xs: 4, md: 6 },
                    pb: 6,
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        left: { xs: 12, md: 16 },
                        top: 40,
                        bottom: -24,
                        width: 2,
                        background: `linear-gradient(180deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    },
                    "&:last-child::before": {
                        display: "none",
                    },
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: { xs: 48, md: 64 },
                        height: { xs: 48, md: 64 },
                        borderRadius: "50%",
                        background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: `0 0 20px ${theme.palette.primary.main}60`,
                        zIndex: 1,
                    }}
                >
                    {icon}
                </Box>

                <Paper
                    elevation={3}
                    sx={{
                        p: { xs: 3, md: 4 },
                        ml: { xs: 4, md: 6 },
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
                        "&:hover": {
                            transform: "translateY(-4px)",
                            transition: "transform 0.3s ease",
                            boxShadow: `0 8px 24px ${theme.palette.primary.main}30`,
                        },
                    }}
                >
                    <Typography
                        variant="h5"
                        gutterBottom
                        fontWeight="bold"
                        sx={{
                            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography variant="h6" gutterBottom color="text.primary">
                        {subtitle}
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        color="text.secondary"
                        gutterBottom
                        sx={{ mb: 2 }}
                    >
                        {period}
                    </Typography>
                    {Array.isArray(description) ? (
                        <ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
                            {description.map((item, i) => (
                                <li key={i} style={{ marginBottom: "0.5rem" }}>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {item}
                                    </Typography>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    )}
                </Paper>
            </Box>
        </motion.div>
    );
};

const Resume: React.FC = () => {
    const theme = useTheme();

    const skillCategories = [
        {
            category: "Languages & Frameworks",
            skills: [
                "JavaScript",
                "TypeScript",
                "Node.js",
                "NestJS",
                "React",
                "React Native",
                "Python",
                "Java",
                "C++",
            ],
        },
        {
            category: "Cloud & Infrastructure",
            skills: [
                "AWS (ECS Fargate, Lambda, S3, DynamoDB, RDS)",
                "Google Cloud (GKE)",
                "Terraform",
                "Docker",
                "Kubernetes",
            ],
        },
        {
            category: "Databases",
            skills: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Redis"],
        },
        {
            category: "Integration Platforms",
            skills: [
                "Trackman",
                "Lucra",
                "MindBody",
                "Square",
                "Firebase",
                "FHIR-compliant systems",
            ],
        },
    ];

    const skillLevels = [
        { skill: "React / React Native / TypeScript", level: 90 },
        { skill: "Node.js / NestJS", level: 90 },
        { skill: "AWS / Cloud Architecture", level: 90 },
        { skill: "PostgreSQL / MongoDB / DynamoDB", level: 85 },
        { skill: "C++ / C / Java / ", level: 70 },
    ];

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
                        Resume
                    </Typography>
                    <Typography
                        variant="h6"
                        align="center"
                        color="text.secondary"
                        sx={{ mb: 8, maxWidth: "700px", mx: "auto" }}
                    >
                        10+ years of experience in full-stack development, cloud
                        architecture, and building scalable applications that
                        make an impact.
                    </Typography>
                </motion.div>

                {/* Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Paper
                        elevation={3}
                        sx={{
                            p: { xs: 3, md: 4 },
                            mb: 6,
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
                        >
                            Professional Summary
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{ lineHeight: 1.8 }}
                        >
                            Senior Staff Software Engineer with 10+ years
                            delivering production systems across startup and
                            enterprise environments. Full-cycle ownership of
                            architecture, implementation, deployment, and
                            maintenance. Deep expertise in cloud infrastructure
                            (AWS, GCP), modern JavaScript ecosystems (React,
                            NestJS, Node.js), and SQL/NoSQL databases.
                            Experienced technical bridge between design teams
                            and implementation vendors, particularly on complex
                            enterprise integrations. Track record of building
                            scalable systems while managing multiple concurrent
                            projects.
                        </Typography>
                    </Paper>
                </motion.div>

                {/* Skills */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <Paper
                        elevation={3}
                        sx={{
                            p: { xs: 3, md: 4 },
                            mb: 6,
                            background: theme.palette.background.paper,
                        }}
                    >
                        <Typography
                            variant="h4"
                            gutterBottom
                            fontWeight="bold"
                            color="primary"
                            sx={{ mb: 4 }}
                        >
                            Technical Skills
                        </Typography>

                        <Box sx={{ mb: 4 }}>
                            {skillLevels.map((item, index) => (
                                <SkillBar
                                    key={index}
                                    skill={item.skill}
                                    level={item.level}
                                />
                            ))}
                        </Box>

                        {skillCategories.map((category, categoryIndex) => (
                            <Box key={categoryIndex} sx={{ mb: 3 }}>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        mb: 2,
                                        color: theme.palette.primary.main,
                                        fontWeight: 600,
                                    }}
                                >
                                    {category.category}
                                </Typography>
                                <Stack
                                    direction="row"
                                    flexWrap="wrap"
                                    gap={1.5}
                                >
                                    {category.skills.map((skill, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{
                                                duration: 0.3,
                                                delay:
                                                    0.4 +
                                                    categoryIndex * 0.1 +
                                                    index * 0.03,
                                            }}
                                        >
                                            <Chip
                                                label={skill}
                                                sx={{
                                                    background: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
                                                    border: `1px solid ${theme.palette.primary.main}40`,
                                                    fontWeight: 600,
                                                    fontSize: "0.85rem",
                                                    padding: "18px 8px",
                                                    transition: "all 0.3s ease",
                                                    "&:hover": {
                                                        background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                                        transform:
                                                            "translateY(-4px)",
                                                        boxShadow: `0 4px 12px ${theme.palette.primary.main}50`,
                                                    },
                                                }}
                                            />
                                        </motion.div>
                                    ))}
                                </Stack>
                            </Box>
                        ))}
                    </Paper>
                </motion.div>

                {/* Experience Timeline */}
                <Box sx={{ mb: 6 }}>
                    <Typography
                        variant="h4"
                        gutterBottom
                        fontWeight="bold"
                        color="primary"
                        sx={{ mb: 4 }}
                    >
                        Professional Experience
                    </Typography>

                    <TimelineItem
                        icon={
                            <WorkIcon
                                sx={{
                                    fontSize: { xs: 24, md: 32 },
                                    color: "white",
                                }}
                            />
                        }
                        title="Senior Staff Software Engineer"
                        subtitle="Treeline Interactive | San Diego, CA"
                        period="August 2021 – Present"
                        description={[
                            "Lead full-stack development across multiple concurrent client projects, managing complete development lifecycle from software design and implementation through CI/CD deployment",
                            "Architect and deploy cloud infrastructure on AWS (ECS Fargate, Lambda, RDS, S3) and Google Cloud using Terraform, implementing containerized microservices with Docker and Kubernetes",
                            "Led 2.5-year development of 5Iron Golf's complete digital ecosystem serving 14+ venues with 168+ simulator rooms, processing 5,000+ daily bookings",
                            "Architected and built first-to-market real-money wagering system for golf simulators, integrating Trackman APIs for live scoring, Lucra APIs for compliant payments in legal states, MindBody for reservations, and Square for F&B ordering across React Native mobile app, React web app, and NestJS backend",
                            "Designed scalable near-real-time scoring system using AWS (ECS, RDS, SQS, webhooks) to handle concurrent tournaments and head-to-head matches, with automated bracket progression, flexible payout structures (50/50 splits, admin-defined percentages), and dead letter queues for fault tolerance",
                            "Developed real-time tournament management platform for multi-sport events using React Native, NestJS, and PostgreSQL with live scoring and bracket generation",
                            "Designed and built drone-based UXO detection system demo (TETAC) for military/defense clients, managing software requirements prioritization for 92 features within startup constraints",
                            "Created video proctoring system deployed on Google Cloud Kubernetes, processing real-time video streams with AI-powered monitoring",
                            "Reduced API response times by 20% through optimized database queries and caching strategies; decreased QA cycles by 50% through comprehensive unit testing and code reviews",
                        ]}
                        index={0}
                    />

                    <TimelineItem
                        icon={
                            <WorkIcon
                                sx={{
                                    fontSize: { xs: 24, md: 32 },
                                    color: "white",
                                }}
                            />
                        }
                        title="Software Engineer III"
                        subtitle="Northrop Grumman | San Diego, CA"
                        period="June 2016 – August 2021"
                        description={[
                            "Delivered defense software products using C++, Java, and AWS, contributing to $14M in contract awards",
                            "Led software integration team of 5 engineers, increasing team productivity 20% through process improvements and technical mentorship",
                            "Identified and mitigated critical hardware defects, preventing $1M in potential project delays and rework costs",
                            "Practiced Agile methodology across multiple sprint cycles, supporting sprint planning, daily standups, and retrospectives",
                        ]}
                        index={1}
                    />

                    <TimelineItem
                        icon={
                            <WorkIcon
                                sx={{
                                    fontSize: { xs: 24, md: 32 },
                                    color: "white",
                                }}
                            />
                        }
                        title="Lead Software Engineer"
                        subtitle="TutorTub LLC | Los Angeles, CA"
                        period="May 2015 – June 2018"
                        description={[
                            "Led full-stack development of hybrid web/mobile tutoring marketplace using MEAN stack (MongoDB, Express, Angular, Node.js)",
                            "Increased user engagement 30% and reduced feature time-to-market 25% through iterative development and user feedback loops",
                            "Served as technical liaison between product, design, and business stakeholders, translating requirements into technical architectureing MEAN stack.",
                            "Increased user engagement by 30% and reduced time-to-market by 25%.",
                            "Aligned technical solutions with business goals.",
                            "Acted as a key communicator between cross-functional teams.",
                        ]}
                        index={2}
                    />
                </Box>

                {/* Education */}
                <Box sx={{ mb: 6 }}>
                    <Typography
                        variant="h4"
                        gutterBottom
                        fontWeight="bold"
                        color="primary"
                        sx={{ mb: 4 }}
                    >
                        Education & Certifications
                    </Typography>

                    <TimelineItem
                        icon={
                            <SchoolIcon
                                sx={{
                                    fontSize: { xs: 24, md: 32 },
                                    color: "white",
                                }}
                            />
                        }
                        title="Bachelor of Science in Computer Science"
                        subtitle="University of California, Riverside"
                        period="2016"
                        description="Graduated with honors, focusing on software engineering and algorithms."
                        index={3}
                    />

                    <TimelineItem
                        icon={
                            <CodeIcon
                                sx={{
                                    fontSize: { xs: 24, md: 32 },
                                    color: "white",
                                }}
                            />
                        }
                        title="Professional Certifications"
                        subtitle="Industry-recognized credentials"
                        period="2016 – 2022"
                        description={[
                            "AWS Certified Solutions Architect - 2016",
                            "Udacity Nanodegree: Algorithms & Data Structures - 2021",
                            "Udemy: The Complete Node.js Developer Course - 2022",
                        ]}
                        index={4}
                    />
                </Box>
            </Box>
        </Container>
    );
};

export default Resume;
