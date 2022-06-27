import React from "react";

type ButtonProps = {
    type: string;
    href: string;
    children: React.ReactNode
}

type ColorProps = {
    [type: string]: string
}

const color: ColorProps = {
    green: 'bg-green-500 border-green-500 hover:border-green-700 hover:bg-green-700',
    blue: 'text-blue-500 border-blue-500 hover:text-gray-900 hover:bg-blue-500'
}

export function Button({ type, href, children }: ButtonProps) {
    return (
        <a href={href} className={`p-4 text-sm border flex items-center rounded font-semibold uppercase gap-2 justify-center transition-colors ${color[type]}`}>
            {children}
        </a>
    )
}