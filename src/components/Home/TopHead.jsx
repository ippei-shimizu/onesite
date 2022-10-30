import Head from "next/head";
import { API_URL_M_CMS } from "src/utils/const";

export const TopHead = () => {
  return (
    <>
      <Head>
        <title>Onesite - フロントエンド開発の技術アウトプットブログ</title>
        <meta name="description" content="山梨県でWebコーダーとしてWeb制作に携わっています。フロントエンド開発やWeb制作について学んだことをアウトプットしていきます。" />
        <meta property="og:url" content={`${API_URL_M_CMS}`} />
        <meta
          property="og:title"
          content="Onesite - フロントエンドの技術アウトプットブログ"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://onesite-rouge.vercel.app/onesite-ogp.jpg"
        />
      </Head>
    </>
  );
};

export default TopHead;
