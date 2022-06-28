import { gql, useQuery } from "@apollo/client";
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
            <div className={`flex flex-col min-h-screen max-w-[1440px] mx-auto ${isOpenMenu && 'h-screen overflow-hidden'}`}>
                <main className="flex flex-1 mobile:flex-col mobile:mt-20">
                    {slug ?
                        <Video lessonSlug={slug} /> :
                        <Navigate to={`/event/lesson/${data.lessons[0].slug}`} />
                    }

                    <Sidebar />
                </main>
                <Footer />
            </div>
        </>
    )
}