import { AiOutlineCopyrightCircle } from "react-icons/ai";

const SectionFooter = () => {
  return (
    <section
      className="px-[400px] py-6 flex justify-center items-center gap-2 bg-[#F9FAFB] dark:bg-[#111827]"
      id="contact"
    >
      <AiOutlineCopyrightCircle size={16} />
      <p className="text-gray-600 text-[14px] dark:text-[#D1D5DB]">
        2024 | Greetings with ❤️️ from Ulaanbaatar
      </p>
    </section>
  );
};

export default SectionFooter;
