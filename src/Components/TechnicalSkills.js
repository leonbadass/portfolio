function TechnicalSkills() {
  const projects = {
    todo: {
      title: "📝 To-Do App Technical Specification",
      link: "https://github.com/leonbadass/my-todo-app/blob/main/README.md",
    },
    portfolio: {
      title: "💼 Personal Portfolio Technical Specification",
      link: "https://github.com/leonbadass/portfolio/blob/main/README.md",
    },
    weather: {
      title: "🌤️ Weather App Technical Specification",
      link: "https://github.com/leonbadass/Weather_Reveal/blob/main/README.md",
    },
  };

  return (
    <section id="documentation" className="py-10">
      <h2 className="text-3xl font-bold mb-4">📄 Technical Writing</h2>
      <p className="text-lg mb-6">
        Explore detailed technical specs, architecture breakdowns, and design decisions behind my projects.
      </p>
      <ul className="space-y-4">
        {Object.entries(projects).map(([key, project]) => (
          <li key={key}>
            <a href={project.link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TechnicalSkills;
