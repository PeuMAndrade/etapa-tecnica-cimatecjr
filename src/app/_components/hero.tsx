import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import logoImg from '../../../public/img_logo.png'
import Image from 'next/image'
export default function Hero(){
    return(
        <section id="home" className="text-white relative overflow-hidden pb-3 bg-[linear-gradient(90deg,_rgba(4,4,42,1)_40%,_rgba(28,255,0,1)_86%,_rgba(249,255,0,1)_100%)]">
            <div>
                <Image 
                    src={logoImg}
                    alt='Foto da logo'
                    fill
                    sizes='100vw'
                    priority
                    className='object-cover opacity-40 lg:hidden'
                    
                />
                <div className='absolute inset-0 bg-black opacity-40 md:hidden'></div>
            </div>

            <div className='container mx-auto pt-16 pb-16 md:pb-0 px-4 relative lg:flex lg:justify-center'>
                <article className='grid grid-cols-1 lg:grid-cols-2 lg:pt-8 lg:pb-8 w-[70vw] mx-auto'>
                    <div className='space-y-6 lg:pl-8'>
                        <h1 className="text-3xl md:text-4xl lg: text-5xl font-bold leading-10">
                        Chame os amigos.<br/> Escolha o campo.<br/> Deixe o resto com a gente.
                        </h1>
                        <p className="lg:text-lg">
                        Estrutura profissional, fácil de reservar e espaço garantido para o seu jogo.
                        </p>
                        <div className='group'>
                            <a 
                            href="https://wa.me/5571994020221"
                            className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2 group-hover:scale-105"
                            >
                            <WhatsappLogo className='w-5 h-5 group-hover:scale-105'/>
                            Reservar horário
                            </a>
                        </div>
                    </div>
                    <div className="hidden md:block h-full relative">
                        <Image 
                            src={logoImg} 
                            alt='Foto da logo'
                            className='object-contain'
                            fill
                            sizes="(max-width: 768px) 0vw, 100vw"
                            quality={100}
                            priority
                        />
                    </div>
                </article>
            </div>
        </section>
    )
}