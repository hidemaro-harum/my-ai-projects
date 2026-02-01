import { motion } from "framer-motion";
import { profile } from "../data";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-gradient-to-b from-slate-900 to-black px-6 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-2xl mx-auto"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Get in Touch</h2>
                <p className="text-slate-400 mb-12">
                    事業の立ち上げ、業務改善、ツール開発など、お気軽にご相談ください。
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
                    <a
                        href={`mailto:${profile.email}`}
                        className="flex items-center gap-3 px-6 py-4 bg-slate-800 rounded-xl border border-slate-700 hover:border-accent transition-all group"
                    >
                        <Mail className="text-accent group-hover:scale-110 transition-transform" />
                        <span className="text-white">{profile.email}</span>
                    </a>
                    {/* Phone is hidden typically, but included as per request/data */}
                    {/*
          <div className="flex items-center gap-3 px-6 py-4 bg-slate-800 rounded-xl border border-slate-700">
            <Phone className="text-accent" />
            <span className="text-white">{profile.phone}</span>
          </div>
          */}
                </div>

                <footer className="text-slate-600 text-sm">
                    &copy; {new Date().getFullYear()} Hidemaro Endo. All rights reserved.
                </footer>
            </motion.div>
        </section>
    );
}
