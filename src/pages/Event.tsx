import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
    let { slug } = useParams<{ slug: string }>()

    // if (!slug) slug = 'abertura-do-evento-ignite-lab'

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 sm:block flex mobile:flex-col">
                {slug ?
                    <Video lessonSlug={slug} /> :
                    <div className="flex-1"></div>
                }

                <Sidebar />
            </main>
        </div>
    )
}