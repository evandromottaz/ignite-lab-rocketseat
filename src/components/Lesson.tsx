import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

type LessonProps = {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class'
}

export function Lesson({title, slug, availableAt, type}:LessonProps) {
    const isLessonAvaible = isPast(availableAt);
    const availableDateFormatted = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", { locale: ptBR })

    return (
        <a href="#">
            <span className="text-gray-300">
                {availableDateFormatted}
            </span>

            <div className="rounded border border-gray-500 p-4 mt-2">
                <header className="flex items-center justify-between">
                    {
                        isLessonAvaible ? 
                        <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                            <CheckCircle size={20} />
                            Conteúdo liberado
                        </span> 
                        : 
                        <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                            <Lock size={20} />
                            Em breve
                        </span>
                    }

                    <span className="text-xs rounded px-2 py-[2px] text-white border-green-300 border font-bold">
                        {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>

                <strong className="text-gray-200 mt-5 block">
                    {title}
                </strong>
            </div>
        </a>
    )
}