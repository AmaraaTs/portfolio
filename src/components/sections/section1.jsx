import { CiLocationOn } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import { FiTwitter } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { PiFigmaLogoBold } from "react-icons/pi";

const Section1 = () => {
  return (
    <section className="flex px-[400px] py-20 justify-between items-center">
      <div>
        <h1 className="text-5xl font-bold">Hi, I'm Amaraa 👋</h1>
        <p className="w-[584px] mt-5">
          I specialize in full stack development, particularly with React.js and
          Node.js. My main goal is to create exceptional digital experiences
          that are fast, visually appealing, and accessible to everyone. With
          over 7 years of experience in web development, I continue to find joy
          in crafting innovative solutions and designs.
        </p>
        <div className="mt-10 flex items-center gap-5">
          <CiLocationOn size={20} />
          <p>Ulaanbaatar, Mongolia</p>
        </div>
        <div className="mt-5 flex items-center gap-5">
          <GoDotFill color="green" size={20} />
          <p>Available for new projects</p>
        </div>
        <div className="mt-10 flex gap-5">
          <FiGithub size={25} color="gray" />
          <FiTwitter size={25} color="gray" />
          <PiFigmaLogoBold size={25} color="gray" />
        </div>
      </div>
      <div className="w-[584px] flex flex-row-reverse">
        <img
          src="/images/luffy.jpg"
          alt="photo"
          height={200}
          width={200}
          className="shadow-[40px_40px_#E8E8E8]"
        />
      </div>
    </section>
  );
};

export default Section1;
