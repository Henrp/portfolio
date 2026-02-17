import "./globals.css";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="py-10 text-primary">
        henrp<span className="text-secondary">(at)</span>berkeley
        <span className="text-secondary">(dot)</span>edu
      </div>
      <div className="space-y-6">
        <div>
          <header>Introduction</header>
          <p className="text-primary pl-4 leading-6">
            Hi 👋 I'm Henry. <br />
            I'm a computing and music enthusiast majoring in Electrical
            Engineering and Computer Sciences (EECS) at UC Berkeley. I'm
            passionate about the intersection of AI, music, and emotions, and I
            build tools that help humans connect with sound and feeling through
            affective computing, machine learning, and app development.
          </p>
        </div>

        <div>
          <header>The Present</header>
          <p className="text-primary pl-4 leading-6">
            Software Engineer at{" "}
            <span className="text-accent">Berkeleytime</span>
          </p>
        </div>
        <div>Experience</div>
        <div>Get in touch</div>
      </div>
      <div>Explore</div>
    </div>
  );
}
