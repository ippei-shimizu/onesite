import { Fragment } from "react";
import Head from "next/head";
import { getPage, getBlocks, getDataBase } from "libs/notion";
import Link from "next/link";
import Image from "next/image";
import styles from "src/styles/NotionPost.module.css";
import classes from "src/components/Blog/BlogDetail.module.css";

export const Text = ({ text }) => {
  if (!text) {
    return null;
  }
  return text.map((value) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;
    return (
      <>
        <span
          className={[
            bold ? styles.bold : "",
            code ? styles.code : "",
            italic ? styles.italic : "",
            strikethrough ? styles.strikethrough : "",
            underline ? styles.underline : "",
          ].join(" ")}
          style={color !== "default" ? { color } : {}}
        >
          {text.link ? (
            <a href={text.link.url}>{text.content}</a>
          ) : (
            text.content
          )}
        </span>
      </>
    );
  });
};

const renderNestedList = (block) => {
  const { type } = block;
  const value = block[type];
  if (!value) return null;

  const isNumberedList = value.children[0].type === "numbered_list_item";

  if (isNumberedList) {
    return <ol>{value.children.map((block) => renderBlock(block))}</ol>;
  }
  return <ul>{value.children.map((block) => renderBlock(block))}</ul>;
};

const renderBlock = (block) => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case "paragraph":
      return (
        <p className="text-base tracking-wide font-normal mt-4 mb-7 leading-8 dark:text-slate-200">
          <Text text={value.rich_text} />
        </p>
      );
    case "heading_1":
      return (
        <h1>
          <Text text={value.rich_text} />
        </h1>
      );
    case "heading_2":
      return (
        <h2 className="text-contentH2 font-bold tracking-wide mt-14 mb-6 border-b-2 border-slate-200 pb-2 dark:text-slate-200">
          <Text text={value.rich_text} />
        </h2>
      );
    case "heading_3":
      return (
        <h3 className="text-contentH3 font-bold tracking-wide mt-12 mb-5 dark:text-slate-200">
          <Text text={value.rich_text} />
        </h3>
      );
    case "bulleted_list_item":
    case "numbered_list_item":
      return (
        <li className="dark:text-slate-200">
          <Text text={value.rich_text} />
          {!!value.children && renderNestedList(block)}
        </li>
      );
    case "to_do":
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} />{" "}
            <Text text={value.rich_text} />
          </label>
        </div>
      );
    case "toggle":
      return (
        <details>
          <summary>
            <Text text={value.rich_text} />
          </summary>
          {value.children?.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
        </details>
      );
    case "child_page":
      return <p>{value.title}</p>;
    case "image":
      const src =
        value.type === "external" ? value.external.url : value.file.url;
      const caption = value.caption ? value.caption[0]?.plain_text : "";
      return (
        <figure>
          <Image src={src} alt={caption} />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      );
    case "divider":
      return <hr key={id} />;
    case "quote":
      return <blockquote key={id}>{value.text[0].plain_text}</blockquote>;
    case "code":
      return (
        <pre>
          <code key={id}>{value.text[0].plain_text}</code>
        </pre>
      );
    case "file":
      const src_file =
        value.type === "external" ? value.external.url : value.file.url;
      const splitSourceArray = src_file.split("/");
      const lastElementInArray = splitSourceArray[splitSourceArray.length - 1];
      const caption_file = value.caption ? value.caption[0]?.plain_text : "";
      return (
        <figure>
          <div>
            📎{" "}
            <Link href={src_file} passHref>
              {lastElementInArray.split("?")[0]}
            </Link>
          </div>
          {caption_file && <figcaption>{caption_file}</figcaption>}
        </figure>
      );
    case "bookmark":
      const href = value.url;
      return (
        <a href={href} target="_brank">
          {href}
        </a>
      );
    default:
      return `❌ Unsupported block (${
        type === "unsupported" ? "unsupported by Notion API" : type
      })`;
  }
};

export default function Post({ page, blocks }) {
  if (!page || !blocks) {
    return <div />;
  }
  const date = new Date(page.properties.data.date.start).toLocaleString(
    "en-US",
    {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }
  );
  return (
    <>
      <Head>
        <title>{page.properties.title.title[0].plain_text} - Onesite</title>
      </Head>
      <main className="w-11/12 mx-auto">
        <div className="w-11/12 max-w-3xl min-w-48 mx-auto mt-6 bg-white rounded-3xl py-8 px-8 border-2 border-slate-200 xl:min-w-0 xl:max-w-none xl:w-full lg:min-w-0 lg:w-auto md:p-4 dark:bg-slate-800 dark:border-slate-300">
          <div className="text-center">
            <h1
              className={`font-bold tracking-wide mt-2 inline-block text-left ${classes.title} dark:text-slate-200`}
            >
              <Text text={page.properties.title.title} />
            </h1>
            <p className="mt-2 text-slate-600 dark:text-slate-300">{date}</p>
          </div>
          <nav className="mt-4">
            <ol className="flex justify-center text-sky-600 font-bold tracking-wide dark:text-sky-200">
              <li>
                <Link href={`/`} prefetch={false}>
                  <a>
                    Home
                    <span className="mx-2 text-stone-900 dark:text-sky-200">
                      /
                    </span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href={`/diary`}>
                  <a>Diary</a>
                </Link>
              </li>
            </ol>
          </nav>
        </div>
        <section>
          <div className="w-11/12 max-w-3xl min-w-48 mx-auto bg-white mt-3 py-10 px-10 rounded-3xl border-2 border-slate-200 xl:min-w-0 xl:max-w-max xl:w-auto lg:min-w-0 lg:w-auto md:mt-4 md:p-4 dark:bg-slate-800 dark:border-slate-300">
            {blocks.map((block) => (
              <Fragment key={block.id}>{renderBlock(block)}</Fragment>
            ))}
            <Link href="/diary">
              <a className="dark:text-slate-200">← Back</a>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export const databaseId = process.env.NOTION_DIARY_DATABASE_ID;

export const getStaticPaths = async () => {
  const database = await getDataBase(databaseId);
  return {
    paths: database.map((page) => ({ params: { id: page.id } })),
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const page = await getPage(id);
  const blocks = await getBlocks(id);

  // Retrieve block children for nested blocks (one level deep), for example toggle blocks
  // https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
  const childBlocks = await Promise.all(
    blocks
      .filter((block) => block.has_children)
      .map(async (block) => {
        return {
          id: block.id,
          children: await getBlocks(block.id),
        };
      })
  );
  const blocksWithChildren = blocks.map((block) => {
    // Add child blocks if the block should contain children but none exists
    if (block.has_children && !block[block.type].children) {
      block[block.type]["children"] = childBlocks.find(
        (x) => x.id === block.id
      )?.children;
    }
    return block;
  });

  return {
    props: {
      page,
      blocks: blocksWithChildren,
    },
    revalidate: 10,
  };
};
