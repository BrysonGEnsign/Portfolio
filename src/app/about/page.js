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
    { path: "/contact", label: "Contact" },
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
            I’m Jane. I live in New York City, <br /> where I develop the future.
          </h1>

          <p className="text-md text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur
            adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur...
          </p>
          <p className="text-md text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur
            adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur...
          </p>
          <p className="text-md text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur
            adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur...
          </p>

          {/* Links for mobile only */}
          <div className="block lg:hidden mt-6 space-y-2 text-sm text-left">
            <p>📎 Follow me on X</p>
            <p>💻 Follow me on Github</p>
            <p>🔗 Follow me on LinkedIn</p>
            <p>📧 jane@email.com</p>
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
            <p>📎 Follow me on X</p>
            <p>💻 Follow me on Github</p>
            <p>🔗 Follow me on LinkedIn</p>
            <p>📧 jane@email.com</p>
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
