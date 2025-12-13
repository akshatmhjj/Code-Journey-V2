import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import DarkVeil from "../components/DarkVeil";

const STAGES = [
    {
        id: "internet",
        title: "How the Internet Works",
        time: "2–3 days",
        learns: [
            "What happens when you type a URL",
            "How DNS finds websites",
            "How servers respond to requests",
            "What browsers actually do",
        ],
        mistakes: [
            "Thinking the browser is the internet",
            "Ignoring HTTP vs HTTPS",
            "Not understanding client–server roles",
        ],
        desc:
            "Learn how data travels across the world, how browsers talk to servers, and how webpages reach your screen.",
        why:
            "Understanding this removes confusion early and makes debugging far less intimidating later.",
        example: "Browser → DNS → Server → Response → Render Page",
        link: null,
        cta: "Understand the Internet",
    },

    {
        id: "html",
        title: "HTML — Structure",
        time: "5–7 days",
        learns: [
            "Semantic HTML elements",
            "Headings, sections, and layout structure",
            "Forms, inputs, and links",
            "Accessibility basics",
        ],
        mistakes: [
            "Using divs everywhere",
            "Skipping semantic tags",
            "Ignoring accessibility",
        ],
        desc:
            "Learn how content is structured so browsers and screen readers understand your pages.",
        why:
            "Good HTML makes styling easier, improves accessibility, and prevents messy code later.",
        example: "<header><main><footer>",
        link: "/html",
        cta: "Start HTML",
    },

    {
        id: "css",
        title: "CSS — Layout & Design",
        time: "7–10 days",
        learns: [
            "Box model and spacing",
            "Flexbox and Grid",
            "Responsive design",
            "Basic animations",
        ],
        mistakes: [
            "Hardcoding widths and heights",
            "Ignoring mobile screens",
            "Overusing absolute positioning",
        ],
        desc:
            "Control spacing, layout, colors, and responsiveness using modern CSS techniques.",
        why:
            "CSS turns raw content into polished, usable interfaces across devices.",
        example: "Flexbox • Grid • Media Queries",
        link: "/css",
        cta: "Learn CSS",
    },

    {
        id: "javascript",
        title: "JavaScript — Logic",
        time: "10–14 days",
        learns: [
            "Variables, functions, and conditions",
            "DOM manipulation",
            "Events and user interaction",
            "Async code and APIs",
        ],
        mistakes: [
            "Trying to memorize everything",
            "Avoiding async concepts",
            "Fear of errors and debugging",
        ],
        desc:
            "Learn how websites respond to users, fetch data, and handle logic dynamically.",
        why:
            "JavaScript is what turns static pages into real applications.",
        example: "Events • DOM • Fetch",
        link: "/js",
        cta: "Learn JavaScript",
    },

    {
        id: "database",
        title: "Databases",
        time: "5–7 days",
        learns: [
            "What databases are and why they exist",
            "SQL vs NoSQL",
            "Storing users and content",
            "Basic queries",
        ],
        mistakes: [
            "Overcomplicating schemas",
            "Not understanding relationships",
            "Treating databases like files",
        ],
        desc:
            "Understand how applications persist users, content, and information.",
        why:
            "Without databases, apps forget everything when refreshed.",
        example: "Users • Posts • Orders",
        link: "/database",
        cta: "Understand Databases",
    },

    {
        id: "projects",
        title: "Projects & Deployment",
        time: "Ongoing",
        learns: [
            "Connecting frontend and backend",
            "Using real APIs",
            "Deployment basics",
            "Debugging real issues",
        ],
        mistakes: [
            "Waiting too long to build projects",
            "Trying to make projects perfect",
            "Not deploying publicly",
        ],
        desc:
            "Combine everything you’ve learned into complete projects and deploy them.",
        why:
            "Projects are where confidence replaces theory and learning becomes real.",
        example: "Build → Deploy → Improve",
        link: null,
        cta: "Build Projects",
    },
];

export default function RoadmapPage() {
    const pageRef = useRef(null);
    const stagesRef = useRef(null);

    
    const { scrollYProgress: pageScroll } = useScroll({
        target: pageRef,
        offset: ["start start", "end end"],
    });

    
    const { scrollYProgress: stagesScroll } = useScroll({
        target: stagesRef,
        offset: ["start start", "end end"],
    });

    const lineHeight = useTransform(stagesScroll, [0, 1], ["0%", "100%"]);



    return (
        <div
            ref={pageRef}
            className="relative min-h-screen text-white overflow-hidden"
        >
            <div className="fixed inset-0 z-0 pointer-events-none">
                <DarkVeil />
            </div>

            {/* HERO */}
            <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6 relative z-10 mb-24">

                
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-6 mt-26 text-sm md:text-base text-gray-400 max-w-xl"
                >
                    Most beginners don’t fail at web development.
                    They fail at knowing <span className="text-gray-300">what to learn first</span>.
                </motion.p>

                
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-4xl md:text-7xl font-extrabold leading-tight
                    bg-clip-text text-transparent
                    bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400"
                >
                    A Web Development Roadmap
                    <br />
                    <span className="text-white/90">
                        That Actually Makes Sense
                    </span>
                </motion.h1>

                
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-8 max-w-2xl text-md md:text-xl text-gray-300"
                >
                    No trends. No noise. No “learn everything”.
                    <br />
                    Just the right concepts, in the right order.
                </motion.p>

               
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="mt-12 h-[2px] w-48 origin-center
                    bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                />

                
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="mt-10 max-w-3xl text-gray-400 space-y-4"
                >
                    <p>
                        This roadmap isn’t here to impress you.
                        It’s here to <span className="text-gray-300">keep you oriented</span>.
                    </p>

                    <p>
                        You won’t move fast.
                        You won’t feel lost.
                        And you won’t wonder why things suddenly stopped making sense.
                    </p>

                    <p className="text-gray-300">
                        Follow it calmly - and the pieces will start connecting on their own.
                    </p>
                </motion.div>

            </section>



            {/* HOW TO USE */}
            <section className="max-w-4xl mx-auto px-6 mb-32 relative z-10">
                <h2 className="text-3xl font-bold mb-10 text-center">
                    <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                        Think of this less like instructions - and more like a calm voice saying,
                        “You’re on the right path. Just don’t sprint.”
                    </p>

                    How to Use This Roadmap
                </h2>
                <div className="mt-4 mb-10 h-1 w-32 bg-gradient-to-r from-purple-700 via-blue-600 to-cyan-400 mx-auto rounded-full" />

                <div className="grid md:grid-cols-2 gap-12 text-gray-300">
                    <p>
                        📘 Follow the stages in order. Each one prepares you for the next.
                    </p>
                    <p>
                        💡 Don’t rush forward — understanding compounds over time.
                    </p>
                    <p>
                        🔍 Build small things as you go. Progress beats perfection.
                    </p>
                    <p>
                        🧠 Feeling stuck is normal. It usually means you’re learning.
                    </p>
                </div>
            </section>

            {/* ROADMAP MAP */}
            <RoadmapMap stages={STAGES} progress={pageScroll} />
            <div
                ref={stagesRef}
                className="relative max-w-5xl mx-auto px-6 pb-40 z-10">

                
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[3px] bg-white/10 rounded-full h-full" />

                
                <motion.div
                    style={{ height: lineHeight }}
                    className="absolute left-1/2 top-0 -translate-x-1/2 w-[3px]
                    bg-gradient-to-b from-cyan-400 via-blue-500 to-indigo-500
                    shadow-[0_0_15px_rgba(99,102,241,0.6)]
                    rounded-full
                    origin-top"
                />

                {/* STAGES */}
                <div

                    className="relative flex flex-col space-y-32 pt-32">
                    {STAGES.map((stage, i) => (
                        <StageCard key={stage.id} stage={stage} index={i} />
                    ))}
                </div>
            </div>

        </div>
    );
}

function RoadmapMap({ stages, progress }) {
    const pathProgress = useTransform(progress, [0, 0.6], [0, 1]);

    return (
        <section className="relative max-w-3xl mx-auto px-6 mb-40">
            <h2 className="text-3xl font-bold text-center mb-20">
                <p className="text-center text-gray-400 mb-16 max-w-xl mx-auto">
                    This isn’t a race, a checklist, or a syllabus.
                    It’s a direction, you move forward as understanding builds.
                </p>

                Your Learning Path
            </h2>


            <div className="relative h-[600px] flex justify-center">
                <svg className="absolute h-full w-full">
                    <motion.path
                        d="M150 0 L220 120 L120 240 L240 360 L140 480 L200 600"
                        fill="none"
                        stroke="url(#roadmapGradient)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        style={{ pathLength: pathProgress }}
                    />
                    <defs>
                        <linearGradient id="roadmapGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#22d3ee" />
                            <stop offset="100%" stopColor="#6366f1" />
                        </linearGradient>
                    </defs>
                </svg>

                <div className="absolute top-0 left-1/2 -translate-x-1/2 space-y-[90px]">
                    {stages.map((stage) => (
                        <div key={stage.id} className="flex items-center gap-4">
                            <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
                            <span className="text-sm text-gray-300">{stage.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function StageCard({ stage, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
        >
            
            <div className="mb-4 text-sm text-cyan-300 flex items-center gap-3">
                <span>Stage {index + 1}</span>
                {stage.time && (
                    <span className="text-gray-400">· {stage.time}</span>
                )}
            </div>

            <div className="p-10 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10">
                <h3 className="text-3xl font-bold mb-2">{stage.title}</h3>

                {stage.short && (
                    <p className="text-gray-400 mb-4">{stage.short}</p>
                )}

                <p className="text-gray-300 mb-4">{stage.desc}</p>

                {stage.learns && (
                    <div className="mb-6">
                        <p className="text-sm uppercase tracking-wide text-cyan-300 mb-2">
                            What you’ll learn
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-gray-300">
                            {stage.learns.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* {stage.mistakes && (
                    <div className="mb-6">
                        <p className="text-sm uppercase tracking-wide text-amber-300 mb-2">
                            Common mistakes
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-gray-400">
                            {stage.mistakes.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )} */}

                <p className="text-gray-400 italic mb-6">{stage.why}</p>

                <div className="p-4 bg-black/40 rounded-xl text-cyan-200">
                    <pre className="text-sm whitespace-pre-wrap">{stage.example}</pre>
                </div>

                {stage.link && (
                    <button
                        onClick={() => (window.location.href = stage.link)}
                        className="mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-200 to-indigo-300 text-black font-semibold cursor-pointer"
                    >
                        {stage.cta || "Start This Stage"}
                    </button>
                )}
            </div>
        </motion.div>
    );
}

