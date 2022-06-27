import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { Logo } from "../components/Logo";
import { ReactLogo } from "../components/ReactLogo";
import code from '../assets/code.png'

const CREATE_SUBSCRIBER_MUTATION = gql`
    mutation CreateSubscriber($name: String!, $email: String!) {
        createSubscriber(data: {name: $name, email: $email}) {
            id
        }
    }
`

export function Home() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [createSubscriber, { loading }] = useMutation(CREATE_SUBSCRIBER_MUTATION)
    const navigate = useNavigate()

    async function handleSubmit(e: FormEvent) {
        e.preventDefault()

        await createSubscriber({
            variables: {
                name,
                email
            }
        })
        navigate('/event')
    }

    return (
        <>
            <div className="bg-blur bg-cover bg-no-repeat flex flex-col items-center relative">
                <ReactLogo />

                <div className="w-full max-w-[1100px] flex justify-between mt-20 mx-auto tablet:flex-wrap tablet:justify-center">
                    <div className="min-w-[390px] max-w-[640px] mobile:block px-7 z-10">
                        <Logo />
                        <h1 className="mt-8 text-4xl leading-tight tablet:text-center mobile:text-3xl">
                            Construa uma <strong className="text-blue-500 inline-block">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React JS</strong>
                        </h1>

                        <p className="mt-4 text-gray-200 leading-relaxed tablet:text-center tablet:mb-8 mobile:text-sm">
                            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                        </p>
                    </div>

                    <div className="min-w-fit p-8 bg-gray-700 border border-gray-500 rounded mobile:w-full mr-6 z-10 tablet:mr-0">
                        <strong className="text-2xl mb-6 block mobile:text-lg">
                            Inscreva-se gratuitamente
                        </strong>

                        <form
                            onSubmit={handleSubmit} className="flex flex-col w-full gap-2 mb-6">
                            <input
                                onChange={({ target }) => setName(target.value)}
                                type="text"
                                placeholder="Seu nome completo"
                                className="bg-gray-900 rounded px-5 h-14"
                            />

                            <input
                                onChange={({ target }) => setEmail(target.value)}
                                type="email"
                                placeholder="Digite seu email"
                                className="bg-gray-900 rounded px-5 h-14"
                            />

                            <button
                                disabled={loading}
                                type="submit"
                                className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition disabled:opacity-50">
                                garantir minha vaga
                            </button>
                        </form>

                        <Button type="blue"
                            href=""
                            onClick={() => navigate('/event')}>
                            Pular Cadastro
                        </Button>
                    </div>
                </div>

                <img src={code} alt="imagem de código" />
            </div>
            <Footer />
        </>
    )
}