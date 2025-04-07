import Image from "next/image";
import Navbar from "/workspaces/Portfolio/src/components/Navbar/Navbar.jsx";
import ThemeSwitcher from "/workspaces/Portfolio/src/components/ThemeSwitcher/ThemeSwitcher.jsx";
import SignupWidget from "/workspaces/Portfolio/src/components/SidebarWidget/SignupWidget/SignupWidget.jsx";
import WorkWidget from "/workspaces/Portfolio/src/components/SidebarWidget/WorkWidget/WorkWidget.jsx";
import SkillsWidget from "/workspaces/Portfolio/src/components/SidebarWidget/SkillsWidget/SkillsWidget.jsx";
import Intro from "/workspaces/Portfolio/src/components/Intro/Intro.jsx";
import Footer from "/workspaces/Portfolio/src/components/Footer/Footer.jsx";
import Articles from "/workspaces/Portfolio/src/components/Articles/Articles.jsx";
import './globals.css';

export default function Home() {
  const navOptions = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
   ,
  ];

  const skills = [
    { name: "Unreal Engine", proficiency: 70, icon: "html15.png" },
    { name: "CSS", proficiency: 20, icon: "css3.png" },
    { name: "JavaScript", proficiency: 30, icon: "javascript.png" },
  ];

  const signupProps = {
    title: "Stay up to date",
    content: "Get notified when I publish something new, and unsubscribe at any time.",
  };

  const workProps = {
    title: "Work",
    content: "Things I've done for work",
    experiences: [
      { logo: "/slack.png", organization: "FreeLance", jobTitle: "Free Lancee", startYear: 2018, endYear: 2025 },
      { logo: "/spotify.png", organization: "Self-Empyloyed", jobTitle: "Game Dev", startYear: 2016, endYear: null },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col items-center px-4 sm:px-8 lg:px-12 flex-grow">
        <div className="w-full max-w-[1280px]">
          {/* Navbar and Theme Switcher */}
          <div className="w-full flex justify-between items-center mb-10">
            <Navbar options={navOptions} />
            <ThemeSwitcher darkClassName="dark" />
          </div>

          {/* Background effects */}
          <div className="relative w-full mb-16">
            <div className="absolute top-[-120px] left-[50%] -translate-x-1/2 h-[360px] w-[600px] rounded-full bg-gradient-radial from-white/10 to-transparent blur-3xl dark:from-blue-800 dark:opacity-30 z-[-1]" />
            <div className="absolute top-1/2 right-0 h-[240px] w-[300px] rounded-full bg-gradient-conic from-sky-200 via-blue-300 to-transparent blur-2xl dark:from-sky-900 dark:opacity-40 z-[-1]" />
          </div>

          {/* Intro Section */}
          <section className="mb-16">
            <Intro />
          </section>

          {/* Grid Layout */}
          <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">
            {/* Articles */}
            <div className="space-y-10">
              <Articles />
            </div>

            {/* Sidebar Widgets */}
            <div className="space-y-6">
              <WorkWidget {...workProps} />
              <SkillsWidget
                title="Skills"
                content="My Skill set"
                skills={skills}
              />
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer options={navOptions} />
    </div>
  );
}
