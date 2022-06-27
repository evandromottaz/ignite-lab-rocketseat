import { DiscordLogo, Lightning } from "phosphor-react";
import { gql, useQuery } from "@apollo/client";
import '@vime/core/themes/default.css'
import { Button } from "./Button";
import { VideoPlayer } from "./VideoPlayer";
import { Teacher } from "./Teacher";
import { Card } from "./Card";
import { Loading } from "./Loading";

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

    if (!data) return <Loading />

    return (
        <div className="flex-1">
            <VideoPlayer videoId={data.lesson.videoId} />

            <div className="p-6 mx-auto">
                <div className="flex items-start gap-16 tablet:flex-col mobile:items-stretch mobile:gap-6">
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

                <div className="gap-8 mt-20 flex tablet:flex-col">
                    <Card
                        type="file"
                        title="Material complementar"
                        url="https://efficient-sloth-d85.notion.site/Material-complementar-86d4ef35af16471ebc3ae3eba1a378e5">
                        Acesse o material complementar para acelerar o seu desenvolvimento
                    </Card>

                    <Card
                        type="image"
                        title="Wallpapers exclusivos"
                        url="https://drive.google.com/drive/folders/1mxWnvlqmH7MbVRv2Na9xFNgCQCygM1iR?usp=sharing">
                        Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
                    </Card>
                </div>
            </div>
        </div>
    )
}