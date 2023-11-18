const verifyEmail = function (
  tokenId: string,
  tokenString: string,
  tokenOtp: string
) {
  const otpChars = tokenOtp.split("");
  const html = `
  <!DOCTYPE html>
<html
  lang="vi"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <meta charset="utf-8" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="format-detection"
      content="telephone=no, date=no, address=no, email=no"
    />
    <title>Xác thực email của bạn</title>
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700"
      rel="stylesheet"
      media="screen"
    />
    <style>
      .hover-underline:hover {
        text-decoration: underline !important;
      }

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }

      @keyframes ping {
        75%,
        100% {
          transform: scale(2);
          opacity: 0;
        }
      }

      @keyframes pulse {
        50% {
          opacity: 0.5;
        }
      }

      @keyframes bounce {
        0%,
        100% {
          transform: translateY(-25%);
          animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
        }

        50% {
          transform: none;
          animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
        }
      }

      @media (max-width: 600px) {
        .sm-px-24 {
          padding-left: 24px !important;
          padding-right: 24px !important;
        }

        .sm-py-32 {
          padding-top: 32px !important;
          padding-bottom: 32px !important;
        }

        .sm-w-full {
          width: 100% !important;
        }
      }
    </style>
  </head>

  <body
    style="
      margin: 0;
      padding: 0;
      width: 100%;
      word-break: break-word;
      -webkit-font-smoothing: antialiased;
      --bg-opacity: 1;
      background-color: #eceff1;
    "
  >
    <div
      role="article"
      aria-roledescription="email"
      aria-label="Reset your Password"
      lang="en"
    >
      <table
        style="
          font-family: Montserrat, -apple-system, 'Segoe UI', sans-serif;
          width: 100%;
        "
        width="100%"
        cellpadding="0"
        cellspacing="0"
        role="presentation"
      >
        <tr>
          <td
            align="center"
            style="
              --bg-opacity: 1;
              background-color: #7d1f1f;
              font-family: Montserrat, -apple-system, 'Segoe UI', sans-serif;
            "
          >
            <table
              class="sm-w-full"
              style="font-family: 'Montserrat', Arial, sans-serif; width: 600px"
              width="600"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
            >
              <tr>
                <td
                  class="sm-py-32 sm-px-24"
                  style="
                    font-family: Montserrat, -apple-system, 'Segoe UI',
                      sans-serif;
                    padding: 48px;
                    text-align: center;
                  "
                  align="center"
                >
                  <a
                    href=""
                    style="
                      border: 0;
                      max-width: 100%;
                      line-height: 100%;
                      vertical-align: middle;
                    "
                  >
                  </a>
                </td>
              </tr>
              <tr>
                <td
                  align="center"
                  class="sm-px-24"
                  style="font-family: 'Montserrat', Arial, sans-serif"
                >
                  <table
                    style="
                      font-family: 'Montserrat', Arial, sans-serif;
                      width: 100%;
                    "
                    width="100%"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                  >
                    <tr>
                      <td
                        class="sm-px-24"
                        style="
                          --bg-opacity: 1;
                          background-color: #ffffff;
                          border-radius: 4px;
                          font-family: Montserrat, -apple-system, 'Segoe UI',
                            sans-serif;
                          font-size: 14px;
                          line-height: 24px;
                          padding: 48px;
                          text-align: left;
                          --text-opacity: 1;
                          color: #626262;
                        "
                        align="left"
                      >
                        <a
                          href="${process.env.NEXT_PUBLIC_USER_API}"
                          style="
                            display: flex;
                            align-items: center;
                            justify-content: center;
                          "
                        >
                          <img
                            alt="logo_school"
                            src="https://utfs.io/f/03d733f4-fb82-413f-83fd-ca12163fce2d-okd3lw.png"
                            width="111"
                            height="58"
                          />
                        </a>
                        <p
                          style="
                            font-weight: 600;
                            font-size: 18px;
                            margin-bottom: 0;
                          "
                        >
                          Xin chào,
                        </p>

                        <p style="margin: 0 0 24px">
                          Một yêu cầu xác thực email từ trang Quản lý du học đã
                          được gửi cho bạn. Vui lòng nhấn vào đường dẫn bên dưới
                          để xác thực
                        </p>

                        <a
                          href="${
                            process.env.NEXT_PUBLIC_ADMIN_URL
                          }/api/confirmEmail/${tokenId + " " + tokenString}"
                          class="hover-underline"
                          style="
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            text-decoration: none;
                            color: #7367f0;
                          "
                        >
                          <span>Nhấn vào đây để tiếp tục</span>
                        </a>

                        <p>Hoặc nhập mã OTP bên dưới</p>
                        <div
                          style="
                            margin-top: 8px;
                            margin-bottom: 8px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            gap: 8px;
                          "
                        >
                        ${otpChars.map(
                          (char) => `
                        <div
                            style="
                              background-color: lightgray;
                              padding: 4px;
                              display: flex;
                              justify-content: center;
                              align-items: center;
                            "
                          >
                            <span
                              style="
                                font-size: 24px;
                                font-weight: bolder;
                                color: black;
                              "
                            >
                              ${char}
                            </span>
                          </div>
                        `
                        )}
                        </div>
                        <table
                          style="font-family: 'Montserrat', Arial, sans-serif"
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                        >
                          <tr>
                            <td
                              style="
                                --bg-opacity: 1;
                                background-color: #7367f0;
                                border-radius: 4px;
                                font-family: Montserrat, -apple-system,
                                  'Segoe UI', sans-serif;
                              "
                            ></td>
                          </tr>
                        </table>

                        <table
                          style="
                            font-family: 'Montserrat', Arial, sans-serif;
                            width: 100%;
                          "
                          width="100%"
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                        >
                          <tr>
                            <td
                              style="
                                font-family: 'Montserrat', Arial, sans-serif;
                                padding-top: 32px;
                                padding-bottom: 32px;
                              "
                            >
                              <div
                                style="
                                  --bg-opacity: 1;
                                  background-color: #7d1f1f;
                                  height: 1px;
                                  line-height: 1px;
                                "
                              >
                                &zwnj;
                              </div>
                            </td>
                          </tr>
                        </table>
                        <p style="margin: 0 0 16px">
                          Cần thêm thông tin hỗ trợ từ chúng tôi? Xin vui lòng
                          liên hệ tại
                          <a
                            href="mailto:cigpbubu@gmail.com"
                            class="hover-underline"
                            style="
                              --text-opacity: 1;
                              color: #7367f0;
                              text-decoration: none;
                            "
                            >cigpbubu@gmail.com</a
                          >.
                        </p>
                        <p style="margin: 0 0 16px">
                          Cảm ơn, <br />
                          <a
                            href="${process.env.NEXT_PUBLIC_USER_URL}"
                            style="
                              text-decoration: none;
                              font-weight: bold;
                              color: black;
                            "
                            class="hover-underline"
                          >
                            Hệ thống quản lý du học sinh Canada
                          </a>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style="
                          font-family: 'Montserrat', Arial, sans-serif;
                          height: 20px;
                        "
                        height="20"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        style="
                          font-family: 'Montserrat', Arial, sans-serif;
                          height: 16px;
                        "
                        height="16"
                      ></td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>
`;
  const text = `
      Xác thực Email, một yêu cầu đã được gửi đến kèm theo đường link và mã OTP xác nhận. Vui lòng hoàn thành các bước để xác thực email của bạn`;
  return {
    html: html,
    text: text,
  };
};

export default verifyEmail;
