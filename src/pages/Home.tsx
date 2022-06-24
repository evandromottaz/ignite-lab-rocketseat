import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";

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
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="w-full max-w-[1100px] flex justify-between mt-20 mx-auto">
                <div className="max-w-[640px] ">
                    <Logo />

                    <h1 className="mt-8 text-[2.5rem] leading-tight">
                        Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React JS</strong>
                    </h1>

                    <p className="mt-4 text-gray-200 leading-relaxed">
                        Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>
                </div>

                <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                    <strong className="text-2xl mb-6 block">
                        Inscreva-se gratuitamente
                    </strong>

                    <form
                        onSubmit={handleSubmit} className="flex flex-col w-full gap-2">
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
                </div>
            </div>

            <img src="/src/assets/print-home.png" alt="imagem de código" />
        </div>
    )
}