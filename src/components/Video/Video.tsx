import { CaretRight, DiscordLogo, FileArrowDown, Lightning, CircleNotch, Play } from "phosphor-react";
import YouTube from 'react-youtube';

import { useGetLessonBySlugQuery } from "../../graphql/generated";

interface VideoProps {
    lessonSlug: string;
}

function _onReady(event:any) {
    event.target.pauseVideo();
}

export function Video(props: VideoProps) {

    const opts = {
        height: '100%',
        width: '100%',
      };

    let { data } = useGetLessonBySlugQuery({
        variables: {
            slug: props.lessonSlug
        }
    })

    if(!data || !data.lesson) {
        return (
            <div className="flex flex-1 sm:w-full justify-center items-center h-screen">
                <CircleNotch className="animate-spin text-blue-500" size={32} />
                <p className="mt-[5px] ml-[5px]">Carregando...</p>
            </div>
        )
    }

    return (
        <div className="flex-1">
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                    <YouTube className="h-full w-full" videoId={data.lesson.videoId} opts={opts} onReady={_onReady} />
                </div>
            </div>

            <div className="p-8 max-w-[1100px] mx-auto">
                <div className="sm:block md:flex items-start gap-16">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold">
                            {data.lesson.title}
                        </h1>
                        <p className="mt-4 text-gray-200 leading-relaxed">
                            {data.lesson.description}
                        </p>

                        {data.lesson.teacher && (
                            <div className="flex justify-center gap-4 mt-6">
                                <img 
                                    className="h-16 w-16 rounded-full border-2 border-blue-500"
                                    src={data.lesson.teacher.avatarURL} 
                                    alt="" 
                                />

                                <div className="leading-relaxed">
                                    <strong className="font-bold text-2xl block">{data.lesson.teacher.name}</strong>
                                    <span className="text-gray-200 text-sm block sm:overflow-scroll md:overflow-hidden sm:h-[100px]">{data.lesson.teacher.bio}</span>
                                </div>
                            </div>
                        )}
                    </div>
                    
                    <div className="flex flex-col gap-4 sm:mt-[20px]">
                        <a href="" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
                            <DiscordLogo size={24}/>
                            Comunidade do Discord
                        </a>

                        <a href="" className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors">
                            <Lightning size={24}/>
                            Acesse o desafio
                        </a>
                    </div>
                </div>

                <div className="gap-8 mt-20 grid md:grid-cols-2 sm:grid-cols-1">
                    <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 sm:gap-[1rem] hover:bg-gray-600 transition-colors">
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            <FileArrowDown size={24}/>
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl sm:text-lg">
                                Material complementar
                            </strong>
                            <p className="text-sm text-gray-200 mt-2 sm:text-xs">
                                Acesse o material complementar para acelerar o seu desenvolvimento
                            </p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24}/>
                        </div>
                    </a>

                    <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 sm:gap-[1rem] hover:bg-gray-600 transition-colors">
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            <FileArrowDown size={24}/>
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl sm:text-lg">
                                Wallpapers exclusivos
                            </strong>
                            <p className="text-sm text-gray-200 mt-2 sm:text-xs">
                                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
                            </p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24}/>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}