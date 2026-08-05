import SectionTitle from "@/components/Common/SectionTitle";
import projectsData from "./projectsData";

const Projects = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-17 overflow-hidden pt-17.5 lg:pt-22.5 xl:pt-27.5"
    >
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <SectionTitle
          subTitle="My Work"
          title="Featured Projects"
          paragraph="A few projects I've worked on. More details coming soon."
        />

        <div className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="mb-5 flex aspect-16/10 items-center justify-center rounded-xl border border-dashed border-white/15 text-sm">
                Project image
              </div>

              <h3 className="mb-2 text-lg font-semibold text-white">
                {project.title}
              </h3>
              <p className="mb-4 grow font-medium">{project.description}</p>

              <div className="mb-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="hero-subtitle-text text-sm font-medium hover:text-white"
              >
                View Project &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
