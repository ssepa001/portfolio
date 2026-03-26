import LaunchIcon from "@mui/icons-material/Launch";
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
            "First-to-market real-money wagering for golf simulators — React Native mobile + React web + NestJS backend. Real-time Trackman scoring, Lucra compliant payments, and automated bracket progression. AI-assisted development compressed a 3-year build into 2.5 years.",
        image: "/images/golfWagering.png",
        technologies: [
            "React Native",
            "NestJS",
            "Trackman API",
            "Lucra API",
            "AWS",
            "PostgreSQL",
            "Claude AI",
        ],
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
                <div className="h-full min-h-[550px] flex flex-col bg-surface-container-high rounded-2xl overflow-hidden relative group hover:shadow-[0_20px_40px_-15px_rgba(79,219,200,0.25)] transition-shadow duration-300">
                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />

                    {/* Image */}
                    <div className="relative overflow-hidden h-[220px] shrink-0">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-container-high/90" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-grow p-6 relative z-20">
                        <h3 className="font-headline font-bold text-xl mb-3 text-gradient min-h-[2.5em]">
                            {project.title}
                        </h3>
                        <p className="text-on-surface-variant text-sm leading-relaxed mb-4 flex-grow min-h-[4.5em]">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech, techIndex) => (
                                <span
                                    key={techIndex}
                                    className="text-xs font-semibold px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-on-surface-variant hover:bg-primary/20 hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-end">
                            {project.liveUrl && (
                                <button
                                    aria-label="live demo"
                                    onClick={() =>
                                        window.open(project.liveUrl, "_blank")
                                    }
                                    className="text-primary hover:bg-primary/10 rounded-full p-2 transition-all duration-200 hover:scale-110"
                                >
                                    <LaunchIcon fontSize="small" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const Projects: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 pt-20"
        >
            <div className="max-w-7xl mx-auto px-8 py-16">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tighter kinetic-gradient-text mb-4">
                        Featured Projects
                    </h1>
                    <p className="text-on-surface-variant text-lg max-w-2xl mx-auto leading-relaxed">
                        AI-accelerated full-stack systems — built to scale,
                        secured by design. Each project delivered with a focus
                        on maximizing output and efficiency while keeping
                        quality and compliance non-negotiable.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;
