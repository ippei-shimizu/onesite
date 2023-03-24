import { Router } from "next/router";

export const FormContent = () => {
  const registerUser = async (event) => {
    event.preventDefault();

    const res = await fetch("/api/send", {
      body: JSON.stringify({
        name: event.target.name.value,
        email: event.target.email.value,
        subject: event.target.subject.value,
        message: event.target.message.value,
      }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": process.env.ACCESS_CONTROL_ALLOW_ORIGIN,
      },
      method: "POST",
    });

    const result = await res.json();
    if (result.ok) Router.push("/thanks");
  };

  return (
    <>
      <article
        className={`text-center py-9 px-8 mt-4 bg-gradient-to-tr from-post-bg-t to-post-bg-b rounded-3xl transition duration-100 dark:from-post-bg-t-dark dark:to-post-bg-b-dark md:px-5 md:py-6`}
      >
        <div className="my-4">
          <form
            onSubmit={registerUser}
            className="text-left w-10/12 mx-auto md:w-full"
          >
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block tracking-wider font-semibold mb-2 dark:text-slate-100"
              >
                お名前
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="田中 太郎"
                className="rounded-md py-1 px-2 w-2/3 focus:outline-sky-500 focus:bg-slate-100"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block tracking-wider font-semibold mb-2 dark:text-slate-100"
              >
                メールアドレス
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="info@example.com"
                className="rounded-md py-1 px-2 w-2/3 focus:outline-sky-500 focus:bg-slate-100"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block tracking-wider font-semibold mb-2 dark:text-slate-100"
              >
                件名
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="当ブログの内容について"
                className="rounded-md py-1 px-2 w-2/3 focus:outline-sky-500 focus:bg-slate-100"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block tracking-wider font-semibold mb-2 dark:text-slate-100"
              >
                お問い合わせ内容
              </label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                className="rounded-md py-1 px-2 w-full focus:outline-sky-500 focus:bg-slate-100"
              ></textarea>
            </div>
            <div className="text-center mt-12 md:mt-8">
              <button
                type="submit"
                className="text-lg tracking-widest bg-sky-600 text-slate-100 w-52 py-4 rounded-full transition-opacity font-bold hover:opacity-75 dark:bg-sky-500 md:text-base md:py-3 md:w-48"
              >
                送 信
              </button>
            </div>
          </form>
        </div>
      </article>
    </>
  );
};

export default FormContent;
