import { createContext } from "react";

export type AuthUser = {
  name: string;
  email: string;
};

type UserContextType = {
    user: AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

type UserContextProviderProps = {
  children: React.ReactNode;
};

// export const useContext = createContext<UserContextType | null>(null);

// export const UserContextProvider = ({ children }: UserContextProviderProps) => {
//   const [user, setUser] = useState<Authuser | null>(null);
//   return <UserContext.Provider vlaue={user}>{children}</UserContext.Provider>;
// };

 