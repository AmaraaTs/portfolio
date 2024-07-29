import CompaniesInfo from "../repeat/companyInfo";
import SectionHeader from "./section-headers";

const companyInfo = [
  {
    companyImg: "/images/ubcab.png",
    title: "UBCab",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    skills: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
  },
  {
    companyImg: "/images/mentorhub.png",
    title: "Mentorhub",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    skills: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
  },
  {
    companyImg: "/images/itoim.png",
    title: "Itoim",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    skills: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
  },
];

const Section5 = () => {
  return (
    <section className="px-[400px] py-20 " id="work">
      <SectionHeader head="Work" />
      <h3 className="text-center text-gray-600 text-[20px] dark:text-[#D1D5DB]">
        Some of the noteworthy projects I have built:
      </h3>
      <CompaniesInfo companyInfo={companyInfo} />
    </section>
  );
};

export default Section5;
