import React, { createContext, useContext } from "react";

interface Context {
	login?: () => boolean;
	logout?: () => void;
}

const AuthContext = createContext<Context | undefined>(undefined);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export const authContext = () => {
	return useContext(AuthContext);
};

export default AuthProvider;
