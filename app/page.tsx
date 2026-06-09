import "./globals.css";

export default function Home() {
  return (
    <div className="max-w-xl mx-auto">
      <div className="py-10 text-primary">
        <a href="mailto:henrp@berkeley.edu" className="hover:underline">
          henrp<span className="text-secondary">(at)</span>berkeley
          <span className="text-secondary">(dot)</span>edu
        </a>
      </div>
      <div className="space-y-6">
        <div className="space-y-2">
          <header>Introduction</header>
          <p className="text-primary pl-4 leading-6">
            Hi, I'm <span className="text-accent">Henry</span>.
          </p>
          <p className="text-primary pl-4 leading-6">
            I'm a computer and music enthusiast.
          </p>
          <p className="text-primary pl-4 leading-6">
            I go to{" "}
            <span className="bg-[#003262] text-[#FDB515] px-1">Cal</span> and
            study electrical engineering and computer science.
          </p>
        </div>

        <div className="space-y-2">
          <header>The Present</header>
          <p className="text-primary pl-4 leading-6">
            Software Engineer at{" "}
            <a
              href="https://berkeleytime.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Berkeleytime
            </a>
          </p>
          <p className="text-primary pl-4 leading-6">
            Founding Engineer at{" "}
            <a
              href="https://trishulrobotics.lovable.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Trishul Robotics
            </a>
          </p>
        </div>
        <div className="space-y-2">
          <header>Things I've done</header>
          <p className="text-primary pl-4 leading-6">
            <a
              href="https://broctagon.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Broctagon Fintech Group
            </a>{" "}
            <span className="text-secondary">| May 2026 - July 2026</span>
          </p>
          <p className="text-primary pl-4 leading-6">
            <a
              href="https://nexus-frontend-lovat.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Limbo Payments
            </a>{" "}
            <span className="text-secondary">
              | October 2025 - January 2026
            </span>
          </p>
          <p className="text-primary pl-4 leading-6">
            <a
              href="https://openprojectberkeley.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Open Project
            </a>{" "}
            <span className="text-secondary">
              | August 2025 - December 2025
            </span>
          </p>
          <p className="text-primary pl-4 leading-6">
            Beatsouls{" "}
            <span className="text-secondary">| July 2025 - October 2025</span>
          </p>
          <p className="text-primary pl-4 leading-6">
            <a
              href="https://speriphery.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Science Bowl Periphery
            </a>{" "}
            <span className="text-secondary">| April 2025 - July 2025</span>
          </p>
        </div>
        <div className="space-y-2">
          <header>Get in touch</header>
          <p className="pl-4">
            <a href="mailto:henrp@berkeley.edu" className="hover:underline">
              <span className="text-accent">henrp</span>(at)
              <span className="text-accent">berkeley</span>(dot)
              <span className="text-accent">edu</span>
            </a>
          </p>
          <p className="pl-4">
            <a
              href="https://github.com/Henrp"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/<span className="text-accent">Henrp</span>
            </a>
          </p>
          <p className="pl-4">
            <a
              href="https://linkedin.com/in/henry-kim-b5b281231"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/
              <span className="text-accent">henry-kim-b5b281231</span>
            </a>
          </p>
        </div>
      </div>
      {/* <div>Explore</div> */}
    </div>
  );
}
