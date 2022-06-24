import { gql, useQuery } from "@apollo/client";
import { Lesson } from "./Lesson";

const GET_LESSONS_QUERY = gql`
    query {
        lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
            title
            slug
            lessonType
            availableAt
            id
        }
    }
`

type GetLessonsQuery = {
    lessons: {
        id: string;
        title: string;
        slug: string;
        availableAt: Date;
        lessonType: 'live' | 'class'
    }[]
}

export function Sidebar() {
    const { data } = useQuery<GetLessonsQuery>(GET_LESSONS_QUERY);

    console.log(data)

    return (
        <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
                Cronograma de aulas
            </span>

            <div className="flex flex-col gap-8">
                {data?.lessons.map(({ id, availableAt, title, slug, lessonType }) => {
                    return (
                        <Lesson
                            key={id}
                            availableAt={new Date(availableAt)}
                            slug={slug}
                            title={title}
                            type={lessonType}
                        />
                    )
                })}
            </div>
        </aside>
    )
}