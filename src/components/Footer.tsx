import { Brand } from "./Brand";

export function Footer() {
    return (
        <div className="flex justify-between py-6 px-6 items-center border-t-2 border-gray-500 mobile:flex-col mobile:gap-6">
            <div className="flex items-center gap-6 mobile:flex-col">
                <Brand />

                <p className="text-gray-300">
                    Rocketseat - Todos os direitos reservados
                </p>
            </div>

            <p className="text-gray-300">
                Políticas de privacidade
            </p>
        </div>
    )
}