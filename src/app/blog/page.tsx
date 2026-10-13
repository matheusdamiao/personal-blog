import Link from "next/link";
import { SanityDocument } from "next-sanity";
import { sanityFetch } from "@/sanity/client";
import NavBar from "@/components/NavBar";

const POSTS_QUERY = `*[_type == "post"]{_id, title, slug, date, description, subject, tags}|order(date desc)`;

const formatDate = (date?: string) => {
  if (!date) return null;
  const parsed = new Date(date);
  return isNaN(parsed.getTime())
    ? null
    : parsed.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
};

export default async function IndexPage() {
  const posts = await sanityFetch<SanityDocument[]>({ query: POSTS_QUERY });

  return (
    <main className="flex bg-white min-h-screen flex-col relative">
      <NavBar />
      <div className="flex flex-col lg:ml-[400px] lg:mt-[150px] px-8 pt-[160px] lg:pt-6 pb-20 font-display gap-10 lg:gap-14 lg:max-w-[720px]">
        <header className="flex flex-col lg:max-w-[546px]">
          <h1 className="text-3xl text-[#2E2E2E] lg:text-5xl font-medium flex items-center gap-3">
            Blog<span className="text-[#FF7038]">.</span>
          </h1>
          <p className="text-lg text-[#393939] pt-6">
            Um espaço para compartilhar ideias, <br />
            aprendizados e reflexões.
          </p>
        </header>

        {posts.length === 0 ? (
          <p className="text-[#474747] text-base">
            Nenhum post por aqui ainda. Volte em breve.
          </p>
        ) : (
          <ul className="flex flex-col gap-6 lg:gap-8">
            {posts.map((post) => {
              const formattedDate = formatDate(post?.date);
              return (
                <li key={post._id}>
                  <Link
                    href={`/blog/post/${post?.slug}`}
                    className="group flex flex-col gap-4 p-6 lg:p-8 w-full max-w-[650px] border-[0.5px] border-[#fcc5af] rounded-[13px] transition-all duration-300 hover:border-[#FF7038] hover:shadow-[0_8px_30px_rgba(255,112,56,0.10)] hover:-translate-y-0.5 lg:hover:max-w-[700px]"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <h2 className="text-base lg:text-xl text-[#2E2E2E] font-medium transition-colors group-hover:text-[#FF7038]">
                        {post?.title}
                      </h2>
                      {formattedDate && (
                        <time className="text-gray-400 text-xs whitespace-nowrap pt-1">
                          {formattedDate}
                        </time>
                      )}
                    </div>

                    {post?.tags?.length ? (
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag: string) => (
                          <span
                            key={tag}
                            className="text-xs text-[#FF7038] bg-[#FFF1EB] border border-[#fcc5af] rounded-full px-3 py-0.5"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    ) : null}

                    <p className="text-[#474747] lg:text-base text-sm max-w-[550px] w-full">
                      {post?.description}
                    </p>

                    <span className="text-sm font-medium text-[#FF7038] flex items-center gap-2">
                      Ler mais
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </main>
  );
}
