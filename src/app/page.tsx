import Link from "next/link";
import memobile from './../../public/images/eu-novo.png'
import hand from './../../public/icons/hand.svg'
import Image from "next/image";
import NavBar from "@/components/NavBar";
import linkedin from './../../public/icons/linkedin.svg'
import logobg from './../../public/images/logoWhite.svg'
import github from './../../public/icons/github.svg'



export default async function IndexPage() {
  

  return (
    <main className="flex bg-white min-h-screen flex-col justify-center relative overflow-hidden px-8 pt-[120px] pb-[140px] lg:px-0 lg:pt-0 lg:pb-0">
        <NavBar/>
       {/* {/* <Image src={me} width={564} height={1314.52} alt='matheus looking at the horizon'  className="hidden lg:block absolute h-screen object-cover left-[-211px] top-0 "/> */}
       <Image
         src={logobg}
         width={949.89}
         height={568.31}
         alt=''
         aria-hidden
         className="w-full absolute max-w-[700px] lg:max-w-[600px] top-[25svh] right-0 overflow-hidden pointer-events-none select-none lg:block hidden"
       />
      <div className="flex flex-col py-6 lg:pl-12 font-display gap-8 lg:gap-10 lg:max-w-[700px]">
        <div className="flex items-center gap-5 lg:gap-10">
          <Image
            src={memobile}
            width={1465}
            height={1465}
            alt='Matheus sorrindo para a câmera'
            priority
            className="flex-grow-0 flex-shrink-0 object-cover rounded-full ring-2 ring-[#fcc5af] w-[88px] h-[88px] sm:w-[112px] sm:h-[112px] lg:w-[150px] lg:h-[150px]"
          />
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl text-[#2E2E2E] lg:text-5xl font-medium flex items-center gap-3">Olá!
              <Image src={hand} width={57} height={55} alt='ícone de mão acenando'  className="w-[36px] lg:w-[55px] pb-4 lg:pb-6 rotate-hand"/>
            </h1>
            <h2 className="text-lg text-[#2E2E2E] lg:text-2xl">Meu nome é Matheus Damião. </h2>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="text-base text-[#393939] leading-relaxed max-w-full lg:max-w-[560px]">
          Sou programador, filósofo nas horas (des)necessárias, pai de pet e, felizmente, mais um monte de coisas. 
          Desde 1993 evoluindo pra ser só o suficiente
          </p>
        </div>
        <div className="flex flex-col text-base text-[#393939] leading-relaxed">
          <p>Conto mais sobre mim <Link href='/about' className="text-[#FF7038] font-medium underline decoration-[#fcc5af] decoration-2 underline-offset-4 hover:decoration-[#FF7038] transition-colors">aqui</Link></p>
          <p>e escrevo algumas coisas <Link href='/blog' className="text-[#FF7038] font-medium underline decoration-[#fcc5af] decoration-2 underline-offset-4 hover:decoration-[#FF7038] transition-colors">aqui</Link>.</p>
        </div>
        
      </div>
     

      <div className="flex justify-center w-full absolute px-8 lg:pl-12 py-6 bottom-0 left-0">
          <div className="flex gap-10">
            <Link href='https://www.linkedin.com/in/matheus-damiao/' target="_blank" rel="noopener noreferrer"><Image className="flex-shrink-0 transition-transform duration-200 hover:-translate-y-1" src={linkedin} alt='LinkedIn' width={25} height={25}/></Link>
            <Link href='https://github.com/matheusdamiao' target="_blank" rel="noopener noreferrer"><Image className="flex-shrink-0 transition-transform duration-200 hover:-translate-y-1" src={github} alt='GitHub' width={25} height={25}/></Link>
          </div>
      </div>
      
    </main>
  );
}
