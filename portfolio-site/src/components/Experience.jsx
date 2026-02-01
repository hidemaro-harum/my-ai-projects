import { motion } from "framer-motion";
import { experience } from "../data";

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-slate-800/50 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Experience</h2>
                </motion.div>

                <div className="relative border-l-2 border-slate-700 ml-4 md:ml-0 space-y-12">
                    {experience.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Dot */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-accent"></div>

                            <div>
                                <span className="text-sm text-accent font-medium mb-1 block">
                                    {job.period}
                                </span>
                                <h3 className="text-xl font-bold text-white mb-1">
                                    {job.company}
                                </h3>
                                <p className="text-slate-400 font-medium mb-3">
                                    {job.role}
                                </p>
                                <p className="text-slate-400 leading-relaxed text-sm">
                                    {job.details}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
