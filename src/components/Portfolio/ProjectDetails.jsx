import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../../services/api";

import Hero from "./ProjectDetails/Hero";
import ProjectInfo from "./ProjectDetails/ProjectInfo";

export default function ProjectDetails() {

    const { id } = useParams();

    const [project, setProject] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(false);

    // =========================
    // FETCH PROJECT
    // =========================
    useEffect(() => {

        const fetchProject = async () => {

            try {

                setLoading(true);
                setError(false);

                const response =
                    await api.get(`/projects/${id}`);

                console.log(
                    "Project Details API Response:",
                    response.data
                );

                setProject(response.data);

            } catch (error) {

                console.error(
                    "Project Details API Error:",
                    error
                );

                setError(true);

            } finally {

                setLoading(false);

            }
        };

        if (id) {
            fetchProject();
        }

    }, [id]);

    // =========================
    // LOADING
    // =========================
    if (loading) {

        return (
            <div className="min-h-screen bg-black flex items-center justify-center text-white">

                <p className="text-sm text-neutral-400">
                    Loading project...
                </p>

            </div>
        );
    }

    // =========================
    // ERROR / NOT FOUND
    // =========================
    if (error || !project) {

        return (
            <div className="min-h-screen bg-black flex items-center justify-center text-white">

                <div className="text-center">

                    <h1 className="text-3xl md:text-5xl font-light">
                        Project Not Found
                    </h1>

                    <p className="mt-4 text-neutral-500">
                        The requested project could not be loaded.
                    </p>

                </div>

            </div>
        );
    }

    return (
        <>
            <Hero project={project} />

            <ProjectInfo project={project} />
        </>
    );
}