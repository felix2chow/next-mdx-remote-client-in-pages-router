import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <main>
        <p>
          This is a <strong>blog application</strong> using{" "}
          <strong>next-mdx-remote-client</strong> in{" "}
          <code>Next.js pages router</code>.
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
        <p>
          The <code>next-mdx-remote-client</code> is a wrapper of the{" "}
          <code>@mdx-js/mdx</code> in order to load MDX content. You can reach
          the package on{" "}
          <a
            href="https://www.npmjs.com/package/next-mdx-remote-client"
            target="_blank"
          >
            npm
          </a>{" "}
          or visit the repository on{" "}
          <a
            href="https://github.com/ipikuka/next-mdx-remote-client"
            target="_blank"
          >
            github
          </a>
          .
        </p>
      </main>
    </>
  );
}
