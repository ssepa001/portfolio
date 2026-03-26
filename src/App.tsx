import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, NavLink, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

function Nav() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const navItems = [
        { label: "Home", path: "/" },
        { label: "Projects", path: "/projects" },
        { label: "Resume", path: "/resume" },
        { label: "Contact", path: "/contact" },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-slate-900/40 backdrop-blur-xl border-b border-slate-700/15 shadow-[0_20px_40px_rgba(20,184,166,0.08)]">
            <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
                <NavLink to="/" className="text-2xl font-bold tracking-tighter font-headline text-gradient">
                    Sam Sepasi
                </NavLink>
                <div className="hidden md:flex items-center space-x-8 font-headline tracking-tight text-sm uppercase">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.path === "/"}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-teal-400 font-bold border-b border-teal-400/50 pb-1"
                                    : "text-slate-400 hover:text-slate-100 transition-colors"
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </div>
                <button
                    className="md:hidden text-on-surface p-2"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <span className="material-symbols-outlined">{mobileOpen ? "close" : "menu"}</span>
                </button>
            </div>
            {mobileOpen && (
                <div className="md:hidden bg-surface-container-low border-t border-outline-variant/20 px-8 py-6 space-y-4">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.path === "/"}
                            onClick={() => setMobileOpen(false)}
                            className={({ isActive }) =>
                                `block text-lg font-headline font-bold py-2 transition-colors ${isActive ? "text-primary" : "text-on-surface-variant hover:text-on-surface"}`
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </div>
            )}
        </nav>
    );
}

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </AnimatePresence>
    );
}

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-background text-on-surface font-body relative">
                {/* Background ambient orbs */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                    <div className="orb absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-primary" />
                    <div className="orb absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-secondary" />
                    <div className="orb absolute top-[40%] left-[60%] w-[400px] h-[400px] rounded-full bg-primary-container" />
                </div>
                <ScrollToTop />
                <Nav />
                <AnimatedRoutes />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
