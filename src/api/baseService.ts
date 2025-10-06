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
    },
    post: async<T, U>(url: string, data: T): Promise<U> => {
        try {
            const response = await axiosInstance.post<U>(url, data)
            return response.data

        } catch (error: any) {
            console.error("Error posting data:", error);
            if (error.response?.status === 401) {
                triggerLogout();
            }
            throw new Error("Error posting data")
        }
    },
    put: async<T, U>(url: string, data: T): Promise<U> => {
        try {
            const response = await axiosInstance.put<U>(url, data)
            return response.data

        } catch (error: any) {
            console.error("Error putting data:", error);
            if (error.response?.status === 401) {
                triggerLogout();
            }
            throw new Error("Error putting data")
        }
    },
    delete: async<T>(url: string): Promise<T> => {
        try {
            const response = await axiosInstance.delete<T>(url)
            return response.data

        } catch (error: any) {
            console.error("Error deleting data:", error);
            if (error.response?.status === 401) {
                triggerLogout();
            }
            throw new Error("Error deleting data")
        }
    }
}