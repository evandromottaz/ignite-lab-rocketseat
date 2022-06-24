import { CaretRight, FileArrowDown } from "phosphor-react";

type CardProps = {
    title: string;
    children: string;
    url: string;
}

export function Card({ title, children, url }: CardProps) {
    return (
        <a className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors" href={url}>
            <div className="bg-green-700 h-full p-6 flex items-center">
                <FileArrowDown size={40} />
            </div>

            <a href="https://efficient-sloth-d85.notion.site/Material-complementar-86d4ef35af16471ebc3ae3eba1a378e5" className="py-6 leading-relaxed">
                <strong className="text-2xl">
                    {title}
                </strong>

                <p className="text-sm text-gray-200 mt-2">
                    {children}
                </p>
            </a>

            <div className="h-full p-6 flex items-center">
                <CaretRight size={24} />
            </div>
        </a>
    )
}