import { createContext, ReactNode, useContext, useState } from "react";

type Sidebar = {
    setOpenCloseSideBar: (state: boolean) => void;
    IsOpenCloseSideBar: boolean;
}

type SidebarContextProviderProps = {
    children: ReactNode;
}

export const SidebarContext = createContext({} as Sidebar)

export function SidebarContextProvider({ children }: SidebarContextProviderProps) {
    const [IsOpenCloseSideBar, setIsOpenCloseSideBar] = useState(false)

    function setOpenCloseSideBar(state: boolean){
        setIsOpenCloseSideBar(state)
    }

    return (
        <SidebarContext.Provider value={{setOpenCloseSideBar, IsOpenCloseSideBar}}>
            {children}
        </SidebarContext.Provider>
    )
}

export const useSidebar= () => {
    return useContext(SidebarContext)
}