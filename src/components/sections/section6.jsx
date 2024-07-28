import SectionHeader from "./section-headers";
import { CiMail } from "react-icons/ci";
import { IoCopyOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { FiTwitter } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { PiFigmaLogoBold } from "react-icons/pi";

const Section6 = () => {
  return (
    <section className="px-[400px] py-20  flex items-center flex-col">
      <SectionHeader head="Get in touch" />
      <h5 className="text-xl text-gray-600 text-center dark:text-[#D1D5DB]">
        What’s next? Feel free to reach out to me if you're looking for <br />a
        developer, have a query, or simply want to connect.
      </h5>
      <div className="mt-12 flex items-center justify-center gap-5">
        <CiMail size={32} />
        <h2 className="text-4xl text-gray-900 font-bold dark:text-[#F9FAFB]">
          tom@pinecone.mn
        </h2>
        <IoCopyOutline size={32} />
      </div>
      <div className="mt-4 flex items-center justify-center gap-5">
        <IoCallOutline size={32} />
        <h2 className="text-4xl text-gray-900 font-bold dark:text-[#F9FAFB]">
          +976 88112233
        </h2>
        <IoCopyOutline size={32} />
      </div>
      <p className="mt-12 text-gray-600 text-base dark:text-[#D1D5DB]">
        You may also find me on these platforms!
      </p>
      <div className="mt-[14px] flex gap-[25px]">
        <FiGithub size={24} color="gray" />
        <FiTwitter size={24} color="gray" />
        <PiFigmaLogoBold size={24} color="gray" />
      </div>
    </section>
  );
};

export default Section6;
