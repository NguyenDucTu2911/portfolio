import { db } from "../config";
import { ProjectProps } from "../../types";

export const GetProjectDetail = async (id: string) => {
    try {
        const idSnapshot = await db.collection('Project').get();
        if (idSnapshot.empty) {
            throw new Error("Not found");
        } else {
            const projects: ProjectProps[] = [];
            for (const doc of idSnapshot.docs) {
                if (doc.id === id) {
                    const imageDetail = await db.collection("album").where("idProject", "==", doc.id).get();
                    const imageData = imageDetail.docs.map((image) => image.data());
                    const projectData = { id: doc.id, ...doc.data(), images: imageData } as ProjectProps;
                    projects.push(projectData);
                }
            }
            return projects;
        }
    } catch (e) {
        console.log(e);
        throw e;
    }
}



