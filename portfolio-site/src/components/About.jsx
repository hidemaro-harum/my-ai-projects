import { motion } from "framer-motion";
import { highlights } from "../data";

export default function About() {
    return (
        <section id="about" className="py-24 bg-slate-900 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">About My Value</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        ビジネスの立ち上げから定着まで、フェーズに合わせた最適な「動き」を提供します。
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 hover:bg-slate-800 transition-colors"
                        >
                            <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 text-accent">
                                <item.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                            <p className="text-slate-400 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
