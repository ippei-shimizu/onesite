export const ProfileSkills = () => {
  const SKILLS_ITEMS = [
    { skill: "HTML", years: "1年" },
    { skill: "CSS", years: "1年" },
    { skill: "Scss", years: "1年" },
    { skill: "JavaScript", years: "1年（Web制作）" },
    { skill: "jQuery", years: "1年" },
    { skill: "WordPress", years: "1年" },
    { skill: "gulp.js", years: "1年" },
    { skill: "GitHub", years: "6ヶ月（自主制作）" },
    { skill: "React", years: "3ヶ月（自主制作）" },
    { skill: "Next.js", years: "3ヶ月（自主制作）" },
    { skill: "Tailwind CSS", years: "3ヶ月（自主制作）" },
    { skill: "microCMS", years: "3ヶ月（自主制作）" },
    { skill: "Illustrator", years: "1年" },
    { skill: "Photoshop", years: "1年" },
    { skill: "XD", years: "1年" },
    { skill: "Figma", years: "0.5ヶ月（自主制作）" },
  ];
  return (
    <>
      {/*スキル*/}
      <article
        className={`text-center p-8 pb-10 mt-4 bg-gradient-to-tr from-post-bg-t to-post-bg-b rounded-3xl transition duration-100 dark:from-post-bg-t-dark dark:to-post-bg-b-dark md:px-5 md:py-6`}
      >
        <p
          className={`font-bold text-2xl tracking-wide text-slate-900 dark:text-slate-200`}
        >
          Skills
        </p>
        <p className="text-xs tracking-wides text-slate-900 dark:text-slate-200">
          技術
        </p>
        <div className="mt-7 grid grid-cols-2 gap-8 md:grid-cols-1">
          {SKILLS_ITEMS.map((skills) => {
            return (
              <div
                key={skills.skill}
                className="flex justify-between items-center border-y border-sky-100 py-4 dark:border-sky-800"
              >
                <p className="font-bold text-base text-slate-900 dark:text-slate-200">
                  {skills.skill}
                </p>
                <p className="text-base text-slate-900 dark:text-slate-200">
                  {skills.years}
                </p>
              </div>
            );
          })}
        </div>
      </article>
    </>
  );
};

export default ProfileSkills;
