import { getDataBase } from "libs/notion";
import Head from "next/head";
import DiaryPostsLists from "src/components/Diary/DiaryPostsLists";

export const databaseId = process.env.NOTION_DIARY_DATABASE_ID;

export default function DiaryLists(props) {
  const posts = props.posts;
  return (
    <>
      <Head>
        <title>Diary 日々学んだことについて - Onesite</title>
        <meta
          name="description"
          content="フロントエンドやWeb制作など日々学んだことを分かりやすくアウトプットしていきます。"
        />
      </Head>
      <DiaryPostsLists props={posts} />
    </>
  );
}

//ISRの追加
export const getStaticProps = async () => {
  const database = await getDataBase(databaseId);
  return {
    props: {
      posts: database,
    },
    revalidate: 10,
  };
};
