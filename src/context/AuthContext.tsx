import { createContext, useEffect, useState } from "react";
import { baseService } from "../api/baseService";
import axiosInstance from "../api/axiosInstance";
import axios from "axios";
import storageHelper from "../utils/storage/storageHelper";



export type AuthContextData = {
    userId: string | null;
    token: string | null;
    isAuthenticated: boolean;
    login: (userId: string, token: string) => void;
    logout: () => void;
    loading?: boolean;
}

export const AuthContext = createContext<AuthContextData | undefined>(undefined);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [authState, setAuthState] = useState<AuthContextData | null>({
        userId: null,
        token: null,
        isAuthenticated: false,
        login: () => { },
        logout: () => { },
        loading: true
    });


    useEffect(() => {
        storageHelper.getData("authToken").then(token => {
            if (token) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

                    axiosInstance.get("/check")
                        .then(response => {
                            setAuthState({ userId: response.data.userId, token, isAuthenticated: true, login: () => { }, logout: () => { }, loading: false });
                        })
                        .catch(error => {
                            console.error("Token validation failed:", error);
                            setAuthState({ token: null, userId: null, isAuthenticated: false, login: () => { }, logout: () => { }, loading: false });
                            storageHelper.removeData("authToken");
                        });
       
            }
            else {
                setAuthState({ token: null, userId: null, isAuthenticated: false, login: () => { }, logout: () => { }, loading: false });
            }
        })
    }, [])


    const login = (email: string, password: string) => {

        axiosInstance.post('/login', { email, password })
            .then(response => {
                const { userId, token } = response.data;
                setAuthState({ userId, token, isAuthenticated: true, login: () => { }, logout: () => { } });
                storageHelper.storeData("authToken", token);
            })
            .catch(error => {
                console.error("Login failed:", error);
            });
    }


    const logout = () => {
        setAuthState({ userId: null, token: null, isAuthenticated: false, login: () => { }, logout: () => { }, loading: false });
        storageHelper.removeData("authToken");
    }


    return <AuthContext.Provider value={{ ...authState!, login, logout }}>
        {children}
    </AuthContext.Provider>

}



export default AuthProvider;