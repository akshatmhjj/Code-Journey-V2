import React from "react";
import { motion } from "framer-motion";
import { Globe, Palette, Code, Database } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ColorBends from "../components/ColorBends";

const topics = [
    {
        title: "HTML",
        icon: Globe,
        desc:
            "HTML defines the structure and meaning of content. It answers the question: what exists on this page?",
        link: "/html",
    },
    {
        title: "CSS",
        icon: Palette,
        desc:
            "CSS defines how things appear. Layout, spacing, colors, responsiveness, and motion all live here.",
        link: "/css",
    },
    {
        title: "JavaScript",
        icon: Code,
        desc:
            "JavaScript defines how things behave. It connects user actions, logic, and external systems.",
        link: "/javascript",
    },
    {
        title: "Database",
        icon: Database,
        desc:
            "Databases define memory. They allow applications to store, retrieve, and reason about data.",
        link: "/database",
    },
];

export default function TechStack() {
    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen text-gray-100 overflow-x-hidden">
           
            <div className="fixed inset-0 -z-10">
                <ColorBends
                    colors={["#ffd500", "#00ffcc", "#ff4b91"]}
                    rotation={30}
                    speed={0.3}
                    scale={1.2}
                    frequency={1.4}
                    warpStrength={1.2}
                    mouseInfluence={0.2}
                    parallax={0.6}
                    noise={0.08}
                    transparent={false}
                />
                <div className="absolute inset-0 bg-black/70" />
            </div>

            
            <main className="max-w-6xl mx-auto px-6 pt-32 pb-44 space-y-36">

                {/* HERO */}
                <section>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-extrabold leading-tight mb-10"
                    >
                        <span className="block text-gray-200">What really is 
                            <span className="block bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                            a Tech Stack ?
                            </span>
                        </span>
                    </motion.h1>

                    <p className="text-xl text-gray-300 leading-relaxed max-w-4xl">
                        A tech stack is the set of technologies that work together to build,
                        run, and scale an application. Each part exists to solve a specific
                        problem - structure, appearance, behavior, or data.
                    </p>
                </section>

                
                <section className="relative">
                    <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent" />
                    <blockquote className="pl-10 text-2xl md:text-3xl font-light text-gray-200 leading-snug max-w-4xl">
                        “A tech stack is not about tools -
                        <span className="text-cyan-300"> it’s about responsibilities.</span>”
                    </blockquote>
                </section>

                
                <section className="grid md:grid-cols-2 gap-16">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-semibold text-cyan-300">
                            Why tech stacks exist
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                            Modern software is too complex to be built with a single technology.
                            Splitting responsibilities allows systems to grow without becoming
                            fragile or impossible to maintain.
                        </p>
                        <p className="text-gray-400">
                            A well-chosen tech stack makes collaboration easier, performance
                            predictable, and development sustainable.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 space-y-4">
                        <p className="text-gray-300">✓ Clear separation of concerns</p>
                        <p className="text-gray-300">✓ Scalable architecture</p>
                        <p className="text-gray-300">✓ Easier debugging</p>
                        <p className="text-gray-300">✓ Long-term maintainability</p>
                    </div>
                </section>

                {/* CONCEPT SECTIONS */}
                <section>
                    <h2 className="text-4xl font-semibold mb-6">
                        Core parts of a web tech stack
                    </h2>

                    <p className="text-gray-400 max-w-3xl mb-20 leading-relaxed">
                        A modern web application is composed of multiple technologies, each with a
                        clearly defined responsibility. These parts don’t replace each other —
                        they work together to form a complete system.
                    </p>

                    <div className="space-y-24">
                        {topics.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <motion.article
                                    key={item.title}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="relative"
                                >
                                    
                                    <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent" />

                                    <div className="pl-10 grid md:grid-cols-[auto_1fr] gap-8">
                                        
                                        <div className="mt-1">
                                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                                <Icon className="w-7 h-7 text-cyan-300" />
                                            </div>
                                        </div>

                                        
                                        <div className="max-w-4xl space-y-4">
                                            <h3 className="text-2xl font-semibold tracking-tight">
                                                {item.title}
                                            </h3>

                                            <p className="text-gray-300 leading-relaxed">
                                                {item.desc}
                                            </p>

                                            
                                            <div className="rounded-xl bg-white/5 border border-white/10 px-5 py-4 text-sm text-gray-400 leading-relaxed">
                                                <span className="text-cyan-300 font-medium">
                                                    What problem it solves:
                                                </span>{" "}
                                                This part of the stack focuses on a single responsibility,
                                                allowing the system to remain flexible, scalable, and easier
                                                to maintain as it grows.
                                            </div>

                                            <button
                                                onClick={() => navigate(item.link)}
                                                className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition text-sm"
                                            >
                                                Learn More →
                                            </button>
                                        </div>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>
                </section>

                {/* FINAL CALLOUT */}
                <section className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 via-transparent to-indigo-400/10 p-14 overflow-hidden">

                    
                    <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-400/10 blur-[120px]" />

                    <div className="relative max-w-4xl space-y-6">
                        <h2 className="text-2xl md:text-3xl font-semibold text-cyan-300">
                            A tech stack is a set of decisions
                        </h2>

                        <p className="text-gray-300 leading-relaxed text-lg">
                            There is no universally “best” tech stack. Every stack represents a series
                            of trade-offs — between performance, simplicity, scalability, and
                            developer experience.
                        </p>

                        <p className="text-gray-400 leading-relaxed">
                            Understanding what each part of the stack does allows you to choose tools
                            intentionally, rather than following trends or copying architectures
                            blindly.
                        </p>
                    </div>
                </section>


            </main>
        </div>
    );
}
