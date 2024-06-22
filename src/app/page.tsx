import Link from "next/link";
import { SanityDocument } from "next-sanity";
import { sanityFetch } from "@/sanity/client";

const POSTS_QUERY = `*[_type == "post"]{_id, name, slug, date, subject}|order(date desc)`;

export default async function IndexPage() {
  const posts = await sanityFetch<SanityDocument[]>({query: POSTS_QUERY});

  return (
    <main className="flex bg-gray-100 min-h-screen flex-col p-24 gap-12">
      <h1 className="text-4xl font-bold tracking-tighter">
        Posts
      </h1>
      <ul className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {posts.map((post) => (
          <li
            className="bg-white p-4 rounded-lg"
            key={post._id}
          >
            <Link
              className="hover:underline"
              href={`/post/${post.slug}`}
            >
              <h2 className="text-xl font-semibold">{post?.name}</h2>
              <p className="text-gray-500">
                {new Date(post?.date).toLocaleDateString()}
              </p>
              <small>{post?.subject}</small>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}