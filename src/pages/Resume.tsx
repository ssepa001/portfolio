import { motion } from "framer-motion";

const skills = [
    { label: "AI-Augmented Development (Claude, Cursor, LLM Pipelines)", pct: 95 },
    { label: "React / React Native / TypeScript", pct: 90 },
    { label: "Node.js / NestJS", pct: 90 },
    { label: "AWS / Cloud Architecture", pct: 90 },
    { label: "PostgreSQL / MongoDB / DynamoDB", pct: 85 },
];

const skillCategories = [
    {
        icon: "bolt",
        color: "text-primary",
        border: "border-primary/20",
        title: "AI & Productivity",
        chips: ["Claude 3.5 Sonnet", "Cursor", "GitHub Copilot", "LangChain", "Vercel AI SDK"],
    },
    {
        icon: "code",
        color: "text-secondary",
        border: "border-secondary/20",
        title: "Languages & Frameworks",
        chips: ["Next.js", "GraphQL", "Redux", "Prisma", "Tailwind CSS"],
    },
    {
        icon: "cloud",
        color: "text-primary",
        border: "border-primary/20",
        title: "Cloud & Infrastructure",
        chips: ["Docker", "Kubernetes", "Terraform", "Serverless", "CircleCI"],
    },
];

const experience = [
    {
        title: "Senior Staff Software Engineer",
        company: "Treeline Interactive",
        location: "San Diego, CA",
        period: "Aug 2021 – Present",
        periodColor: "bg-primary/10 text-primary",
        dotBorder: "border-primary",
        dotGlow: "shadow-[0_0_10px_rgba(79,219,200,0.4)]",
        icon: "work",
        iconColor: "text-primary",
        bulletColor: "text-primary",
        bullets: [
            "Architected and led the development of complex digital products for clients like 5Iron Golf, scaling systems to handle high-traffic interactive experiences.",
            "Pioneered AI-assisted testing and coding workflows, reducing manual regression testing by 40% through custom LLM integration.",
            "Mentored senior engineering staff on modern architectural patterns and cloud-native development.",
        ],
    },
    {
        title: "Software Engineer III",
        company: "Northrop Grumman",
        location: "San Diego, CA",
        period: "Jun 2016 – Aug 2021",
        periodColor: "bg-secondary/10 text-secondary",
        dotBorder: "border-secondary",
        dotGlow: "shadow-[0_0_10px_rgba(255,185,95,0.4)]",
        icon: "security",
        iconColor: "text-secondary",
        bulletColor: "text-secondary",
        bullets: [
            "Key contributor to $14M+ defense contracts, developing mission-critical systems with zero-fault tolerance requirements.",
            "Led cross-functional integration teams to modernize legacy software stacks into containerized microservices architectures.",
        ],
    },
    {
        title: "Lead Software Engineer",
        company: "TutorTub LLC",
        location: "Los Angeles, CA",
        period: "2015 – 2018",
        periodColor: "bg-surface-container-highest text-on-surface-variant",
        dotBorder: "border-primary/40",
        dotGlow: "",
        icon: "terminal",
        iconColor: "text-on-surface-variant",
        bulletColor: "text-primary",
        bullets: [
            "Architected a high-growth ed-tech platform using the MEAN stack, scaling to 50k+ active monthly users.",
            "Optimized user engagement through data-driven feature deployment and real-time communication tools.",
        ],
    },
];

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-10"
        >
            <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                {/* Page Header */}
                <motion.header
                    className="mb-16 space-y-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tighter bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Resume
                    </h1>
                    <p className="text-xl md:text-2xl text-on-surface-variant font-light max-w-2xl leading-relaxed">
                        10+ years building production systems — now amplified by AI-driven development workflows.
                    </p>
                </motion.header>

                {/* Professional Summary */}
                <motion.section
                    className="mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div className="glass-card border-t-4 border-primary p-8 md:p-12 shadow-2xl relative overflow-hidden rounded-xl">
                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-12 h-12 bg-primary-container/20 flex items-center justify-center rounded-lg text-primary shrink-0">
                                <span
                                    className="material-symbols-outlined"
                                    style={{ fontVariationSettings: "'FILL' 1" }}
                                >
                                    psychology
                                </span>
                            </div>
                            <div>
                                <h2 className="text-xs font-bold uppercase tracking-widest text-secondary mb-4">
                                    Summary
                                </h2>
                                <p className="text-xl md:text-2xl text-on-surface leading-relaxed font-light">
                                    Senior Staff Software Engineer &amp; AI Usage Expert with 10+ years delivering
                                    production systems across startup and enterprise environments. I integrate AI tools
                                    (Claude, Copilot, custom LLM pipelines) into every phase of the SDLC to maximize
                                    team throughput, reduce cycle times, and eliminate repetitive toil — while keeping
                                    security, compliance, and code quality non-negotiable. Deep expertise in cloud
                                    infrastructure (AWS, GCP), modern JavaScript ecosystems (React, NestJS, Node.js),
                                    and SQL/NoSQL databases.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Left Column: Skills */}
                    <div className="lg:col-span-5 space-y-16">
                        {/* Skill Bars */}
                        <section>
                            <div className="mb-8">
                                <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-2 block">
                                    Technical Proficiency
                                </span>
                                <h3 className="text-3xl font-headline font-bold text-on-surface">
                                    Core Expertise
                                </h3>
                            </div>
                            <div className="space-y-8">
                                {skills.map((skill, i) => (
                                    <motion.div
                                        key={skill.label}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: i * 0.08 }}
                                    >
                                        <div className="flex justify-between mb-3 items-end">
                                            <span className="font-medium text-on-surface text-sm">
                                                {skill.label}
                                            </span>
                                            <span className="text-primary font-bold">{skill.pct}%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-gradient-to-r from-primary to-secondary shadow-[0_0_15px_rgba(79,219,200,0.5)]"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.pct}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.8, delay: i * 0.08 + 0.2 }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        {/* Skill Chips */}
                        <section className="grid grid-cols-1 gap-4">
                            {skillCategories.map((cat) => (
                                <div
                                    key={cat.title}
                                    className={`bg-surface-container-low p-6 rounded-xl border-l-2 ${cat.border}`}
                                >
                                    <h4 className={`${cat.color} font-bold mb-4 flex items-center gap-2`}>
                                        <span className="material-symbols-outlined text-sm">{cat.icon}</span>
                                        {cat.title}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {cat.chips.map((chip) => (
                                            <span
                                                key={chip}
                                                className="bg-surface-container-highest px-3 py-1 rounded-full text-xs text-on-surface"
                                            >
                                                {chip}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </section>
                    </div>

                    {/* Right Column: Experience & Education */}
                    <div className="lg:col-span-7 space-y-20">
                        {/* Experience Timeline */}
                        <section>
                            <div className="mb-12">
                                <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-2 block">
                                    Career Journey
                                </span>
                                <h3 className="text-3xl font-headline font-bold text-on-surface">
                                    Professional Experience
                                </h3>
                            </div>
                            <div className="relative border-l-2 border-primary/30 ml-4 space-y-16">
                                {experience.map((job, i) => (
                                    <motion.div
                                        key={job.title}
                                        className="relative pl-12"
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                    >
                                        <div
                                            className={`absolute -left-[13px] top-0 w-6 h-6 bg-surface-container-high rounded-full border-2 ${job.dotBorder} ${job.dotGlow} flex items-center justify-center`}
                                        >
                                            <span
                                                className={`material-symbols-outlined text-[12px] ${job.iconColor}`}
                                                style={{ fontVariationSettings: "'FILL' 1" }}
                                            >
                                                {job.icon}
                                            </span>
                                        </div>
                                        <div>
                                            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
                                                <h4 className="text-2xl font-bold text-on-surface">
                                                    {job.title}
                                                </h4>
                                                <span
                                                    className={`text-sm ${job.periodColor} px-3 py-1 rounded-full font-medium`}
                                                >
                                                    {job.period}
                                                </span>
                                            </div>
                                            <div className="text-secondary font-medium mb-4">
                                                {job.company} | {job.location}
                                            </div>
                                            <ul className="space-y-4 text-on-surface-variant leading-relaxed">
                                                {job.bullets.map((b) => (
                                                    <li key={b} className="flex gap-3">
                                                        <span className={`${job.bulletColor} mt-1`}>•</span>
                                                        <span>{b}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        {/* Education & Certifications */}
                        <section>
                            <div className="mb-12">
                                <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-2 block">
                                    Credentials
                                </span>
                                <h3 className="text-3xl font-headline font-bold text-on-surface">
                                    Education &amp; Certifications
                                </h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <motion.div
                                    className="bg-surface-container-low p-8 rounded-2xl hover:bg-surface-container transition-all"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <div className="text-primary mb-6">
                                        <span className="material-symbols-outlined text-4xl">school</span>
                                    </div>
                                    <h5 className="text-xl font-bold mb-2">BS Computer Science</h5>
                                    <p className="text-on-surface-variant">UC Riverside</p>
                                    <p className="text-xs text-outline mt-4">Graduated 2016, With Honors</p>
                                </motion.div>
                                <motion.div
                                    className="bg-surface-container-low p-8 rounded-2xl hover:bg-surface-container transition-all"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.1 }}
                                >
                                    <div className="text-secondary mb-6">
                                        <span
                                            className="material-symbols-outlined text-4xl"
                                            style={{ fontVariationSettings: "'FILL' 1" }}
                                        >
                                            verified
                                        </span>
                                    </div>
                                    <h5 className="text-xl font-bold mb-2">AWS Solutions Architect</h5>
                                    <p className="text-on-surface-variant">Amazon Web Services</p>
                                    <p className="text-xs text-outline mt-4">Certified 2016</p>
                                </motion.div>
                                <motion.div
                                    className="bg-surface-container-low p-8 rounded-2xl hover:bg-surface-container transition-all md:col-span-2"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.2 }}
                                >
                                    <div className="flex items-center gap-6">
                                        <div className="text-primary">
                                            <span className="material-symbols-outlined text-4xl">
                                                database
                                            </span>
                                        </div>
                                        <div>
                                            <h5 className="text-xl font-bold mb-1">
                                                Algorithms &amp; Data Structures
                                            </h5>
                                            <p className="text-on-surface-variant">
                                                Udacity Nanodegree • 2021
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </motion.div>
    );
};

export default Resume;
