import Link from "next/link";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import linkedin from './../../../public/icons/linkedin.svg'
import github from './../../../public/icons/github.svg'



export default async function ContactPage() {
  

  return (
    <main className="min-h-screen bg-white relative">
      <NavBar/>
      <div className="flex flex-col px-8 pt-[160px] pb-24 font-display gap-10 lg:pt-0 lg:mt-[150px] lg:px-0 lg:ml-[400px] lg:max-w-[680px]">
        <header className="flex flex-col">
          <h1 className="text-3xl text-[#2E2E2E] lg:text-5xl font-medium flex items-center gap-3">Contato<span className="text-[#FF7038]">.</span></h1>
          <p className="text-lg text-[#393939] pt-6 leading-relaxed">
            Tem uma ideia, um projeto, uma proposta de trabalho <br />
            ou só quer trocar uma ideia? <br />
            Me chama em uma das redes abaixo.
          </p>
        </header>

        <div className="flex flex-col gap-6 text-base text-[#393939] leading-relaxed">
          <p>Estou sempre aberto a novas conexões e conversas em qualquer rede social que você me encontrar, e pessoalmente ainda mais. Sinta-se à vontade para me seguir. Quero dizer, nas redes sociais, pessoalmente não né. Seria estranho.</p>
        </div>

        <div className="flex flex-wrap items-center gap-10 pt-2 pb-8">
          <Link href='https://www.linkedin.com/in/matheus-damiao/' target="_blank" className="flex items-center gap-3 text-sm text-[#393939] hover:text-[#FF7038] transition-colors">
            <Image className="flex-shrink-0 transition-transform duration-200 hover:-translate-y-1" src={linkedin} alt='LinkedIn' width={25} height={25}/>
            <span>LinkedIn</span>
          </Link>
          <Link href='https://github.com/matheusdamiao' target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-[#393939] hover:text-[#FF7038] transition-colors">
            <Image className="flex-shrink-0 transition-transform duration-200 hover:-translate-y-1" src={github} alt='GitHub' width={25} height={25}/>
            <span>GitHub</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
