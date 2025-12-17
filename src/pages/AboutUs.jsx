import React from "react";
import TypeText from "../components/Blurtext";
import Aurora from "../components/Aurora";
import {
  Target,
  Lightbulb,
  Zap,
  Award,
  Users,
  Globe,
  Code2,
  GraduationCap,
} from "lucide-react";
import { useEffect, useState } from "react";

const useCountUp = (end, duration = 1200) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end, duration]);

  return count;
};


const About = () => {
  const values = [
    {
      icon: Target,
      title: "Clear Direction",
      description:
        "Every learner follows a structured path — knowing what to learn, why it matters, and what comes next.",
    },
    {
      icon: Lightbulb,
      title: "Concept-Driven Learning",
      description:
        "We focus on fundamentals and mental models instead of shortcuts or surface-level tutorials.",
    },
    {
      icon: Zap,
      title: "Hands-On Growth",
      description:
        "Learning sticks when you build. Practice and projects are part of every step.",
    },
    {
      icon: Award,
      title: "Long-Term Mastery",
      description:
        "We optimize for deep understanding — skills that grow with your career.",
    },
  ];

  const impactStats = [
    { icon: Users, label: "Active Learners", value: 12 },
    { icon: Code2, label: "Lessons Completed", value: 45 },
    { icon: GraduationCap, label: "Developers Trained", value: 20 },
    { icon: Globe, label: "Countries Reached", value: 3 },
  ];


  return (
    <>

      <div className="fixed inset-0 -z-10">
        <Aurora
          colorStops={["#7CFF67", "#B19EEF", "#5227FF"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      <div className="relative w-full min-h-screen flex flex-col items-center px-6 py-24 gap-28">

        {/* ---------------- HERO ---------------- */}
        <section className="relative text-center max-w-4xl z-10 mt-28">
          <h1 className="text-5xl md:text-6xl font-semibold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent mb-8">
            <TypeText
              text={["About Code Journey"]}
              typingSpeed={60}
              pauseDuration={1200}
              showCursor={true}
            />
          </h1>

          <p className="text-lg md:text-xl text-white/85 leading-relaxed font-light">
            Code Journey exists to make learning web development{" "}
            <span className="text-purple-300 font-medium">
              structured, intentional, and human
            </span>
            . We guide learners from fundamentals to real-world confidence —
            without overwhelm.
          </p>
        </section>

        <section className="max-w-3xl text-center">
          <p className="text-xl italic text-white/80">
            “You don’t need to learn everything.
            <span className="text-purple-300"> You need to learn the right things, in the right order.</span>”
          </p>
        </section>

        {/* ----------- IMPACT STATS ----------- */}
        <section className="relative z-10 w-full max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => {
              const Icon = stat.icon;
              const count = useCountUp(stat.value);

              return (
                <div
                  key={index}
                  className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center"
                >
                  <Icon className="w-7 h-7 text-purple-300 mx-auto mb-3" />

                  <p className="text-2xl font-semibold text-white">
                    {count.toLocaleString()}
                    {stat.value >= 10 && "+"}
                  </p>

                  <p className="text-sm text-white/70 mt-1">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </section>


        {/* ----------- MISSION & VISION ----------- */}
        <section className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-10">


          <div className="rounded-2xl bg-white/5 border border-white/10 p-10">
            <span className="text-xs uppercase tracking-widest text-purple-300">
              Our Purpose
            </span>

            <h2 className="text-2xl font-semibold text-white mt-3 mb-4">
              Our Mission
            </h2>

            <p className="text-white/80 leading-relaxed max-w-prose">
              To simplify web development education through clear learning roadmaps,
              strong fundamentals, and hands-on practice — helping beginners grow into
              confident, job-ready developers.
            </p>
          </div>


          <div className="rounded-2xl bg-white/5 border border-white/10 p-10">
            <span className="text-xs uppercase tracking-widest text-purple-300">
              Our Direction
            </span>

            <h2 className="text-2xl font-semibold text-white mt-3 mb-4">
              Our Vision
            </h2>

            <p className="text-white/80 leading-relaxed max-w-prose">
              To become a trusted learning companion for self-taught developers
              worldwide — guiding long-term careers, not just short-term courses.
            </p>
          </div>

        </section>


        <section className="relative z-10 w-full max-w-7xl">
          <h2 className="text-4xl font-semibold text-white text-center mb-14">
            Core Values
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-white/5 border border-white/10 p-7
                             hover:bg-white/10 transition duration-300"
                >
                  <Icon className="w-7 h-7 text-purple-300 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-white/75 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="max-w-3xl text-center mt-10">
          <p className="text-sm uppercase tracking-widest text-white/50">
            Learn with clarity. Build with confidence.
          </p>
        </section>

      </div>
    </>
  );
};

export default About;
