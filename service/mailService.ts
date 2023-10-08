import verifyEmail from "@/templates/verifyEmailTemplate";
import nodemailer from "nodemailer";
import toast from "react-hot-toast";

interface MailProps {
  options: {
    to: string;
    subject: string;
    text: string;
    from?: string;
    cc?: string;
    bcc?: string;
    html?: string;
  };
}

export async function sendMail({ options }: MailProps) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  var mailOptions = {
    from: `"Phùng Quang Long" ${process.env.NODEMAILER_EMAIL || options.from}`,
    to: options.to,
    subject: options.subject,
    text: options.text,
    html: options.html,
  };

  // transporter.sendMail(options, (error: any, info) => {
  //   if (error) {
  //     throw new Error(error);
  //   } else {
  //     console.log("Đã gửi email");
  //     toast.success("Gửi email thành công");
  //     return true;
  //   }
  // });

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response);
      }
    });
  });
}
