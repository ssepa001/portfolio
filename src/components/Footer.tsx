const Footer = () => {
    return (
        <footer className="bg-slate-950 w-full py-12 border-t border-slate-800/50 relative z-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-8 gap-6">
                <div className="font-headline font-bold uppercase tracking-widest text-gradient">
                    Sam Sepasi
                </div>
                <p className="font-body text-xs tracking-widest uppercase text-slate-500">
                    © {new Date().getFullYear()} Sam Sepasi. Built for the Neural Age.
                </p>
                <div className="flex gap-8 font-body text-xs tracking-widest uppercase">
                    <a
                        href="https://github.com/ssepa001"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-teal-400 transition-colors opacity-80 hover:opacity-100"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ssepa001"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-teal-400 transition-colors opacity-80 hover:opacity-100"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="mailto:samssepasi@gmail.com"
                        className="text-slate-500 hover:text-teal-400 transition-colors opacity-80 hover:opacity-100"
                    >
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
