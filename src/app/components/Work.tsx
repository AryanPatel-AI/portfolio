export default function Work() {
  const projects = [
    {
      cardClass: "tech-card",
      number: "01",
      kicker: "ARTIFICIAL INTELLIGENCE",
      symbol: "✦",
      title: "Neural Vision & AI Models",
      desc: "Deep learning research and computer vision architectures tailored for automated intelligence.",
    },
    {
      cardClass: "photo-card",
      number: "02",
      kicker: "PHOTOGRAPHY",
      symbol: "◎",
      title: "Architectural & Heritage Series",
      desc: "Documenting spatial compositions, historic textures, and natural lighting dynamics across India.",
    },
    {
      cardClass: "creative-card",
      number: "03",
      kicker: "CREATIVE DEVELOPMENT",
      symbol: "❖",
      title: "Interactive Web Experiences",
      desc: "Crafting fluid, high-end web applications with modern typography and immersive motion engineering.",
    },
  ];

  return (
    <section id="work" className="work-section">
      <div className="section-heading">
        <span className="section-kicker">SELECTED PORTFOLIO</span>
        <h2>Disciplines across engineering, imagery, and code.</h2>
      </div>

      <div className="work-grid">
        {projects.map((project, index) => (
          <div key={index} className={`work-card ${project.cardClass}`}>
            <div>
              <div className="card-number">{project.number}</div>
              <span className="card-symbol" aria-hidden="true">
                {project.symbol}
              </span>
              <div className="card-kicker">{project.kicker}</div>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>
            <span className="card-arrow" aria-hidden="true">
              ↗
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
