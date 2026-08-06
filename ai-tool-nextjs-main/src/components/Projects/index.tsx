import SectionTitle from "@/components/Common/SectionTitle";
import CardFanCarousel from "@/components/ui/card-fan-carousel";
import projectsData from "./projectsData";

const Projects = () => {
  const cards = projectsData.map((project) => ({
    imgUrl: project.imgUrl,
    alt: project.title,
    linkUrl: project.link,
  }));

  return (
    <section
      id="projects"
      className="scroll-mt-17 overflow-hidden pt-17.5 lg:pt-22.5 xl:pt-27.5"
    >
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <SectionTitle
          subTitle="My Work"
          title="Featured Projects"
          paragraph="A few projects I've worked on. More details coming soon — hover or tap a card to bring it forward."
        />
      </div>

      <CardFanCarousel cards={cards} />

      <div className="mx-auto mt-10 grid max-w-[1170px] grid-cols-1 gap-7.5 px-4 sm:grid-cols-2 sm:px-8 lg:grid-cols-3 xl:px-0">
        {projectsData.map((project) => (
          <div key={project.id}>
            <h3 className="mb-2 text-lg font-semibold text-ink">
              {project.title}
            </h3>
            <p className="mb-4 font-medium">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
