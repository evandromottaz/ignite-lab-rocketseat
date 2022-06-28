import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type MenuProps = {
    children: ReactNode
}

type MenuContextProps = {
    isOpenMenu: boolean;
    setIsOpenMenu: Dispatch<SetStateAction<boolean>>
}

export const MenuContext = createContext<MenuContextProps>({
    isOpenMenu: false,
    setIsOpenMenu: (prev) => prev
})

export function GlobalContext({ children }: MenuProps) {
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    return <MenuContext.Provider value={{ isOpenMenu, setIsOpenMenu }}>
        {children}
    </MenuContext.Provider>
}
