import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full bg-zinc-950 text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* SECTION HEADER */}
        <div className="mb-16 text-center">

          <p className="text-blue-400 text-sm uppercase tracking-widest font-mono">
            About Me
          </p>

          <h2 className="about-3d-title text-center mb-8">
            DevOps Engineer
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div>

            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              I am a{" "}
              <span className="text-white font-semibold">
                DevOps Engineer
              </span>{" "}
              focused on cloud infrastructure, automation, containerization,
              and continuous integration and delivery. I enjoy understanding
              how applications move from development to production and
              building reliable deployment workflows.
            </p>

            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              I have hands-on project experience with{" "}
              <span className="text-white font-semibold">
                AWS, Linux, Docker, Kubernetes, Terraform, Jenkins,
                GitHub Actions, Helm, and Argo CD
              </span>
              . I have worked on infrastructure automation, CI/CD pipelines,
              containerized applications, Kubernetes deployments, and
              cloud-based environments.
            </p>

            <p className="text-zinc-400 text-lg leading-relaxed">
              I am continuously improving my knowledge of DevOps practices,
              infrastructure as code, security, monitoring, and automation.
              My goal is to contribute to teams that build scalable,
              reliable, and automated infrastructure.
            </p>

          </div>

          {/* RIGHT INFO CARDS */}
          <div className="grid grid-cols-2 gap-6">

            {[
              {
                label: "Primary Focus",
                value: "DevOps & Cloud",
              },
              {
                label: "Cloud Platform",
                value: "AWS",
              },
              {
                label: "Infrastructure",
                value: "Terraform & Ansible",
              },
              {
                label: "Containers",
                value: "Docker & Kubernetes",
              },
              {
                label: "CI/CD",
                value: "Jenkins & GitHub Actions",
              },
              {
                label: "Monitoring",
                value: "Prometheus & Grafana",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-6
                           hover:border-blue-500 transition"
              >

                <p className="text-zinc-400 text-sm mb-1">
                  {item.label}
                </p>

                <p className="text-lg font-semibold text-white">
                  {item.value}
                </p>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}