import { db } from "../config";
import { ProjectProps } from "../../types";

export const GetProject = async ({ framework, language, limit }: ProjectProps): Promise<ProjectProps[]> => {
    try {
        let query = db.collection("Project");
        let data;

        if (framework && language) {
            data = query.where("framework", "==", framework).where("language", "==", language);
            console.log("ca hai");
        } else if (framework) {
            data = query.where("framework", "==", framework);
            console.log("nodejs", framework );
        } else if (language) {
            data = query.where("language", "==", language);
            console.log("javascript");
        }

        if (limit) {
            data = query.limit(limit);
        }

        if (!data) {
            return [];
        }

        const snapshot = await data.get();

        if (snapshot.empty) {
            return [];
        }

        const projects: ProjectProps[] = [];
        snapshot.forEach((doc) => {
            const projectData = { id: doc.id, ...doc.data() } as ProjectProps;
            projects.push(projectData);
        });

        return projects;

    } catch (error) {
        console.error("Error retrieving projects:", error);
        throw new Error("Failed to retrieve projects. Please try again later.");
    }
};



