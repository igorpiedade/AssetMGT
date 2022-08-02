import { createContext, ReactNode, useEffect, useState } from "react";
import jwtDecode, { } from "jwt-decode";
import { api } from "../services/api";

type UserData = {
    sub: string;
    email: string;
    name: string;
    admin: boolean;
};

type SignInCredentials = {
    email: string;
    password: string;
};

type AuthContextData = {
    signIn(credentials: SignInCredentials): Promise<void>;
    user: UserData;
    isAuthenticated: boolean;
};

type AuthProviderProps = {
    children: ReactNode
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserData>();
    const isAuthenticated = !!user;

    useEffect(() => {

        const token = sessionStorage.getItem("token");

        if (token) {

            const { sub, name, admin, email } = jwtDecode(token) as UserData;

            setUser({
                sub,
                name,
                admin,
                email,
            })
        }
    }, [])

    async function signIn({ email, password }: SignInCredentials) {
        try {
            const response = await api.post('auth', {
                email,
                password
            })

            const { sub, name, admin } = await jwtDecode(response.data) as UserData;

            setUser({
                sub,
                name,
                admin,
                email,
            })

            sessionStorage.setItem("token", response.data);

        } catch (err) {
            console.log(err);
        }
    }
    return (
        <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>
            {children}
        </AuthContext.Provider>
    )
}