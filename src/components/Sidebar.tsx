import { gql, useQuery } from "@apollo/client";
import classNames from "classnames";
import { useContext } from "react";
import { GlobalContext } from "../global/MenuContext";
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
    const { isOpenMenu } = useContext(GlobalContext)

    return (
        <>
            <aside className={classNames(
                'bg-gray-700 p-6 border-l border-gray-600 mobile:absolute mobile:w-full z-20 mobile:h-full mobile:overflow-hidden mobile:left-0 w-[348px] flex-shrink-0', {
                'mobile:block': isOpenMenu && 'mobile', 'mobile:hidden': !isOpenMenu && 'mobile'
            })}>
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
        </>
    )
}