import Image from "next/image";
import Navbar from "/workspaces/Portfolio/src/components/Navbar/Navbar.jsx";
import ThemeSwitcher from "/workspaces/Portfolio/src/components/ThemeSwitcher/ThemeSwitcher.jsx";
import SignupWidget from "/workspaces/Portfolio/src/components/SidebarWidget/SignupWidget/SignupWidget.jsx";
import WorkWidget from "/workspaces/Portfolio/src/components/SidebarWidget/WorkWidget/WorkWidget.jsx";
import SkillsWidget from "/workspaces/Portfolio/src/components/SidebarWidget/SkillsWidget/SkillsWidget.jsx";
import Intro from "/workspaces/Portfolio/src/components/Intro/Intro.jsx";
import Articles from "/workspaces/Portfolio/src/components/Articles/Articles.jsx";
import './globals.css';

export default function Home() {
  const navOptions = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Uses" },
  ];

  const skills = [
    { name: "HTML", proficiency: 40, icon: "html5.png" },
    { name: "CSS", proficiency: 40, icon: "css3.png" },
    { name: "JavaScript", proficiency: 40, icon: "javascript.png" },
  ];

  const signupProps = {
    title: "Stay up to date",
    content: "Get notified when I publish something new, and unsubscribe at any time.",
  };

  const workProps = {
    title: "Work",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
    experiences: [
      { logo: "/slack.png", organization: "Slack", jobTitle: "Software Engineer", startYear: 2016, endYear: null },
      { logo: "/spotify.png", organization: "Spotify", jobTitle: "Software Engineer", startYear: 2014, endYear: 2015 },
      { logo: "/audible.png", organization: "Audible", jobTitle: "Software Engineer", startYear: 2012, endYear: 2013 },
      { logo: "/microsoft.png", organization: "Microsoft", jobTitle: "Software Engineer", startYear: 2010, endYear: 2011 },
    ],
  };

  return (
    <main className="flex flex-col items-center px-4 sm:px-8 lg:px-12">
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
            <SignupWidget {...signupProps} />
            <WorkWidget {...workProps} />
            <SkillsWidget
              title="Skills"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi."
              skills={skills}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
