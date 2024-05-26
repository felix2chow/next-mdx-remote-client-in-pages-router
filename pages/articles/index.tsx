import Link from "next/link";
import Head from "next/head";

import type { Post } from "@/types";
import { getPostInformation, getMarkdownFiles } from "@/utils/file";

type Props = { posts: Post[] };

export default function DynamicBlog({ posts }: Props) {
  return (
    <>
      <Head>
        <title>Articles</title>
      </Head>
      <div>
        <p>
          <strong>Welcome to articles</strong>
        </p>
        <p>
          This part of the application is designed for understanding how to
          implement a blog application with
          <strong> next-mdx-remote-client</strong>.
        </p>
        <p>
          Visit for&nbsp;
          <a
            href="https://github.com/talatkuyuk/next-mdx-remote-client-in-pages-router"
            target="_blank"
          >
            source code
          </a>{" "}
          on github.
        </p>
        <div>
          In the github repository, you can see how to
          <ul>
            <li>
              implement listing the articles using <code>getStaticPaths</code>{" "}
              and <code>getStaticProps</code>,
            </li>
            <li>
              get <code>frontmatters</code> without compiling the souce while
              listing the articles,
            </li>
            <li>
              implement a simple but powerful&nbsp;
              <code>table of content (TOC)</code>,
            </li>
            <li>
              implement automatic MDX <code>syntax error</code> handling,
            </li>
            <li>
              provide options to <code>next-mdx-remote-client</code>.
            </li>
          </ul>
        </div>
        <p>
          For simpicity and demonstration purpose, I created the articles
          via&nbsp;
          <code>chatGPT</code>.
        </p>
        <ul className="articles">
          {posts.map((post) => (
            <li key={post.title}>
              <strong>
                <Link href={`/articles/${post.slug}`}>{post.title}</Link>
              </strong>
              <p>
                <span>{String(post.date)}, </span>
                <span>
                  written by <strong>{post.author}</strong>
                </span>
              </p>
              <p>{post.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export const getStaticProps = () => {
  const files = getMarkdownFiles();

  const article = (f: string) => f.includes("article");

  // "getPostInformation" uses "getFrontmatter" utility without compiling the source !
  const posts = files.filter(article).map(getPostInformation);

  return { props: { posts } };
};
