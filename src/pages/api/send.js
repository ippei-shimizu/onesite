export default function handler(req, res) {
  if (req.method === "POST") {
    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(process.env.SEND_GRID);

    const msg = {
      to: req.body.email,
      bcc: "ippei.shimizu.32@gmail.com",
      from: "ippei.shimizu.32@gmail.com",
      subject: req.body.subject,
      text: `${req.body.name}様\nこの度は、お問い合わせをいただきありがとうございます。\nお問い合わせ内容を確認次第、折り返しご連絡させていただきます。\n恐れ入りますが、今暫くお待ちください。\n\n\n【お問い合わせ内容】\n${req.body.message}`,
      html: `${req.body.name}様<br><br>この度は、お問い合わせをいただきありがとうございます。<br>お問い合わせ内容を確認次第、折り返しご連絡させていただきます。<br>恐れ入りますが、今暫くお待ちください。<br><br><br>【お問い合わせ内容】<br>${req.body.message}`,
    };

    (async () => {
      try {
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
