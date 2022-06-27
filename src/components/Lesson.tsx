import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';


type LessonProps = {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class'
}

export function Lesson({ title, slug, availableAt, type }: LessonProps) {
    const isLessonAvaible = isPast(availableAt);
    const availableDateFormatted = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", { locale: ptBR })

    const params = useParams<{ slug: string }>()

    const isActiveLesson = slug === params.slug
    return (
        <Link to={`/event/lesson/${slug}`} className='group z-10'>
            <span className="text-gray-300">
                {availableDateFormatted}
            </span>

            <div className={
                classNames('rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors relative before:bg-green-500 before:w-3 before:h-3 before:rotate-45 before:-left-2 before:top-[calc(50%-6px)] before:-z-10', { 'bg-green-500 border-green-500 before:absolute': isActiveLesson })
            }>
                <header className="flex items-center justify-between">
                    {
                        isLessonAvaible ?
                            <span className={
                                classNames('text-blue-500 text-sm font-medium flex items-center gap-2', {
                                    'text-blue-500': !isActiveLesson,
                                    'text-white': isActiveLesson
                                }
                                )
                            }>
                                <CheckCircle size={20} />
                                Conteúdo liberado
                            </span>
                            :
                            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                                <Lock size={20} />
                                Em breve
                            </span>
                    }

                    <span className={
                        classNames('text-xs rounded px-2 py-[2px] text-white border font-bold', {
                            'border-green-300': !isActiveLesson,
                            'border-white': isActiveLesson
                        })
                    }>
                        {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>

                <strong className={
                    classNames('mt-5 block', {
                        'text-white': isActiveLesson,
                        'text-gray-200': !isActiveLesson
                    })
                }>
                    {title}
                </strong>
            </div>
        </Link>
    )
}