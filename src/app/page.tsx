import Link from "next/link";
import memobile from './../../public/images/eu-novo.png'
import hand from './../../public/icons/hand.svg'
import Image from "next/image";
import NavBar from "@/components/NavBar";
import linkedin from './../../public/icons/linkedin.svg'
import logobg from './../../public/images/logoWhite.svg'
import zap from './../../public/icons/whatsapp.svg'
import github from './../../public/icons/github.svg'



export default async function IndexPage() {
  

  return (
    <main className="flex bg-white min-h-screen flex-col justify-center relative overflow-hidden">
        <NavBar/>
       {/* {/* <Image src={me} width={564} height={1314.52} alt='matheus looking at the horizon'  className="hidden lg:block absolute h-screen object-cover left-[-211px] top-0 "/> */}
       <Image src={logobg} width={949.89} height={568.31} alt='logo' className="w-full absolute max-w-[700px] top-[25svh] right-0 overflow-hidden lg:block hidden"/> 
      <div className="flex flex-col px-8  py-6  lg:pl-12 font-display gap-8 lg:gap-10 lg:max-w-[700px]">
        <div className="flex gap-10">
          <Image src={memobile} width={1465} height={1465} alt='matheus smiling to the camera' className="flex-grow-0 lg:w-[150px] lg:h-[150px] flex-shrink-0 h-min" /> 
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl text-[#2E2E2E] lg:text-5xl font-medium flex items-center gap-3">Olá!
              <Image src={hand} width={57} height={55} alt='hand waving icon'  className="w-[40px] lg:w-[55px] pb-4 lg:pb-6 rotate-hand"/>
            </h1>
            <h2 className="text-lg text-[#2E2E2E] lg:text-2xl">Meu nome é Matheus Damião. </h2>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="text-base text-[#393939]">
          Sou programador, designer, professor, filósofo nas horas (des)necessárias, pai de pet e, felizmente, mais um monte de coisas. 
          Desde 1993 evoluindo pra ser só o suficiente
          </p>
        </div>
        <div className="flex flex-col text-base text-[#393939]">
          <p>Conto mais sobre mim <Link href='/about'> aqui</Link></p>
          <p>e escrevo algumas coisas<Link href='/blog'> aqui</Link>.</p>
        </div>
        
      </div>
     

      <div className="flex justify-center w-full absolute px-8 lg:pl-12 py-4 bottom-0 left-0">
          <div className="flex gap-10">
            <Image className="flex-shrink-0 cursor-pointer" src={linkedin} alt='linkedin' width={25} height={25}/>
            <Image  className="flex-shrink-0 cursor-pointer" src={github} alt='linkedin' width={25} height={25}/>
            <Image className="flex-shrink-0 cursor-pointer" src={zap} alt='linkedin' width={25} height={25}/>
          </div>
      </div>
      
    </main>
  );
}