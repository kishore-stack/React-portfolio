import React from "react";

export default function Skills() {
  const skills = [
    { name: "AWS", color: "from-orange-500" },
    { name: "Linux", color: "from-yellow-400" },
    { name: "Bash / Shell", color: "from-green-400" },
    { name: "Git & GitHub", color: "from-zinc-100" },
    { name: "Docker", color: "from-blue-500" },
    { name: "Kubernetes", color: "from-blue-600" },
    { name: "Terraform", color: "from-purple-500" },
    { name: "Ansible", color: "from-red-500" },
    { name: "Jenkins", color: "from-red-400" },
    { name: "GitHub Actions", color: "from-blue-400" },
    { name: "Helm", color: "from-blue-500" },
    { name: "Argo CD", color: "from-cyan-400" },
    { name: "SonarQube", color: "from-blue-400" },
    { name: "Trivy", color: "from-green-500" },
    { name: "Nexus Repository", color: "from-orange-500" },
    { name: "Prometheus", color: "from-orange-400" },
    { name: "Grafana", color: "from-orange-500" },
  ];

  return (
    <section
      id="Skills"
      className="w-full py-24 bg-zinc-900 text-white scroll-mt-16 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* SECTION HEADER */}
        <div className="text-center mb-20">

          <p className="text-blue-400 text-sm uppercase tracking-widest font-mono mb-3">
            Technical Expertise
          </p>

          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-widest text-zinc-100">
            DevOps Skills
          </h2>

          <p className="mt-5 text-zinc-400 max-w-2xl mx-auto text-lg">
            Tools and technologies I use for cloud infrastructure,
            automation, containerization, CI/CD, security, and monitoring.
          </p>

        </div>

        {/* SKILL CARDS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 [perspective:2000px]">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative h-36 [transform-style:preserve-3d] animate-shuffle"
              style={{
                animationDelay: `${index * 0.3}s`,
              }}
            >

              {/* FRONT */}
              <div
                className="
                  absolute inset-0
                  flex items-center justify-center
                  bg-zinc-800
                  rounded-2xl
                  border border-zinc-700
                  shadow-xl
                  backface-hidden
                  hover:border-blue-500
                  transition
                "
              >
                <span className="text-lg md:text-xl font-bold text-zinc-200 text-center px-4">
                  {skill.name}
                </span>
              </div>

              {/* BACK */}
              <div
                className="
                  absolute inset-0
                  flex items-center justify-center
                  bg-zinc-800
                  rounded-2xl
                  border border-zinc-700
                  shadow-xl
                  backface-hidden
                  [transform:rotateY(180deg)]
                  overflow-hidden
                "
              >

                {/* GLOW */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-20`}
                />

                {/* NAME */}
                <span className="relative z-10 text-lg font-black uppercase tracking-wide text-white text-center px-3">
                  {skill.name}
                </span>

                {/* BOTTOM LINE */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${skill.color} to-transparent`}
                />

              </div>

            </div>
          ))}

        </div>
      </div>

      {/* ANIMATION */}
      <style>{`
        @keyframes shuffleFlip {
          0% {
            transform: rotateY(0deg) scale(1);
          }

          5% {
            transform: rotateY(180deg) scale(1.05);
          }

          20% {
            transform: rotateY(180deg) scale(1.05);
          }

          25% {
            transform: rotateY(360deg) scale(1);
          }

          100% {
            transform: rotateY(360deg) scale(1);
          }
        }

        .animate-shuffle {
          animation: shuffleFlip 8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>

    </section>
  );
}