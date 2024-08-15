import Link from "next/link";
import { SanityDocument } from "next-sanity";
import { sanityFetch } from "@/sanity/client";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import me from './../../../public/images/me-blog.webp'
import memobile from './../../../public/images/me-mobile-home.webp'


const POSTS_QUERY = `*[_type == "post"]{_id, title, slug, date, description, subject, tags}|order(date desc)`;

export default async function IndexPage() {
  const posts = await sanityFetch<SanityDocument[]>({query: POSTS_QUERY});
  console.log(posts);

  return (
    <main className="flex bg-white min-h-screen flex-col justify-between  relative">
    <NavBar/>
   <Image src={me} width={564} height={1314.52} alt='matheus looking at the horizon'  className="hidden lg:block absolute h-screen object-cover left-[-211px] top-0 "/>
   <Image src={memobile} width={827} height={342.99} alt='matheus smiling to the camera' className="w-full absolute h-[300px] object-cover object-[0px_0px] sm:object-center top-0 left-0 right-0 block lg:hidden brightness-125"/>
  <div className="flex flex-col lg:ml-[400px]  lg:mt-[150px] px-8 mt-[300px] py-6  font-display gap-8 lg:gap-10 ">
        <div className="flex flex-col lg:max-w-[546px]">
          <h1 className="text-3xl text-[#2E2E2E] lg:text-5xl font-medium flex items-center gap-3 pt-3">Escrever<span className="text-[#FF7038]">.</span></h1>
          <p className="text-lg text-[#393939] pt-6">
          Um espaço para compartilhar ideias, <br /> aprendizados e reflexões.
         
          </p>
        </div>
    <div className="flex flex-col">
    <ul className="flex flex-col gap-[20px] lg:gap-[50px]">
        {posts.map((post) => (
          <li
            className="bg-transparent p-6 lg:p-8 max-w-[650px] lg:hover:max-w-[700px] transition-all w-full border-[#fcc5af] border-[0.5px] rounded-[13px]"
            key={post._id}
          >
            
            <Link
              className="gap-4 flex flex-col"
              href={`/blog/post/${post.slug}`}
            >
              <div className="flex justify-between items-center" >
                 <h2 className="text-base lg:text-xl text-[#393939] font-medium ">{post?.title}</h2>
                  <p className="text-gray-500 text-xs">{new Date(post?.date).toLocaleDateString("pt-BR")}</p>
              </div>
              <div className="flex gap-4">
                {post?.tags && post?.tags.map((tag: any)=>{
                return (
                <small key={tag}>#{tag}</small>
              )
              })}
              </div>
              <p className="text-[#474747] lg:text-base text-xs max-w-[550px] w-full">{post?.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    
    
  </div>
 
  
  
 
  
</main>


      
    
  );
}