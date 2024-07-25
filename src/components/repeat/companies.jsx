const Company = ({ companyList }) => {
  return (
    <div className="items-center flex">
      <div className="flex gap-[87px] items-center flex-wrap">
        {companyList.map((company) => (
          <div className="flex flex-col items-center">
            <img src={company.logo} alt="logo" />
            <div>{company.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Company;
