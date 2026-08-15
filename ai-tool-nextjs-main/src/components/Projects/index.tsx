import SectionTitle from "@/components/Common/SectionTitle";
import CardFanCarousel from "@/components/ui/card-fan-carousel";
import projectsData from "./projectsData";

const PROJECTS_VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_171521_25968ba2-b594-4b32-aab7-f6b69398a6fa.mp4";

const Projects = () => {
  const cards = projectsData.map((project) => ({
    imgUrl: project.imgUrl,
    alt: project.title,
    linkUrl: project.demoUrl || project.link,
  }));

  return (
    <section
      id="projects"
      className="relative mb-16 scroll-mt-17 overflow-hidden pt-17.5 pb-16 sm:mb-24 sm:pb-24 lg:pt-22.5 xl:pt-27.5"
    >
      {/* <!-- Featured Projects Background Video, faded in/out at the edges so it blends with the sections above and below --> */}
      <div className="pointer-events-none absolute inset-0 -z-20 [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_12%,black_85%,transparent)]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={PROJECTS_VIDEO_SRC}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
      </div>

      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <SectionTitle
          subTitle="My Work"
          title="Featured Projects"
          paragraph="A few projects I've worked on. More details coming soon — hover or tap a card to bring it forward."
        />
      </div>

      {/* Fold-out fan carousel — desktop/tablet only; too cramped to be usable on a phone */}
      <div className="hidden sm:block">
        <CardFanCarousel cards={cards} />
      </div>

      {/* Mobile: each project as its own stacked card (image + details together) */}
      <div className="mx-auto mt-8 flex max-w-[1170px] flex-col gap-6 px-4 sm:hidden">
        {projectsData.map((project) => {
          const href = project.demoUrl || project.link;
          return (
            <a
              key={project.id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-2xl border border-ink/10 bg-surface shadow-lg"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden">
                <img
                  src={project.imgUrl}
                  alt={project.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="mb-2 text-lg font-semibold text-ink">
                  {project.title}
                </h3>
                <p className="mb-4 font-medium">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-ink/10 bg-ink/5 px-3 py-1 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {/* Detail grid to accompany the fan carousel — desktop/tablet only, mobile gets the combined cards above */}
      <div className="mx-auto mt-10 hidden max-w-[1170px] grid-cols-1 gap-7.5 px-4 sm:grid sm:grid-cols-2 sm:px-8 lg:grid-cols-3 xl:px-0">
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
                  className="rounded-full border border-ink/10 bg-ink/5 px-3 py-1 text-xs font-medium"
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
