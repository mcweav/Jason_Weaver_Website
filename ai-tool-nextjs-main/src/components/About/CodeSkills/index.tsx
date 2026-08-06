import SectionTitle from "@/components/Common/SectionTitle";
import OrbitingSkills from "@/components/ui/orbiting-skills";

const CodeSkills = () => {
  return (
    <section className="overflow-hidden pb-17.5 lg:pb-22.5 xl:pb-27.5">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <SectionTitle
          subTitle="Coding Skills"
          title="Core Tech Stack"
          paragraph="The languages and frameworks I build with day to day."
        />
      </div>

      <OrbitingSkills />
    </section>
  );
};

export default CodeSkills;
