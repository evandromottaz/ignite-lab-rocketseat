import { DefaultUi, Player, Youtube } from "@vime/react";

type VideoPlayerProps = {
    videoId: string
}

export function VideoPlayer({ videoId }: VideoPlayerProps) {
    return (
        <div className="bg-black flex flex-1 justify-center">
            <div className="flex-1 w-full h-full max-w-[1092px] z-10">
                <Player style={{ zIndex: 0 }}>
                    <Youtube videoId={videoId} key={videoId} />
                    <DefaultUi />
                </Player>
            </div>
        </div>
    )
}