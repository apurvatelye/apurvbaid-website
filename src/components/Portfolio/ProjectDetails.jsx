import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../../data/projects";
import Hero from "./ProjectDetails/Hero";
import ProjectInfo from "./ProjectDetails/ProjectInfo";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((item) => String(item.id) === String(id));

  useEffect(() => {
    if (!project) return;
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [id, project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-light">Project Not Found</h1>
          <button onClick={() => navigate("/portfolio")} className="mt-6 border border-white/40 px-6 py-3 text-sm hover:bg-white hover:text-black transition">
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return <><Hero key={project.id} project={project} /><ProjectInfo project={project} /></>;
}
