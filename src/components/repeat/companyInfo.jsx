import { TfiNewWindow } from "react-icons/tfi";

const CompaniesInfo = ({ companyInfo }) => {
  return (
    <div>
      {companyInfo.map((info, i) => (
        <div
          className={`flex ${
            i % 2 ? "flex-row-reverse" : ""
          } justify-between gap items-center mt-12`}
        >
          {/* <div className="flex justify-between gap items-center mt-12"> */}
          <div
            className={`bg-gray-50  p-12 ${
              i % 2 ? "rounded-r-xl" : "rounded-l-xl"
            }
             border-[1px] border-gray-100 w-1/2 flex items-center justify-center dark:bg-[#374151] dark:border-[#1F2937] h-[480px]`}
          >
            <img src={info.companyImg} alt="photo" className="" />
          </div>
          <div className="p-12 w-1/2 dark:bg-[#1F2937] h-[480px] ">
            <h4 className="text-[20px] text-gray-900 font-bold dark:text-[#F9FAFB]">
              {info.title}
            </h4>
            <p className="mt-6 text-gray-600 text-[16px] dark:text-[#D1D5DB]">
              {info.text}
            </p>
            <ul className="text-gray-600 text-base dark:text-[#D1D5DB] flex gap-2 mt-6 flex-wrap">
              {info.skills.map((skill) => (
                <li className=" mt-1 bg-[#E5E7EB] py-1 px-5 rounded-xl text-[14px] dark:bg-[#374151]">
                  {skill}
                </li>
              ))}
            </ul>

            <TfiNewWindow className="mt-6" size={25} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompaniesInfo;
