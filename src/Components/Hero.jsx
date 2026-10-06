import React, { useEffect, useState } from "react";

export default function Hero() {
  const texts = [
    "DevOps Engineer",
    "AWS & Cloud Infrastructure",
    "CI/CD Automation",
    "Docker & Kubernetes",
    "Terraform & Infrastructure as Code",
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // CUSTOM CURSOR LOGIC
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // TYPEWRITER LOGIC
  useEffect(() => {
    const currentText = texts[textIndex];

    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentText.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, 70);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-zinc-900 text-white flex flex-col justify-center items-center overflow-hidden cursor-none"
    >
      {/* GLOWING CUSTOM CURSOR */}
      <div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-blue-500 rounded-full pointer-events-none z-[9999] transition-transform duration-150 ease-out -translate-x-1/2 -translate-y-1/2 mix-blend-screen hidden md:block"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
        }}
      >
        <div className="absolute inset-0 bg-blue-500/30 blur-md rounded-full animate-pulse"></div>
      </div>

      {/* BACKGROUND DECORATION */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent_50%)]" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">

          {/* LEFT CONTENT */}
          <div className="text-left flex flex-col justify-center items-start">

            <p className="text-blue-400 text-sm mb-2 font-mono tracking-widest uppercase">
              Hello, I'm
            </p>

            <h1 className="text-6xl md:text-8xl font-extrabold mb-4 tracking-tighter leading-tight">
              Kishore <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-zinc-100 to-emerald-400">
                Kumar
              </span>
            </h1>

            {/* TYPEWRITER */}
            <h2 className="text-xl md:text-2xl font-semibold text-zinc-300 min-h-[40px] flex items-center">
              <span className="text-blue-400 mr-2">{">"}</span>

              {displayText}

              <span className="w-1 h-6 ml-1 bg-blue-500 animate-pulse" />
            </h2>

            <p className="mt-6 text-zinc-400 max-w-xl leading-relaxed text-lg">
              DevOps Engineer focused on building reliable cloud infrastructure,
              automating CI/CD pipelines, containerizing applications, and
              deploying scalable workloads using AWS, Docker, Kubernetes,
              Terraform, and modern DevOps tools.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="px-10 py-4 bg-blue-600 text-white rounded-full text-sm font-bold shadow-[0_0_20px_rgba(37,99,235,0.3)]
                           hover:bg-blue-500 hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-10 py-4 border border-zinc-700 rounded-full text-sm font-bold
                           hover:bg-zinc-800 hover:border-zinc-500 transition-all duration-300 transform hover:-translate-y-1"
              >
                Let's Talk
              </a>

            </div>
          </div>

          {/* RIGHT CONTENT - DEVOPS WAVEFORM */}
          <div className="relative w-full h-[300px] md:h-[500px] flex items-center justify-center gap-2">

            {[...Array(40)].map((_, i) => (
              <div
                key={i}
                className="w-2 bg-gradient-to-t from-blue-500 to-emerald-500 rounded-t-full"
                style={{
                  height: "50px",
                  animation: `waveform 1.5s ease-in-out infinite`,
                  animationDelay: `${i * 0.05}s`,
                }}
              ></div>
            ))}

          </div>
        </div>
      </div>

      {/* WAVEFORM KEYFRAMES */}
      <style jsx>{`
        @keyframes waveform {
          0%,
          100% {
            transform: scaleY(0.3);
          }

          50% {
            transform: scaleY(1);
          }
        }
      `}</style>
    </section>
  );
}