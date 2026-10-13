import { type SanityDocument } from "next-sanity";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";

import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client, sanityFetch } from "@/sanity/client";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import NavBar from "@/components/NavBar";

const EVENT_QUERY = `*[
    _type == "post" &&
    (slug.current == $slug || slug == $slug)
  ][0]{
    ...,
    author->{
      name
    }
}`;

const { projectId, dataset } = client.config();

const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-lg leading-relaxed text-[#393939] mb-6 whitespace-pre-wrap">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#FF7038] pl-6 my-10 italic text-xl text-[#2E2E2E]">
        {children}
      </blockquote>
    ),
    h1: ({ children }) => (
      <h2 className="text-2xl lg:text-3xl font-medium text-[#2E2E2E] mt-12 mb-4">
        {children}
      </h2>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl lg:text-3xl font-medium text-[#2E2E2E] mt-12 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl lg:text-2xl font-medium text-[#2E2E2E] mt-10 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg lg:text-xl font-medium text-[#2E2E2E] mt-8 mb-3">
        {children}
      </h4>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#FF7038] underline decoration-[#fcc5af] decoration-2 underline-offset-4 hover:decoration-[#FF7038] transition-colors"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong className="font-bold text-[#2E2E2E]">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-[#393939]">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 mb-6 space-y-2 text-lg text-[#393939]">
        {children}
      </ol>
    ),
  },
  listItem: ({ children }) => (
    <li className="leading-relaxed pl-1">{children}</li>
  ),
};

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

const getReadTime = (blocks: any[] = []) => {
  const text = blocks
    .map((block) => block?.children?.map((child: any) => child?.text ?? "").join("") ?? "")
    .join(" ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
};

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await sanityFetch<SanityDocument>({
    query: EVENT_QUERY,
    params: { slug: params.slug },
  });

  if (!post) {
    notFound();
  }

  const { title, author, image, date, post: postContent, body, description, subject, tags } = post;

  const coverImageUrl = image
    ? urlFor(image)?.width(1200).height(630).url()
    : null;

  const portableTextValue = postContent ?? body ?? [];
  const formattedDate = formatDate(date);
  const readTime = getReadTime(portableTextValue);
  const topics: string[] = subject?.length ? subject : tags ?? [];

  return (
    <main className="min-h-screen bg-white relative">
      <NavBar />
      <article className="font-display px-8 pt-[140px] pb-24 lg:pt-0 lg:mt-[150px] lg:px-0 lg:ml-[400px] lg:max-w-[680px]">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-[#474747] hover:text-[#FF7038] transition-colors mb-10"
        >
          <span aria-hidden>←</span> Voltar para o blog
        </Link>

        {topics.length ? (
          <div className="flex flex-wrap gap-2 mb-6">
            {topics.map((topic: string) => (
              <span
                key={topic}
                className="text-xs text-[#FF7038] bg-[#FFF1EB] border border-[#fcc5af] rounded-full px-3 py-1"
              >
                {topic}
              </span>
            ))}
          </div>
        ) : null}

        <h1 className="text-3xl lg:text-5xl font-medium leading-tight tracking-tight text-[#2E2E2E] mb-6">
          {title}
        </h1>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#474747] mb-10">
          {formattedDate && <time>{formattedDate}</time>}
          {author?.name && (
            <>
              <span className="text-[#fcc5af]" aria-hidden>•</span>
              <span>{author.name}</span>
            </>
          )}
          <span className="text-[#fcc5af]" aria-hidden>•</span>
          <span>{readTime} min de leitura</span>
        </div>

        {description ? (
          <p className="text-xl lg:text-2xl text-[#474747] leading-relaxed mb-10">
            {description}
          </p>
        ) : null}

        {coverImageUrl ? (
          <Image
            src={coverImageUrl}
            alt={title || "Imagem de capa do post"}
            width={1200}
            height={630}
            priority
            className="w-full h-auto rounded-2xl object-cover mb-12"
          />
        ) : null}

        <div>
          <PortableText value={portableTextValue} components={portableTextComponents} />
        </div>

        <div className="mt-16 pt-8 border-t border-[#fcc5af]">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#FF7038] hover:gap-3 transition-all"
          >
            <span aria-hidden>←</span> Ver todos os posts
          </Link>
        </div>
      </article>
    </main>
  );
}
