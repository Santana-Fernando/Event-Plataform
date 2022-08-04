import { Logo } from "./Logo";
import { List, X } from "phosphor-react";
import { useSidebar } from "../context/SidebarContext";


export function Header() {

    const { setOpenCloseSideBar, IsOpenCloseSideBar } = useSidebar();

    return (
        <header className="w-full p-5 flex bg-gray-700 border-b md:items-center md:justify-center border-gray-600 sm:items-left sm:justify-between">
            <Logo /> 
            <div onClick={() => setOpenCloseSideBar(!IsOpenCloseSideBar)} className="sm:inline md:hidden font-sans text-sm">
                Aulas {IsOpenCloseSideBar? <List size={32} className="inline text-blue-500 ml-1"/> : <X size={32} className="inline text-blue-500 ml-1"/>}
            </div>
        </header>
    )
}