import Link from "next/link";
import me from './../../../public/images/me-home.webp'
import memobile from './../../../public/images/me-mobile-home.webp'
import Image from "next/image";
import NavBar from "@/components/NavBar";




export default async function ContactPage() {
  

  return (
    <main className="flex bg-gray-100 min-h-screen flex-col justify-between  relative">
        <NavBar/>
       <Image src={me} width={564} height={1314.52} alt='matheus looking at the horizon'  className="hidden lg:block absolute h-screen object-cover left-[-211px] top-0 "/>
       <Image src={memobile} width={827} height={342.99} alt='matheus smiling to the camera' className="w-full absolute h-[300px] object-cover object-[0px_0px] sm:object-center top-0 left-0 right-0 block lg:hidden brightness-125"/>
      <div className="flex flex-col lg:ml-[400px]  lg:mt-[150px] px-8 mt-[300px] py-6  font-display gap-8 lg:gap-10 lg:max-w-[546px]">
        <div className="flex flex-col">
          <h1 className="text-3xl text-[#2E2E2E] lg:text-5xl font-medium flex items-center gap-3">Olá!
    
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
     

     
      
    </main>
  );
}