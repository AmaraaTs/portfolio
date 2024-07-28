import ExperienceCard from "@/components/experiences/index";
import Experiences from "@/components/experiences";
import SectionHeader from "./section-headers";

const experiences = [
  {
    title: "Sr. Frontend Developer",
    companyLogo: "/images/upwork.png",
    jobRoles: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    jobDate: "Nov 2021 - Present",
  },
  {
    title: "Team Lead",
    companyLogo: "/images/upwork.png",
    jobRoles: [
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    jobDate: "Jul 2017 - Oct 2021",
  },
  {
    title: "Full Stack Developer",
    companyLogo: "/images/upwork.png",
    jobRoles: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    jobDate: "Dec 2015 - May 2017",
  },
];

const Section4 = () => {
  return (
    <section className="px-[400px] py-20 bg-[#F9FAFB] dark:bg-[#111827] ">
      <SectionHeader head="Experience" />
      <h3 className="text-center text-gray-600 text-[20px] dark:text-[#D1D5DB]">
        Here is a quick summary of my most recent experiences:
      </h3>
      {experiences.map(({ title, companyLogo, jobRoles, jobDate }) => (
        <ExperienceCard
          title={title}
          companyLogo={companyLogo}
          jobRoles={jobRoles}
          jobDate={jobDate}
        />
      ))}
    </section>
  );
};

export default Section4;
