import { useMDXComponent } from "next-contentlayer/hooks";

export function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code);

  return (
    <article className="prose prose-lg max-w-none">
      <Component />
    </article>
  );
}
