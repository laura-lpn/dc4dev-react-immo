import { useEffect } from "react";
import { useUser, User } from "./useUser";
import { useLocalStorage } from "./useLocalStorage";

export const useAuth = () => {
  const { user, addUser, removeUser, setUser } = useUser();
  const { getItem } = useLocalStorage();

  useEffect(() => {
    const user = getItem("user");
    if (user) {
      addUser(JSON.parse(user));
    }
  }, [addUser, getItem]);

  const login = async (credential: User) => {
    const response = await fetch("http://localhost:8000/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credential),
    })
    const { access_token } = await response.json();
    localStorage.setItem("access_token", JSON.stringify(access_token));
    
    addUser(user);
  };

  const logout = () => {
    removeUser();
  };

  return { user, login, logout, setUser };
};