import Link from "next/link";
import me from './../../../public/images/me-about.webp'
import memobile from './../../../public/images/me-mobile-home.webp'
import Image from "next/image";
import NavBar from "@/components/NavBar";
import linkedin from './../../../public/icons/linkedin.svg'
import instagram from './../../../public/icons/instagram.svg'
import zap from './../../../public/icons/whatsapp.svg'
import github from './../../../public/icons/github.svg'



export default async function AboutPage() {
  

  return (
    <main className="flex bg-white min-h-screen flex-col justify-between  relative">
        <NavBar/>
       <Image src={me} width={564} height={1314.52} alt='matheus looking at the horizon'  className="hidden lg:block fixed h-screen object-cover left-[-211px] top-0 "/>
       <Image src={memobile} width={827} height={342.99} alt='matheus smiling to the camera' className="w-full absolute h-[300px] object-cover object-[0px_0px] sm:object-center top-0 left-0 right-0 block lg:hidden brightness-125"/>
      <div className="flex flex-col lg:ml-[400px]  lg:mt-[150px] px-8 mt-[300px] py-6  font-display gap-8 lg:gap-10 lg:max-w-[550px]">
        <div className="flex flex-col">
          <h1 className="text-3xl text-[#2E2E2E] lg:text-5xl font-medium flex items-center gap-3 pt-3">Sobre mim<span className="text-[#FF7038]">.</span></h1>
          <p className="text-lg text-[#393939] pt-6">
          O resumo você já leu na primeira página. <br />
           Agora vamos ao que interessa: <br />
          Eu torço pro Flamengo.
          </p>
        </div>
        <div className="flex flex-col">
         
        </div>
        <div className="flex flex-col lg:pt-[20px] gap-10 text-base text-[#393939]">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl text-[#393939] font-medium">Agora é sério</h3>
            <p>Meu nome é Matheus Oliveira Damião, tenho 31 anos,  nasci em Florianópolis mas me sinto nativo é do Rio de Janeiro, onde resido há mais de 10 anos. </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-medium">Da Letras à Programação</h3>
            <p>Vim pras terras cariocas pra cursar Letras na UFRJ lá em 2011, lugar que me formou professor e me introduziu ao amor pelo ensino, de inglês em alguns (na maioria) dias e de grego antigo em outros. Na graduação eu tive a oportunidade de participar de muitos grupos e laboratórios de pesquisa, mas meu maior fascínio foi estudando a antiguidade, e foi por causa dela que segui para o mestrado em filosofia antiga e atualmente estou finalizando o  doutorado.  </p>
            <p>No começo do meu doutorado, depois de já quase 10 anos de sala de aula, comecei a sentir que eu precisava aprender outro ofício. A cansativa e exigente vida de professor que levava me esgotou física e emocionalmente, e mesmo bem qualificado, pouco espaço no mercado de trabalho eu tinha. </p>
            <p>Decidi que iria embarcar em uma nova profissão e foi assim que eu encontrei a programação. Pra quem já amava o estudo de linguagem, não foi lá muito dificil de não se apaixonar pelas abstrações das linguagens de programação, ainda mais quando com elas, você não só fala ou escreve, mas você de fato constrói tecnologias que podem impactar e interagir com a vida de milhões de pessoas. Passei a me dividir entre dar aula e fazer meus primeiros projetos com programação, até que no final de 2022 oficialmente saí da sala de aula e passei a trabalhar full time como desenvolvedor. </p>
            <p>Atualmente trabalho para uma empresa de software de São Paulo e trabalho para meus próprios clientes criando soluções digitais que impulsionem seus negócios na internet. </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold">&quot;Para de falar de trabalho, Matheus&quot;</h3>
            <p>Desde 2021, eu moro em Niterói, essa cidade maravilhosa que me deu de presente minha noiva, Luana, com quem há 8 anos compartilho meus dias. <br /> Moramos com nossos dois cachorros, Eva e Franz, dois vira-latas amorosamente encapetados, que proporcionam (além de amor) muita gargalhada e agitação no home office. </p>
            Eu amo dar uma corrida na praia; adoro passar horas lendo, no sofá, no sol ou em qualquer lugar, na real; costumava tocar violão e trompete, mas confesso que estou bem enferrujado; sempre amei muito praticar esportes (nerd esportista é raro né), atualmente mais assisto do que jogo, mas faz parte da vida. 
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold">Só aceito se deixar depoimento</h3>
            <p> Estou sempre aberto a novas conexões e conversas em qualquer rede social que você me encontrar, e pessoalmente ainda mais. Sinta-se à vontade para me seguir. Quero dizer, nas redes sociais, pessoalmente não né. Seria estranho. </p>
            <p>Se quiser fazer um projeto web comigo, venha para este outro site aqui. <br />  Agora, se você quer me fazer uma proposta de trabalho, mais fácil você vir aqui. <br /> <br /> Mas se você só quiser trocar uma ideia, mais fácil me chamar no zap e a gente marca no bar. Com sinuca de preferência.</p>
          </div>

          <div className="flex justify-between pr-20  ml-0 px-8  py-10 lg:py-12">
            <div className="flex gap-10 pb-8 lg:pb-0">
              <Link href='https://www.linkedin.com/in/matheus-damiao/' target="_blank"><Image className="flex-shrink-0" src={linkedin} alt='linkedin' width={25} height={25}/></Link>
              <Image className="flex-shrink-0" src={instagram} alt='linkedin' width={25} height={25}/>
              <Image  className="flex-shrink-0" src={github} alt='linkedin' width={25} height={25}/>
              <Image className="flex-shrink-0" src={zap} alt='linkedin' width={25} height={25}/>
            </div>
          </div>

        </div>

       
        
      </div>
     

      
      
    </main>
  );
}