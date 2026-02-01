import { motion } from "framer-motion";
import { profile } from "../data";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6">
            {/* Background Abstract Shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-20 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl opacity-30"></div>
            </div>

            <div className="max-w-4xl mx-auto text-center z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl md:text-2xl text-accent font-medium mb-4 tracking-wide">
                        {profile.role}
                    </h2>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        {profile.catchphrase.split('×').map((text, i) => (
                            <span key={i} className="inline-block mx-1">
                                {i > 0 && <span className="text-slate-500 mx-2">×</span>}
                                {text}
                            </span>
                        ))}
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                        {profile.subCatchphrase}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#contact"
                            className="px-8 py-3 bg-accent hover:bg-sky-400 text-slate-900 font-bold rounded-full transition-all shadow-lg shadow-accent/20"
                        >
                            Contact Me
                        </a>
                        <a
                            href="#works"
                            className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-full border border-slate-700 transition-all"
                        >
                            View Works
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-slate-400 rounded-full"></div>
                </div>
            </motion.div>
        </section>
    );
}
