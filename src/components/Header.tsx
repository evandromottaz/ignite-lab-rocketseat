import { List, X } from "phosphor-react";
import { useContext } from "react";
import { MenuContext } from "../global/GlobalContext";
import { Logo } from "./Logo";

export function Header() {
    const { setIsOpenMenu, isOpenMenu } = useContext(MenuContext)

    return (
        <header className="w-full p-5 flex items-center justify-center bg-gray-700 border-b border-gray-600  mobile:fixed mobile:h-[10vh] z-50 mobile:justify-between">
            <Logo />

            <div className="hidden mobile:w-18 mobile:flex items-center gap-2" onClick={() => setIsOpenMenu(prev => !prev)}>
                <span className="text-sm">
                    Aulas
                </span>
                {
                    isOpenMenu
                        ? <X size={32} />
                        : <List size={32} className="text-blue-500" />
                }

            </div>
        </header>
    )
}