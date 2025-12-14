import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { generatePostMeta } from "@/lib/seo";
import { Mdx } from "@/lib/mdx";

export async function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: any) {
  const post = allPosts.find((p) => p.slug === params.slug);
  if (!post) return {};

  return generatePostMeta(post);
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <div className="px-6 pt-40 pb-20 max-w-3xl mx-auto">
      <h1 className="font-grotesk text-5xl mb-6">{post.title}</h1>
      <p className="text-gray-500 mb-10">{post.excerpt}</p>
      <Mdx code={post.body.code} />
    </div>
  );
}
