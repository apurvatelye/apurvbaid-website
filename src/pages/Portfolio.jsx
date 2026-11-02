import { useState } from "react";
import PortfolioHero from "../components/Portfolio/PortfolioHero";
import PortfolioGrid from "../components/Portfolio/PortfolioGrid";
import { projects as sampleProjects } from "../data/projects";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const projects = sampleProjects;
  const filters = ["All", ...new Set(projects.map((project) => project.category).filter(Boolean))];

  return (
    <div className="w-full bg-black">
      <PortfolioHero activeFilter={activeFilter} setActiveFilter={setActiveFilter} filters={filters} />
      {projects.length ? (
        <PortfolioGrid projects={projects} activeFilter={activeFilter} />
      ) : (
        <div className="flex min-h-[40vh] items-center justify-center px-6 text-center">
          <p className="text-sm text-white/50">No projects available.</p>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
