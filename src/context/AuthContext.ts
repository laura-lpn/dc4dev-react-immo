import { createContext } from "react";

interface AuthContext {
  accessToken: string | null;
  setAccessToken: () => void;
}

export const AuthContext = createContext<AuthContext>({
  accessToken: null,
  setAccessToken: () => {},
});