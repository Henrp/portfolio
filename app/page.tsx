import "./globals.css";

export default function Home() {
  return (
    <div className="max-w-xl mx-auto">
      <div className="py-10 text-primary">
        henrp<span className="text-secondary">(at)</span>berkeley
        <span className="text-secondary">(dot)</span>edu
      </div>
      <div className="space-y-6">
        <div className="space-y-2">
          <header>Introduction</header>
          <p className="text-primary pl-4 leading-6">Hi 👋 I'm Henry.</p>
          <p className="text-primary pl-4 leading-6">
            I'm a computing and music enthusiast majoring in Electrical
            Engineering and Computer Sciences (EECS) at UC Berkeley.
          </p>
        </div>

        <div className="space-y-2">
          <header>The Present</header>
          <p className="text-primary pl-4 leading-6">
            Software Engineer at{" "}
            <a href="https://berkeleytime.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Berkeleytime</a>
          </p>
        </div>
        {/* <div>Experience</div> */}
        <div className="space-y-2">
          <header>Get in touch</header>
          <p className="pl-4">
            <a href="mailto:henrp@berkeley.edu" className="hover:underline">
              <span className="text-accent">henrp</span>(at)<span className="text-accent">berkeley</span>(dot)<span className="text-accent">edu</span>
            </a>
          </p>
          <p className="pl-4">
            <a href="https://github.com/Henrp" target="_blank" rel="noopener noreferrer" className="hover:underline">
              github.com/<span className="text-accent">Henrp</span>
            </a>
          </p>
          <p className="pl-4">
            <a href="https://linkedin.com/in/henry-kim-b5b281231" target="_blank" rel="noopener noreferrer" className="hover:underline">
              linkedin.com/in/<span className="text-accent">henry-kim-b5b281231</span>
            </a>
          </p>
        </div>
      </div>
      {/* <div>Explore</div> */}
    </div>
  );
}
