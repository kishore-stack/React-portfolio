import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full bg-zinc-950 text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* SECTION HEADER */}
        <div className="mb-16 text-center">

          <p className="text-blue-400 text-sm uppercase tracking-widest font-mono">
            Contact
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold">
            Let's Connect
          </h2>

          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto text-lg">
            I'm actively looking for opportunities to start my career in
            DevOps and Cloud Engineering. Feel free to reach out for
            job opportunities, collaborations, or technical discussions.
          </p>

        </div>

        {/* CONTACT CARDS */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          {/* EMAIL */}
          <div
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-6
                       hover:border-blue-500 transition"
          >
            <p className="text-zinc-400 text-sm mb-2">
              Email
            </p>

            <a
              href="mailto:s.kishorekumar.mech@gmail.com"
              className="text-lg font-semibold text-white hover:text-blue-400 transition break-all"
            >
              sr.kishore2803@gmail.com
            </a>
          </div>

          {/* PHONE */}
          <div
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-6
                       hover:border-blue-500 transition"
          >
            <p className="text-zinc-400 text-sm mb-2">
              Phone
            </p>

            <a
              href="tel:+919384627844"
              className="text-lg font-semibold text-white hover:text-blue-400 transition"
            >
              +91 93846 27844
            </a>
          </div>

          {/* LINKEDIN */}
          <div
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-6
                       hover:border-blue-500 transition"
          >
            <p className="text-zinc-400 text-sm mb-2">
              LinkedIn
            </p>

            <a
              href="https://www.linkedin.com/in/kishore-kumar-bb6692343"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-white hover:text-blue-400 transition break-all"
            >
              linkedin.com/in/kishore-kumar
            </a>
          </div>

          {/* GITHUB */}
          <div
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-6
                       hover:border-blue-500 transition"
          >
            <p className="text-zinc-400 text-sm mb-2">
              GitHub
            </p>

            <a
              href="https://github.com/kishorekumar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-white hover:text-blue-400 transition break-all"
            >
              github.com/kishorekumar
            </a>
          </div>

        </div>

        {/* FOOTER MESSAGE */}
        <div className="text-center mt-16">

          <p className="text-zinc-500 text-sm">
            Building, automating, and deploying with DevOps.
          </p>

          <p className="text-zinc-600 text-xs mt-2">
            © {new Date().getFullYear()} Kishore Kumar. All rights reserved.
          </p>

        </div>

      </div>
    </section>
  );
}