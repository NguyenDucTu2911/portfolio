
import { UserProps } from "../../types";
import { db } from "../config";

export const getUser = (): Promise<UserProps[]> => {
    return new Promise(async (resolve, reject) => {
        try {
            let ALLData = await db.collection("user").get();
            if (ALLData) {
                const user: UserProps[] = [];
                ALLData.docs.map((doc) => {
                    const data = { id: doc.id, ...doc.data() } as UserProps;
                    user.push({
                        ...data,
                    });
                });
                resolve(user);
                // return Device;
            } else {
                reject(new Error("không tìm thấy data"))
                // throw ;
            }
        } catch (error) {
            reject(error)
        }
    });
};