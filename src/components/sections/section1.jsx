import { CiLocationOn } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import { FiTwitter } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { PiFigmaLogoBold } from "react-icons/pi";
import { motion } from "framer-motion";

const Section1 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
    >
      <section className="flex flex-col-reverse md:flex-row md:px-[400px] md:py-20 px-4 py-16 justify-between items-center gap-12 md:gap-0">
        <div>
          <h1 className="md:text-5xl text-4xl font-bold">Hi, I'm Amaraa 👋</h1>
          <p className="md:w-[584px] md:mt-5 mt-2 text-base">
            I specialize in full stack development, particularly with React.js
            and Node.js. My main goal is to create exceptional digital
            experiences that are fast, visually appealing, and accessible to
            everyone. With over 7 years of experience in web development, I
            continue to find joy in crafting innovative solutions and designs.
          </p>
          <div className="mt-12 md:mt-10 flex items-center gap-5">
            <CiLocationOn size={20} />
            <p>Ulaanbaatar, Mongolia</p>
          </div>
          <div className="mt-2 md:mt-5 flex items-center gap-5">
            <GoDotFill color="green" size={20} />
            <p>Available for new projects</p>
          </div>
          <div className="mt-12 md:mt-10 flex gap-5">
            <FiGithub size={25} color="gray" />
            <FiTwitter size={25} color="gray" />
            <PiFigmaLogoBold size={25} color="gray" />
          </div>
        </div>
        <div className="w-full  md:px-0 md:w-[584px] flex items-center justify-center">
          <img
            src="/images/luffy.jpg"
            alt="photo"
            height={200}
            width={200}
            className="shadow-[40px_40px_40px_0_#E8E8E8] dark:shadow-[40px_40px_#374151]"
          />
        </div>
      </section>
    </motion.div>
  );
};

export default Section1;
