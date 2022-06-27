import { Navigate, useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
    const { slug } = useParams<{ slug: string }>()

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 flex mobile:flex-col">
                {slug ?
                    <Video lessonSlug={slug} /> :
                    <Navigate to="/event/lesson/abertura-do-evento-ignite-lab" />
                }

                <Sidebar />
            </main>
            <Footer />
        </div>
    )
}