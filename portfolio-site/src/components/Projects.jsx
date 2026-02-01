import { motion } from "framer-motion";
import { projects } from "../data";
import { ExternalLink, Tag } from "lucide-react";

export default function Projects() {
    return (
        <section id="works" className="py-24 bg-slate-900 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="text-accent font-medium tracking-wider text-sm uppercase">Portfolio</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">Selected Works</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-accent/50 transition-colors group"
                        >
                            {/* Image */}
                            <div className="h-48 bg-slate-700/50 flex items-center justify-center relative overflow-hidden group-hover:bg-slate-700 transition-colors">
                                {project.images ? (
                                    // Multiple images (Kusatsu): side by side, fully visible
                                    <div className="flex w-full h-full gap-1 p-2">
                                        {project.images.map((img, i) => (
                                            <img
                                                key={i}
                                                src={img}
                                                alt={`${project.title} ${i + 1}`}
                                                className="w-1/2 h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                            />
                                        ))}
                                    </div>
                                ) : project.image ? (
                                    // Single image (AI Tools, GAS): object-cover filling container
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="text-slate-500 font-medium">{project.category}</div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h3>
                                    {/* Link icon if we had a link, currently mostly internal tools */}
                                </div>

                                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                {project.items && (
                                    <ul className="text-slate-400 text-sm mb-4 space-y-1 list-disc list-inside">
                                        {project.items.slice(0, 2).map((item, i) => (
                                            <li key={i}>{item.split('（')[0]}</li>
                                        ))}
                                    </ul>
                                )}

                                {project.metrics && (
                                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-700/50">
                                        {project.metrics.map((metric, i) => (
                                            <span key={i} className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                                                {metric}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
