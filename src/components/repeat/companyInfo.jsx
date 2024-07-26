import { TfiNewWindow } from "react-icons/tfi";

const CompaniesInfo = ({ companyInfo }) => {
  return (
    <div>
      {companyInfo.map((info) => (
        <div className="flex justify-between gap items-center mt-12">
          <div className="bg-gray-50 p-12 rounded-l-xl border-[1px] border-gray-100 w-1/2 flex items-center justify-center">
            <img src={info.companyImg} alt="photo" className="" />
          </div>
          <div className="p-12 w-[584px]">
            <h4 className="text-[20px] text-gray-900 font-bold">
              {info.title}
            </h4>
            <p className="mt-6 text-gray-600 text-[16px]">{info.text}</p>

            <TfiNewWindow className="mt-6" size={25} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompaniesInfo;
