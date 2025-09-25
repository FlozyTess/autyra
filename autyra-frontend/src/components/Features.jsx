export default function Features() {
  const features = [
    {
      title: "Upload",
      description: "Easily upload your PDF or DOCX files to get started.",
      icon: "📂",
    },
    {
      title: "Sign",
      description: "Sign documents securely with an uploaded or drawn signature.",
      icon: "✍️",
    },
    {
      title: "Convert",
      description: "Convert between DOCX and PDF instantly.",
      icon: "🔄",
    },
  ];

  return (
    <section className="features">
      <h2 className="features-title">Key Features</h2>
      <div className="features-grid">
        {features.map((f, i) => (
          <article key={i} className="feature-card">
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
