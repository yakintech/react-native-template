import AsyncStorage from '@react-native-async-storage/async-storage';


export const storageHelper = {
    storeData: async (key: string, value: any) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(key, jsonValue);
        } catch (e) {
            console.error("Error storing data", e);
        }
    },

    getData: async (key: string) => {
        try {
            const jsonValue = await AsyncStorage.getItem(key);
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            console.error("Error getting data", e);
            return null;
        }
    },

    removeData: async (key: string) => {
        try {
            await AsyncStorage.removeItem(key);
        } catch (e) {
            console.error("Error removing data", e);
        }
    },

    clearAllData: async () => {
        try {
            await AsyncStorage.clear();
        } catch (e) {
            console.error("Error clearing data", e);
        }
    }
};

export default storageHelper;