import Image from "next/image";

export const ProfileAbout = () => {
  return (
    <>
      {/* 自己紹介 */}
      <article
        className={`text-center py-9 px-8 mt-4 bg-gradient-to-tr from-post-bg-t to-post-bg-b rounded-3xl transition duration-100 dark:from-post-bg-t-dark dark:to-post-bg-b-dark md:px-5 md:py-6`}
      >
        <Image src="/profile.png" alt="清水一平" width={80} height={80} />
        <h2
          className={`font-bold text-2xl tracking-widest mt-2 text-slate-900 dark:text-slate-200`}
        >
          清水 一平
        </h2>
        <div className="text-center">
          <h3
            className={`font-bold text-slate-900 text-sm tracking-wider inline-block text-left dark:text-slate-100`}
          >
            Ippei Shimizu
          </h3>
          <p className="text-sm text-slate-700 tracking-wide mt-1 dark:text-slate-300">
            Web Coder
            <span className="text-slate-500 text-xs px-0.5 dark:text-slate-400">
              /
            </span>
            Yamanashi
            <span className="text-slate-500 text-xs px-0.5">/</span>Born in 1996
          </p>
        </div>
        <div className="text-left text-base mt-6 leading-7 tracking-wide text-slate-900 dark:text-slate-200">
          <p>
            小学校〜社会人まで野球を16年間続けたのち、独学と職業訓練校でWeb制作を学び、現在は山梨県の印刷会社でWeb事業部でコーダーとして働いています。主にお客様から受注したWebサイトの仕様設計とコーディング、社内サイトの制作をメインに行っています。また、Webデザインも少しやっています。
          </p>
          <p className="my-3">
            元々Web開発には凄く興味があったのと、Web制作に携わっていく中でもっとできることの幅を広げたいと思い、現在はフロントエンド開発の学習を進めています。
          </p>
          <p>
            趣味は写真を撮ることで、早くフルサイズミラーレス一眼を買いたいと日々思い続けています。
          </p>
        </div>
      </article>
    </>
  );
};

export default ProfileAbout;
