import { CiLocationOn } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import { CiTwitter } from "react-icons/ci";

const Section1 = () => {
  return (
    <section className="flex px-52 py-20 justify-between items-center">
      <div>
        <h1 className="text-5xl font-bold">Hi, I'm Amaraa 👋</h1>
        <p className="w-[800px] mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ea quas
          voluptatem iusto, distinctio omnis adipisci veniam et, velit dicta
          modi sed fuga optio voluptates. Fugiat enim a dolor odio.
        </p>
        <div className="mt-10 flex items-center gap-5">
          <CiLocationOn />
          <p>Ulaanbaatar, Mongolia</p>
        </div>
        <div className="mt-5 flex items-center gap-5">
          <GoDotFill />
          <p>Available for new projects</p>
        </div>
        <div className="mt-10 flex gap-5">
          <CiTwitter />
          <CiTwitter />
          <CiTwitter />
        </div>
      </div>
      <img src="/images/luffy.jpg" alt="photo" height={200} width={200} />
    </section>
  );
};

export default Section1;
