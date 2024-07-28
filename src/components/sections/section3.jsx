import Company from "../repeat/companies";
import SectionHeader from "./section-headers";

const companyList = [
  { logo: "/images/icon-javscript.png", label: "Javascript" },
  { logo: "/images/icon-typescript.png", label: "Typescript" },
  { logo: "/images/icon-react.png", label: "React" },
  { logo: "/images/icon-nextjs.png", label: "Next.js" },
  { logo: "/images/icon-nodejs.png", label: "Node.js" },
  { logo: "/images/icon-express.png", label: "Express.js" },
  { logo: "/images/icon-nest.png", label: "Nest.js" },
  { logo: "/images/icon-socket.png", label: "Socket.io" },
  { logo: "/images/icon-postgresql.png", label: "PostgreSQL" },
  { logo: "/images/icon-mongodb.png", label: "MongoDB" },
  { logo: "/images/icon-sass.png", label: "Sass/Scss" },
  { logo: "/images/icon-tailwindcss.png", label: "Tailwindcss/Scss" },
  { logo: "/images/icon-figma.png", label: "Figma/Scss" },
  { logo: "/images/icon-cypress.png", label: "Cypress" },
  { logo: "/images/icon-storybook.png", label: "Storybook" },
  { logo: "/images/icon-git.png", label: "Git" },
];

const Section3 = () => {
  return (
    <section className="px-[400px] py-20 work">
      <SectionHeader head="Skills" />
      <h3 className="text-center text-gray-600 text-[20px] mb-12">
        The skills, tools and technologies I am really good at:
      </h3>
      <Company companyList={companyList} />
    </section>
  );
};

export default Section3;
