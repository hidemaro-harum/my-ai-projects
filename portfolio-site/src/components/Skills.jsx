import { motion } from "framer-motion";
import { skills } from "../data";

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-slate-900 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Skills</h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skills.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-800/30 p-8 rounded-2xl border border-slate-700/50"
                        >
                            <h3 className="text-xl font-bold mb-6 text-white text-center border-b border-slate-700 pb-4">
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-3 justify-center">
                                {category.items.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-slate-700 rounded-full text-sm text-slate-300 border border-slate-600"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
