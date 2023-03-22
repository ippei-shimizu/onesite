import Head from "next/head";
import ContactContent from "src/components/Contact/ContactContent";

export default function ContactForm() {
  return (
    <>
      <Head>
        <title>Contact - お問い合わせフォーム</title>
        <meta
          name="description"
          content="山梨県でWebコーダーとしてWeb制作に携わっています。フロントエンド開発やWeb制作について学んだことをアウトプットしていきます。"
        />
      </Head>
      <ContactContent />
    </>
  );
}
