import CompaniesInfo from "../repeat/companyInfo";
import SectionHeader from "./section-headers";

const companyInfo = [
  {
    companyImg: "/images/ubcab.png",
    title: "UBCab",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
  },
  {
    companyImg: "/images/mentorhub.png",
    title: "Mentorhub",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
  },
  {
    companyImg: "/images/itoim.png",
    title: "Itoim",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
  },
];

const Section5 = () => {
  return (
    <section className="px-[400px] py-20 ">
      <SectionHeader head="Skills" />
      <h3 className="text-center text-gray-600 text-[20px]">
        Some of the noteworthy projects I have built:
      </h3>
      <CompaniesInfo companyInfo={companyInfo} />
    </section>
  );
};

export default Section5;
