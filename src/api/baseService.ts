import axiosInstance from "./axiosInstance"


export const baseService = {
    get: async<T>(url:string): Promise<T> => {
        try {
            const response = await axiosInstance.get<T>(url)
            return response.data

        } catch (error) {
            throw new Error("Error fetching data")
        }
    }
}