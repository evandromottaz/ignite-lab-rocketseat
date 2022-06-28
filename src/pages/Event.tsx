import { gql, useQuery } from "@apollo/client";
import classNames from "classnames";
import { useContext } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";
import { MenuContext } from "../global/GlobalContext";

const GET_SLUG_LESSONS_QUERY = gql`
    query {
        lessons {
            slug
        }
    }
`

const t = 's'

type GetSlugLessons = {
    lessons: [
        {
            slug: string
        }
    ]
}


export function Event() {
    const { slug } = useParams<{ slug: string }>()
    const { isOpenMenu } = useContext(MenuContext)
    const { data } = useQuery<GetSlugLessons>(GET_SLUG_LESSONS_QUERY)

    if (!data) return
    return (
        <>
            <Header />

            <div className={classNames('flex flex-col max-w-[1440px] mx-auto', {
                'h-screen overflow-hidden': isOpenMenu
            })}>
                <main className="flex flex-1 mobile:flex-col mobile:mt-20">
                    {slug ?
                        <Video lessonSlug={slug} /> :
                        <Navigate to={`/event/lesson/${data?.lessons[0].slug}`} />
                    }

                    <Sidebar />
                </main>

                <Footer />
            </div>


        </>
    )
}