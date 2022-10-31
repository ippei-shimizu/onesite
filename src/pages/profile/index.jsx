import Head from "next/head";
import ProfileContent from "src/components/Profile/ProfileContent";

export default function Profile() {
  return (
    <>
      <Head>
        <title>Profile - 清水一平 Ippei Shimizu</title>
        <meta
          name="description"
          content="山梨県でWebコーダーとしてWeb制作に携わっています。フロントエンド開発やWeb制作について学んだことをアウトプットしていきます。"
        />
      </Head>
      <ProfileContent />
    </>
  );
}
