import { type SanityDocument } from "next-sanity";
import {PortableText} from '@portabletext/react'
import imageUrlBuilder from "@sanity/image-url";

import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client, sanityFetch } from "@/sanity/client";
import Link from "next/link";
import Image from "next/image";

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


export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await sanityFetch<SanityDocument>({
    query: EVENT_QUERY,
    params: {slug: params.slug},
  });

  const {
    title,
    author,
    image,
    date,
    post: postContent,
    body,
  } = post;

  const eventImageUrl = image
    ? urlFor(image)?.width(550).height(310).url()
    : null;

  const portableTextValue = postContent ?? body;



  return (
    <main className="container mx-auto grid gap-12 p-12">
      <div className="mb-4">
        <Link href="/blog">← Voltar</Link>
      </div>
      <div className="grid items-top gap-12 sm:grid-cols-2">
        <Image
          src={eventImageUrl || "https://via.placeholder.com/550x310"}
          alt={title || "Post"}
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          height="310"
          width="550"
        />
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-4">
           
            {title ? (
              <h1 className="text-4xl font-bold tracking-tighter mb-8">
                {title}
              </h1>
            ) : null}
            {date && <p>{date}</p> }
            {author && <p>{author.name}</p> }
        </div>
        </div>
        <PortableText value={portableTextValue} />
      </div>
    </main>
  );
}