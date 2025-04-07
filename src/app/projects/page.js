import Navbar from "/workspaces/Portfolio/src/components/Navbar/Navbar.jsx";
import ThemeSwitcher from "/workspaces/Portfolio/src/components/ThemeSwitcher/ThemeSwitcher.jsx";
import Footer from "/workspaces/Portfolio/src/components/Footer/Footer.jsx";
import ProjectCard from "/workspaces/Portfolio/src/components/ProjectCard/ProjectCards.jsx";
import "./page.css";

export const metadata = {
  title: "Portfolio - Projects",
  description: "Home page of my portfolio.",
};

export default function Projects() {
  const navOptions = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },

  ];

  const projects = [
    {
      logo: "/Osm.png",
      name: "OpenStreetMap",
      content: "Filling out Springville",
      link: "https://www.openstreetmap.org/#map=16/40.15286/-111.58717"
    },
   
  ];

  return (
    <div className="flex flex-col min-h-screen">
  {/* Navbar */}
  <div className="w-full">
    <Navbar options={navOptions} />
  </div>

  {/* Theme Switcher */}
  <div className="fixed top-4 right-4">
    <ThemeSwitcher darkClassName="dark" />
  </div>

  {/* Main content */}
  <main className="flex-grow mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
    {/* Title and description */}
    <div className="title-container">
      <h1 className="text-4xl font-bold mb-6 leading-tight">
        Things I'm making/made.
      </h1>
      <p style={{ marginBottom: "40px" }}>
        Here is some of the projects I'm currently working on and have worked on. 
      </p>
    </div>

    {/* Project cards */}
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", justifyContent: "center" }}>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </main>

  {/* Footer */}
  <Footer options={navOptions} />
</div>

  );
};
