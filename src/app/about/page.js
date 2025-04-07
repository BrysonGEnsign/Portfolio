import Navbar from "/workspaces/Portfolio/src/components/Navbar/Navbar.jsx";
import ThemeSwitcher from "/workspaces/Portfolio/src/components/ThemeSwitcher/ThemeSwitcher.jsx";
import Footer from "/workspaces/Portfolio/src/components/Footer/Footer.jsx";

export const metadata = {
  title: "Portfolio - About",
  description: "The about page of my portfolio.",
};

export default function About() {
  const navOptions = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },

  ];

  return (
    <div className="flex flex-col min-h-screen justify-between">
      {/* Navbar */}
      <div className="w-full">
        <Navbar options={navOptions} />
      </div>

      {/* Main Content */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-5xl px-6 mt-12 mb-auto mx-auto">
        {/* Left: Text */}
        <div className="text-left max-w-xl lg:mr-12">
          <h1 className="text-4xl font-bold mb-6 leading-tight">
            I’m Bryson. I live in Utah, <br /> where I turn ideas into code. 
          </h1>

          <p className="text-md text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            I am a firm beleiver of doing. When you have an idea even if it is something just for fun. I find joy and accomplishment in trying to figure out how I would implement or create my idea. Most of my ideas are how I would create or implement things into games. such as how would I create an inventory system, or a gacha system and the list goes on. Basically I think that when we attempt to implement and create we learn a lot more then we could just reading in a book. 
          </p>
          <p className="text-md text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            Don't get me wrong though I love reading. Some of my favorites currently are, The Book of Mormon, Anything Brandon Sanderson and I do enjoy reading a good webnovel.  
          </p>
         

          {/* Links for mobile only */}
          {/* Links for mobile only */}
<div className="block lg:hidden mt-6 space-y-2 text-sm text-left">
  <p>
    💻 <a
      href="https://github.com/BrysonGEnsign"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-black dark:hover:text-white underline"
    >
      Follow me on GitHub
    </a>
  </p>
  <p>
    🔗 <a
      href="https://www.linkedin.com/in/bryson-graves/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-black dark:hover:text-white underline"
    >
      Follow me on LinkedIn
    </a>
  </p>
  <p>📧 Brysongraves@gmail.com</p>
</div>

        </div>

        {/* Right: Image and Desktop Links */}
        <div className="flex flex-col items-start mt-10 lg:mt-0">
          <div className="w-80 h-80 mb-4">
            <img
              src="/profile.jpg"
              alt="Profile Picture"
              className="w-full h-full object-cover shadow-md rounded-2xl"
            />
          </div>

          {/* Links for desktop only */}
          <div className="hidden lg:block space-y-2 text-sm text-left">
  <p>
    💻 <a
      href="https://github.com/BrysonGEnsign"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-black dark:hover:text-white underline"
    >
      Follow me on GitHub
    </a>
  </p>
  <p>
    🔗 <a
      href="https://www.linkedin.com/in/bryson-graves/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-black dark:hover:text-white underline"
    >
      Follow me on LinkedIn
    </a>
  </p>
  <p>📧 Brysongraves@gmail.com</p>
</div>
        </div>
      </div>

      {/* Theme Switcher */}
      <div className="fixed top-4 right-4">
        <ThemeSwitcher darkClassName="dark" />
      </div>

      {/* Footer */}
      <Footer options={navOptions} />
    </div>
  );
}
