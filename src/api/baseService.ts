import { triggerLogout } from "../utils/storage/auth/logoutBridge";
import axiosInstance from "./axiosInstance"


export const baseService = {
    get: async<T>(url: string): Promise<T> => {
        try {
            const response = await axiosInstance.get<T>(url)
            return response.data

        } catch (error: any) {
            console.error("Error fetching data:", error);

            //response status 401 ise logout et
            if (error.response?.status === 401) {
                triggerLogout();
            }
            throw new Error("Error fetching data")
            //logout from context

        }
    }
}