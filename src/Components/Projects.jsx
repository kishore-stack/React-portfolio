import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "AWS Infrastructure Automation",
      subtitle: "Terraform + GitHub Actions",

      description:
        "Automated AWS infrastructure provisioning using Terraform and GitHub Actions. Built a VPC-based environment with public subnets, Internet Gateway, route tables, security groups, EC2, Elastic IP, S3, and IAM resources.",

      tech:
        "AWS, Terraform, GitHub Actions, EC2, VPC, S3, IAM",

      github:
        "https://github.com/kishore-stack/aws-terraform-github-actions.git",

      number: "01",
    },

    {
      title: "Three-Tier Blog Application",
      subtitle: "CI/CD Deployment on Amazon EKS",

      description:
        "Built a production-oriented CI/CD workflow for a containerized three-tier application and deployed it on Amazon EKS. Integrated code quality, security scanning, container image management, Kubernetes deployment, and monitoring.",

      tech:
        "AWS EKS, Docker, Kubernetes, Nexus, SonarQube, Trivy, Prometheus, Grafana",

      github:
        "https://github.com/kishore-stack/BlogReact.git",

      number: "02",
    },

    {
      title: "Java Application CI/CD",
      subtitle: "Jenkins + Helm + Argo CD",

      description:
        "Implemented a CI/CD and GitOps workflow for a Java application using Jenkins and Maven. Integrated SonarQube for code quality, Docker for containerization, Helm for Kubernetes packaging, and Argo CD for GitOps-based deployment.",

      tech:
        "Jenkins, Maven, SonarQube, Docker, Kubernetes, Helm, Argo CD",

      github:
        "https://github.com/kishore-stack/HabitApp.git",

      number: "03",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full py-24 bg-zinc-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* SECTION HEADER */}
        <div className="text-center mb-24">

          <p className="text-blue-400 text-sm uppercase tracking-widest font-mono mb-3">
            Hands-On Experience
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 uppercase tracking-widest">
            DevOps Projects
          </h2>

          <p className="mt-5 text-zinc-400 max-w-2xl mx-auto text-lg">
            Practical projects focused on cloud infrastructure,
            CI/CD automation, containers, Kubernetes, security,
            and monitoring.
          </p>

        </div>

        {/* PROJECTS */}
        <div className="flex flex-col gap-16">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-zinc-950 border border-zinc-800 rounded-2xl p-8 md:p-10
                         hover:border-blue-500/60 transition-all duration-500
                         shadow-xl hover:shadow-blue-500/10"
            >

              {/* PROJECT NUMBER */}
              <div className="absolute top-6 right-8 text-5xl md:text-6xl font-black text-zinc-800
                              group-hover:text-blue-500/20 transition">
                {project.number}
              </div>

              <div className="relative z-10">

                {/* PROJECT TITLE */}
                <p className="text-blue-400 text-sm uppercase tracking-widest font-mono mb-3">
                  {project.subtitle}
                </p>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-zinc-400 text-lg leading-relaxed max-w-4xl mb-7">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="mb-8">

                  <p className="text-blue-400 font-bold text-sm uppercase tracking-wider mb-3">
                    Tech Stack
                  </p>

                  <p className="text-zinc-300 leading-relaxed">
                    {project.tech}
                  </p>

                </div>

                {/* PROJECT BUTTON */}
                <div className="flex flex-wrap gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-3 bg-blue-600 hover:bg-blue-500
                               text-white font-bold rounded-lg
                               transition-all duration-300
                               shadow-lg hover:shadow-blue-500/30"
                  >
                    View on GitHub
                  </a>

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}