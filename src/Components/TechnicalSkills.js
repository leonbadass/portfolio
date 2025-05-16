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
    <section id="documentation"  className="h-full flex-col flex justify-center mb-2rem items-center text-center bg-gray-900 text-white px-6 py-6 ">
      <h2 className="text-3xl font-bold mb-4"> Technical Writing</h2>
     
      <div className="flex  w-full justify-center gap-10 items-center flex-wrap-reverse text-xl mt-6">
        {Object.entries(projects).map(([key, project]) => (
          <h4 key={key}  className="bg-blue-200 py-4 px-4 rounded-lg hover:bg-blue-900  hover:text-blue-200 text-blue-900">
            <a href={project.link} className=" hover:underline" target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
          </h4>
        ))}
      </div>
    </section>
  );
}

export default TechnicalSkills;
