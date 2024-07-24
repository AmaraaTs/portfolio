const ExperienceCard = ({ title, companyLogo, jobRoles }) => {
  return (
    <div className="flex justify-between h-40 w-[896px] drop-shadow-2xl rounded-1g m-auto mb-3">
      <div className="flex-1 bg-red-400">
        <img src={companyLogo} alt="logo" />
      </div>
      <div className="flex-1 bg-blue-400">
        <h1 className="text-2xl font-bold">{title}</h1>
        <ul>
          {jobRoles.map((role) => (
            <li>{role}</li>
          ))}
        </ul>
      </div>
      <div className="flex-1 bg-slate-400">
        <p>{new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
};
export default ExperienceCard;
