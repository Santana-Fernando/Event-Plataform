import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";



export function Subscribe() {
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const [createSubscriber, { loading }] = useCreateSubscriberMutation()

    async function handleSubscribe (event: FormEvent) {
        event.preventDefault()
        
        await createSubscriber({
            variables: {
                name,
                email
            }
        })

        await navigate('/event');
    }

    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="w-full max-w-[1100px] items-center justify-between mt-20 mx-auto md:flex sm:block sm:mt-10">
                <div className="max-w-[640px] sm:items-center sm:m-6">
                    <div className="sm:flex sm:items-center sm:justify-center">
                        <Logo/>
                    </div>
                    
                    <h1 className="mt-8 text-[2.5rem] leading-tight md:text-left sm:text-center">
                        Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
                    </h1>
                    <p className="mt-4 text-gray-200 leading-relaxed md:text-left sm:text-center">
                        Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>
                </div>

                <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                    <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

                    <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                        <input 
                            className="bg-gray-900 rounded px-5 h-14"
                            type="text"
                            onChange={event => setName(event.target.value)}
                            placeholder="Seu nome completo"
                        />
                        <input 
                            className="bg-gray-900 rounded px-5 h-14"
                            type="email"
                            onChange={event => setEmail(event.target.value)}
                            placeholder="Digite seu e-mail"
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-4 bg-green-500 uppercase py-4 rounded font-boldtext-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                        >
                            Garantir minha vaga
                        </button>
                    </form>
                </div>
            </div>

            
            <img src="/src/assets/code-mockup.png" className="mt-4" alt="" />
        </div>
    )
}