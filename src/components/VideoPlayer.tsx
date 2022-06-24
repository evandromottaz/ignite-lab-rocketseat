import { DefaultUi, Player, Youtube } from "@vime/react";

type VideoPlayerProps = {
    videoId: string
}

export function VideoPlayer({ videoId }: VideoPlayerProps) {
    return (
        <div className="bg-black flex justify-center">
            <div className="flex-1 w-full max-w-[1092px] grid grid-rows-1">
                <Player>
                    <Youtube videoId={videoId} key={videoId} />
                    <DefaultUi />
                </Player>
            </div>
        </div>
    )
}