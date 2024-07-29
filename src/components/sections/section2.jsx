const sectionHeader = { Header: "About" };
import SectionHeader from "./section-headers";
import { motion } from "framer-motion";

const Section2 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
    >
      <section
        className="bg-[#F9FAFB] dark:bg-[#111827] px-[400px] py-20 "
        id="about"
      >
        <SectionHeader head="About me" />
        <div className="flex justify-between items-center text-[#4B5563]  leading-6 text-[16px]">
          <div className="w-[584px]">
            <img
              src="/images/luffy.jpg"
              alt="photo"
              height={300}
              width={300}
              className="shadow-[-40px_40px_#E8E8E8] dark:shadow-[-40px_40px_#374151]"
            />
          </div>
          <div className="w-[584px]">
            <h3 className="text-[30px] font-bold text-black leading-9  dark:text-[#F9FAFB]">
              Curious about me? Here you have it:
            </h3>
            <p className="mt-4">
              I'm a designer turned full stack developer, passionate about
              React.js and Node.js. I excel in blending technical and visual
              aspects to craft exceptional digital products, prioritizing user
              experience, precise design, and optimized code.
            </p>
            <p className="mt-4">
              Since starting my web development journey in 2015, I've embraced
              challenges and kept up with the latest tech trends. Now in my
              early thirties, seven years in, I'm building cutting-edge web apps
              using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and
              more.
            </p>
            <p className="mt-4">
              With a progressive mindset, I enjoy the entire product development
              process, from ideation to execution. Off duty, you'll find me on
              Twitter, tracking startup journeys, or unwinding. Follow me for
              tech insights and public project updates on Twitter or GitHub.
            </p>
            <p className="mt-4">Finally, some quick bits about me.</p>
            <ul className="mt-4">
              <li>B.E. in Computer Engineering</li>
              <li>Avid learner</li>
              <li>Full time freelancer</li>
            </ul>
            <p className="mt-4">
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Section2;
