import Link from "next/link";
import me from './../../public/images/me-home.webp'
import memobile from './../../public/images/me-mobile-home.webp'
import hand from './../../public/icons/hand.svg'
import Image from "next/image";
import NavBar from "@/components/NavBar";
import linkedin from './../../public/icons/linkedin.svg'
import instagram from './../../public/icons/instagram.svg'
import zap from './../../public/icons/whatsapp.svg'
import github from './../../public/icons/github.svg'



export default async function IndexPage() {
  

  return (
    <main className="flex bg-white min-h-screen flex-col justify-between  relative">
        <NavBar/>
       <Image src={me} width={564} height={1314.52} alt='matheus looking at the horizon'  className="hidden lg:block absolute h-screen object-cover left-[-211px] top-0 "/>
       <Image src={memobile} width={827} height={342.99} alt='matheus smiling to the camera' className="w-full absolute h-[300px] object-cover object-[0px_0px] sm:object-center top-0 left-0 right-0 block lg:hidden brightness-125"/>
      <div className="flex flex-col lg:ml-[400px]  lg:mt-[150px] px-8 mt-[300px] py-6  font-display gap-8 lg:gap-10 lg:max-w-[546px]">
        <div className="flex flex-col">
          <h1 className="text-3xl text-[#2E2E2E] lg:text-5xl font-medium flex items-center gap-3">Olá!
            <Image src={hand} width={57} height={55} alt='hand waving icon'  className="w-[40px] lg:w-[55px] pb-4 lg:pb-6 rotate-hand"/>
          </h1>
          <h2 className="text-lg text-[#2E2E2E] lg:text-2xl">Meu nome é Matheus Damião. </h2>
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
     

      <div className="flex justify-between pr-20 lg:ml-[400px] ml-0 px-8  py-10 lg:py-12">
          <p className="lg:static fixed w-full lg:w-fit left-0 text-center lg:text-left px-6 lg:px-0 py-2 text-xs lg:text-base bottom-0 bg-black text-white lg:bg-transparent lg:text-black">Quer fazer um projeto web comigo? <a href="">Acesse aqui.</a></p>
          <div className="flex gap-10 pb-8 lg:pb-0">
            <Image className="flex-shrink-0" src={linkedin} alt='linkedin' width={25} height={25}/>
            <Image className="flex-shrink-0" src={instagram} alt='linkedin' width={25} height={25}/>
            <Image  className="flex-shrink-0" src={github} alt='linkedin' width={25} height={25}/>
            <Image className="flex-shrink-0" src={zap} alt='linkedin' width={25} height={25}/>
          </div>
      </div>
      
    </main>
  );
}