import { Lesson } from "./Lesson";
import { useGetLessonsQuery } from "../graphql/generated";
import { List } from "phosphor-react";
import { useSidebar } from "../context/SidebarContext";

export function Sidebar() {
    const { data } = useGetLessonsQuery();
    const { setOpenCloseSideBar, IsOpenCloseSideBar } = useSidebar();
    
    return (
        <aside className={`md:block sm:w-full md:w-[348px] bg-gray-700 p-6 border-l border-gray-600 ${IsOpenCloseSideBar? 'sm:block':'sm:hidden'} `}>
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
              Cronograma de aulas
            </span>
            <div className="flex flex-col gap-8">
                {data?.lessons.map(lesson => {
                    return (
                        <Lesson
                            key={lesson.id}
                            title={lesson.title}
                            slug={lesson.slug}
                            availableAt={new Date(lesson.availableAt)}
                            type={lesson.lessonType}
                        />
                    )
                })}
            </div>
        </aside>
    )
}