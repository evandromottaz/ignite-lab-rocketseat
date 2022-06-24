import { CaretRight, Coffee, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";
import { gql, useQuery } from "@apollo/client";
import '@vime/core/themes/default.css'
import { Button } from "./button";
import { VideoPlayer } from "./VideoPlayer";
import { Teacher } from "./Teacher";

const GET_LESSON_SLUG = gql`
    query getLessonSlug($slug: String) {
        lesson(where: {slug: $slug}) {
            title
            videoId
            description
            teacher {
                avatarURL
                bio
                name
            }
        }
    }
`

export type VideoProps = {
    lessonSlug: string;
}

type GetLessonSlug = {
    lesson: {
        title: string;
        videoId: string;
        description: string;
        teacher: {
            avatarURL: string;
            bio: string;
            name: string;
        }
    }
}

export function Video({ lessonSlug }: VideoProps) {
    const { data } = useQuery<GetLessonSlug>(GET_LESSON_SLUG,
        {
            variables: { slug: lessonSlug }
        })

    if (!data) return <div className="flex-1">Carregando...</div>

    return (
        <div className="flex-1">
            <VideoPlayer videoId={data.lesson.videoId} />

            <div className="p-8 max-w-[1100px] mx-auto">
                <div className="flex items-start gap-16 mobile:flex-col mobile:items-stretch mobile:gap-6">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold mobile:text-lg">{data.lesson.title}</h1>

                        <p className="mt-4 text-gray-200 leading-relaxed mobile:text-sm">
                            {data.lesson.description}
                        </p>

                        <Teacher
                            name={data.lesson.teacher.name}
                            bio={data.lesson.teacher.bio}
                            avatar={data.lesson.teacher.avatarURL}
                        />
                    </div>

                    <div className="flex flex-col gap-4">
                        <Button type="green" href="https://discord.com/channels/327861810768117763/989172071202455663/989401817303613460">
                            <DiscordLogo size={24} />
                            Comunidade do Discord
                        </Button>

                        <Button type="blue" href="https://evento.rocketseat.com.br/ignite-lab/desafios/checkpoints">
                            <Lightning size={24} />
                            Acesse o desafio
                        </Button>
                    </div>
                </div>

                <div className="gap-8 mt-20 grid grid-cols-2">
                    <a className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors" href="">
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            <FileArrowDown size={40} />
                        </div>

                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl">
                                Material Complementar
                            </strong>

                            <p className="text-sm text-gray-200 mt-2">
                                Acesse o material complementar para acelerar o seu desenvolvimento
                            </p>
                        </div>

                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24} />
                        </div>
                    </a>

                    <a className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors" href="">
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            <FileArrowDown size={40} />
                        </div>

                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl">
                                Wallpapers exclusivos
                            </strong>

                            <p className="text-sm text-gray-200 mt-2">
                                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
                            </p>
                        </div>

                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24} />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}