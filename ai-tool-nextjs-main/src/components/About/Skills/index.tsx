import SectionTitle from "@/components/Common/SectionTitle";

const skillGroups = [
  {
    title: "Programming",
    items: ["Python", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks",
    items: ["React"],
  },
  {
    title: "Security & Risk Leadership",
    items: [
      "Information Security",
      "GRC",
      "Risk Assessments",
      "Incident Response",
      "Access Control",
      "Investigations",
    ],
  },
  {
    title: "Tools",
    items: ["Visual Studio Code", "Git", "Microsoft Office"],
  },
];

const Skills = () => {
  return (
    <section className="overflow-hidden pb-17.5 lg:pb-22.5 xl:pb-27.5">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <SectionTitle
          subTitle="What I Work With"
          title="Skills & Competencies"
          paragraph="A blend of hands-on development skills and years of operational leadership experience."
        />

        <div className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-ink/10 bg-surface p-6 shadow-sm"
            >
              <h3 className="mb-4 text-lg font-semibold text-ink">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {group.items.map((item) => (
                  <li key={item} className="font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
