export const ProfileCareer = () => {
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
          {/* 2021.10 - */}
          <div className="flex items-baseline pt-8 border-t border-sky-100 dark:border-sky-800">
            <p className="text-lg font-bold flex items-center dark:text-slate-200">
              2021.10
              <span className="block w-3 h-0.5 ml-2 bg-slate-900 dark:bg-slate-200"></span>
            </p>
            <div>
              <p className="text-base font-bold ml-12 tracking-wider dark:text-slate-200">
                印刷会社へWebコーダーとして入社
              </p>
              <p className="ml-12 text-sm mt-2 leading-6 tracking-wide dark:text-slate-200">
                コーダー業務をメインで行うメンバーが私1人だけなので、入社後のWeb制作案件（社内サイトも含む）のコーディングは9割ほど私1人で行っています。Web制作案件は主にWordPressを使用して制作を行っており、WelCartを使用したECサイト制作も行っています。また、デザインツールはIllustrator・Photoshop・XDを使用しています。
              </p>
            </div>
          </div>
          {/* 2021.05 */}
          <div className="flex items-baseline my-8 border-y border-sky-100 py-8 dark:border-sky-800">
            <p className="text-lg font-bold flex items-center dark:text-slate-200">
              2021.05
              <span className="block w-3 h-0.5 ml-2 bg-slate-900 dark:bg-slate-200"></span>
            </p>
            <div>
              <p className="text-base font-bold ml-12 tracking-wider dark:text-slate-200">
                職業訓練
              </p>
              <p className="ml-12 text-sm mt-2 leading-6 tracking-wide dark:text-slate-200">
                5月〜8月の3ヶ月間、職業訓練にてWeb制作について学び、主にHTML・CSS・WordPress・jQueryについて学習をしました。職業訓練に通う前から独学で学習をしていたこともあり、他の生徒から質問をされることが多く、学んだことのアウトプットができて効率よく理解を深めることができました。
              </p>
            </div>
          </div>
          {/* 2021.03 */}
          <div className="flex items-baseline mb-8 border-b border-sky-100 pb-8 dark:border-sky-800">
            <p className="text-lg font-bold flex items-center dark:text-slate-200">
              2021.03
              <span className="block w-3 h-0.5 ml-2 bg-slate-900 dark:bg-slate-200"></span>
            </p>
            <div>
              <p className="text-base font-bold ml-12 tracking-wider dark:text-slate-200">
                Web制作独学
              </p>
              <p className="ml-12 text-sm mt-2 leading-6 tracking-wide dark:text-slate-200">
                HTML・CSS・Sass・WordPress・jQueryの独学を開始しました。最初は「Progate」と「ドットインストール」で基礎を学び、その後はWeb制作フリーランスのしょーごさんの
                <a
                  href="https://shogo-log.com/after-progate/"
                  rel="noreferrer"
                  target="_blank"
                  className="border-b border-slate-900 hover:opacity-70 hover:duration-150 dark:border-slate-400"
                >
                  「Web制作独学学習ロードマップ」
                </a>
                を参考にし、デザインカンプからのコーディング練習を行いました。
              </p>
            </div>
          </div>
          {/* 2019.04 */}
          <div className="flex items-baseline border-b border-sky-100 pb-8 dark:border-sky-800">
            <p className="text-lg font-bold flex items-center dark:text-slate-200">
              2019.04
              <span className="block w-3 h-0.5 ml-2 bg-slate-900 dark:bg-slate-200"></span>
            </p>
            <div>
              <p className="text-base font-bold ml-12 tracking-wider dark:text-slate-200">
                社会人硬式野球
              </p>
              <p className="ml-12 text-sm mt-2 leading-6 tracking-wide dark:text-slate-200">
                大学を卒業後は富山県の社会人硬式野球部を持つ企業に入社し、2019年4月〜2020年12月の間介護職に従事しながら、野球に取り組みました。
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default ProfileCareer;
