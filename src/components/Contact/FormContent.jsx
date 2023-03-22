import React from "react";

export const FormContent = () => {
  const registerUser = async (event) => {
    event.preventDefault();

    const res = await fetch("api/send", {
      body: JSON.stringify({
        name: event.target.name.value,
        email: event.target.email.value,
        subject: event.target.subject.value,
        message: event.target.message.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const result = await res.json();
    if (res.ok) Router.push("/thanks");
  };

  return (
    <>
      <article
        className={`text-center py-9 px-8 mt-4 bg-gradient-to-tr from-post-bg-t to-post-bg-b rounded-3xl transition duration-100 dark:from-post-bg-t-dark dark:to-post-bg-b-dark md:px-5 md:py-6`}
      >
        <div>
          <form onSubmit={registerUser}>
            <div>
              <label htmlFor="name">お名前</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="田中 太郎"
              />
            </div>
            <div>
              <label htmlFor="email">メールアドレス</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="info@example.com"
              />
            </div>
            <div>
              <label htmlFor="subject">件名</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="当ブログの内容について"
              />
            </div>
            <div>
              <label htmlFor="message">お問い合わせ内容</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div>
              <button type="submit">送信</button>
            </div>
          </form>
        </div>
      </article>
    </>
  );
};

export default FormContent;
