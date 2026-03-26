import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
};

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 pt-20"
        >
            {/* Hero Section */}
            <section className="min-h-[921px] flex flex-col justify-center max-w-7xl mx-auto px-8 py-20 relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left Column: 7 cols */}
                    <motion.div
                        className="lg:col-span-7 space-y-8"
                        initial="initial"
                        animate="animate"
                        transition={{ staggerChildren: 0.12 }}
                    >
                        <motion.div
                            variants={fadeUp}
                            transition={{ duration: 0.5 }}
                            className="space-y-2"
                        >
                            <p className="font-label text-primary tracking-[0.2em] uppercase text-sm mb-4">
                                Hey there, I'm
                            </p>
                            <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter kinetic-gradient-text leading-tight">
                                Sam Sepasi.
                            </h1>
                            <h2 className="font-headline text-3xl md:text-4xl text-on-surface-variant mt-4 font-medium italic">
                                I engineer smarter — with AI.
                            </h2>
                        </motion.div>

                        <motion.p
                            variants={fadeUp}
                            transition={{ duration: 0.5 }}
                            className="text-lg md:text-xl text-on-surface/80 leading-relaxed max-w-2xl"
                        >
                            Senior Staff Engineer &amp; AI Usage Expert with 10+
                            years shipping production systems. I leverage
                            AI-powered workflows to multiply team output,
                            accelerate delivery, and eliminate toil — without
                            sacrificing security or code quality. From
                            real-money wagering platforms to nationwide
                            telehealth systems, I turn complex problems into
                            elegant, scalable solutions.
                        </motion.p>

                        <motion.div
                            variants={fadeUp}
                            transition={{ duration: 0.5 }}
                            className="flex flex-wrap gap-4 pt-4"
                        >
                            <Link
                                to="/projects"
                                className="bg-primary-container text-on-primary px-8 py-4 rounded-xl font-bold tracking-wide hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300 group flex items-center gap-2"
                            >
                                See My Work
                                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                                    arrow_forward
                                </span>
                            </Link>
                            <Link
                                to="/resume"
                                className="border border-primary/40 text-primary px-8 py-4 rounded-xl font-bold tracking-wide hover:bg-primary/5 transition-all"
                            >
                                Resume
                            </Link>
                            <Link
                                to="/contact"
                                className="border border-secondary/40 text-secondary px-8 py-4 rounded-xl font-bold tracking-wide hover:bg-secondary/5 transition-all"
                            >
                                Let's Talk
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: 5 cols — Profile Photo */}
                    <motion.div
                        className="lg:col-span-5 flex justify-center lg:justify-end"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="relative group">
                            {/* Gradient glow ring */}
                            <div className="absolute inset-[-8px] rounded-full bg-gradient-to-tr from-primary to-secondary opacity-40 blur-md group-hover:opacity-70 transition-opacity" />
                            {/* Photo circle */}
                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/20 bg-surface-container-high">
                                <img
                                    src="/images/profileImage.jpg"
                                    alt="Sam Sepasi"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                            {/* Status badge */}
                            <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-xl border border-outline-variant/20 shadow-xl">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                    <span className="font-label text-xs tracking-widest uppercase text-on-surface-variant whitespace-nowrap">
                                        System Status: Optimized
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
                    <span className="font-label text-[10px] tracking-[0.3em] uppercase">
                        Explore
                    </span>
                    <span className="material-symbols-outlined animate-bounce">
                        keyboard_double_arrow_down
                    </span>
                </div>
            </section>

            {/* Feature Cards Section */}
            <section className="bg-surface-container-low py-32 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <motion.div
                            className="glass-card p-10 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/15 transition-colors" />
                            <div className="mb-8">
                                <span
                                    className="material-symbols-outlined text-primary text-4xl"
                                    style={{
                                        fontVariationSettings: "'FILL' 1",
                                    }}
                                >
                                    psychology
                                </span>
                            </div>
                            <h3 className="font-headline text-xl font-bold mb-4 text-on-surface">
                                AI-Augmented Development
                            </h3>
                            <p className="text-on-surface-variant leading-relaxed text-sm">
                                I use Claude, Cursor, and custom AI pipelines to
                                10x engineering throughput while maintaining
                                rigorous review gates.
                            </p>
                        </motion.div>

                        {/* Card 2 — staggered down on desktop */}
                        <motion.div
                            className="glass-card p-10 rounded-xl border border-outline-variant/10 hover:border-secondary/30 transition-all duration-500 group relative overflow-hidden md:mt-8"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-secondary/15 transition-colors" />
                            <div className="mb-8">
                                <span
                                    className="material-symbols-outlined text-secondary text-4xl"
                                    style={{
                                        fontVariationSettings: "'FILL' 1",
                                    }}
                                >
                                    encrypted
                                </span>
                            </div>
                            <h3 className="font-headline text-xl font-bold mb-4 text-on-surface">
                                Security-First Engineering
                            </h3>
                            <p className="text-on-surface-variant leading-relaxed text-sm">
                                Every architecture decision considers threat
                                modeling, compliance (HIPAA, PCI), and
                                zero-trust principles.
                            </p>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            className="glass-card p-10 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/15 transition-colors" />
                            <div className="mb-8">
                                <span
                                    className="material-symbols-outlined text-primary text-4xl"
                                    style={{
                                        fontVariationSettings: "'FILL' 1",
                                    }}
                                >
                                    verified
                                </span>
                            </div>
                            <h3 className="font-headline text-xl font-bold mb-4 text-on-surface">
                                Quality at Scale
                            </h3>
                            <p className="text-on-surface-variant leading-relaxed text-sm">
                                50% reduction in QA cycles through automated
                                testing, code review culture, and CI/CD
                                discipline.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Home;
