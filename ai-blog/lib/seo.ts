import { Post } from "contentlayer/generated";

export function generatePostMeta(post: Post) {
  const url = `https://yourdomain.com/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url,
      images: [
        {
          url: post.cover || "/default-og.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.cover || "/default-og.jpg"],
    },
  };
}
