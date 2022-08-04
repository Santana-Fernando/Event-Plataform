import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";
import { useSidebar } from "../context/SidebarContext";

export function Event() {
    const { slug } = useParams<{slug: string}>()
    const { setOpenCloseSideBar, IsOpenCloseSideBar } = useSidebar();


    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main className="flex flex-1">
                <div className={`md:flex ${!IsOpenCloseSideBar ? 'sm:hidden':'sm:flex'}`}>
                {
                    slug 
                    ? <Video lessonSlug={slug}/> 
                    : <div className="flex-1"/>
                }
                </div>
                <Sidebar/>
            </main>
        </div>
    )
}