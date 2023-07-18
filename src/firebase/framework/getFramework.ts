import { FrameworkProps } from "../../types";
import { db } from "../config";


export const getFramework = (): Promise<FrameworkProps[]> => {
    return new Promise(async (resolve, reject) => {
        try {
            let ALLData = await db.collection("Framework").get();
            if (ALLData) {
                const Device: FrameworkProps[] = [];
                ALLData.docs.map((doc) => {
                    const data = { id: doc.id, ...doc.data() } as FrameworkProps;
                    Device.push({
                        ...data,
                    });
                });
                resolve(Device);
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
