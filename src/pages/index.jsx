import ExperienceCard from "@/components/experiences";
import Experiences from "@/components/experiences";

const experiences = [
  {
    title: "Senio",
    companyLogo: "/img.png",
    jobRoles: ["Devops", "Frontend", "Fullstack"],
  },
  {
    title: "Junior",
    companyLogo: "/img.png",
    jobRoles: ["Devops", "Frontend", "Fullstack"],
  },
  {
    title: "Senio",
    companyLogo: "/img.png",
    jobRoles: ["Devops", "Frontend", "Fullstack"],
  },
];
export default function Home() {
  return (
    <main>
      {/* {experiences.map(({ title, companyLogo, jobRoles }) => (
        <ExperienceCard
          title={title}
          companyLogo={companyLogo}
          jobRoles={jobRoles}
        />
      ))} */}

      <div></div>
    </main>
  );
}
