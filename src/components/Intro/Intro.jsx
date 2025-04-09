import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import Image from 'next/image';

export default function Intro() {
  return (
    <section className="mb-10">
      <div className="flex items-center mb-4">
      <Image
  src="/profile.jpg"
  alt="Profile"
  width={48}
  height={48}
   className="rounded-full mr-4"
/>
        <div>
          <h1 className="text-2xl font-semibold">Software engineer, brother, Game Dev, and believer</h1>
        </div>
      </div>

      {/* Longer intro content */}
      <p className="text-gray-600 dark:text-gray-300 max-w-2xl mb-6 leading-relaxed">
       Hello! I am Bryson. I enjoy creation It is amazing the things we can create with the tools avalible to us. I beleive that as we strive to create things we are given inspration. The sparks in the dark that just illuminate enough for you to be inspired, or to keep working because you know you can create amazing things. 
      </p>

      {/* Social icons */}
      <div className="flex gap-4 text-xl text-gray-600 dark:text-gray-300">
       
        <a
          href="https://github.com/BrysonGEnsign"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black dark:hover:text-white"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/bryson-graves/"
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
