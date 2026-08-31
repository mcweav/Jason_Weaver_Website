import Breadcrumb from "@/components/Breadcrumb";
import { CONTACT } from "@/config/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Jason D. Weaver",
  description:
    "Resume of Jason D. Weaver — Security Operations Leader turned Full Stack Developer.",
};

const highlights = [
  "Active DoD Secret Security Clearance",
  "8+ years leading security operations, investigations, and compliance programs",
  "Protected operations supporting 185,000+ personnel and government assets",
  "Led, mentored, and developed 23 Soldiers as Acting Platoon Sergeant",
  "Built partnerships with 5 external law enforcement agencies",
  "Achieved 100% compliance across critical security programs",
  "Improved reporting accuracy by 26% through training and process improvement",
  "Trained and certified 202+ personnel in tactical and emergency response",
  "Certified in Python, HTML5, CSS3, JavaScript, and ReactJS",
];

const competencies = [
  "Security Operations",
  "Information Security",
  "Governance, Risk & Compliance (GRC)",
  "Enterprise Risk Management",
  "Incident Response",
  "Security Governance",
  "Physical Security",
  "Threat Mitigation",
  "Investigations",
  "Compliance",
  "Access Control",
  "Identity & Access Management (IAM)",
  "Stakeholder Management",
  "Executive Communication",
  "Cross-Functional Leadership",
  "Process Improvement",
  "Team Development",
  "Python",
  "HTML5",
  "CSS3",
  "JavaScript",
  "ReactJS",
];

const achievements = [
  "Directed security operations protecting more than 185,000 personnel, civilians, and government assets.",
  "Implemented an access-tracking system that improved accountability and visibility of sensitive resources.",
  "Rewrote Standard Operating Procedures to standardize reporting and strengthen organizational compliance.",
  "Partnered with five law enforcement agencies to improve intelligence sharing and coordinated investigations.",
  "Managed the Fire Prevention Program, achieving a 100% inspection success rate.",
  "Improved reporting accuracy by 26% through targeted training and mentorship initiatives.",
];

const experienceBullets = [
  "Served as primary authority for the Civil Liaison Absent Without Leave (CLAAS) Apprehension Section, maintaining 100% compliance with organizational security policies.",
  "Led criminal investigations, risk mitigation efforts, and force protection operations supporting installation security.",
  "Advised commanders and senior leaders on operational risk, compliance, and security planning.",
  "Selected as Acting Platoon Sergeant responsible for readiness, accountability, and development of 23 Soldiers.",
  "Qualified 56 personnel as Special Reaction Team members and certified 146 personnel in emergency response operations.",
  "Developed standardized workflows and reporting tools that improved operational efficiency and command visibility.",
];

const technicalProjects = [
  "Completed Python Cybersecurity training with emphasis on scripting, automation, and security fundamentals.",
  "Developed responsive web applications using HTML5, CSS3, JavaScript, and ReactJS.",
  "Built reusable React components and interactive JavaScript interfaces.",
  "Used Visual Studio Code and Git fundamentals in software development workflows.",
];

const technicalSkills = [
  { label: "Programming", value: "Python, JavaScript, HTML5, CSS3" },
  { label: "Frameworks", value: "ReactJS" },
  {
    label: "Security",
    value:
      "Information Security, GRC, Risk Assessments, Incident Response, Access Control, IAM, Compliance, Investigations",
  },
  { label: "Tools", value: "Microsoft Office, Visual Studio Code, Git" },
];

const certifications = [
  "Active DoD Secret Security Clearance",
  "HTML & CSS Certification",
  "JavaScript Certification",
  "ReactJS Certification",
  "Python Certification",
  "Cybersecurity Certification (In Progress)",
  "CompTIA Security+ (In Progress)",
  "CompTIA CySA+ (Planned)",
];

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-5 text-xl font-extrabold text-ink sm:text-2xl">
    {children}
  </h2>
);

const ResumePage = () => {
  return (
    <>
      <Breadcrumb pageTitle="Resume" />

      <section className="pb-20 lg:pb-25">
        <div className="mx-auto max-w-[900px] px-4 sm:px-8 xl:px-0">
          {/* Header / quick facts */}
          <div className="wow fadeInUp mb-14 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-ink/10 bg-surface p-7.5 shadow-sm">
            <div>
              <h1 className="mb-2 text-2xl font-extrabold text-ink sm:text-3xl">
                Jason D. Weaver
              </h1>
              <p className="font-medium">
                Security Operations Leader | Cybersecurity &amp; Risk
                Professional | Active DoD Secret Security Clearance
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hero-subtitle-text font-medium hover:text-ink"
                >
                  {CONTACT.email}
                </a>
                <a
                  href={CONTACT.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-subtitle-text font-medium hover:text-ink"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <a
              href={CONTACT.resumePdfPath}
              download
              className="hero-button-gradient inline-flex shrink-0 rounded-lg px-6 py-3 font-medium duration-300 ease-in"
            >
              Download Resume
            </a>
          </div>

          {/* Executive Brand Statement */}
          <div className="wow fadeInUp mb-12">
            <SectionHeading>Executive Brand Statement</SectionHeading>
            <p className="font-medium">
              Security and risk management leader with 8+ years of experience
              directing enterprise security operations, investigations, force
              protection, compliance, and risk management within the U.S.
              Army. Active DoD Secret Security Clearance holder with a proven
              history of protecting personnel, critical assets, and sensitive
              information while partnering with senior leaders and external
              agencies to strengthen organizational security. Combines
              operational leadership with technical expertise in Python,
              HTML5, CSS3, JavaScript, and ReactJS to bridge physical security
              and cybersecurity.
            </p>
          </div>

          {/* Professional Highlights */}
          <div className="wow fadeInUp mb-12">
            <SectionHeading>Professional Highlights</SectionHeading>
            <ul className="grid grid-cols-1 gap-x-8 gap-y-2 font-medium sm:grid-cols-2">
              {highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="hero-subtitle-text">&bull;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Core Competencies */}
          <div className="wow fadeInUp mb-12">
            <SectionHeading>Core Competencies</SectionHeading>
            <div className="flex flex-wrap gap-2.5">
              {competencies.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-ink/10 bg-ink/5 px-4 py-1.5 text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Selected Career Achievements */}
          <div className="wow fadeInUp mb-12">
            <SectionHeading>Selected Career Achievements</SectionHeading>
            <ul className="flex flex-col gap-2 font-medium">
              {achievements.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="hero-subtitle-text">&bull;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Professional Experience */}
          <div className="wow fadeInUp mb-12">
            <SectionHeading>Professional Experience</SectionHeading>
            <div className="mb-4">
              <h3 className="font-semibold text-ink">United States Army</h3>
              <p className="text-sm">
                Military Police Investigator / Security Operations Supervisor
                &middot; Fort Bliss, Texas
              </p>
            </div>
            <ul className="flex flex-col gap-2 font-medium">
              {experienceBullets.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="hero-subtitle-text">&bull;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Projects */}
          <div className="wow fadeInUp mb-12">
            <SectionHeading>Technical Projects</SectionHeading>
            <ul className="flex flex-col gap-2 font-medium">
              {technicalProjects.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="hero-subtitle-text">&bull;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Skills */}
          <div className="wow fadeInUp mb-12">
            <SectionHeading>Technical Skills</SectionHeading>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {technicalSkills.map((skill) => (
                <div key={skill.label}>
                  <p className="font-semibold text-ink">{skill.label}</p>
                  <p className="font-medium">{skill.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Clearance */}
          <div className="wow fadeInUp mb-12">
            <SectionHeading>Certifications &amp; Clearance</SectionHeading>
            <div className="flex flex-wrap gap-2.5">
              {certifications.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-ink/10 bg-ink/5 px-4 py-1.5 text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="wow fadeInUp">
            <SectionHeading>Education</SectionHeading>
            <p className="font-medium">
              Bachelor of Science in Information Technology &mdash; Expected
              December 2026
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResumePage;
