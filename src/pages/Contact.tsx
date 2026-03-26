import { motion } from "framer-motion";
import { useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

const Contact = () => {
    const [status, setStatus] = useState<FormStatus>("idle");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        const form = e.currentTarget;
        const data = new FormData(form);

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://formspree.io/f/xyzgvpjz");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        };
        xhr.send(data);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-10"
        >
            <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
                {/* Header */}
                <motion.header
                    className="flex flex-col items-start gap-6 mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                        <span className="font-label text-xs uppercase tracking-widest text-primary-fixed-dim font-bold">
                            Available for new projects
                        </span>
                    </div>
                    <div className="max-w-3xl">
                        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-primary via-primary-container to-secondary bg-clip-text text-transparent">
                            Get In Touch
                        </h1>
                        <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed max-w-2xl font-light">
                            Have a project that needs AI-accelerated engineering, a technical deep dive, or
                            just want to connect? Let's talk.
                        </p>
                    </div>
                </motion.header>

                {/* Asymmetric Bento Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left: Social Links & Info */}
                    <motion.div
                        className="lg:col-span-5 flex flex-col gap-8 order-2 lg:order-1"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        {/* Social Links */}
                        <div className="flex justify-center md:justify-start gap-4">
                            <a
                                href="https://www.linkedin.com/in/ssepa001"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-card p-6 rounded-xl hover:bg-surface-container-highest transition-all duration-300 group flex flex-col items-center gap-2 flex-1 border border-outline-variant/20"
                            >
                                <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform">
                                    share
                                </span>
                                <span className="font-label text-[10px] uppercase tracking-tighter text-outline">
                                    LinkedIn
                                </span>
                            </a>
                            <a
                                href="https://github.com/ssepa001"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-card p-6 rounded-xl hover:bg-surface-container-highest transition-all duration-300 group flex flex-col items-center gap-2 flex-1 border border-outline-variant/20"
                            >
                                <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform">
                                    code
                                </span>
                                <span className="font-label text-[10px] uppercase tracking-tighter text-outline">
                                    GitHub
                                </span>
                            </a>
                            <a
                                href="mailto:samssepasi@gmail.com"
                                className="glass-card p-6 rounded-xl hover:bg-surface-container-highest transition-all duration-300 group flex flex-col items-center gap-2 flex-1 border border-outline-variant/20"
                            >
                                <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform">
                                    alternate_email
                                </span>
                                <span className="font-label text-[10px] uppercase tracking-tighter text-outline">
                                    Email
                                </span>
                            </a>
                        </div>

                        {/* Direct Contact Info */}
                        <div className="p-10 rounded-xl bg-gradient-to-br from-surface-container-low via-surface-container to-surface-container-high border border-outline-variant/10 shadow-inner">
                            <p className="font-label text-sm uppercase tracking-widest text-secondary mb-4">
                                Or reach me directly at
                            </p>
                            <a
                                href="mailto:samssepasi@gmail.com"
                                className="font-headline text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:opacity-80 transition-opacity break-all"
                            >
                                samssepasi@gmail.com
                            </a>
                            <div className="mt-8 pt-8 border-t border-outline-variant/10 flex flex-col gap-4">
                                <div className="flex items-center gap-4 text-on-surface-variant">
                                    <span className="material-symbols-outlined text-primary">
                                        location_on
                                    </span>
                                    <span className="text-sm font-medium">Remote / San Diego, CA</span>
                                </div>
                                <div className="flex items-center gap-4 text-on-surface-variant">
                                    <span className="material-symbols-outlined text-primary">schedule</span>
                                    <span className="text-sm font-medium">Response time: ~24 hours</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Contact Form */}
                    <motion.div
                        className="lg:col-span-7 order-1 lg:order-2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                    >
                        <div className="glass-card p-8 md:p-12 rounded-xl relative overflow-hidden border border-outline-variant/20">
                            {/* Teal top accent */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary-container to-transparent" />
                            <h2 className="font-headline text-3xl font-bold mb-8 text-on-surface">
                                Send a Message
                            </h2>

                            {status === "success" ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center gap-4 py-12 text-center"
                                >
                                    <span className="material-symbols-outlined text-primary text-5xl">
                                        check_circle
                                    </span>
                                    <h3 className="text-2xl font-headline font-bold text-on-surface">
                                        Message Sent!
                                    </h3>
                                    <p className="text-on-surface-variant">
                                        Thanks for reaching out. I'll get back to you within 24 hours.
                                    </p>
                                    <button
                                        onClick={() => setStatus("idle")}
                                        className="mt-4 border border-primary/30 text-primary font-bold px-6 py-2 rounded-lg hover:bg-primary/10 transition-all"
                                    >
                                        Send Another
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label
                                                className="font-label text-xs uppercase tracking-widest text-outline"
                                                htmlFor="name"
                                            >
                                                Your Name
                                            </label>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                required
                                                placeholder="Enter your full name"
                                                className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 text-on-surface placeholder:text-outline/50 rounded-t-md px-3 py-3 outline-none transition-colors"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label
                                                className="font-label text-xs uppercase tracking-widest text-outline"
                                                htmlFor="email"
                                            >
                                                Your Email
                                            </label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                placeholder="name@company.com"
                                                className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 text-on-surface placeholder:text-outline/50 rounded-t-md px-3 py-3 outline-none transition-colors"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label
                                            className="font-label text-xs uppercase tracking-widest text-outline"
                                            htmlFor="message"
                                        >
                                            Your Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={6}
                                            placeholder="Describe your project or inquiry..."
                                            className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 text-on-surface placeholder:text-outline/50 rounded-t-md px-3 py-3 outline-none transition-colors resize-none"
                                        />
                                    </div>
                                    {status === "error" && (
                                        <p className="text-error text-sm">
                                            Something went wrong. Please try again or email me directly.
                                        </p>
                                    )}
                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            disabled={status === "loading"}
                                            className="w-full md:w-auto flex items-center justify-center gap-3 bg-gradient-to-br from-primary to-secondary-container text-on-primary-container font-headline font-bold px-10 py-4 rounded-md shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all group disabled:opacity-60 disabled:cursor-not-allowed"
                                        >
                                            <span>
                                                {status === "loading" ? "Sending..." : "Send Message"}
                                            </span>
                                            <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
                                                send
                                            </span>
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </main>
        </motion.div>
    );
};

export default Contact;
