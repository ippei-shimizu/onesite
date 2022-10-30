export const ProfileCareer = () => {
  const CAREER_ITEMS = [
    {
      days: "2021.10",
      title: "印刷会社へWebコーダーとして入社",
      description:
        "コーダー業務をメインで行うメンバーが私1人だけなので、入社後のWeb制作案件（社内サイトも含む）のコーディングは9割ほど私1人で行っています。Web制作案件は主にWordPressを使用して制作を行っており、WelCartを使用したECサイト制作も行っています。また、デザインツールはIllustrator・Photoshop・XDを使用しています。",
    },
    {
      days: "2021.03",
      title: "職業訓練",
      description:
        "5月〜8月の3ヶ月間、職業訓練にてWeb制作について学び、主にHTML・CSS・WordPress・jQueryについて学習をしました。職業訓練に通う前から独学で学習をしていたこともあり、他の生徒から質問をされることが多く、学んだことのアウトプットができて効率よく理解を深めることができました。",
    },
    {
      days: "2021.03",
      title: "Web制作独学",
      description: `HTML・CSS・Sass・WordPress・jQueryの独学を開始しました。最初は「Progate」と「ドットインストール」で基礎を学び、その後はWeb制作フリーランスのしょーごさんの${(
        <a
          href="https://shogo-log.com/after-progate/"
          rel="noreferrer"
          target="_blank"
          className="border-b border-slate-900 hover:opacity-70 hover:duration-150 dark:border-slate-400"
        >
          「Web制作独学学習ロードマップ」
        </a>
      )}を参考にし、デザインカンプからのコーディング練習を行いました。`,
    },
    {
      days: "2019.04",
      title: "社会人硬式野球",
      description:
        "大学を卒業後は富山県の社会人硬式野球部を持つ企業に入社し、2019年4月〜2020年12月の間介護職に従事しながら、野球に取り組みました。",
    },
  ];
  return (
    <>
      {/* キャリア */}
      <article
        className={`text-center p-8 pb-10 mt-4 bg-gradient-to-tr from-post-bg-t to-post-bg-b rounded-3xl transition duration-100 dark:from-post-bg-t-dark dark:to-post-bg-b-dark md:px-5 md:py-6`}
      >
        <p
          className={`font-bold text-2xl tracking-wide text-slate-900 dark:text-slate-200`}
        >
          Career
        </p>
        <p className="text-xs tracking-wides text-slate-900 dark:text-slate-200">
          経歴
        </p>
        <div className="text-left text-slate-900 mt-7">
          {CAREER_ITEMS.map((career) => {
            return (
              <div
                key={career.days}
                className="flex items-baseline py-8 border-t last:border-b border-sky-100 dark:border-sky-800 md:block"
              >
                <p className="text-lg font-bold flex items-center dark:text-slate-200">
                  {career.days}
                  <span className="block w-3 h-0.5 ml-2 bg-slate-900 dark:bg-slate-200"></span>
                </p>
                <div>
                  <p className="text-base font-bold ml-12 tracking-wider dark:text-slate-200 md:ml-0 md:mt-2">
                    {career.title}
                  </p>
                  <p className="ml-12 text-sm mt-2 leading-6 tracking-wide dark:text-slate-200 md:ml-0">
                    {career.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </article>
    </>
  );
};

export default ProfileCareer;
