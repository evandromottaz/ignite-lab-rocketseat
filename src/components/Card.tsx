import { CaretRight, FileArrowDown, Image } from "phosphor-react";
import { ReactNode } from "react";

type CardProps = {
    title: string;
    children: string;
    url: string;
    type: 'file' | 'image';
}

type PhosphorProps = {
    [icon: string]: ReactNode;
}

export function Card({ title, children, url, type }: CardProps) {
    function phosphorIcons(icon: string) {
        const phosphor: PhosphorProps = {
            file: <FileArrowDown size={28} />,
            image: <Image size={28} />
        }

        return phosphor[icon]
    }

    return (
        <a className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors max-w-[502px]" href={url}>
            <div className="bg-green-700 p-6 flex items-center">
                {phosphorIcons(type)}
            </div>

            <div className="py-6 leading-relaxed">
                <strong className="text-2xl">
                    {title}
                </strong>

                <p className="text-sm text-gray-200 mt-2">
                    {children}
                </p>
            </div>

            <div className="p-6 flex items-center flex-1">
                <CaretRight size={24} />
            </div>
        </a>
    )
}