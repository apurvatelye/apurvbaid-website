import { useEffect, useState } from "react";

import PortfolioHero from "../components/Portfolio/PortfolioHero";
import PortfolioGrid from "../components/Portfolio/PortfolioGrid";

import api from "../services/api";

const Portfolio = () => {

    const [activeFilter, setActiveFilter] = useState("All");

    const [projects, setProjects] = useState([]);

    const [filters, setFilters] = useState(["All"]);

    const [loading, setLoading] = useState(true);

    // ===============================
    // FETCH PROJECTS
    // ===============================

    useEffect(() => {

        const fetchProjects = async () => {

            try {

                setLoading(true);

                const response = await api.get("/projects");

                const data = Array.isArray(response.data)
                    ? response.data
                    : [];

                // Only active projects
                const activeProjects = data.filter(
                    (project) => project.active === true
                );

                setProjects(activeProjects);

                // ===============================
                // CREATE DYNAMIC CATEGORIES
                // ===============================

                const categories = [
                    ...new Set(
                        activeProjects
                            .map((project) =>
                                project.category?.trim()
                            )
                            .filter(Boolean)
                    ),
                ];

                setFilters([
                    "All",
                    ...categories,
                ]);

            } catch (error) {

                console.error(
                    "Projects API Error:",
                    error
                );

                setProjects([]);
                setFilters(["All"]);

            } finally {

                setLoading(false);

            }
        };

        fetchProjects();

    }, []);

    // ===============================
    // LOADING
    // ===============================

    if (loading) {

        return (
            <div className="flex min-h-screen w-full items-center justify-center bg-black text-white">

                <p className="text-sm text-white/60">
                    Loading projects...
                </p>

            </div>
        );
    }

    return (
        <div className="w-full bg-black">

            {/* ===============================
                PORTFOLIO HERO
            =============================== */}

            <PortfolioHero
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
                filters={filters}
            />

            {/* ===============================
                PROJECT GRID
            =============================== */}

            {projects.length > 0 ? (

                <PortfolioGrid
                    projects={projects}
                    activeFilter={activeFilter}
                />

            ) : (

                <div className="flex min-h-[40vh] items-center justify-center px-6 text-center">

                    <p className="text-sm text-white/50">
                        No projects available.
                    </p>

                </div>
            )}

        </div>
    );
};

export default Portfolio;