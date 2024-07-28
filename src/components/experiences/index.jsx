const ExperienceCard = ({ title, companyLogo, jobRoles, jobDate }) => {
  return (
    <div className="flex justify-between w-[1200px] drop-shadow-2xl rounded-xl m-auto mt-12 p-8 bg-gray-50 dark:bg-[#1F2937]">
      <div className="flex-1 ">
        <img src={companyLogo} alt="logo" />
      </div>
      <div className="flex-1 w-2/4">
        <h1 className="text-xl font-bold text-gray-900 mb-3 dark:text-[#F9FAFB]">
          {title}
        </h1>
        <ul className="text-gray-600 text-base dark:text-[#D1D5DB]">
          {jobRoles.map((role) => (
            <li className=" mt-1 list-disc">{role}</li>
          ))}
        </ul>
      </div>
      <div className="flex-1 text-right text-base text-gray-700 dark:text-[#E5E7EB]">
        <p>{jobDate}</p>
      </div>
    </div>
  );
};
export default ExperienceCard;
