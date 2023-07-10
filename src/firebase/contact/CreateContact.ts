import { ContactProps } from "../../types";
import { db } from "../config";

export const createContact = async (newContact: ContactProps): Promise<void> => {
    console.log(newContact)
    try {
        const data = await db.collection("contact")
            .where("Email", "==", newContact.Email)
            .get();

        if (!data.empty) {
            const docId = data.docs[0].id;
            await db.collection("contact").doc(docId).update(newContact);
        } else {
            await db.collection("contact").add(newContact);
        }

        console.log("Contact created successfully");
    } catch (error) {
        console.error(error);
        throw error;
    }
};

