import { ClickToPlay, Controls, ControlSpacer, DefaultSettings, DefaultUi, MuteControl, PlaybackControl, Player, Scrim, TimeProgress, Ui, Youtube } from "@vime/react";
import { Play } from "phosphor-react";

type VideoPlayerProps = {
    videoId: string
}

export function VideoPlayer({ videoId }: VideoPlayerProps) {
    return (
        <div className="bg-black flex justify-center">
            <div className="flex-1 w-full max-w-[1092px] grid grid-rows-1">
                <Player>
                    <Youtube videoId={videoId} key={videoId} />
                    <DefaultUi noControls>
                        <Play
                            size={48}
                            weight="fill"
                            className="z-50 row-start-1"
                        />
                    </DefaultUi>
                </Player>
            </div>
        </div>
    )
}