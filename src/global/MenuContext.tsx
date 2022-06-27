import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type MenuProps = {
    children: ReactNode
}

type MenuContextProps = {
    isOpenMenu: boolean;
    setIsOpenMenu: Dispatch<SetStateAction<boolean>>
}

export const GlobalContext = createContext<MenuContextProps>({
    isOpenMenu: false,
    setIsOpenMenu: (prev) => !prev
})

export function MenuContext({ children }: MenuProps) {
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    return <GlobalContext.Provider value={{ isOpenMenu, setIsOpenMenu }}>
        {children}
    </GlobalContext.Provider>
}
