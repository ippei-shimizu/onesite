
export default function handler(req, res) {
  if (req.method === "POST") {
    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(process.env.SEND_GRID);

    const siteOwnerMsg = {
      to: "ippei.shimizu.32@gmail.com",
      from: req.body.email,
      subject: `${req.body.subject} - Onesite`,
      text: `${req.body.name}様よりお問い合わせがありました。\n\n\n【お問い合わせ内容】\nお名前 : ${req.body.name}\nメールアドレス : ${req.body.email}\nお問い合わせ内容 : ${req.body.message}`,
      html: `${req.body.name}様よりお問い合わせがありました。<br><br><br>【お問い合わせ内容】<br>お名前 : ${req.body.name}<br>メールアドレス : ${req.body.email}<br>お問い合わせ内容 : ${req.body.message}`,
    };

    const msg = {
      to: req.body.email,
      from: "ippei.shimizu.32@gmail.com",
      subject: `${req.body.subject} - Onesite`,
      text: `${req.body.name}様\nこの度は、お問い合わせをいただきありがとうございます。\nお問い合わせ内容を確認次第、折り返しご連絡させていただきます。\n恐れ入りますが、今暫くお待ちください。\n\n\n【お問い合わせ内容】\nお名前 : ${req.body.name}\nメールアドレス : ${req.body.email}\nお問い合わせ内容 : ${req.body.message}`,
      html: `${req.body.name}様<br><br>この度は、お問い合わせをいただきありがとうございます。<br>お問い合わせ内容を確認次第、折り返しご連絡させていただきます。<br>恐れ入りますが、今暫くお待ちください。<br><br><br>【お問い合わせ内容】<br>お名前 : ${req.body.name}<br>メールアドレス : ${req.body.email}<br>お問い合わせ内容 : ${req.body.message}`,
    };

    (async () => {
      try {
        await sgMail.send(siteOwnerMsg);
        await sgMail.send(msg);
      } catch (error) {
        console.error(error);
        if (error.response) {
          console.error(error.response.body);
        }
      }
    })();
  }

  res.status(200);
}
