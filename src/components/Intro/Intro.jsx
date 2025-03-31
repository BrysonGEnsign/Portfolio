import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Intro() {
  return (
    <section className="mb-10">
      <div className="flex items-center mb-4">
        <img src="/profile.jpg" alt="Profile" className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h1 className="text-2xl font-semibold">Software engineer, father, and believer</h1>
        </div>
      </div>

      {/* Longer intro content */}
      <p className="text-gray-600 dark:text-gray-300 max-w-2xl mb-6 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque
        sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae tellus felis. Nullam eget
        sem eget neque tincidunt efficitur. Nulla facilisi. Sed sit amet est nec urna tempor volutpat.
      </p>

      {/* Social icons */}
      <div className="flex gap-4 text-xl text-gray-600 dark:text-gray-300">
        <a
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black dark:hover:text-white"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black dark:hover:text-white"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black dark:hover:text-white"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}
